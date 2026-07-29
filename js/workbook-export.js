// ============ WORKBOOK EXPORT MODULE ============
(function() {
  'use strict';
  
  // ============ LOGO 配置 ============
  var LOGO = {
    // 文本格式的LOGO - ASCII艺术
    text: '  ██╗  ██╗ █████╗ ███╗   ██╗██╗     ██╗███╗   ██╗ ██████╗  ██████╗ \n' +
          '  ██║  ██║██╔══██╗████╗  ██║██║     ██║████╗  ██║██╔════╝ ██╔═══██╗\n' +
          '  ███████║███████║██╔██╗ ██║██║     ██║██╔██╗ ██║██║  ███╗██║   ██║\n' +
          '  ██╔══██║██╔══██║██║╚██╗██║██║     ██║██║╚██╗██║██║   ██║██║   ██║\n' +
          '  ██║  ██║██║  ██║██║ ╚████║███████╗██║██║ ╚████║╚██████╔╝╚██████╔╝\n' +
          '  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ \n' +
          '                    ██╗     ██╗███╗   ██╗ ██████╗  ██████╗             \n' +
          '                    ██║     ██║████╗  ██║██╔════╝ ██╔═══██╗            \n' +
          '                    ██║     ██║██╔██╗ ██║██║  ███╗██║   ██║            \n' +
          '                    ██║     ██║██║╚██╗██║██║   ██║██║   ██║            \n' +
          '                    ███████╗██║██║ ╚████║╚██████╔╝╚██████╔╝            \n' +
          '                    ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝             \n' +
          '                                 Learn Chinese Smarter',
    
    // 简洁版LOGO（用于TXT顶部）
    simple: '╔═══════════════════════════════════════════════╗\n' +
            '║              📚  HanLingo                    ║\n' +
            '║         Learn Chinese · One Sentence = 5 Skills ║\n' +
            '╚═══════════════════════════════════════════════╝'
  };
  
  // ============ 获取收藏的句子 ============
  function getSavedSentences() {
    var savedIds = JSON.parse(localStorage.getItem('juli_saved') || '[]');
    var allSentences = [];
    
    if (typeof HSK1_SENTENCES !== 'undefined') {
      allSentences = HSK1_SENTENCES;
    } else if (typeof window.HSK1_SENTENCES !== 'undefined') {
      allSentences = window.HSK1_SENTENCES;
    }
    
    return allSentences.filter(function(s) {
      return savedIds.indexOf(s.id) !== -1;
    });
  }
  
  window.getSavedSentences = getSavedSentences;
  
  // ============ 导出主函数 ============
  function exportWorkbook(format) {
    format = format || 'txt';
    var savedSentences = getSavedSentences();
    
    if (savedSentences.length === 0) {
      if (window.showToast) {
        window.showToast('⭐ No saved sentences to export! Click the bookmark icon to save sentences first.', 'fa-exclamation-triangle');
      } else {
        alert('⭐ No saved sentences! Click the bookmark icon to save sentences first.');
      }
      return;
    }
    
    var now = new Date();
    var dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    var streak = parseInt(localStorage.getItem('juli_streak')) || 0;
    var learned = JSON.parse(localStorage.getItem('juli_learned') || '[]').length;
    
    if (format === 'txt') {
      var content = generateTXTContent(savedSentences, dateStr, streak, learned);
      var filename = 'HanLingo_Workbook_' + now.toISOString().slice(0,10) + '.txt';
      var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      
      if (window.showToast) {
        window.showToast('📄 Workbook exported as TXT! (' + savedSentences.length + ' sentences)', 'fa-file-alt');
      }
      
    } else if (format === 'pdf') {
      generatePDFWorkbook(savedSentences);
    }
  }
  
  window.exportWorkbook = exportWorkbook;
  
  // ============ 生成TXT内容（带LOGO） ============
  function generateTXTContent(sentences, dateStr, streak, learned) {
    var width = 60;
    var line = '═'.repeat(width);
    var thinLine = '─'.repeat(width);
    
    var content = '';
    content += line + '\n';
    
    // Logo - 使用ASCII艺术
    var logoLines = LOGO.text.split('\n');
    for (var li = 0; li < logoLines.length; li++) {
      var padded = logoLines[li];
      // 居中对齐
      var padLeft = Math.max(0, Math.floor((width - padded.length) / 2));
      content += ' '.repeat(padLeft) + padded + '\n';
    }
    
    content += line + '\n';
    content += '\n';
    
    // 标题信息
    content += '  📅 ' + dateStr + '\n';
    content += '  ⭐ ' + sentences.length + ' saved sentences\n';
    content += '  🔥 ' + streak + ' day streak · ✅ ' + learned + ' learned\n';
    content += '  📖 Total HSK1: ' + (typeof HSK1_SENTENCES !== 'undefined' ? HSK1_SENTENCES.length : 'N/A') + ' sentences\n';
    content += '\n';
    content += thinLine + '\n';
    content += '\n';
    
    // 每个句子
    for (var i = 0; i < sentences.length; i++) {
      var s = sentences[i];
      var num = String(i + 1).padStart(2, '0');
      
      content += '┌─── ' + num + ' ──────────────────────────────\n';
      content += '│  🀄 ' + s.chinese + '\n';
      content += '│  🔊 ' + (s.pinyin || '') + '\n';
      content += '│  🌍 ' + (s.translation || '') + '\n';
      if (s.vocab) content += '│  📖 ' + s.vocab + '\n';
      if (s.pattern) content += '│  🧩 ' + s.pattern + '\n';
      if (s.context) content += '│  💡 ' + s.context + '\n';
      if (s.culture) content += '│  🏮 ' + s.culture + '\n';
      content += '└──────────────────────────────────────────────\n';
      content += '\n';
    }
    
    // 底部
    content += thinLine + '\n';
    content += '\n';
    content += '  🌟 Keep learning! One sentence = 5 skills.\n';
    content += '  📖 HanLingo · Learn Chinese Smarter\n';
    content += '  🏠 https://hanlingo.app\n';
    content += '\n';
    content += line + '\n';
    content += '  "Language is the road map of a culture." — Rita Mae Brown\n';
    content += line + '\n';
    
    return content;
  }
  
  // ============ 生成PDF（带LOGO） ============
  function generatePDFWorkbook(sentences) {
    var win = window.open('', '_blank');
    if (!win) {
      if (window.showToast) {
        window.showToast('⚠️ Please allow popups for PDF export', 'fa-exclamation-triangle');
      } else {
        alert('⚠️ Please allow popups for PDF export');
      }
      return;
    }
    
    var now = new Date();
    var dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    var streak = parseInt(localStorage.getItem('juli_streak')) || 0;
    var learned = JSON.parse(localStorage.getItem('juli_learned') || '[]').length;
    var totalHSK1 = (typeof HSK1_SENTENCES !== 'undefined') ? HSK1_SENTENCES.length : 'N/A';
    
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<title>HanLingo Workbook</title>';
    html += '<style>';
    html += '  * { margin: 0; padding: 0; box-sizing: border-box; }';
    html += '  body { font-family: "PingFang SC", "Microsoft YaHei", "Inter", -apple-system, sans-serif; padding: 30px; max-width: 820px; margin: 0 auto; color: #1e1e2a; background: #f9f7f5; }';
    
    // Logo样式
    html += '  .logo-header { text-align: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 3px solid #FF6B35; }';
    html += '  .logo-box { display: inline-block; background: #1e1e2a; color: white; font-size: 36px; font-weight: 900; padding: 10px 28px; border-radius: 14px; letter-spacing: -1px; box-shadow: 0 4px 20px rgba(255,107,53,0.15); }';
    html += '  .logo-box .hl { color: #FF6B35; }';
    html += '  .logo-sub { font-size: 13px; color: #8a8a9a; margin-top: 6px; letter-spacing: 3px; font-weight: 500; }';
    html += '  .logo-sub .accent { color: #FF6B35; font-weight: 600; }';
    
    // 头部信息
    html += '  .header-info { display: flex; justify-content: center; gap: 30px; margin-top: 8px; font-size: 13px; color: #4a4a5a; flex-wrap: wrap; }';
    html += '  .header-info span { display: flex; align-items: center; gap: 4px; }';
    html += '  .header-info strong { color: #FF6B35; }';
    
    // 卡片样式
    html += '  .card { background: white; border-radius: 12px; padding: 14px 20px; margin-bottom: 12px; border-left: 4px solid #FF6B35; box-shadow: 0 2px 8px rgba(0,0,0,0.04); page-break-inside: avoid; }';
    html += '  .card .num { font-size: 11px; color: #b0a8a2; font-weight: 600; }';
    html += '  .card .chinese { font-size: 22px; font-weight: 700; color: #1a1a28; margin: 2px 0; }';
    html += '  .card .pinyin { font-size: 14px; color: #7b7b8a; margin: 1px 0; }';
    html += '  .card .translation { font-size: 14px; color: #3d3d4a; background: #f4f1ee; padding: 2px 14px; border-radius: 20px; display: inline-block; margin: 3px 0 4px 0; }';
    html += '  .card .detail { font-size: 12px; color: #6a6a7a; margin-top: 3px; }';
    html += '  .card .detail strong { color: #1e1e2a; }';
    
    // 底部
    html += '  .footer { text-align: center; margin-top: 30px; padding-top: 16px; border-top: 2px solid #efebe8; font-size: 12px; color: #9b9390; }';
    html += '  .footer .brand { color: #FF6B35; font-weight: 700; }';
    html += '  .footer .url { color: #6a6a7a; font-size: 11px; }';
    html += '  .quote { text-align: center; font-size: 13px; color: #8a8a9a; font-style: italic; margin-top: 8px; padding: 8px; background: #f8f6f3; border-radius: 8px; }';
    
    // 空状态
    html += '  .empty-state { text-align: center; padding: 40px 20px; color: #9b9390; }';
    html += '  .empty-state .icon { font-size: 48px; }';
    html += '  .empty-state .title { font-size: 18px; font-weight: 600; color: #1e1e2a; margin: 8px 0; }';
    
    // 打印样式
    html += '  @media print {';
    html += '    body { background: white; padding: 20px; }';
    html += '    .card { box-shadow: none; border: 1px solid #efebe8; }';
    html += '    .logo-box { box-shadow: none; }';
    html += '    .no-print { display: none !important; }';
    html += '  }';
    html += '</style>';
    html += '</head><body>';
    
    // ===== LOGO 头部 =====
    html += '<div class="logo-header">';
    html += '  <div class="logo-box">';
    html += '    📚 Han<span class="hl">Lingo</span>';
    html += '  </div>';
    html += '  <div class="logo-sub">';
    html += '    🎯 Learn Chinese · One Sentence = <span class="accent">5 Skills</span>';
    html += '  </div>';
    html += '  <div class="header-info">';
    html += '    <span>📅 <strong>' + dateStr + '</strong></span>';
    html += '    <span>⭐ <strong>' + sentences.length + '</strong> saved</span>';
    html += '    <span>🔥 <strong>' + streak + '</strong> day streak</span>';
    html += '    <span>✅ <strong>' + learned + '</strong> learned</span>';
    html += '    <span>📖 <strong>' + totalHSK1 + '</strong> total</span>';
    html += '  </div>';
    html += '</div>';
    
    if (sentences.length === 0) {
      html += '<div class="empty-state">';
      html += '  <div class="icon">📖</div>';
      html += '  <div class="title">No saved sentences</div>';
      html += '  <div style="font-size:14px;">Click the bookmark icon to save sentences while learning.</div>';
      html += '</div>';
    } else {
      // 句子卡片
      for (var i = 0; i < sentences.length; i++) {
        var s = sentences[i];
        var num = String(i + 1).padStart(2, '0');
        html += '<div class="card">';
        html += '  <div class="num">#' + num + ' of ' + sentences.length + '</div>';
        html += '  <div class="chinese">' + s.chinese + '</div>';
        html += '  <div class="pinyin">' + (s.pinyin || '') + '</div>';
        html += '  <div class="translation">' + (s.translation || '') + '</div>';
        if (s.vocab) html += '  <div class="detail"><strong>📖 Vocabulary:</strong> ' + s.vocab + '</div>';
        if (s.pattern) html += '  <div class="detail"><strong>🧩 Pattern:</strong> ' + s.pattern + '</div>';
        if (s.context) html += '  <div class="detail"><strong>💡 Context:</strong> ' + s.context + '</div>';
        if (s.culture) html += '  <div class="detail"><strong>🏮 Culture:</strong> ' + s.culture + '</div>';
        html += '</div>';
      }
      
      // 底部
      html += '<div class="footer">';
      html += '  🌟 Keep learning! <span class="brand">HanLingo</span> · One sentence = 5 skills.';
      html += '  <br><span class="url">📧 hello@hanlingo.app · 🏠 https://hanlingo.app</span>';
      html += '</div>';
      
      html += '<div class="quote">';
      html += '  "Language is the road map of a culture." — Rita Mae Brown';
      html += '</div>';
    }
    
    // 打印提示（仅在屏幕显示）
    html += '<div class="no-print" style="text-align:center; margin-top:16px; padding:10px; background:#f4f1ee; border-radius:8px; font-size:12px; color:#6a6a7a;">';
    html += '  🖨️ <strong>Print/Save:</strong> Use <strong>Ctrl+P</strong> (Windows) or <strong>Cmd+P</strong> (Mac) → Choose "Save as PDF"';
    html += '</div>';
    
    html += '</body></html>';
    
    win.document.write(html);
    win.document.close();
    
    setTimeout(function() {
      win.focus();
      win.print();
    }, 800);
    
    if (window.showToast) {
      window.showToast('📄 PDF generated! Use "Save as PDF" in print dialog.', 'fa-file-pdf');
    }
  }
  
  window.generatePDFWorkbook = generatePDFWorkbook;
  
  // ============ 显示导出选项对话框 ============
  function showExportOptions() {
    var saved = getSavedSentences();
    if (saved.length === 0) {
      if (window.showToast) {
        window.showToast('⭐ No saved sentences to export!', 'fa-exclamation-triangle');
      } else {
        alert('⭐ No saved sentences! Click the bookmark icon to save sentences first.');
      }
      return;
    }
    
    var choice = confirm('📤 Export Workbook (' + saved.length + ' sentences)\n\nChoose format:\n• OK → PDF (print dialog)\n• Cancel → TXT file');
    if (choice) {
      exportWorkbook('pdf');
    } else {
      exportWorkbook('txt');
    }
  }
  
  window.showExportOptions = showExportOptions;
  
})();