// Dedicated Role-Based Dashboard with Left Sidebar Navigation (Stackly Salem Academy)

// Retrieve logged-in user role from localStorage or default to 'student'
window.currentRole = localStorage.getItem('stackly_user_role') || 'student';
window.currentTab = 'overview';

// Extract display name from stored email: "dhamu@gmail.com" → "Dhamu"
window.getDisplayName = function() {
  const email = localStorage.getItem('stackly_user_email') || '';
  if (email && email.includes('@')) {
    const namePart = email.split('@')[0];           // e.g. "dhamu" or "john.doe"
    // Capitalize first letter of each word (split on . _ - space)
    return namePart
      .replace(/[._\-]+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }
  // Fallback: use role-based default
  const role = window.currentRole;
  if (role === 'teacher') return 'Teacher';
  if (role === 'admin') return 'Admin';
  return 'Student';
};

// Mock Users per Role
window.userData = {
  student: {
    name: 'Aarav Kumar',
    email: 'aarav.salem@stackly.com',
    role: 'student',
    roleLabel: 'STUDENT / PARENT',
    gradeClass: 'Grade 1 Alpha (Salem Main Campus)',
    avatar: 'assets/images/user-avatar.webp',
    themeColor: 'orange'
  },
  teacher: {
    name: 'Priya Sundaram (Faculty Lead)',
    email: 'priya.sundaram@stackly.com',
    role: 'teacher',
    roleLabel: 'MONTESSORI EDUCATOR',
    department: 'Montessori & STEM Robotics',
    avatar: 'assets/images/teacher-1.webp',
    themeColor: 'sky'
  },
  admin: {
    name: 'Stackly Salem Director',
    email: 'director.salem@stackly.com',
    role: 'admin',
    roleLabel: 'EXECUTIVE ACADEMY DIRECTOR',
    department: 'Salem Executive Board',
    avatar: 'assets/images/mascot.webp',
    themeColor: 'purple'
  }
};

// Interactive Attendance Roster State
window.attendanceState = {
  s1: true,
  s2: true,
  s3: true,
  s4: false,
  s5: true,
  s6: true
};

window.switchDashTab = function(tabId) {
  if (window.sounds) window.sounds.playPop();
  window.currentTab = tabId;
  window.renderRoleDashboard();
};

window.toggleMobileDashSidebar = function() {
  const sidebar = document.getElementById('dashboard-sidebar-aside');
  if (sidebar) {
    if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('flex');
    } else {
      sidebar.classList.add('hidden');
      sidebar.classList.remove('flex');
    }
  }
};

window.toggleAttendance = function(id) {
  if (window.sounds) window.sounds.playPop();
  window.attendanceState[id] = !window.attendanceState[id];
  window.renderRoleDashboard();
};

window.logoutUser = function() {
  if (window.sounds) window.sounds.playChime();
  localStorage.removeItem('stackly_logged_in');
  localStorage.removeItem('stackly_user_role');
  localStorage.removeItem('stackly_user_email');
  if (window.showToast) window.showToast('Logged out of Stackly Salem Portal.');
  window.navigateTo('index.html', 'Home');
};

window.renderRoleDashboard = function() {
  const container = document.getElementById('dashboard-app-root');
  if (!container) return;

  const role = window.currentRole;
  const user = window.userData[role] || window.userData.student;

  // Sidebar Menu Items per Role
  let sidebarItems = [];
  if (role === 'student') {
    sidebarItems = [
      { id: 'overview', label: 'Overview & Metrics', icon: '📊' },
      { id: 'classes', label: 'Enrolled Classes', icon: '📚' },
      { id: 'schedule', label: 'Class Schedule', icon: '📅' },
      { id: 'marks', label: 'Marks & Badges', icon: '🏆' },
      { id: 'toys', label: 'STEM Toys Kit', icon: '🧸' },
      { id: 'fees', label: 'Fee Receipts & Ledger', icon: '💳' }
    ];
  } else if (role === 'teacher') {
    sidebarItems = [
      { id: 'overview', label: 'Educator Overview', icon: '📊' },
      { id: 'attendance', label: 'Classroom Roll Call', icon: '✅' },
      { id: 'lessons', label: 'Lesson Worksheets', icon: '📝' },
      { id: 'gradebook', label: 'Gradebook Entry', icon: '🎓' },
      { id: 'noticeboard', label: 'Class Announcements', icon: '📢' }
    ];
  } else if (role === 'admin') {
    sidebarItems = [
      { id: 'overview', label: 'Executive KPI Metrics', icon: '⚡' },
      { id: 'admissions', label: 'Student Admissions Roster', icon: '👥' },
      { id: 'finances', label: 'Revenue & Fee Ledger', icon: '💰' },
      { id: 'announcements', label: 'Broadcast Campus Notice', icon: '📢' },
      { id: 'faculty', label: 'Faculty Staff Directory', icon: '👩‍🏫' }
    ];
  }

  // Ensure currentTab belongs to active menu
  if (!sidebarItems.some(item => item.id === window.currentTab)) {
    window.currentTab = 'overview';
  }

  // Active Tab Main Panel Content
  let mainContentHtml = '';

  // ---------------- STUDENT ONLY VIEWS ----------------
  if (role === 'student') {
    if (window.currentTab === 'overview') {
      mainContentHtml = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white p-5 rounded-3xl border-2 border-amber-100 shadow-md">
              <span class="text-xs font-bold text-slate-400 font-fredoka uppercase">Attendance Rate</span>
              <div class="font-fredoka text-3xl font-bold text-emerald-600 mt-1">98.5%</div>
              <p class="text-[11px] text-slate-500 font-bold mt-1">180 / 183 Days Present</p>
            </div>
            <div class="bg-white p-5 rounded-3xl border-2 border-amber-100 shadow-md">
              <span class="text-xs font-bold text-slate-400 font-fredoka uppercase">Academic GPA</span>
              <div class="font-fredoka text-3xl font-bold text-orange-500 mt-1">A+ (96%)</div>
              <p class="text-[11px] text-slate-500 font-bold mt-1">Top 5% in Salem Campus</p>
            </div>
            <div class="bg-white p-5 rounded-3xl border-2 border-amber-100 shadow-md">
              <span class="text-xs font-bold text-slate-400 font-fredoka uppercase">Tuition Status</span>
              <div class="font-fredoka text-2xl font-bold text-emerald-600 mt-1">PAID IN FULL</div>
              <p class="text-[11px] text-slate-500 font-bold mt-1">Receipt #SLM-2026-920</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
            <h3 class="font-fredoka text-xl font-bold text-slate-800">📊 Subject Mastery &amp; Performance</h3>
            <div class="space-y-3 font-quicksand">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>STEM &amp; Robotics Mechanics</span><span class="text-orange-600">98%</span></div>
                <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full w-[98%]"></div></div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Creative Art &amp; Clay Studio</span><span class="text-rose-600">94%</span></div>
                <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full w-[94%]"></div></div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Music &amp; Instrumental Ensemble</span><span class="text-sky-600">92%</span></div>
                <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[92%]"></div></div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'classes') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">📚 Enrolled Courses &amp; Modules</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-orange-50 border border-orange-200 rounded-2xl space-y-2">
              <span class="font-fredoka font-bold text-base text-slate-800 block">STEM Robotics Lab</span>
              <p class="text-xs text-slate-600">Mentor: Priya Sundaram • Room 102</p>
              <div class="w-full h-2 bg-orange-200 rounded-full overflow-hidden"><div class="h-full bg-orange-500 w-[90%]"></div></div>
            </div>
            <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
              <span class="font-fredoka font-bold text-base text-slate-800 block">Montessori Math Blocks</span>
              <p class="text-xs text-slate-600">Mentor: R. K. Sharma • Room 104</p>
              <div class="w-full h-2 bg-amber-200 rounded-full overflow-hidden"><div class="h-full bg-amber-500 w-[85%]"></div></div>
            </div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'schedule') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">📅 Weekly Class Timetable (Grade 1 Alpha)</h3>
          <div class="space-y-3 font-quicksand text-xs">
            <div class="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-between"><div><span class="font-bold text-slate-800 text-sm block font-fredoka">09:00 AM - 10:00 AM</span><span class="text-slate-600">STEM Robotics Lab • Room 102</span></div><span class="bg-orange-500 text-white font-fredoka font-bold text-xs px-3 py-1 rounded-full">IN PROGRESS</span></div>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between"><div><span class="font-bold text-slate-800 text-sm block font-fredoka">10:15 AM - 11:15 AM</span><span class="text-slate-600">Montessori Math Blocks • Room 104</span></div><span class="bg-slate-200 text-slate-700 font-fredoka font-bold text-xs px-3 py-1 rounded-full">UPCOMING</span></div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'marks') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">🏆 Marksheet &amp; Achievement Badges</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-1"><span class="text-3xl">🏆</span><span class="font-fredoka text-sm font-bold block text-slate-800">STEM Master</span><span class="text-[10px] text-slate-500">Robotics Kit Star</span></div>
            <div class="p-4 bg-sky-50 border border-sky-200 rounded-2xl text-center space-y-1"><span class="text-3xl">🎵</span><span class="font-fredoka text-sm font-bold block text-slate-800">Music Solo</span><span class="text-[10px] text-slate-500">Xylophone Award</span></div>
            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1"><span class="text-3xl">⭐</span><span class="font-fredoka text-sm font-bold block text-slate-800">100% Punctual</span><span class="text-[10px] text-slate-500">Perfect Attendance</span></div>
            <div class="p-4 bg-purple-50 border border-purple-200 rounded-2xl text-center space-y-1"><span class="text-3xl">🎨</span><span class="font-fredoka text-sm font-bold block text-slate-800">Art Virtuoso</span><span class="text-[10px] text-slate-500">Color Palette Genius</span></div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'toys') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">🧸 Assigned STEM Learning Kits</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-purple-50 border border-purple-100 rounded-2xl flex items-center gap-3"><div class="w-12 h-12 rounded-xl bg-purple-500 text-white font-bold flex items-center justify-center text-xl font-fredoka">🤖</div><div><span class="font-fredoka text-sm font-bold text-slate-800 block">Stackly Bot-1 Coding Kit</span><span class="text-xs text-slate-500">Checked Out: Feb 1, 2026</span></div></div>
            <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3"><div class="w-12 h-12 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center text-xl font-fredoka">🧩</div><div><span class="font-fredoka text-sm font-bold text-slate-800 block">Wooden Abacus &amp; Fraction Board</span><span class="text-xs text-slate-500">Checked Out: Jan 15, 2026</span></div></div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'fees') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-fredoka text-xl font-bold text-slate-800">💳 Term Fee Receipts &amp; Ledger</h3>
            <button onclick="if(window.sounds)window.sounds.playChime(); window.showToast('📄 Fee Receipt PDF Downloaded');" class="bg-emerald-600 hover:bg-emerald-700 text-white font-fredoka font-bold text-xs px-4 py-2 rounded-xl cursor-pointer">DOWNLOAD RECEIPT PDF</button>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs font-quicksand">
            <div class="flex justify-between border-b border-slate-200 pb-2"><span>Receipt ID: #SLM-2026-920</span><span class="font-bold text-emerald-600">PAID IN FULL</span></div>
            <div class="flex justify-between"><span>Montessori &amp; STEM Term Tuition</span><span class="font-bold">₹ 2,500</span></div>
            <div class="flex justify-between"><span>Activity &amp; Robotics Lab Materials</span><span class="font-bold">₹ 700</span></div>
            <div class="flex justify-between border-t border-slate-200 pt-2 font-bold text-sm"><span>Total Term Payment</span><span class="text-slate-800">₹ 3,200</span></div>
          </div>
        </div>
      `;
    }
  }

  // ---------------- TEACHER ONLY VIEWS ----------------
  else if (role === 'teacher') {
    if (window.currentTab === 'overview') {
      mainContentHtml = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white p-5 rounded-3xl border-2 border-sky-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">REGISTERED STUDENTS</span><div class="font-fredoka text-3xl font-bold text-slate-800 mt-1">28 Students</div><p class="text-[11px] text-sky-600 font-bold mt-1">Grade 1 Montessori</p></div>
            <div class="bg-white p-5 rounded-3xl border-2 border-sky-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">LESSON PLAN FILES</span><div class="font-fredoka text-3xl font-bold text-slate-800 mt-1">12 Uploaded</div><p class="text-[11px] text-emerald-600 font-bold mt-1">Updated Today</p></div>
            <div class="bg-white p-5 rounded-3xl border-2 border-sky-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">TODAY'S ATTENDANCE</span><div class="font-fredoka text-3xl font-bold text-emerald-600 mt-1">96% Present</div><p class="text-[11px] text-slate-500 font-bold mt-1">Salem Room 102</p></div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'attendance') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-sky-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">✅ Classroom Roll Call (Grade 1 Alpha)</h3>
          <div class="space-y-2 font-quicksand">
            ${[
              { id: 's1', name: 'Aarav Kumar' },
              { id: 's2', name: 'Divya R.' },
              { id: 's3', name: 'Kavya S.' },
              { id: 's4', name: 'Rahul V.' },
              { id: 's5', name: 'Sneha M.' },
              { id: 's6', name: 'Vikram K.' }
            ].map(st => `
              <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span class="font-fredoka font-bold text-slate-800 text-sm">${st.name}</span>
                <button onclick="window.toggleAttendance('${st.id}')" class="px-4 py-1.5 rounded-full font-fredoka font-bold text-xs ${window.attendanceState[st.id] ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'} cursor-pointer">
                  ${window.attendanceState[st.id] ? 'PRESENT' : 'ABSENT'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-sky-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">📝 Educator Lesson Management</h3>
          <p class="text-xs text-slate-600">Upload Montessori STEM activity sheets and weekly reading guides for Stackly Salem students.</p>
          <button onclick="if(window.sounds)window.sounds.playChime(); window.showToast('📁 New Worksheet Uploaded to Salem LMS');" class="bg-sky-600 hover:bg-sky-700 text-white font-fredoka font-bold text-xs px-5 py-2.5 rounded-full shadow-md cursor-pointer">+ UPLOAD NEW LESSON PDF</button>
        </div>
      `;
    }
  }

  // ---------------- ADMIN ONLY VIEWS ----------------
  else if (role === 'admin') {
    if (window.currentTab === 'overview') {
      mainContentHtml = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="bg-white p-5 rounded-3xl border-2 border-purple-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">TOTAL ENROLLED</span><div class="font-fredoka text-3xl font-bold text-slate-800 mt-1">342</div><p class="text-[11px] text-purple-600 font-bold mt-1">Salem Campus</p></div>
            <div class="bg-white p-5 rounded-3xl border-2 border-purple-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">FACULTY STAFF</span><div class="font-fredoka text-3xl font-bold text-slate-800 mt-1">24 Mentors</div><p class="text-[11px] text-emerald-600 font-bold mt-1">Full-Time Faculty</p></div>
            <div class="bg-white p-5 rounded-3xl border-2 border-purple-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">TERM REVENUE</span><div class="font-fredoka text-2xl font-bold text-emerald-600 mt-1">₹ 12,85,000</div><p class="text-[11px] text-slate-500 font-bold mt-1">Audited 2026</p></div>
            <div class="bg-white p-5 rounded-3xl border-2 border-purple-100 shadow-md"><span class="text-xs font-bold text-slate-400 font-fredoka uppercase">NEW ADMISSIONS</span><div class="font-fredoka text-3xl font-bold text-orange-600 mt-1">14 Pending</div><p class="text-[11px] text-orange-600 font-bold mt-1">Requires Review</p></div>
          </div>
        </div>
      `;
    } else if (window.currentTab === 'announcements') {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-purple-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">📢 Broadcast Campus Notice</h3>
          <form onsubmit="event.preventDefault(); window.showToast('📢 Notice broadcasted to all parents!'); this.reset();" class="space-y-3">
            <textarea rows="3" required placeholder="Type Salem Academy news or notice..." class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            <button type="submit" class="bg-purple-700 hover:bg-purple-800 text-white font-fredoka font-bold text-xs px-6 py-2.5 rounded-full cursor-pointer shadow-md">BROADCAST ANNOUNCEMENT 📢</button>
          </form>
        </div>
      `;
    } else {
      mainContentHtml = `
        <div class="bg-white p-6 rounded-3xl border-2 border-purple-100 shadow-md space-y-4">
          <h3 class="font-fredoka text-xl font-bold text-slate-800">👥 Stackly Salem Roster &amp; Faculty Control</h3>
          <p class="text-xs text-slate-600">Review pending admissions, assign Montessori mentors, and audit term fee ledgers.</p>
          <button onclick="if(window.sounds)window.sounds.playChime(); window.showToast('📊 Executive Salem Report Exported (CSV)');" class="bg-purple-700 hover:bg-purple-800 text-white font-fredoka font-bold text-xs px-6 py-2.5 rounded-full cursor-pointer shadow-md">EXPORT EXECUTIVE AUDIT REPORT</button>
        </div>
      `;
    }
  }

  // Render Dashboard HTML with Fixed Mobile Header (Left Hamburger, Right Logo/Brand)
  container.innerHTML = `
    <div class="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-200 flex flex-col md:flex-row min-h-[75vh] relative">
      
      <!-- MOBILE FIXED TOP HEADER (Visible only on mobile < md screens) -->
      <div class="md:hidden bg-slate-900 text-white px-5 py-3.5 border-b border-slate-800 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <!-- Left Side: Hamburger Menu Toggle -->
        <button onclick="window.toggleMobileDashSidebar()" class="flex items-center gap-2 bg-slate-800 hover:bg-orange-500 text-white font-fredoka font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-700 transition-colors cursor-pointer">
          <i data-lucide="menu" class="w-5 h-5 text-orange-400"></i>
          <span>MENU</span>
        </button>

        <!-- Right Side: Logo & Brand Name -->
        <a href="index.html" class="flex items-center gap-2">
          ${window.renderStacklyLogo('light', 32, true)}
        </a>
      </div>

      <!-- LEFT SIDEBAR NAVIGATION (Toggleable on mobile, Permanent on desktop) -->
      <aside id="dashboard-sidebar-aside" class="hidden md:flex w-full md:w-72 bg-slate-900 text-slate-200 p-6 flex-col justify-between shrink-0 border-b md:border-b-0 md:border-r border-slate-800 transition-all">
        <div class="space-y-6">
          <!-- Logo & Portal Tag (Desktop view) -->
          <div class="hidden md:block space-y-3">
            <a href="index.html" class="footer-logo-container inline-block"></a>
            <div class="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/40 text-[10px] font-fredoka font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              ${user.roleLabel}
            </div>
          </div>

          <!-- User Info Pill -->
          <div class="p-3.5 bg-slate-800/90 rounded-2xl border border-slate-700 flex items-center gap-3">
            <img src="${user.avatar}" alt="${window.getDisplayName()}" class="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
            <div class="overflow-hidden">
              <h4 class="font-fredoka font-bold text-xs text-white truncate">${window.getDisplayName()}</h4>
              <p class="text-[10px] text-slate-400 truncate">${localStorage.getItem('stackly_user_email') || user.email}</p>
            </div>
          </div>

          <!-- Sidebar Nav Links -->
          <div class="space-y-1.5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-fredoka block mb-2 px-2">PORTAL MENU</span>
            ${sidebarItems.map(item => `
              <button onclick="window.switchDashTab('${item.id}')" class="w-full text-left font-fredoka font-bold text-xs px-4 py-3 rounded-2xl transition-all flex items-center gap-3 cursor-pointer ${window.currentTab === item.id ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}">
                <span class="text-base">${item.icon}</span>
                <span>${item.label}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Sidebar Bottom Action -->
        <div class="pt-6 border-t border-slate-800 mt-6 md:mt-0">
          <button onclick="window.logoutUser()" class="w-full bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white font-fredoka font-bold text-xs py-3 px-4 rounded-2xl border border-rose-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>LOGOUT PORTAL</span>
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
      </aside>

      <!-- RIGHT MAIN CONTENT DISPLAY -->
      <main class="flex-1 p-6 sm:p-8 bg-slate-50 overflow-y-auto">
        ${mainContentHtml}
      </main>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};

document.addEventListener('DOMContentLoaded', () => {
  window.renderRoleDashboard();
});
