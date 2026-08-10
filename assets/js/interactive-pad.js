// Kids Interactive Pad Logic (Canvas Drawing, Audio Soundboard, ABC & 123 Learning, Balloon Pop Mini Game)

window.switchPadTab = function(tabName) {
  if (window.sounds) window.sounds.playPop();

  const drawContent = document.getElementById('pad-tab-draw-content');
  const soundsContent = document.getElementById('pad-tab-sounds-content');
  const abcContent = document.getElementById('pad-tab-abc-content');

  const btnDraw = document.getElementById('pad-btn-draw');
  const btnSounds = document.getElementById('pad-btn-sounds');
  const btnAbc = document.getElementById('pad-btn-abc');

  const allBtns = [btnDraw, btnSounds, btnAbc];
  allBtns.forEach(btn => {
    if (btn) {
      btn.className = 'pad-tab-btn px-4 py-2 rounded-xl font-fredoka font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer text-slate-600 hover:bg-orange-100';
    }
  });

  if (drawContent) drawContent.classList.add('hidden');
  if (soundsContent) soundsContent.classList.add('hidden');
  if (abcContent) abcContent.classList.add('hidden');

  if (tabName === 'draw') {
    if (drawContent) drawContent.classList.remove('hidden');
    if (btnDraw) btnDraw.className = 'pad-tab-btn px-4 py-2 rounded-xl font-fredoka font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer bg-orange-500 text-white shadow-md';
  } else if (tabName === 'sounds') {
    if (soundsContent) soundsContent.classList.remove('hidden');
    if (btnSounds) btnSounds.className = 'pad-tab-btn px-4 py-2 rounded-xl font-fredoka font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer bg-orange-500 text-white shadow-md';
  } else if (tabName === 'abc') {
    if (abcContent) abcContent.classList.remove('hidden');
    if (btnAbc) btnAbc.className = 'pad-tab-btn px-4 py-2 rounded-xl font-fredoka font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer bg-orange-500 text-white shadow-md';
  }
};

window.handleAbcClick = function(char) {
  if (window.sounds) window.sounds.playChime();
  window.showToast(`✨ ${char} is for Stackly Kid Learning! Great job!`);
};

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('kids-drawing-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let currentColor = '#f97316';
  let currentBrushSize = 6;
  let isEraser = false;

  // Initialize Canvas background
  function initCanvas() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  initCanvas();

  // Resize listener to match display width
  function fitCanvasToContainer() {
    const parent = canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      if (rect.width > 0 && rect.width !== canvas.width) {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = rect.width;
        canvas.height = 300;
        initCanvas();
        ctx.putImageData(data, 0, 0);
      }
    }
  }
  fitCanvasToContainer();
  window.addEventListener('resize', fitCanvasToContainer);

  // Drawing event listeners
  function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDrawing(e) {
    isDrawing = true;
    const pos = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getCoordinates(e);

    ctx.lineWidth = isEraser ? currentBrushSize * 3 : currentBrushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = isEraser ? '#ffffff' : currentColor;

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDrawing() {
    if (isDrawing) {
      ctx.closePath();
      isDrawing = false;
    }
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDrawing);

  // Color picker controls
  const colorBtns = document.querySelectorAll('.color-picker-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (window.sounds) window.sounds.playPop();
      colorBtns.forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-800'));
      this.classList.add('ring-4', 'ring-offset-2', 'ring-slate-800');
      currentColor = this.getAttribute('data-color');
      isEraser = false;
    });
  });

  // Brush size picker controls
  const sizeBtns = document.querySelectorAll('.brush-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (window.sounds) window.sounds.playPop();
      sizeBtns.forEach(b => b.classList.remove('bg-orange-500', 'text-white'));
      this.classList.add('bg-orange-500', 'text-white');
      currentBrushSize = parseInt(this.getAttribute('data-size'));
    });
  });

  // Clear canvas control
  const clearBtn = document.getElementById('canvas-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      if (window.sounds) window.sounds.playPop();
      initCanvas();
      window.showToast('Canvas Cleared!');
    });
  }

  // Soundboard Buttons
  window.playPadSound = function(soundType) {
    if (soundType === 'duck') {
      if (window.sounds) window.sounds.playWhistle();
      window.showToast('🦆 Quack Quack! Little Duck says Hello!');
    } else if (soundType === 'bird') {
      if (window.sounds) window.sounds.playChime();
      window.showToast('🐦 Chirp Chirp! Singing Bird!');
    } else if (soundType === 'chime') {
      if (window.sounds) window.sounds.playChime();
      window.showToast('🐱 Meow Meow! Playful Kitten!');
    } else if (soundType === 'whistle') {
      if (window.sounds) window.sounds.playWhistle();
      window.showToast('🐶 Woof Woof! Happy Salem Puppy!');
    } else if (soundType === 'victory') {
      if (window.sounds) window.sounds.playSuccess();
      window.showToast('⭐ Magic Twinkle Star!');
    } else if (soundType === 'drum') {
      if (window.sounds) window.sounds.playDrum();
      window.showToast('🎵 Boom Boom! Music Drum Beat!');
    }
  };
});
