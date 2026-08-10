// Global State for Cart & Session
window.cartItems = JSON.parse(localStorage.getItem('stackly_cart') || '[]');

window.saveCart = function() {
  localStorage.setItem('stackly_cart', JSON.stringify(window.cartItems));
  window.updateCartBadge();
};

window.updateCartBadge = function() {
  const count = window.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });
};

window.addToCart = function(toyId) {
  const toy = window.TOYS_DATA.find(t => t.id === toyId);
  if (!toy) return;

  const existing = window.cartItems.find(item => item.toy.id === toyId);
  if (existing) {
    existing.quantity += 1;
  } else {
    window.cartItems.push({ toy: toy, quantity: 1 });
  }

  window.saveCart();
  window.showToast(`Added "${toy.name}" to cart!`);
  window.renderCartDrawerContent();
};

window.updateCartQty = function(toyId, delta) {
  const item = window.cartItems.find(i => i.toy.id === toyId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    window.cartItems = window.cartItems.filter(i => i.toy.id !== toyId);
  }
  window.saveCart();
  window.renderCartDrawerContent();
};

window.removeFromCart = function(toyId) {
  window.cartItems = window.cartItems.filter(i => i.toy.id !== toyId);
  window.saveCart();
  window.renderCartDrawerContent();
  window.showToast('Item removed from cart');
};

// Render Cart Drawer Content
window.renderCartDrawerContent = function() {
  const container = document.getElementById('cart-drawer-items');
  const totalEl = document.getElementById('cart-drawer-total');
  if (!container) return;

  if (window.cartItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 px-4 space-y-4">
        <div class="w-20 h-20 mx-auto bg-amber-100 text-amber-500 rounded-full flex items-center justify-center text-4xl shadow-inner">
          🛒
        </div>
        <h4 class="font-fredoka text-xl font-bold text-slate-800">Your Cart is Empty</h4>
        <p class="font-quicksand text-slate-500 text-sm max-w-xs mx-auto">
          Explore our Salem Educational Toy Collection on the home page and add fun items for kids.
        </p>
      </div>
    `;
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  let total = 0;
  container.innerHTML = window.cartItems.map(item => {
    const itemTotal = item.toy.price * item.quantity;
    total += itemTotal;
    return `
      <div class="flex items-center gap-4 bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100 shadow-xs">
        <img src="${item.toy.image}" alt="${item.toy.name}" class="w-16 h-16 object-cover rounded-xl border border-amber-200" />
        <div class="flex-1 min-w-0">
          <h5 class="font-fredoka font-bold text-sm text-slate-800 truncate">${item.toy.name}</h5>
          <p class="font-quicksand text-xs text-orange-600 font-bold mt-0.5">₹${(item.toy.price * 80).toFixed(0)} each</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="window.updateCartQty('${item.toy.id}', -1)" class="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 cursor-pointer">-</button>
            <span class="font-fredoka font-bold text-xs text-slate-800 px-1">${item.quantity}</span>
            <button onclick="window.updateCartQty('${item.toy.id}', 1)" class="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 cursor-pointer">+</button>
          </div>
        </div>
        <div class="text-right">
          <p class="font-fredoka font-bold text-sm text-slate-900">₹${(itemTotal * 80).toFixed(0)}</p>
          <button onclick="window.removeFromCart('${item.toy.id}')" class="text-xs text-rose-500 hover:text-rose-700 font-medium mt-2 cursor-pointer">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `₹${(total * 80).toFixed(0)}`;
};

// Cart Drawer Open/Close
window.openCartDrawer = function() {
  window.sounds.playPop();
  const drawer = document.getElementById('cart-drawer-modal');
  if (drawer) {
    window.renderCartDrawerContent();
    drawer.classList.remove('hidden');
  }
};
window.closeCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer-modal');
  if (drawer) drawer.classList.add('hidden');
};

// Live Search Modal
window.openSearchModal = function() {
  window.sounds.playPop();
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      input.focus();
      window.performSearch('');
    }
  }
};
window.closeSearchModal = function() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.add('hidden');
};

window.performSearch = function(query) {
  const container = document.getElementById('search-results-container');
  if (!container) return;

  const q = query.trim().toLowerCase();
  if (!q) {
    container.innerHTML = `<p class="text-slate-400 text-center py-10 font-quicksand text-sm">Type a course, event, teacher, or toy name to search...</p>`;
    return;
  }

  const courses = window.COURSES_DATA.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  const events = window.EVENTS_DATA.filter(e => e.title.toLowerCase().includes(q) || e.category.toLowerCase().includes(q));
  const teachers = window.TEACHERS_DATA.filter(t => t.name.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q));
  const toys = window.TOYS_DATA.filter(t => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q));

  if (!courses.length && !events.length && !teachers.length && !toys.length) {
    container.innerHTML = `<p class="text-slate-500 text-center py-10 font-quicksand text-sm">No results found for "<span class="font-bold text-orange-600">${query}</span>"</p>`;
    return;
  }

  let html = '';
  if (courses.length) {
    html += `<h5 class="font-fredoka text-xs font-bold text-orange-600 tracking-wider uppercase mb-2">Courses & Programs (${courses.length})</h5>`;
    html += courses.map(c => `
      <div onclick="window.closeSearchModal(); window.openCourseModal('${c.id}')" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border border-transparent hover:border-orange-200">
        <img src="${c.image}" class="w-12 h-12 object-cover rounded-lg" />
        <div>
          <h6 class="font-fredoka font-bold text-sm text-slate-800">${c.title}</h6>
          <p class="font-quicksand text-xs text-slate-500">${c.category} • ${c.ageGroup}</p>
        </div>
      </div>
    `).join('');
  }

  if (events.length) {
    html += `<h5 class="font-fredoka text-xs font-bold text-orange-600 tracking-wider uppercase mt-4 mb-2">Academy Events (${events.length})</h5>`;
    html += events.map(e => `
      <div onclick="window.closeSearchModal(); window.openEventModal('${e.id}')" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border border-transparent hover:border-orange-200">
        <img src="${e.image}" class="w-12 h-12 object-cover rounded-lg" />
        <div>
          <h6 class="font-fredoka font-bold text-sm text-slate-800">${e.title}</h6>
          <p class="font-quicksand text-xs text-slate-500">${e.fullDate} • ${e.location}</p>
        </div>
      </div>
    `).join('');
  }

  if (teachers.length) {
    html += `<h5 class="font-fredoka text-xs font-bold text-orange-600 tracking-wider uppercase mt-4 mb-2">Educators (${teachers.length})</h5>`;
    html += teachers.map(t => `
      <div onclick="window.closeSearchModal(); window.navigateTo('teachers.html', 'Teachers');" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border border-transparent hover:border-orange-200">
        <img src="${t.image}" class="w-12 h-12 object-cover rounded-full" />
        <div>
          <h6 class="font-fredoka font-bold text-sm text-slate-800">${t.name}</h6>
          <p class="font-quicksand text-xs text-slate-500">${t.subject} • ${t.title}</p>
        </div>
      </div>
    `).join('');
  }

  container.innerHTML = html;
};

// Login Modal
window.openLoginModal = function() {
  window.sounds.playPop();
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.remove('hidden');
};
window.closeLoginModal = function() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.add('hidden');
};

window.quickLogin = function(role) {
  window.sounds.playSuccess();
  const roles = {
    student: { name: 'Aarav Kumar', role: 'student', email: 'aarav.student@stackly.com' },
    parent: { name: 'Anand S. (Parent of Aarav)', role: 'parent', email: 'anand.parent@stackly.com' },
    teacher: { name: 'Aurora Jackson (Teacher)', role: 'teacher', email: 'aurora.teacher@stackly.com' },
    admin: { name: 'Dr. Salem Director (Admin)', role: 'admin', email: 'admin@stackly.com' }
  };
  const session = roles[role] || roles.student;
  session.id = 'usr_' + Date.now();
  session.gradeClass = 'Grade 1 Alpha • Roll #SK-2026';
  session.avatar = 'assets/images/user-avatar.webp';

  localStorage.setItem('stackly_user', JSON.stringify(session));
  window.closeLoginModal();
  window.showToast(`Signed in successfully as ${session.name}!`);
  setTimeout(() => {
    window.navigateTo('dashboard.html', 'Role Portal');
  }, 500);
};

// Course Detail Modal
window.openCourseModal = function(courseId) {
  window.sounds.playPop();
  const course = window.COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  let modal = document.getElementById('course-detail-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'course-detail-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs hidden';
    document.body.appendChild(modal);
  }

  const formattedPrice = typeof course.price === 'number' ? `₹${(course.price * 80).toFixed(0)} / term` : course.price;
  const originalPriceStr = course.originalPrice ? `<span class="text-xs text-slate-400 line-through ml-2">₹${(course.originalPrice * 80).toFixed(0)}</span>` : '';

  modal.innerHTML = `
    <div class="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-amber-200 relative animate-pulse-bounce" style="animation-duration: 0.4s">
      <button onclick="document.getElementById('course-detail-modal').classList.add('hidden')" class="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-700 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-md cursor-pointer">&times;</button>
      <div class="relative h-56">
        <img src="${course.image}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
          <div>
            <span class="bg-orange-500 text-white font-fredoka font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">${course.category}</span>
            <h3 class="font-fredoka text-2xl font-bold text-white mt-1">${course.title}</h3>
          </div>
        </div>
      </div>
      <div class="p-6 space-y-4">
        <p class="font-quicksand text-slate-600 text-sm leading-relaxed">${course.description}</p>
        <div class="grid grid-cols-2 gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-100 text-xs font-quicksand">
          <div><span class="font-bold text-slate-700">Duration:</span> ${course.duration}</div>
          <div><span class="font-bold text-slate-700">Age Group:</span> ${course.ageGroup}</div>
          <div><span class="font-bold text-slate-700">Instructor:</span> ${course.instructor}</div>
          <div><span class="font-bold text-slate-700">Enrolled:</span> ${course.enrolledCount} Kids</div>
        </div>
        <div class="flex items-center justify-between pt-2">
          <div>
            <span class="font-fredoka text-2xl font-bold text-orange-600">${formattedPrice}</span>
            ${originalPriceStr}
          </div>
          <button onclick="document.getElementById('course-detail-modal').classList.add('hidden'); window.navigateTo('404.html', 'Checkout');" class="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-fredoka font-bold px-6 py-3 rounded-full shadow-lg cursor-pointer">ENROLL NOW</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

// Event Detail Modal
window.openEventModal = function(eventId) {
  window.sounds.playPop();
  const event = window.EVENTS_DATA.find(e => e.id === eventId);
  if (!event) return;

  let modal = document.getElementById('event-detail-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'event-detail-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs hidden';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-orange-200 relative">
      <button onclick="document.getElementById('event-detail-modal').classList.add('hidden')" class="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-700 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-md cursor-pointer">&times;</button>
      <div class="relative h-56">
        <img src="${event.image}" class="w-full h-full object-cover" />
        <div class="absolute top-4 left-4 bg-orange-500 text-white font-fredoka text-center px-3 py-1.5 rounded-2xl shadow-lg">
          <span class="block text-xl font-bold leading-none">${event.dateDay}</span>
          <span class="block text-xs uppercase font-medium">${event.dateMonth}</span>
        </div>
      </div>
      <div class="p-6 space-y-4">
        <span class="bg-orange-100 text-orange-800 font-fredoka font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">${event.category}</span>
        <h3 class="font-fredoka text-2xl font-bold text-slate-800">${event.title}</h3>
        <p class="font-quicksand text-slate-600 text-sm leading-relaxed">${event.description}</p>
        <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 space-y-1.5 text-xs text-slate-700 font-quicksand">
          <div><span class="font-bold text-slate-900">🗓 Date & Time:</span> ${event.fullDate} (${event.time})</div>
          <div><span class="font-bold text-slate-900">📍 Location:</span> ${event.location}</div>
          <div><span class="font-bold text-slate-900">🎟 Ticket / Entry:</span> ${event.price}</div>
        </div>
        <button onclick="document.getElementById('event-detail-modal').classList.add('hidden'); window.navigateTo('404.html', 'Event Pass');" class="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-fredoka font-bold py-3.5 rounded-full shadow-lg cursor-pointer">RSVP & GET EVENT TICKET</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

document.addEventListener('DOMContentLoaded', function() {
  window.updateCartBadge();
});
