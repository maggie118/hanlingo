#!/usr/bin/env python3
"""
Generate 150 Chinese TTS audio MP3s for HanLingo Survival Topics.

Reads: survival-topics.html (extracts phrase IDs + Chinese sentence text)
Writes: audio/<phraseId>.mp3 (150 files)
Voice: zh-CN-XiaoxiaoNeural (female, warm, standard, Microsoft Edge TTS)
Rate:  normal = +0%  (filename: <id>.mp3)
       (Slow playback is handled client-side via Audio.playbackRate = 0.7,
        so we don't need separate slow MP3 files — saves time & space.)
"""

import argparse
import asyncio
import os
import re
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).parent
HTML_FILE = ROOT / "survival-topics.html"
AUDIO_DIR = ROOT / "audio"
VOICE = "zh-CN-XiaoxiaoNeural"          # warm female Mandarin (best for learning)
OUTPUT_FORMAT = "audio-24khz-48kbitrate-mono-mp3"


def extract_phrases(html_path: Path) -> list[tuple[str, str]]:
    """Return a list of (phrase_id, chinese_text) by parsing the HTML.

    Looks for <div class="phrase" data-phrase-id="..."> ... <div class="p-zh">TEXT</div> ...
    """
    html = html_path.read_text(encoding="utf-8")
    # Split into phrase blocks by data-phrase-id
    pattern = re.compile(
        r'<div\s+class="[^"]*phrase[^"]*"\s+data-phrase-id="([^"]+)"'
        r'(.*?)'
        r'<div\s+class="p-zh">(.*?)</div>',
        re.DOTALL,
    )
    results: list[tuple[str, str]] = []
    for match in pattern.finditer(html):
        pid = match.group(1).strip()
        zh_raw = match.group(3).strip()
        # Strip HTML tags inside p-zh (shouldn't have any, but safe)
        zh_text = re.sub(r"<[^>]+>", "", zh_raw).strip()
        if not pid or not zh_text:
            continue
        results.append((pid, zh_text))
    return results


async def generate_one(pid: str, text: str, out_path: Path, sem: asyncio.Semaphore) -> None:
    async with sem:
        communicate = edge_tts.Communicate(
            text=text,
            voice=VOICE,
            rate="+0%",
            pitch="+0Hz",
            volume="+0%",
        )
        await communicate.save(str(out_path))
        size_kb = out_path.stat().st_size / 1024
        print(f"  ✓ {pid}  →  {size_kb:.0f} KB   ({text})")


async def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0,
                    help="Only generate first N phrases (useful for quick test)")
    ap.add_argument("--skip-existing", action="store_true",
                    help="Skip files that already exist (resume mode)")
    ap.add_argument("--concurrency", type=int, default=8,
                    help="Concurrent async TTS calls (default 8)")
    args = ap.parse_args()

    if not HTML_FILE.exists():
        print(f"ERROR: {HTML_FILE} not found!", file=sys.stderr)
        sys.exit(1)

    phrases = extract_phrases(HTML_FILE)
    if not phrases:
        print("ERROR: Could not extract any phrases from HTML!", file=sys.stderr)
        sys.exit(1)
    print(f"Extracted {len(phrases)} phrases from {HTML_FILE.name}")

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    to_gen = phrases
    if args.limit > 0:
        to_gen = to_gen[: args.limit]
    if args.skip_existing:
        to_gen = [(pid, txt) for (pid, txt) in to_gen
                  if not (AUDIO_DIR / f"{pid}.mp3").exists()]
        skipped = len(phrases) - len(to_gen) if args.limit == 0 else 0
        if skipped:
            print(f"Skipping {skipped} already-generated files (resume mode)")

    if not to_gen:
        print("Nothing to generate. ✓")
        return

    print(f"Generating {len(to_gen)} MP3s with voice {VOICE} ...")
    sem = asyncio.Semaphore(args.concurrency)
    tasks = [
        generate_one(pid, text, AUDIO_DIR / f"{pid}.mp3", sem)
        for (pid, text) in to_gen
    ]
    await asyncio.gather(*tasks)

    # Final tally
    total = list(AUDIO_DIR.glob("*.mp3"))
    print(f"\nDone. /audio/ directory now contains {len(total)} MP3 files.")
    sizes = [(p.stat().st_size, p.name) for p in total]
    total_kb = sum(s for s, _ in sizes) / 1024
    print(f"Total size: {total_kb:.0f} KB ({total_kb/1024:.1f} MB)")


if __name__ == "__main__":
    asyncio.run(main())
