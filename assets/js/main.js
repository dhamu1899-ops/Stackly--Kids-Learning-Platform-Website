// Reusable SVG Logo Generator — uses inline styles to ensure rendering even when Tailwind CDN
// cannot detect dynamically injected class names.
window.renderStacklyLogo = function(variant, iconPx, showText) {
  variant = variant || 'gold';
  iconPx = iconPx || 40;
  if (showText === undefined) showText = true;
  const isLight = variant === 'light';
  const gradientId = 'sg_' + Math.random().toString(36).substring(2, 7);
  const svgFill = isLight ? '#ffffff' : ('url(#' + gradientId + ')');
  const brandColor = isLight ? '#ffffff' : '#0f172a';
  const accentColor = isLight ? '#fcd34d' : '#f97316';
  const subtitleColor = isLight ? '#fde68a' : '#ea580c';
  const dotColor = '#fbbf24';

  const svgPath1 = 'M419.713867,256.179962 C408.001251,235.739304 410.215973,215.613876 419.889709,195.679504 C426.373138,182.319229 436.255493,171.444672 446.508270,160.904480 C457.075165,150.041229 468.783997,140.348602 478.792694,128.896606 C487.411407,119.035004 494.797852,108.464394 500.031921,96.425682 C500.738983,94.799370 501.001617,92.854477 502.785980,91.712807 C503.214905,91.838028 503.879059,91.821617 504.103485,92.127670 C514.526489,106.341171 522.003967,121.483376 518.287415,139.859406 C515.933533,151.498276 508.987885,160.308563 500.296600,167.942245 C487.788574,178.928223 473.634369,187.949692 462.046570,200.037262 C456.219025,206.116135 451.191589,212.659836 449.149933,221.054688 C445.376373,236.570572 454.272034,249.198563 470.197021,250.779221 C485.241028,252.272446 499.302216,248.880798 512.632202,241.996979 C514.021362,241.279602 515.213196,239.793518 517.062500,240.547546 C517.833252,242.063324 516.690857,242.794266 515.917847,243.562866 C502.480865,256.923462 487.519073,267.973206 468.591339,271.949402 C447.923096,276.291199 431.269562,272.383606 419.713867,256.179962 z';
  const svgPath2 = 'M536.351807,311.352905 C521.089722,325.623138 508.631836,341.451172 501.644409,361.304535 C500.580017,360.856842 499.799347,360.777496 499.458496,360.348633 C491.323975,350.113098 485.458466,338.909088 484.707672,325.531189 C484.034546,313.536499 489.236786,303.909576 496.947052,295.363251 C506.737030,284.511749 519.089050,276.702271 530.329102,267.573334 C539.676453,259.981689 548.930542,252.352356 553.649658,240.719803 C556.247925,234.315125 556.803040,227.722214 555.167542,221.122284 C551.964783,208.197189 539.399353,200.886032 526.174622,203.877502 C513.911682,206.651428 503.242737,212.702515 493.079834,219.823700 C492.039246,220.552856 491.267578,221.851700 489.661957,221.557190 C488.659760,220.289383 489.653076,219.345703 490.287292,218.480408 C503.850159,199.976334 521.506714,187.674316 544.321167,183.636948 C574.742554,178.253418 599.437622,199.883118 594.804749,234.346802 C592.539368,251.198425 583.628967,264.794067 572.581299,277.156372 C561.558105,289.491241 548.610413,299.803345 536.351807,311.352905 z';

  return `
    <div style="display:flex;align-items:center;gap:10px;text-decoration:none;">
      <div style="position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="398 82 212 290" style="width:${iconPx}px;height:${iconPx}px;transition:transform 0.3s;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.15));" aria-label="Stackly Logo">
          <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="50%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
          </defs>
          <path fill="${svgFill}" opacity="1" stroke="none" d="${svgPath1}" />
          <path fill="${svgFill}" opacity="1" stroke="none" d="${svgPath2}" />
        </svg>
      </div>
      ${showText ? `
        <div style="line-height:1.1;">
          <span style="font-family:'Fredoka',cursive,sans-serif;font-size:1.4rem;font-weight:700;letter-spacing:-0.02em;display:flex;align-items:center;gap:4px;color:${brandColor};">
            Stackly<span style="color:${accentColor};">Kids</span>
            <span style="width:9px;height:9px;border-radius:50%;background:${dotColor};display:inline-block;animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;"></span>
          </span>
          <span style="font-family:'Quicksand',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${subtitleColor};display:block;">
            Salem Preschool &amp; Academy
          </span>
        </div>
      ` : ''}
    </div>
  `;
};

// Reusable Social Media Icons Component HTML generator (100% High-Visibility Inline SVGs)
window.renderSocialIconsGroup = function(size) {
  const iconSizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const boxSizeClass = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  
  return `
    <div class="flex items-center gap-2 shrink-0">
      <!-- Facebook -->
      <a href="404.html" title="Visit Stackly Kids on Facebook" class="${boxSizeClass} rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-125 transition-all cursor-pointer border border-white/30 shrink-0">
        <svg class="${iconSizeClass}" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <!-- X / Twitter -->
      <a href="404.html" title="Visit Stackly Kids on X (Twitter)" class="${boxSizeClass} rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md hover:scale-125 transition-all cursor-pointer border border-slate-700 shrink-0">
        <svg class="${iconSizeClass}" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <!-- Instagram -->
      <a href="404.html" title="Visit Stackly Kids on Instagram" class="${boxSizeClass} rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md hover:scale-125 transition-all cursor-pointer border border-white/30 shrink-0">
        <svg class="${iconSizeClass}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </a>
      <!-- LinkedIn -->
      <a href="404.html" title="Visit Stackly Kids on LinkedIn" class="${boxSizeClass} rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md hover:scale-125 transition-all cursor-pointer border border-white/30 shrink-0">
        <svg class="${iconSizeClass}" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
  `;
};

// Global Audio Synthesizer via Web Audio API
window.soundEnabled = true;

window.sounds = {
  getAudioContext: function() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  },

  playPop: function() {
    if (!window.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  },

  playChime: function() {
    if (!window.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.07);
        osc.stop(ctx.currentTime + idx * 0.07 + 0.3);
      });
    } catch (e) {}
  },

  playSuccess: function() {
    if (!window.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const freqs = [440, 554.37, 659.25, 880];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.3);
      });
    } catch (e) {}
  },

  playWhistle: function() {
    if (!window.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(1400, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  },

  playDrum: function() {
    if (!window.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }
};

window.toggleSoundFX = function() {
  window.soundEnabled = !window.soundEnabled;
  const textEl = document.getElementById('sound-toggle-text');
  if (textEl) {
    textEl.textContent = window.soundEnabled ? 'Sound FX: ON' : 'Sound FX: OFF';
  }
  if (window.soundEnabled) window.sounds.playChime();
};

// Global Toast Notification Handler
window.showToast = function(msg) {
  let toastContainer = document.getElementById('global-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'global-toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-enter pointer-events-auto bg-slate-900/95 text-white font-quicksand font-semibold text-sm px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 backdrop-blur-md';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="w-3 h-3 rounded-full bg-orange-400 animate-ping"></span>
      <span>${msg}</span>
    </div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white transition-colors cursor-pointer text-lg leading-none">&times;</button>
  `;

  toastContainer.appendChild(toast);
  window.sounds.playPop();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
};

// 3-Second Kids Loading Screen Ticker (Exact React Component Parity)
const FUN_MESSAGES = [
  '🎒 Packing backpacks & colorful crayons...',
  '🎨 Mixing bright watercolor paints...',
  '🚀 Launching STEM building block modules...',
  '🎵 Tuning our Salem kid music band...',
  '✨ Almost ready for playdate learning!'
];

window.navigateTo = function(targetUrl, targetPageName) {
  window.sounds.playChime();

  let overlay = document.getElementById('kids-loading-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'kids-loading-overlay';
    document.body.appendChild(overlay);
  }

  overlay.className = 'fixed inset-0 z-[99999] bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EA] to-[#FFEFE0] flex flex-col items-center justify-center p-6 select-none overflow-hidden';
  overlay.innerHTML = `
    <!-- Floating Background Shapes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-10 left-10 w-20 h-24 bg-rose-400/30 rounded-full blur-xs flex items-center justify-center border-2 border-rose-300 animate-float">❤️</div>
      <div class="absolute top-16 right-12 w-16 h-16 bg-amber-400/30 rounded-3xl flex items-center justify-center border-2 border-amber-300 animate-spin-slow">⭐</div>
      <div class="absolute bottom-16 left-12 w-16 h-16 bg-sky-400/30 rounded-2xl flex items-center justify-center border-2 border-sky-300 animate-float-reverse">🚀</div>
      <div class="absolute bottom-20 right-16 w-20 h-20 bg-emerald-400/30 rounded-full flex items-center justify-center border-2 border-emerald-300 animate-pulse-bounce">🎨</div>
    </div>

    <!-- Center Card -->
    <div class="relative z-10 bg-white/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-amber-300 max-w-md w-full text-center space-y-6">
      <div class="relative flex flex-col items-center justify-center">
        <div class="p-3 bg-gradient-to-tr from-amber-100/80 via-orange-50 to-amber-100/80 rounded-3xl border-2 border-amber-300/80 shadow-md inline-block">
          ${window.renderStacklyLogo('gold', 56, true)}
        </div>
        <div class="absolute -top-3 -right-2 bg-rose-500 text-white p-2 rounded-full border-2 border-white shadow-md">✨</div>
      </div>

      <div class="flex items-center justify-center gap-3 py-2">
        <div class="p-2.5 bg-rose-100 text-rose-600 rounded-2xl shadow-xs animate-bounce" style="animation-delay:0s">📖</div>
        <div class="p-2.5 bg-amber-100 text-amber-600 rounded-2xl shadow-xs animate-bounce" style="animation-delay:0.2s">🚀</div>
        <div class="p-2.5 bg-sky-100 text-sky-600 rounded-2xl shadow-xs animate-bounce" style="animation-delay:0.4s">🎵</div>
        <div class="p-2.5 bg-emerald-100 text-emerald-600 rounded-2xl shadow-xs animate-bounce" style="animation-delay:0.6s">🎨</div>
      </div>

      <div class="h-10 flex items-center justify-center">
        <p id="kids-loading-msg" class="text-sm font-bold text-slate-700 font-fredoka">
          ${FUN_MESSAGES[0]}
        </p>
      </div>

      <div class="space-y-2">
        <div class="w-full h-4 bg-slate-100 rounded-full p-0.5 border border-amber-200 overflow-hidden shadow-inner">
          <div id="kids-loader-bar" class="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 rounded-full shadow-md transition-all duration-75" style="width: 0%"></div>
        </div>
        <div class="flex justify-between items-center text-[11px] font-bold text-slate-500 font-quicksand">
          <span>Loading ${targetPageName ? targetPageName : 'Stackly Salem'}...</span>
          <span id="kids-loader-percent" class="text-orange-600 font-fredoka text-xs">0%</span>
        </div>
      </div>
    </div>
  `;

  let progress = 0;
  const bar = document.getElementById('kids-loader-bar');
  const percentEl = document.getElementById('kids-loader-percent');
  const msgEl = document.getElementById('kids-loading-msg');

  const startTime = Date.now();
  const duration = 3000; // 3 seconds

  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    progress = Math.min(Math.floor((elapsed / duration) * 100), 100);

    if (bar) bar.style.width = progress + '%';
    if (percentEl) percentEl.textContent = progress + '%';

    if (elapsed < 800) { if (msgEl) msgEl.textContent = FUN_MESSAGES[0]; }
    else if (elapsed < 1500) { if (msgEl) msgEl.textContent = FUN_MESSAGES[1]; }
    else if (elapsed < 2200) { if (msgEl) msgEl.textContent = FUN_MESSAGES[2]; }
    else if (elapsed < 2700) { if (msgEl) msgEl.textContent = FUN_MESSAGES[3]; }
    else { if (msgEl) msgEl.textContent = FUN_MESSAGES[4]; }

    if (elapsed >= duration) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 150);
    }
  }, 40);
};

document.addEventListener('DOMContentLoaded', function() {

  // Populate Header Logo Containers
  const headerLogos = document.querySelectorAll('.header-logo-container');
  headerLogos.forEach(el => {
    el.innerHTML = window.renderStacklyLogo('gold', 40, true);
  });

  // Populate Footer Logo Containers
  const footerLogos = document.querySelectorAll('.footer-logo-container');
  footerLogos.forEach(el => {
    el.innerHTML = window.renderStacklyLogo('light', 40, true);
  });

  // Populate Top Bar Social Containers
  const topSocialContainers = document.querySelectorAll('.top-bar-social-container');
  topSocialContainers.forEach(el => {
    el.innerHTML = window.renderSocialIconsGroup('sm');
  });

  // Populate Footer Social Containers
  const footerSocialContainers = document.querySelectorAll('.footer-social-container');
  footerSocialContainers.forEach(el => {
    el.innerHTML = window.renderSocialIconsGroup('md');
  });

  // Re-initialize Lucide Icons for dynamic social containers
  if (window.lucide) window.lucide.createIcons();

  // Update Header Login Button based on Logged-in Session State
  const isLoggedIn = localStorage.getItem('stackly_logged_in') === 'true';
  const userRole = localStorage.getItem('stackly_user_role') || 'student';
  const loginHeaderBtns = document.querySelectorAll('button[onclick*="login.html"]');

  if (isLoggedIn && loginHeaderBtns.length > 0) {
    // Extract display name from email (e.g. "dhamu@gmail.com" → "Dhamu")
    const storedEmail = localStorage.getItem('stackly_user_email') || '';
    let displayName;
    if (storedEmail && storedEmail.includes('@')) {
      const namePart = storedEmail.split('@')[0];
      displayName = namePart
        .replace(/[._\-]+/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    } else {
      // Fallback to role-based label
      if (userRole === 'teacher') displayName = 'Teacher';
      else if (userRole === 'admin') displayName = 'Admin';
      else displayName = 'Student';
    }

    const roleEmoji = userRole === 'teacher' ? '👩‍🏫' : userRole === 'admin' ? '⚡' : '👤';

    loginHeaderBtns.forEach(btn => {
      btn.setAttribute('onclick', "window.navigateTo('dashboard.html', 'Dashboard')");
      btn.innerHTML = `<i data-lucide="user-check" class="w-4 h-4 text-amber-300"></i><span>${roleEmoji} ${displayName}</span>`;
      btn.className = 'hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-fredoka font-bold text-xs px-5 py-2.5 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform';
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    setTimeout(() => {
      window.showToast('Welcome to Stackly Kids Preschool & Academy (Salem HQ)! Click anywhere for bubble effects.');
    }, 800);
  }

  const mobileBtn = document.getElementById('mobile-menu-toggle');
  let mobileNav = document.getElementById('mobile-nav-drawer');

  function closeMobileMenu() {
    if (mobileNav) {
      mobileNav.className = 'hidden lg:hidden';
      mobileNav.style.display = 'none';
    }
    document.body.style.overflow = ''; // Unlock body scroll
  }

  function openMobileMenu() {
    if (!mobileNav) return;
    if (window.sounds) window.sounds.playPop();

    // Ensure drawer is mounted directly to document.body to avoid sticky header stacking context conflicts
    if (mobileNav.parentElement !== document.body) {
      document.body.appendChild(mobileNav);
    }

    mobileNav.className = 'fixed inset-0 z-[999999] bg-[#111923] text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto select-none';
    mobileNav.style.display = 'flex';
    mobileNav.innerHTML = `
      <div class="space-y-6">
        <!-- Top Bar with Logo and Close Button -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-4">
          <a href="index.html" class="header-logo-container"></a>
          <button id="close-mobile-menu-btn" class="w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-orange-500 transition-colors flex items-center justify-center text-xl font-bold cursor-pointer border border-slate-700">
            &times;
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col space-y-2.5 font-fredoka text-base font-bold text-white">
          <a href="index.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">Home</span><span class="text-amber-300">🏠</span>
          </a>
          <a href="about.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">About Us</span><span class="text-amber-300">✨</span>
          </a>
          <a href="courses.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">Courses &amp; LMS</span><span class="text-amber-300">🎓</span>
          </a>
          <a href="teachers.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">Faculty Mentors</span><span class="text-amber-300">👩‍🏫</span>
          </a>
          <a href="events.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">School Events</span><span class="text-amber-300">🎪</span>
          </a>
          <a href="blog.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">Parent Blog</span><span class="text-amber-300">📖</span>
          </a>
          <a href="contact.html" class="px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-between text-white border border-slate-700/60">
            <span class="text-white">Contact Salem HQ</span><span class="text-amber-300">📍</span>
          </a>
          <a href="login.html" class="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold flex items-center justify-between mt-2 shadow-lg border border-amber-300/40">
            <span class="text-white">Role Portal Login</span><span>🔑</span>
          </a>
        </nav>
      </div>

      <!-- Bottom Info & CTA -->
      <div class="pt-6 border-t border-slate-800 space-y-4">
        <div class="flex items-center justify-between text-xs text-slate-400 font-quicksand">
          <span>📍 Fairlands, Salem, TN</span>
          <span>☎️ +91 98765 43210</span>
        </div>

        ${window.renderSocialIconsGroup('md')}

        <button onclick="window.navigateTo('courses.html', 'Courses'); closeMobileMenu();" class="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-fredoka font-bold text-sm py-3.5 rounded-full shadow-lg text-center cursor-pointer">
          ENROLL KIDS NOW 🚀
        </button>
      </div>
    `;

    document.body.style.overflow = 'hidden'; // Lock background scrolling

    // Populate logo inside drawer
    const logoEl = mobileNav.querySelector('.header-logo-container');
    if (logoEl) logoEl.innerHTML = window.renderStacklyLogo('light', 36, true);

    // Add listener for close button
    const closeBtn = document.getElementById('close-mobile-menu-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);

    // Close when clicking any link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }


  // Re-grab mobileNav here in case it wasn't in DOM earlier
  if (!mobileNav) {
    mobileNav = document.getElementById('mobile-nav-drawer');
  }

  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.id = 'mobile-nav-drawer';
    mobileNav.className = 'hidden lg:hidden';
    document.body.appendChild(mobileNav);
  }

  // Delegated click listener ensures hamburger button works on every single page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#mobile-menu-toggle');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      openMobileMenu();
    }
  });

  const mascot = document.getElementById('mascot-widget');
  if (mascot) {
    mascot.addEventListener('click', () => {
      window.sounds.playWhistle();
      const dialogue = document.getElementById('mascot-dialogue');
      if (dialogue) {
        dialogue.classList.remove('hidden');
        setTimeout(() => dialogue.classList.add('hidden'), 4000);
      }
    });
  }
  // Kid-Friendly Mouse Move Spreading Bubble Trail & Click Burst Effect
  const PASTEL_COLORS = ['#f97316', '#fbbf24', '#38bdf8', '#ec4899', '#a855f7', '#10b981', '#f43f5e'];
  const EMOJI_BUBBLES = ['✨', '⭐', '🎈', '🎨', '🌟', '🫧', '❤️'];
  let lastMoveTime = 0;

  function spawnMouseBubble(x, y, isClick = false) {
    const bubble = document.createElement('div');
    const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
    const isEmoji = Math.random() < 0.3;
    const size = isClick ? (16 + Math.random() * 24) : (10 + Math.random() * 18);

    bubble.className = 'fixed pointer-events-none z-[99999] flex items-center justify-center select-none';
    
    if (isEmoji) {
      const emoji = EMOJI_BUBBLES[Math.floor(Math.random() * EMOJI_BUBBLES.length)];
      bubble.innerHTML = emoji;
      bubble.style.fontSize = `${size}px`;
    } else {
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = color;
      bubble.style.borderRadius = '50%';
      bubble.style.boxShadow = `0 0 12px ${color}aa`;
      bubble.style.border = '2px solid rgba(255, 255, 255, 0.7)';
    }

    const offsetX = (Math.random() - 0.5) * (isClick ? 100 : 40);
    const offsetY = (Math.random() - 0.5) * (isClick ? 100 : 40) - (isClick ? 40 : 25);

    bubble.style.left = `${x - size / 2}px`;
    bubble.style.top = `${y - size / 2}px`;
    bubble.style.transition = 'all 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    document.body.appendChild(bubble);

    requestAnimationFrame(() => {
      bubble.style.transform = `translate(${offsetX}px, ${offsetY - 30}px) scale(${isClick ? 1.5 : 1.15})`;
      bubble.style.opacity = '0';
    });

    setTimeout(() => bubble.remove(), 900);
  }

  // Mouse move spreading trail
  window.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastMoveTime > 30) {
      lastMoveTime = now;
      spawnMouseBubble(e.clientX, e.clientY, false);
    }
  });

  // Pointer click bubble burst
  window.addEventListener('pointerdown', function(e) {
    for (let i = 0; i < 9; i++) {
      spawnMouseBubble(e.clientX, e.clientY, true);
    }
  });

  // Global Link Interceptor for Smooth 3-Second Kids Loading Overlay Ticker
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:')) return;

    // Check if internal navigation link
    if (href.endsWith('.html') || href === '/' || href === 'index.html') {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      let pageName = link.textContent.trim().replace(/^●\s*/, '').replace(/^[^\w\s]+/, '').trim();
      if (!pageName || pageName.length > 25) {
        if (href.includes('about')) pageName = 'About Us';
        else if (href.includes('courses')) pageName = 'Courses';
        else if (href.includes('teachers')) pageName = 'Teachers';
        else if (href.includes('events')) pageName = 'Events';
        else if (href.includes('blog')) pageName = 'Blog';
        else if (href.includes('contact')) pageName = 'Contact Us';
        else if (href.includes('login')) pageName = 'Login';
        else if (href.includes('signup')) pageName = 'Register';
        else if (href.includes('dashboard')) pageName = 'Dashboard';
        else if (href.includes('404')) pageName = 'Stackly Salem';
        else pageName = 'Home';
      }

      window.navigateTo(href, pageName);
    }
  });

  // Initialize Section Scroll Reveal Observer for Kid-Friendly Scroll Animations
  function initScrollRevealObserver() {
    const targets = document.querySelectorAll('section, article, .grid > div, main > div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    targets.forEach((el, index) => {
      if (!el.classList.contains('reveal-on-scroll') && !el.classList.contains('reveal-scale-pop') && !el.classList.contains('reveal-rotate-in')) {
        const animTypes = ['reveal-on-scroll', 'reveal-scale-pop', 'reveal-rotate-in', 'reveal-slide-left', 'reveal-slide-right'];
        const chosenClass = animTypes[index % animTypes.length];
        el.classList.add(chosenClass);
      }
      observer.observe(el);
    });
  }
  setTimeout(initScrollRevealObserver, 150);
});
