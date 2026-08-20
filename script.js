// ============================================================
// HanLingo - 完整 JavaScript 功能
// ============================================================
// ===== 1. 5句卡片交互逻辑 (播放 + 翻转展开) =====
function toggleCard(btnElement, cardId) {
    const card = btnElement.closest('.phrase-card');
    const back = card.querySelector('.back');
    const textToSpeak = card.querySelector('.chn').textContent;
    const isSpeaking = btnElement.classList.contains('speaking');
    // 停止其他声音
    window.speechSynthesis.cancel();
    document.querySelectorAll('.play-icon').forEach(el => el.classList.remove('speaking'));
    if (isSpeaking) {
        btnElement.classList.remove('speaking');
        btnElement.innerHTML = '?';
        back.classList.remove('open');
        return;
    }
    // 播放语音
    btnElement.classList.add('speaking');
    btnElement.innerHTML = '?';
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8;
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh') && (v.name.includes('Xiaoxiao') || v.name.includes('晓晓'))) || voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;
    // 展开背面内容
    back.classList.add('open');
    utterance.onend = () => {
        btnElement.classList.remove('speaking');
        btnElement.innerHTML = '?';
        // 如果是第5句，弹出转化诱导
        if (cardId === 5) {
            const toastEl = document.getElementById('upsellToast');
            if(toastEl){
                toastEl.classList.add('open');
                setTimeout(() => {
                    toastEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 400);
            }
        }
    };
    window.speechSynthesis.speak(utterance);
}
// ===== 点击卡片空白区触发 =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.phrase-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.play-icon')) return;
            const btn = this.querySelector('.play-icon');
            if (btn) {
                const cards = document.querySelectorAll('.phrase-card');
                let index = 0;
                cards.forEach((c, i) => { if (c === this) index = i + 1; });
                toggleCard(btn, index);
            }
        });
    });
});
// ===== 2. PWA 安装引导 =====
(function() {
    const banner = document.getElementById('pwaBanner');
    const installBtn = document.getElementById('pwaInstallBtn');
    const closeBtn = document.getElementById('pwaCloseBtn');
    let deferredPrompt = null;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    const hasDismissed = localStorage.getItem('hanlingo_pwa_dismissed');

    if(banner){
        if (isStandalone || hasDismissed) { banner.classList.remove('show'); return; }
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault(); deferredPrompt = e;
        if(banner) setTimeout(() => banner.classList.add('show'), 3000);
    });
    window.addEventListener('appinstalled', () => {
        if(banner) banner.classList.remove('show');
        localStorage.setItem('hanlingo_pwa_installed', 'true');
        deferredPrompt = null;
    });
    if (isIOS && !isStandalone) {
        if(banner) setTimeout(() => banner.classList.add('show'), 4000);
        const pwaDesc = document.querySelector('.pwa-desc');
        if(pwaDesc) pwaDesc.textContent = 'Tap Share → Add to Home Screen';
        if(installBtn) installBtn.textContent = 'View Guide';
    }
    if(installBtn){
        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        if(banner) banner.classList.remove('show');
                        localStorage.setItem('hanlingo_pwa_installed', 'true');
                    }
                    deferredPrompt = null;
                });
            } else if (isIOS) {
                alert('?? 请点击屏幕底部 Safari 的「分享」按钮，然后选择「添加到主屏幕」即可完成离线安装。');
                if(banner) banner.classList.remove('show');
                localStorage.setItem('hanlingo_pwa_dismissed', 'true');
            } else {
                alert('?? 请在浏览器地址栏点击「安装 / 下载」图标完成安装。');
            }
        });
    }
    if(closeBtn){
        closeBtn.addEventListener('click', () => {
            if(banner) banner.classList.remove('show');
            localStorage.setItem('hanlingo_pwa_dismissed', 'true');
        });
    }
})();
// ===== 3. 早鸟倒计时 =====
let earlyBirdCount = 14;
function updateEarlyBirdUI() {
    const el = document.getElementById('earlyBirdCountdown');
    if (el) {
        el.textContent = earlyBirdCount;
        el.style.color = '#F05A28';
        setTimeout(() => {
            if(el) el.style.color = '#fff';
        }, 300);
    }
    if (earlyBirdCount <= 0) {
        const scarcityBar = document.getElementById('scarcityBar');
        const buyBtn = document.getElementById('lifetimeBuyBtn');
        const waitlist = document.getElementById('waitlistGroup');

        // 每一个元素都先判断是否存在，不存在跳过操作，防止null报错
        if(scarcityBar){
            scarcityBar.classList.add('sold-out');
            scarcityBar.innerHTML = `?? Sold Out · Next batch launching soon`;
        }
        if(buyBtn){
            buyBtn.style.display = 'none';
        }
        if(waitlist){
            waitlist.style.display = 'flex';
            waitlist.classList.add('active');
        }
    }
}
setInterval(() => {
    if (earlyBirdCount > 0) {
        earlyBirdCount--;
        updateEarlyBirdUI();
    }
}, 10000 + Math.random() * 5000);
// ================================================================
// 4. 合规弹窗内容与逻辑
// ================================================================
const legalModal = document.getElementById('legalModal');
const legalContent = document.getElementById('legalContent');
const legalTexts = {
    'terms': `
        <h2>Terms of Service</h2>
        <span class="update-date">Last Updated: August 2026</span>
        <p>Welcome to HanLingo.app (the "Website"). By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
        
        <h4>1. INTELLECTUAL PROPERTY & USE LICENSE</h4>
        <p>All learning materials, including but not limited to audio recordings, pinyin guides, Chinese text, PDF phrasebooks, and interface designs, are the intellectual property of HanLingo.app. You are granted a personal, non-transferable license. You agree NOT to copy, redistribute, resell, or commercially exploit any content without our prior written consent.</p>
        <h4>2. ONE-TIME BUYOUT & LIFETIME ACCESS</h4>
        <p>The "Survival Kit" and "All-Access Pass" are one-time payment products. "Lifetime Access" refers to the product's lifetime as long as the Website remains operational.</p>
        <h4>3. REFUND POLICY</h4>
        <p><strong>Digital Nature & Final Sale</strong><br>
        Due to the digital, intangible, and instantly downloadable nature of our learning materials, all sales of premium content (including the "Survival Kit" and "All-Access Pass") are strictly final. We do not offer refunds, exchanges, or cancellations once the user's account has been granted access to the content. Access is deemed granted upon the automated internal issuance of account permissions or email delivery of access links, regardless of actual download status.</p>
        <h4>4. EU/UK CONSUMER WAIVER NOTICE</h4>
        <p>If you reside in the European Union (EU) or the United Kingdom (UK), by clicking "Purchase", "Checkout", or checking the consent box at checkout, you expressly agree that the supply of digital content begins immediately upon purchase. You hereby acknowledge and agree that you lose your 14-day right of withdrawal (cooling-off period) under the EU Consumer Rights Directive once the content delivery or account provisioning has commenced.</p>
        <h4>5. TESTING AND COMPATIBILITY</h4>
        <p>We strongly encourage all users to thoroughly test the free 5-sentence samples provided on our homepage before making any purchasing decisions. It is the user's sole responsibility to ensure that their device, operating system, internet connection, and software are compatible with our digital file formats. Refunds will not be issued based on user-end technical, internet, or software compatibility issues.</p>
        <h4>6. CHARGEBACKS AND FRAUD</h4>
        <p>Unauthorized chargebacks, frivolous dispute filings, or fraudulent refund claims will result in the immediate, permanent termination of your account and access privileges. We reserve the right to submit your purchase history, IP logs, and check-out consent records to payment processors (such as Stripe/PayPal) and relevant consumer risk databases to dispute any bad-faith chargebacks.</p>
        <h4>7. GOVERNING LAW</h4>
        <p>These Terms shall be governed by the laws of Singapore.</p>
        <h4>8. CONTACT</h4>
        <p><a href="mailto:support@hanlingo.app" style="color: #ff4500; font-weight: 600; text-decoration: none;">support@hanlingo.app</a></p>
        
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            HanLingo.app is operated by Daren Business Printing Pte. Ltd., Singapore.
        </div>
    `,
    'privacy': `
        <h2>Privacy Policy</h2>
        <span class="update-date">Last Updated: August 2026</span>
        <p>At HanLingo.app, we respect your privacy and are committed to protecting your personal data in accordance with the Singapore PDPA and global standards (GDPR/CCPA).</p>
        <h4>1. DATA WE COLLECT</h4>
        <p><strong>Account Data:</strong> Email address for registration. <strong>Transaction Data:</strong> Processed securely by Stripe/PayPal. We DO NOT store your credit card numbers.</p>
        <h4>2. HOW WE USE YOUR DATA</h4>
        <p>To provide access and send product updates. You may unsubscribe at any time.</p>
        <h4>3. DATA SHARING</h4>
        <p>We will never sell your data. Data is only shared with infrastructure partners strictly to run the website.</p>
        <h4>4. YOUR RIGHTS</h4>
        <p>You have the right to request access, correction, or deletion of your data via <a href="mailto:support@hanlingo.app" style="color: #ff4500; font-weight: 600; text-decoration: none;">support@hanlingo.app</a>.</p>
        <h4>5. GOVERNING LAW</h4>
        <p>This Privacy Policy is governed by the laws of Singapore.</p>
        <h4>6. CONTACT</h4>
        <p><a href="mailto:support@hanlingo.app" style="color: #ff4500; font-weight: 600; text-decoration: none;">support@hanlingo.app</a></p>
        
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            HanLingo.app is operated by Daren Business Printing Pte. Ltd., Singapore.
        </div>
    `,
    'refund': `
        <h2>Refund Policy</h2>
        <span class="update-date">Last Updated: August 2026</span>
        
        <h4>1. DIGITAL NATURE & FINAL SALE</h4>
        <p>Due to the digital, intangible, and instantly downloadable nature of our learning materials, all sales of premium content (including the "Survival Kit" and "All-Access Pass") are strictly final. We do not offer refunds, exchanges, or cancellations once the user's account has been granted access to the content. Access is deemed granted upon the automated internal issuance of account permissions or email delivery of access links, regardless of actual download status.</p>
        
        <h4>2. EU/UK CONSUMER WAIVER NOTICE</h4>
        <p>If you reside in the European Union (EU) or the United Kingdom (UK), by clicking "Purchase", "Checkout", or checking the consent box at checkout, you expressly agree that the supply of digital content begins immediately upon purchase. You hereby acknowledge and agree that you lose your 14-day right of withdrawal (cooling-off period) under the EU Consumer Rights Directive once the content delivery or account provisioning has commenced.</p>
        
        <h4>3. TESTING AND COMPATIBILITY</h4>
        <p>We strongly encourage all users to thoroughly test the free 5-sentence samples provided on our homepage before making any purchasing decisions. It is the user's sole responsibility to ensure that their device, operating system, internet connection, and software are compatible with our digital file formats. Refunds will not be issued based on user-end technical, internet, or software compatibility issues.</p>
        
        <h4>4. CHARGEBACKS AND FRAUD</h4>
        <p>Unauthorized chargebacks, frivolous dispute filings, or fraudulent refund claims will result in the immediate, permanent termination of your account and access privileges. We reserve the right to submit your purchase history, IP logs, and check-out consent records to payment processors (such as Stripe/PayPal) and relevant consumer risk databases to dispute any bad-faith chargebacks.</p>
        
        <h4>Contact Us</h4>
        <p><a href="mailto:support@hanlingo.app" style="color: #ff4500; font-weight: 600; text-decoration: none;">support@hanlingo.app</a></p>
        
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            HanLingo.app is operated by Daren Business Printing Pte. Ltd., Singapore.
        </div>
    `
};
// 然后简化 openLegalModal
function openLegalModal(type) {
    if(!legalModal || !legalContent) return;
    legalContent.innerHTML = legalTexts[type];
    legalModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeLegalModal() {
    if(!legalModal) return;
    legalModal.classList.remove('open');
    document.body.style.overflow = '';
}
// 点击背景关闭弹窗
if(legalModal){
    legalModal.addEventListener('click', function(e) {
        if (e.target === this) closeLegalModal();
    });
}
// ===== 5. 顶部导航 PWA 安装按钮 (支持点击) =====
let deferredPromptHeader = null;
// 监听 beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPromptHeader = e;
    
    // 显示顶部安装按钮
    const headerBtn = document.getElementById('headerPwaInstall');
    if (headerBtn) {
        headerBtn.style.display = 'flex';
        headerBtn.innerHTML = `
            <span style="height: 6px; width: 6px; background: #22c55e; border-radius: 50%; display: inline-block; animation: blink 2s infinite;"></span>
            ?? Install App
        `;
    }
});
// 点击顶部按钮触发安装
function triggerHeaderInstall() {
    const headerBtn = document.getElementById('headerPwaInstall');
    
    if (deferredPromptHeader) {
        deferredPromptHeader.prompt();
        deferredPromptHeader.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('? PWA installed from header');
                if (headerBtn) {
                    headerBtn.style.display = 'none';
                }
            } else {
                console.log('? User declined');
            }
            deferredPromptHeader = null;
        });
    } else {
        // 显示手动安装引导
        showManualInstallGuide();
    }
}
// 手动安装引导
function showManualInstallGuide() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let steps = [];
    let deviceName = '';
    
    if (isIOS) {
        deviceName = '?? iPhone / iPad';
        steps = [
            'Tap the <strong>Share</strong> icon (square with arrow)',
            'Scroll down and tap <strong>Add to Home Screen</strong>',
            'Tap <strong>Add</strong> in the top right'
        ];
    } else if (/Android/.test(navigator.userAgent)) {
        deviceName = '?? Android';
        steps = [
            'Tap the <strong>Menu</strong> icon (three dots)',
            'Select <strong>Add to Home Screen</strong>',
            'Tap <strong>Add</strong> to confirm'
        ];
    } else {
        deviceName = '?? Desktop Browser';
        steps = [
            'Click the <strong>Install</strong> icon in the address bar',
            'Or select <strong>Add to Home Screen</strong> from the menu',
            'Follow the prompts to complete installation'
        ];
    }
    
    // 创建引导弹窗
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);
        z-index: 10000; display: flex; align-items: center; justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 24px; max-width: 380px; width: 90%; padding: 28px 24px; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: left; position: relative;">
            <button onclick="this.closest('div[style]').remove()" style="position: absolute; top: 10px; right: 14px; background: none; border: none; font-size: 22px; color: #94a3b8; cursor: pointer;">×</button>
            <div style="font-size: 44px; text-align: center; margin-bottom: 4px;">??</div>
            <h3 style="font-size: 19px; font-weight: 800; color: #0F1E2C; text-align: center; margin: 0 0 4px 0;">Install HanLingo</h3>
            <p style="font-size: 13px; color: #475569; text-align: center; margin: 0 0 16px 0;">${deviceName}</p>
            <div style="background: #F8FAFC; border-radius: 12px; padding: 14px 16px;">
                <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #334155; line-height: 2.2;">
                    ${steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
            </div>
            <button onclick="this.closest('div[style]').remove()" style="width: 100%; margin-top: 14px; padding: 11px; background: #ff4500; color: white; border: none; border-radius: 12px; font-weight: 700; font-size: 14px; cursor: pointer;">Got it</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}
// 检测是否已在 PWA 中运行
if (window.matchMedia('(display-mode: standalone)').matches || 
    window.navigator.standalone === true) {
    const headerBtn = document.getElementById('headerPwaInstall');
    if (headerBtn) {
        headerBtn.style.display = 'none';
    }
}
// 监听安装完成
window.addEventListener('appinstalled', () => {
    const headerBtn = document.getElementById('headerPwaInstall');
    if (headerBtn) {
        headerBtn.style.display = 'none';
    }
});
console.log('?? HanLingo script loaded successfully');