/* ============================================================
   GATE DA 2027 — Main Application JS
   ============================================================ */

'use strict';

// ============================================================
// DATA: Schedule, Subjects, Resources
// ============================================================

const WEEKDAY_SCHEDULE = [
  { time: '05:00–05:30', emoji: '🌅', activity: 'Wake Up & Exercise', type: 'break', color: '#f59e0b' },
  { time: '05:30–07:00', emoji: '📚', activity: 'GATE DA Theory', subject: 'See daily subject', type: 'gate', color: '#7c3aed' },
  { time: '07:00–08:00', emoji: '🍳', activity: 'Breakfast & Freshen Up', type: 'break', color: '#10b981' },
  { time: '08:00–16:30', emoji: '🏫', activity: 'College / Classes', type: 'college', color: '#06b6d4' },
  { time: '16:30–17:45', emoji: '🎒', activity: 'Semester Prep & Assignments', type: 'semester', color: '#8b5cf6' },
  { time: '17:45–18:00', emoji: '☕', activity: 'Short Break', type: 'break', color: '#6b7280' },
  { time: '18:00–19:15', emoji: '💻', activity: 'Skill Dev (Python, SQL, ML, DSA, Projects)', type: 'skill', color: '#06b6d4' },
  { time: '19:15–20:00', emoji: '🍽', activity: 'Dinner', type: 'break', color: '#f59e0b' },
  { time: '20:00–21:30', emoji: '🤖', activity: 'Skill Development & Projects', type: 'skill', color: '#06b6d4' },
  { time: '21:30–22:30', emoji: '📝', activity: 'GATE MCQs & Revision', type: 'gate', color: '#7c3aed' },
  { time: '22:30', emoji: '🌙', activity: 'Sleep', type: 'break', color: '#374151' },
];

const SUNDAY_SCHEDULE = [
  { time: '06:00–08:00', emoji: '📐', activity: 'GATE Subject 1 (Deep Dive)', type: 'gate', color: '#7c3aed' },
  { time: '08:00–09:00', emoji: '🍳', activity: 'Breakfast', type: 'break', color: '#f59e0b' },
  { time: '09:00–11:00', emoji: '📊', activity: 'GATE Subject 2 (Deep Dive)', type: 'gate', color: '#7c3aed' },
  { time: '11:00–13:00', emoji: '💻', activity: 'Skill Development', type: 'skill', color: '#06b6d4' },
  { time: '13:00–14:00', emoji: '🍽', activity: 'Lunch & Rest', type: 'break', color: '#10b981' },
  { time: '14:00–16:00', emoji: '📄', activity: 'Previous Year Questions (PYQs)', type: 'gate', color: '#a855f7' },
  { time: '16:00–18:00', emoji: '🚀', activity: 'Projects', type: 'skill', color: '#06b6d4' },
  { time: '18:00–20:00', emoji: '🎯', activity: 'Mock Test', type: 'mock', color: '#ef4444' },
  { time: '20:00–21:30', emoji: '🔍', activity: 'Analysis & Revision', type: 'gate', color: '#7c3aed' },
];

const WEEKLY_SUBJECTS = [
  { day: 'Monday', emoji: '∑', icon: '📊', subject: 'Engineering Mathematics', color: '#7c3aed', grad: 'linear-gradient(135deg, #7c3aed, #a855f7)', topics: ['Linear Algebra', 'Calculus', 'Differential Equations', 'Graph Theory', 'Discrete Mathematics'], links: [
    { label: '▶ NPTEL Linear Algebra', url: 'https://nptel.ac.in/courses/111104025', type: '' },
    { label: '📝 GFG Notes', url: 'https://www.geeksforgeeks.org/engineering-mathematics-tutorials/', type: 'notes' },
  ]},
  { day: 'Tuesday', emoji: '🎲', icon: '📈', subject: 'Probability & Statistics', color: '#06b6d4', grad: 'linear-gradient(135deg, #06b6d4, #3b82f6)', topics: ['Random Variables', 'Distributions', 'Bayes Theorem', 'Hypothesis Testing', 'Regression'], links: [
    { label: '▶ StatQuest YT', url: 'https://www.youtube.com/c/joshstarmer', type: 'yt' },
    { label: '📝 MIT OpenCourseware', url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/', type: 'notes' },
  ]},
  { day: 'Wednesday', emoji: '⚙️', icon: '💻', subject: 'Programming & DSA', color: '#10b981', grad: 'linear-gradient(135deg, #10b981, #06b6d4)', topics: ['Sorting & Searching', 'Trees & Graphs', 'Dynamic Programming', 'Python Programming', 'Recursion'], links: [
    { label: '▶ Abdul Bari DSA', url: 'https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw', type: 'yt' },
    { label: '🎯 LeetCode Practice', url: 'https://leetcode.com/', type: 'practice' },
    { label: '📝 GFG DSA', url: 'https://www.geeksforgeeks.org/data-structures/', type: 'notes' },
  ]},
  { day: 'Thursday', emoji: '🗄️', icon: '🗄', subject: 'Database Systems', color: '#f59e0b', grad: 'linear-gradient(135deg, #f59e0b, #ef4444)', topics: ['ER Diagrams', 'SQL & Relational Algebra', 'Normalization', 'Transactions', 'Indexing'], links: [
    { label: '▶ Gate Smashers DB', url: 'https://www.youtube.com/c/GateSmashers', type: 'yt' },
    { label: '🎯 SQL Practice', url: 'https://www.hackerrank.com/domains/sql', type: 'practice' },
    { label: '📝 Tutorialspoint', url: 'https://www.tutorialspoint.com/dbms/index.htm', type: 'notes' },
  ]},
  { day: 'Friday', emoji: '🧠', icon: '🤖', subject: 'Machine Learning', color: '#a855f7', grad: 'linear-gradient(135deg, #a855f7, #7c3aed)', topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Ensemble Methods', 'Evaluation Metrics'], links: [
    { label: '▶ Andrew Ng ML', url: 'https://www.coursera.org/specializations/machine-learning-introduction', type: 'yt' },
    { label: '📝 Scikit-learn Docs', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'notes' },
    { label: '🎯 Kaggle', url: 'https://www.kaggle.com/learn', type: 'practice' },
  ]},
  { day: 'Saturday', emoji: '🤖', icon: '🧩', subject: 'AI + Aptitude', color: '#ef4444', grad: 'linear-gradient(135deg, #ef4444, #f59e0b)', topics: ['Search Algorithms', 'Knowledge Representation', 'Planning', 'Aptitude: Number System', 'Logical Reasoning'], links: [
    { label: '▶ AIMA Resources', url: 'https://aima.cs.berkeley.edu/', type: 'yt' },
    { label: '🎯 IndiaBix Aptitude', url: 'https://www.indiabix.com/', type: 'practice' },
    { label: '📝 GFG AI', url: 'https://www.geeksforgeeks.org/artificial-intelligence/', type: 'notes' },
  ]},
  { day: 'Sunday', emoji: '🎯', icon: '📋', subject: 'Mock Test + Revision', color: '#8b5cf6', grad: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', topics: ['Full Mock Test', 'Previous Year Questions', 'Weak Area Analysis', 'Speed Improvement', 'Strategy Planning'], links: [
    { label: '🎯 GATE Overflow', url: 'https://gateoverflow.in/', type: 'practice' },
    { label: '🎯 Testbook GATE', url: 'https://testbook.com/gate-da', type: 'practice' },
    { label: '▶ GATE Prep YT', url: 'https://www.youtube.com/@GATEWallah', type: 'yt' },
  ]},
];

const TIMELINE = [
  { period: 'July – October 2026', focus: 'GATE DA Theory + Skill Development + College', icon: '📚', color: '#7c3aed' },
  { period: 'October 2026', focus: 'Increase semester preparation as exams approach', icon: '📖', color: '#06b6d4' },
  { period: 'November 2026', focus: 'Semester Exams + 30-60 min GATE revision daily', icon: '🎓', color: '#f59e0b' },
  { period: 'December 2026', focus: 'Complete GATE syllabus + PYQs intensively', icon: '⚡', color: '#10b981' },
  { period: 'January 2027', focus: 'Full Revision + Mock Tests + Weak areas', icon: '🔥', color: '#ef4444' },
  { period: 'February 2027', focus: 'Final Revision + Strategy + GATE DA Exam! 🏆', icon: '🏆', color: '#a855f7' },
];

const BOOKS = [
  { emoji: '🐍', title: 'Python Crash Course', author: 'Eric Matthes', subject: 'Programming' },
  { emoji: '🏗', title: 'DS & Algorithms Made Easy', author: 'Narasimha Karumanchi', subject: 'DSA' },
  { emoji: '🗄', title: 'Database System Concepts', author: 'Silberschatz, Korth', subject: 'DBMS' },
  { emoji: '📐', title: 'Introduction to Linear Algebra', author: 'Gilbert Strang', subject: 'Math' },
  { emoji: '🎲', title: 'Introduction to Probability', author: 'Sheldon Ross', subject: 'Probability' },
  { emoji: '∫', title: "Thomas' Calculus", author: 'Thomas & Finney', subject: 'Calculus' },
  { emoji: '🤖', title: 'Hands-On Machine Learning', author: 'Aurélien Géron', subject: 'ML' },
  { emoji: '🧠', title: 'PRML — Pattern Recognition', author: 'Christopher Bishop', subject: 'ML Theory' },
  { emoji: '🌐', title: 'Artificial Intelligence: A Modern Approach', author: 'Russell & Norvig', subject: 'AI' },
  { emoji: '🔢', title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', subject: 'Aptitude' },
  { emoji: '📋', title: 'GK Publications GATE DA Guide', author: 'GK Publications', subject: 'GATE Guide' },
  { emoji: '📄', title: 'MADE EASY Previous Year Papers', author: 'MADE EASY', subject: 'PYQs' },
];

const YOUTUBE_CHANNELS = [
  { icon: '🎯', name: 'GATE Wallah', desc: 'Best GATE DA 2027 lectures and strategy', url: 'https://www.youtube.com/@GATEWallah' },
  { icon: '📊', name: 'StatQuest w/ Josh Starmer', desc: 'ML and Statistics explained visually', url: 'https://www.youtube.com/c/joshstarmer' },
  { icon: '🤖', name: '3Blue1Brown', desc: 'Stunning visual math explanations', url: 'https://www.youtube.com/c/3blue1brown' },
  { icon: '💻', name: 'Gate Smashers', desc: 'CS fundamentals for GATE', url: 'https://www.youtube.com/c/GateSmashers' },
  { icon: '🧠', name: 'Sentdex', desc: 'Python, ML and Data Science tutorials', url: 'https://www.youtube.com/c/sentdex' },
  { icon: '📈', name: 'NPTEL Online', desc: 'IIT professor lectures on all subjects', url: 'https://www.youtube.com/c/iit' },
];

const PLATFORMS = [
  { icon: '🔗', name: 'GATE Overflow', desc: 'PYQs with expert solutions — best GATE resource', url: 'https://gateoverflow.in/' },
  { icon: '🎯', name: 'Testbook GATE DA', desc: 'Mock tests, live classes, analytics', url: 'https://testbook.com/gate-da' },
  { icon: '💻', name: 'LeetCode', desc: 'DSA practice for Programming section', url: 'https://leetcode.com/' },
  { icon: '🏆', name: 'Kaggle', desc: 'ML competitions and datasets', url: 'https://www.kaggle.com/' },
  { icon: '📚', name: 'NPTEL', desc: 'Free IIT courses with certificates', url: 'https://nptel.ac.in/' },
  { icon: '📝', name: 'GeeksForGeeks', desc: 'Theory notes and practice problems', url: 'https://www.geeksforgeeks.org/gate-cs-notes-gq/' },
];

const PYQS = [
  { icon: '📋', name: 'GATE Overflow PYQs', desc: 'All GATE CS/DA year-wise with solutions', url: 'https://gateoverflow.in/exam/3/gate-da-2024' },
  { icon: '📄', name: 'GATE Official Website', desc: 'Official GATE 2027 information & brochure', url: 'https://gate2025.iisc.ac.in/' },
  { icon: '🎯', name: 'Testbook GATE PYQs', desc: 'PYQs with video solutions and analysis', url: 'https://testbook.com/gate-da/previous-year-papers' },
  { icon: '📊', name: 'Made Easy PYQ Book', desc: 'Comprehensive solved papers (buy online)', url: 'https://www.amazon.in/s?k=GATE+DA+Previous+Year+Made+Easy' },
];

// AI Knowledge Base
const AI_RECOMMENDATIONS = [
  "🎯 Today focus on **Bayes' Theorem** — highest weight topic in GATE DA 2024/25. Solve 10 conditional probability PYQs on GateOverflow.",
  "💡 Your **Engineering Math** session today: Start with Eigenvalues/Eigenvectors. They appear in 2-3 questions every year. Use Gilbert Strang's visual approach.",
  "🚀 Best strategy for **ML**: Study theory in the morning, implement in Python (scikit-learn) during skill dev time. Understanding > memorization.",
  "📊 **SQL tip**: Practice window functions (ROW_NUMBER, RANK, LAG/LEAD) — they're hot in GATE DA. Use HackerRank's Advanced SQL track.",
  "🔥 You have **" + Math.ceil((new Date('2027-02-01') - new Date()) / (1000 * 60 * 60 * 24)) + " days** to GATE. Focus: 1 subject deep dive + 5 PYQs + 1 concept explanation daily.",
  "🧠 **AI Search Algorithms** for today: A*, BFS, DFS complexity analysis. Russell & Norvig Chapter 3 is the gold standard.",
  "📈 **Statistics**: Normal Distribution properties are tested every year. Know z-scores, CLT, and confidence intervals thoroughly.",
  "💻 **DSA quick win**: Master Binary Search variations — rotated arrays, peak element, search in 2D matrix. LeetCode medium difficulty.",
];

const TOPICS_OF_DAY = [
  { topic: 'Eigenvalues & Eigenvectors', subject: 'Engineering Mathematics', tip: 'Know the characteristic equation: det(A - λI) = 0. PCA in ML uses this heavily.' },
  { topic: "Bayes' Theorem & Naive Bayes", subject: 'Probability & Statistics', tip: 'P(A|B) = P(B|A)·P(A)/P(B). A must-know for GATE DA.' },
  { topic: 'Dynamic Programming', subject: 'Programming & DSA', tip: 'Master LCS, Knapsack, and Edit Distance. Always define the recurrence relation first.' },
  { topic: 'Normalization (1NF to BCNF)', subject: 'Database Systems', tip: 'Functional dependencies → find candidate keys → check normal forms step by step.' },
  { topic: 'Gradient Descent & Backpropagation', subject: 'Machine Learning', tip: 'Understand the chain rule. Weight update: w = w - α·∂L/∂w.' },
  { topic: 'A* Search Algorithm', subject: 'Artificial Intelligence', tip: 'f(n) = g(n) + h(n). Admissible heuristic → optimal solution guaranteed.' },
  { topic: 'Permutation & Combination', subject: 'Aptitude', tip: 'P(n,r) = n!/(n-r)!  C(n,r) = n!/(r!(n-r)!). Base for probability questions.' },
];

const KEY_FORMULAS = [
  'Sigmoid: σ(x) = 1/(1+e⁻ˣ) | Used in logistic regression & neural nets',
  'Bayes: P(A|B) = P(B|A)·P(A) / P(B)',
  'Entropy: H(X) = -Σ p(x)·log₂p(x)',
  'Gradient Descent: θ = θ - α·∇J(θ)',
  'Variance: σ² = E[(X-μ)²] = E[X²] - (E[X])²',
  'Linear Regression: y = Xβ → β = (XᵀX)⁻¹Xᵀy',
  'SQL Join: SELECT * FROM A INNER JOIN B ON A.id = B.id',
  'Binary Search: mid = low + (high-low)/2',
  'KMeans: assign to nearest centroid, update centroid = mean of cluster',
  'F1 Score: 2·(Precision·Recall)/(Precision+Recall)',
];

const EXAM_TIPS = [
  '⏱ Allocate: 1 mark questions ≤ 1 min, 2 mark questions ≤ 2.5 min. Skip and return if stuck.',
  '📐 No negative marks for MSQ questions — attempt all if unsure!',
  '🎯 GATE DA 2027 has 65 questions for 100 marks in 3 hours. That is ~2.75 min/question.',
  '🔢 Virtual Calculator is provided. Practice solving without a physical calculator.',
  '📊 ML + Stats section typically carries 25-30% weightage. Highest ROI to study.',
  '💡 Read all MCQ options before answering — GATE often includes close distractors.',
  '🔥 Engineering Maths is the highest weighted single section. Never skip it.',
  '📝 Attempt easy 1-mark questions first in each section to build momentum.',
];

const GATE_PYQ_QUESTIONS = [
  { q: "Which activation function can cause the 'vanishing gradient' problem?", a: "Sigmoid (σ) — values saturate near 0 or 1, gradients ≈ 0.", subject: "ML" },
  { q: "What is the time complexity of finding the minimum spanning tree using Kruskal's algorithm?", a: "O(E log E) or O(E log V) — sorting edges dominates.", subject: "DSA" },
  { q: "In SQL, which JOIN returns rows only when there is a match in BOTH tables?", a: "INNER JOIN — returns intersection of both tables.", subject: "DBMS" },
  { q: "If P(A) = 0.6, P(B) = 0.5, and P(A∩B) = 0.3, find P(A|B).", a: "P(A|B) = P(A∩B)/P(B) = 0.3/0.5 = 0.6", subject: "Stats" },
  { q: "What is the eigenvalue of matrix [[3,1],[0,3]]?", a: "λ = 3 (repeated). det(A-λI) = (3-λ)² = 0 → λ=3.", subject: "Math" },
];

// ============================================================
// PARTICLE SYSTEM
// ============================================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? '#4f46e5' : '#0ea5e9';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function initParticles() {
  particles = Array.from({ length: 120 }, () => new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(79, 70, 229, ${(1 - dist / 100) * 0.12})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================
let notificationsEnabled = false;

function showNotification(title, body, type = 'info', duration = 5000) {
  const container = document.getElementById('notificationContainer');
  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.innerHTML = `<div class="notif-title">${title}</div><div class="notif-body">${body}</div>`;
  notif.onclick = () => removeNotification(notif);
  container.appendChild(notif);
  setTimeout(() => removeNotification(notif), duration);
}

function removeNotification(notif) {
  notif.classList.add('removing');
  setTimeout(() => notif.remove(), 400);
}

function requestNotificationPermission() {
  const btn = document.getElementById('notifyBtn');
  if ('Notification' in window) {
    Notification.requestPermission().then(perm => {
      notificationsEnabled = perm === 'granted';
      btn.classList.toggle('active', notificationsEnabled);
      showNotification(
        notificationsEnabled ? '🔔 Notifications ON' : '🔕 Notifications OFF',
        notificationsEnabled ? 'You will receive session reminders!' : 'Enable in browser to get reminders.',
        notificationsEnabled ? 'success' : 'warning'
      );
    });
  } else {
    showNotification('❌ Not Supported', 'Your browser does not support notifications.', 'warning');
  }
}

function systemNotify(title, body) {
  if (notificationsEnabled && Notification.permission === 'granted') {
    new Notification(title, { body, icon: 'favicon.ico' });
  }
  showNotification(title, body, 'info');
}

// ============================================================
// CLOCK & COUNTDOWN
// ============================================================
const GATE_DATE = new Date('2027-02-01T09:00:00');

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('currentTime').textContent = `${h}:${m}:${s}`;

  // Days countdown
  const diff = GATE_DATE - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const el = document.getElementById('daysCount');
  const wel = document.getElementById('weeksCount');
  if (el) el.textContent = days > 0 ? days : 'EXAM DAY!';
  if (wel) wel.textContent = weeks > 0 ? weeks : '0';

  // Update ring
  updateProgressRing(now);
  updateTimerCards(now);
}

function updateProgressRing(now) {
  const h = now.getHours();
  const m = now.getMinutes();
  const totalMins = h * 60 + m;
  // Day progress: 0 = midnight, 1440 = next midnight
  const pct = totalMins / 1440;
  const circumference = 565;
  const offset = circumference * (1 - pct);
  const ring = document.getElementById('progressRing');
  if (ring) ring.setAttribute('stroke-dashoffset', offset);

  const ringTime = document.getElementById('ringTime');
  const ringLabel = document.getElementById('ringLabel');
  if (ringTime) ringTime.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;

  // Find current session
  const allSched = isWeekend() ? SUNDAY_SCHEDULE : WEEKDAY_SCHEDULE;
  const curSession = getCurrentSession(allSched, now);
  if (curSession && ringLabel) ringLabel.textContent = curSession.activity.split(' ').slice(0,3).join(' ');
}

function isWeekend() {
  return new Date().getDay() === 0;
}

function parseTime(str) {
  // "05:30" → minutes since midnight
  const [h, m] = str.split(':').map(Number);
  return h * 60 + m;
}

function getCurrentSession(schedule, now) {
  const currentMins = now.getHours() * 60 + now.getMinutes();
  for (let i = 0; i < schedule.length - 1; i++) {
    const start = parseTime(schedule[i].time.split('–')[0] || schedule[i].time.split('-')[0]);
    const end = parseTime(schedule[i].time.split('–')[1] || schedule[i+1]?.time?.split('–')[0] || '23:59');
    if (currentMins >= start && currentMins < end) return schedule[i];
  }
  return null;
}

// ============================================================
// TIMER CARDS
// ============================================================
function generateTimerCards() {
  const grid = document.getElementById('timerGrid');
  if (!grid) return;
  const schedule = isWeekend() ? SUNDAY_SCHEDULE : WEEKDAY_SCHEDULE;
  grid.innerHTML = '';

  schedule.forEach((slot, idx) => {
    const card = document.createElement('div');
    card.className = 'timer-card';
    card.style.setProperty('--card-accent', slot.color);

    const startStr = slot.time.split('–')[0] || slot.time.split('-')[0];
    const endStr = slot.time.split('–')[1] || slot.time.split('-')[1] || '';

    card.innerHTML = `
      <span class="card-emoji">${slot.emoji}</span>
      <div class="card-time-range">${slot.time}</div>
      <div class="card-title">${slot.activity}</div>
      ${slot.subject ? `<div class="card-subject">${slot.subject}</div>` : ''}
      <div class="card-status-row">
        <span class="card-status-badge status-upcoming" id="status-${idx}">—</span>
        <span class="card-countdown" id="countdown-${idx}"></span>
      </div>
      <div class="card-progress-bar"><div class="card-progress-fill" id="prog-${idx}" style="width:0%"></div></div>
    `;

    card.setAttribute('data-idx', idx);
    card.setAttribute('data-start', startStr);
    card.setAttribute('data-end', endStr);
    grid.appendChild(card);
  });
}

function updateTimerCards(now) {
  const cards = document.querySelectorAll('.timer-card');
  const schedule = isWeekend() ? SUNDAY_SCHEDULE : WEEKDAY_SCHEDULE;
  const currentMins = now.getHours() * 60 + now.getMinutes();

  cards.forEach((card, idx) => {
    if (idx >= schedule.length) return;
    const slot = schedule[idx];
    const startStr = slot.time.split('–')[0] || slot.time.split('-')[0];
    const endStr = slot.time.split('–')[1] || slot.time.split('-')[1] || '';

    const startMins = parseTime(startStr);
    const endMins = endStr ? parseTime(endStr) : startMins + 30;

    const statusEl = document.getElementById(`status-${idx}`);
    const countdownEl = document.getElementById(`countdown-${idx}`);
    const progEl = document.getElementById(`prog-${idx}`);
    if (!statusEl) return;

    // Clear all status classes
    statusEl.className = 'card-status-badge';
    card.classList.remove('active', 'completed');

    if (currentMins < startMins) {
      // Upcoming
      statusEl.classList.add('status-upcoming');
      statusEl.textContent = 'Upcoming';
      const minLeft = startMins - currentMins;
      if (countdownEl) countdownEl.textContent = `in ${minLeft}m`;
      if (progEl) progEl.style.width = '0%';
    } else if (currentMins >= startMins && currentMins < endMins) {
      // Active
      statusEl.classList.add('status-active');
      statusEl.textContent = slot.type === 'break' ? '☕ Break' : '🔴 LIVE';
      card.classList.add('active');
      const elapsed = currentMins - startMins;
      const duration = endMins - startMins;
      const pct = Math.min(100, (elapsed / duration) * 100);
      if (progEl) progEl.style.width = `${pct}%`;
      const remaining = endMins - currentMins;
      if (countdownEl) countdownEl.textContent = `${remaining}m left`;
    } else {
      // Done
      statusEl.classList.add('status-done');
      statusEl.textContent = '✓ Done';
      card.classList.add('completed');
      if (progEl) progEl.style.width = '100%';
      if (countdownEl) countdownEl.textContent = '';
    }
  });
}

// ============================================================
// TASK LIST
// ============================================================
let tasks = [];

function generateTasks() {
  const now = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[now.getDay()];
  const todaySubject = WEEKLY_SUBJECTS.find(s => s.day === todayName) || WEEKLY_SUBJECTS[0];

  tasks = [
    { id: 1, text: `📚 Study ${todaySubject.subject} — theory chapter`, time: '05:30–07:00', done: false },
    { id: 2, text: '🏫 Attend all college classes', time: '08:00–16:30', done: false },
    { id: 3, text: '📝 Complete semester assignments', time: '16:30–17:45', done: false },
    { id: 4, text: '💻 Practice Python / SQL / ML code (Skill Dev)', time: '18:00–19:15', done: false },
    { id: 5, text: `🎯 Solve 10 GATE MCQs on ${todaySubject.subject}`, time: '21:30–22:30', done: false },
    { id: 6, text: '📖 Revise notes from morning session', time: '21:30–22:30', done: false },
    { id: 7, text: `🔗 Watch 1 topic video: ${todaySubject.topics[0]}`, time: 'Anytime', done: false },
  ];

  // Load saved state
  const saved = JSON.parse(localStorage.getItem('gate2027_tasks_' + now.toDateString()) || '{}');
  tasks.forEach(t => { if (saved[t.id]) t.done = true; });

  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  if (!list) return;
  list.innerHTML = tasks.map(t => `
    <div class="task-item ${t.done ? 'completed' : ''}" onclick="toggleTask(${t.id})" id="task-${t.id}">
      <div class="task-checkbox"></div>
      <span class="task-text">${t.text}</span>
      <span class="task-time">${t.time}</span>
    </div>
  `).join('');
  updateTaskProgress();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  task.done = !task.done;

  const el = document.getElementById(`task-${id}`);
  if (el) el.classList.toggle('completed', task.done);

  // Save
  const saved = JSON.parse(localStorage.getItem('gate2027_tasks_' + new Date().toDateString()) || '{}');
  saved[id] = task.done;
  localStorage.setItem('gate2027_tasks_' + new Date().toDateString(), JSON.stringify(saved));

  if (task.done) showNotification('✅ Task Complete!', task.text.replace(/^../, ''), 'success', 3000);
  updateTaskProgress();
}

function updateTaskProgress() {
  const done = tasks.filter(t => t.done).length;
  const total = tasks.length;
  const pct = total ? (done / total) * 100 : 0;

  const fill = document.getElementById('taskProgressFill');
  const text = document.getElementById('taskProgressText');
  if (fill) fill.style.width = `${pct}%`;
  if (text) text.textContent = `${done}/${total}`;
}

// ============================================================
// SCHEDULE SECTION
// ============================================================
let currentScheduleTab = 'weekday';

function showSchedule(tab) {
  currentScheduleTab = tab;
  document.querySelectorAll('.schedule-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`tab-${tab}`);
  if (activeTab) activeTab.classList.add('active');

  const content = document.getElementById('scheduleContent');
  if (!content) return;

  if (tab === 'weekday') {
    content.innerHTML = buildScheduleTable(WEEKDAY_SCHEDULE);
  } else if (tab === 'sunday') {
    content.innerHTML = buildScheduleTable(SUNDAY_SCHEDULE);
  } else if (tab === 'weekly') {
    content.innerHTML = buildWeeklyGrid();
  } else if (tab === 'timeline') {
    content.innerHTML = buildTimeline();
  }
}

function buildScheduleTable(schedule) {
  const now = new Date();
  const currentMins = now.getHours() * 60 + now.getMinutes();
  const rows = schedule.map((slot, i) => {
    const startStr = slot.time.split('–')[0] || slot.time.split('-')[0];
    const endStr = slot.time.split('–')[1] || slot.time.split('-')[1] || '';
    const startMins = parseTime(startStr);
    const endMins = endStr ? parseTime(endStr) : startMins + 30;
    const isActive = currentMins >= startMins && currentMins < endMins;

    const typeColors = {
      gate: '#7c3aed', skill: '#06b6d4', college: '#3b82f6',
      semester: '#8b5cf6', break: '#6b7280', mock: '#ef4444'
    };
    const color = typeColors[slot.type] || '#7c3aed';

    return `<tr class="schedule-row ${isActive ? 'active-slot' : ''}">
      <td>${slot.time}</td>
      <td>${slot.emoji}</td>
      <td><span class="activity-badge" style="color:${color}">${slot.activity}</span></td>
      <td><span class="card-status-badge" style="background:${color}22;color:${color}">${slot.type.toUpperCase()}</span></td>
    </tr>`;
  }).join('');

  return `<div style="overflow-x:auto">
    <table class="schedule-table">
      <thead><tr><th>Time</th><th></th><th>Activity</th><th>Type</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function buildWeeklyGrid() {
  const todayDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
  return `<div class="weekly-grid">
    ${WEEKLY_SUBJECTS.map(s => `
      <div class="day-card ${s.day === todayDay ? 'today-card' : ''}" style="--card-grad:${s.grad}">
        <div class="day-name">${s.day}${s.day === todayDay ? ' ← TODAY' : ''}</div>
        <div class="day-emoji">${s.icon}</div>
        <div class="day-subject">${s.subject}</div>
        <div class="day-badge">${s.topics[0]}</div>
      </div>
    `).join('')}
  </div>`;
}

function buildTimeline() {
  const now = new Date();
  return `<div class="timeline">
    ${TIMELINE.map((item, i) => {
      const periodStart = new Date(item.period.split('–')[0]?.trim() + ' 2026' || '2027');
      return `<div class="timeline-item">
        <div class="timeline-dot" style="background:${item.color};box-shadow:0 0 10px ${item.color}66"></div>
        <div class="timeline-card">
          <div class="timeline-period" style="color:${item.color}">${item.icon} ${item.period}</div>
          <div class="timeline-focus">${item.focus}</div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ============================================================
// SUBJECTS SECTION
// ============================================================
function buildSubjectsGrid() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;
  grid.innerHTML = WEEKLY_SUBJECTS.map(s => `
    <div class="subject-card" style="--subj-color:${s.grad};--subj-bg:${s.color}22">
      <div class="subj-header">
        <div class="subj-icon-wrap" style="background:${s.color}22">${s.icon}</div>
        <span class="subj-day">${s.day}</span>
      </div>
      <div class="subj-name">${s.subject}</div>
      <div class="subj-weight">Dedicated study day + daily revision</div>
      <ul class="subj-topics">
        ${s.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <div class="subj-links">
        ${s.links.map(l => `<a href="${l.url}" target="_blank" class="subj-link ${l.type}">${l.label}</a>`).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// RESOURCES SECTION
// ============================================================
let currentResourceTab = 'books';

function showResources(tab) {
  currentResourceTab = tab;
  document.querySelectorAll('.res-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`rtab-${tab}`);
  if (activeTab) activeTab.classList.add('active');

  const content = document.getElementById('resourcesContent');
  if (!content) return;

  if (tab === 'books') {
    content.innerHTML = `<div class="book-grid">
      ${BOOKS.map(b => `
        <div class="book-card">
          <div class="book-cover" style="background:${['#7c3aed','#06b6d4','#10b981','#f59e0b','#ef4444','#8b5cf6'][Math.floor(Math.random()*6)]}22">${b.emoji}</div>
          <div class="book-info">
            <div class="book-title">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <span class="book-subject">${b.subject}</span>
          </div>
        </div>
      `).join('')}
    </div>`;
  } else if (tab === 'youtube') {
    content.innerHTML = `<div class="yt-grid">
      ${YOUTUBE_CHANNELS.map(ch => `
        <div class="channel-card">
          <div class="channel-icon">${ch.icon}</div>
          <div class="channel-name">${ch.name}</div>
          <div class="channel-desc">${ch.desc}</div>
          <a href="${ch.url}" target="_blank" class="resource-btn">Watch Now →</a>
        </div>
      `).join('')}
    </div>`;
  } else if (tab === 'platforms') {
    content.innerHTML = `<div class="platform-grid">
      ${PLATFORMS.map(p => `
        <div class="platform-card">
          <div class="platform-icon">${p.icon}</div>
          <div class="platform-name">${p.name}</div>
          <div class="platform-desc">${p.desc}</div>
          <a href="${p.url}" target="_blank" class="resource-btn">Visit →</a>
        </div>
      `).join('')}
    </div>`;
  } else if (tab === 'pyqs') {
    content.innerHTML = `<div class="pyq-grid">
      ${PYQS.map(p => `
        <div class="pyq-card">
          <div class="platform-icon">${p.icon}</div>
          <div class="platform-name">${p.name}</div>
          <div class="platform-desc">${p.desc}</div>
          <a href="${p.url}" target="_blank" class="resource-btn">Access →</a>
        </div>
      `).join('')}
    </div>`;
  }
}

// ============================================================
// AI RECOMMENDATIONS
// ============================================================
let aiRecIdx = 0;

function refreshAIRecommendation() {
  aiRecIdx = (aiRecIdx + 1) % AI_RECOMMENDATIONS.length;
  const el = document.getElementById('aiDailyMessage');
  if (!el) return;
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = AI_RECOMMENDATIONS[aiRecIdx].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    el.style.opacity = 1;
    el.style.transition = 'opacity 0.5s';
  }, 300);
}

function loadAIInsights() {
  const now = new Date();
  const dayIdx = now.getDay() % TOPICS_OF_DAY.length;
  const topicData = TOPICS_OF_DAY[dayIdx];
  const formula = KEY_FORMULAS[dayIdx % KEY_FORMULAS.length];
  const tip = EXAM_TIPS[dayIdx % EXAM_TIPS.length];
  const pyqData = GATE_PYQ_QUESTIONS[dayIdx % GATE_PYQ_QUESTIONS.length];

  const topicEl = document.getElementById('topicOfDayContent');
  if (topicEl) topicEl.innerHTML = `<strong>${topicData.topic}</strong><br><small style="color:var(--text-muted)">${topicData.subject}</small><br><span style="font-size:0.8rem;margin-top:0.3rem;display:block">${topicData.tip}</span>`;

  const formulaEl = document.getElementById('formulaContent');
  if (formulaEl) formulaEl.innerHTML = `<code style="font-family:'JetBrains Mono',monospace;font-size:0.82rem;background:rgba(124,58,237,0.1);padding:0.5rem;border-radius:6px;display:block;margin-top:0.3rem">${formula}</code>`;

  const tipEl = document.getElementById('examTipContent');
  if (tipEl) tipEl.textContent = tip;

  const pyqEl = document.getElementById('pyqContent');
  if (pyqEl) pyqEl.innerHTML = `<strong>[${pyqData.subject}]</strong> ${pyqData.q}<br><small style="color:var(--success);margin-top:0.4rem;display:block">💡 ${pyqData.a}</small>`;
}

// ============================================================
// AI CHAT
// ============================================================
const CHAT_RESPONSES = {
  'what should i study today': () => {
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
    const subj = WEEKLY_SUBJECTS.find(s => s.day === day);
    return `Today is **${day}**, so your focus subject is **${subj?.subject || 'Mock Test + Revision'}**! 🎯\n\nHere's your plan:\n• Morning (5:30-7:00): Theory — ${subj?.topics[0]}\n• Skill Dev: Implement or practice ${subj?.topics[1]}\n• Night (9:30-10:30): Solve 10 PYQs on ${subj?.subject}\n\nLinks: Check the Subjects section for direct resources!`;
  },
  'weak topic': () => `Based on GATE DA statistics, students typically struggle with:\n\n1. 📊 **Probability & Statistics** — Bayes, distributions\n2. 🧮 **Linear Algebra** — eigenvalues, matrix decomposition\n3. 🤖 **Neural Networks** — backpropagation math\n4. 🗄 **SQL Window Functions** — advanced queries\n5. 🔍 **Dynamic Programming** — recognizing the pattern\n\nFocus on one weak area per week. Practice → Understand → Apply!`,
  'gate da exam pattern': () => `📋 **GATE DA 2027 Exam Pattern:**\n\n• Duration: **3 hours**\n• Total: **65 questions / 100 marks**\n• MCQ (1 mark): 25 questions\n• MCQ (2 marks): 30 questions\n• MSQ (2 marks): 10 questions\n• Negative marking: -1/3 for MCQ 1-mark, -2/3 for MCQ 2-mark\n• **No negative for MSQ!**\n\n🔥 High weightage: ML+Stats (25-30%), Engineering Math (15-20%), DSA+Programming (15%)`,
  'best practice strategy': () => `🏆 **GATE DA Winning Strategy:**\n\n1. **Morning theory** (5:30-7am): Read 1 concept, make brief notes\n2. **Evening skill dev**: Code up what you learned\n3. **Night MCQs**: 10 questions minimum, review errors\n4. **Sunday mock**: Full 3-hour mock test + deep analysis\n5. **PYQs daily**: At least 5 from previous years\n\n💡 Formula: Understand → Practice → Revise → Test → Analyze. Repeat!`,
  'default': (q) => `Great question about "${q}"! 🧠\n\nFor GATE DA 2027 preparation, I recommend:\n\n1. Check the **Subjects** section for curated resources\n2. Visit **GATE Overflow** (gateoverflow.in) for expert explanations\n3. Watch **GATE Wallah** or **3Blue1Brown** for visual understanding\n4. Practice on **Testbook** mock tests\n\nRemember: Consistency beats intensity. Even 30 focused minutes > 2 distracted hours! 🎯`
};

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  if (!input || !input.value.trim()) return;

  const msg = input.value.trim();
  input.value = '';
  appendChatMsg(msg, 'user');
  setTimeout(() => {
    showTyping();
    setTimeout(() => {
      removeTyping();
      const lowerMsg = msg.toLowerCase();
      let response = CHAT_RESPONSES.default(msg);
      for (const key of Object.keys(CHAT_RESPONSES)) {
        if (lowerMsg.includes(key)) {
          response = typeof CHAT_RESPONSES[key] === 'function' ? CHAT_RESPONSES[key]() : CHAT_RESPONSES[key];
          break;
        }
      }
      appendChatMsg(response, 'bot');
    }, 1200);
  }, 300);
}

function sendQuick(btn) {
  const input = document.getElementById('chatInput');
  if (input) { input.value = btn.textContent; sendChatMessage(); }
}

function appendChatMsg(text, role) {
  const messages = document.getElementById('chatMessages');
  if (!messages) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${role === 'bot' ? 'bot-msg' : 'user-msg'}`;
  const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  div.innerHTML = `<div class="msg-content">${formatted}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

let typingEl = null;
function showTyping() {
  const messages = document.getElementById('chatMessages');
  typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot-msg';
  typingEl.innerHTML = `<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  messages.appendChild(typingEl);
  messages.scrollTop = messages.scrollHeight;
}
function removeTyping() {
  if (typingEl) { typingEl.remove(); typingEl = null; }
}

// ============================================================
// PROGRESS TRACKING
// ============================================================
let studyProgress = {};
let studyStreak = 0;

function loadProgress() {
  studyProgress = JSON.parse(localStorage.getItem('gate2027_progress') || '{}');
  studyStreak = parseInt(localStorage.getItem('gate2027_streak') || '0');
  renderProgressList();
  updateOverviewStats();
}

function renderProgressList() {
  const list = document.getElementById('subjectProgressList');
  if (!list) return;
  const subjects = [
    { name: 'Engineering Mathematics', emoji: '📊', color: '#7c3aed' },
    { name: 'Probability & Statistics', emoji: '📈', color: '#06b6d4' },
    { name: 'Programming & DSA', emoji: '💻', color: '#10b981' },
    { name: 'Database Systems', emoji: '🗄', color: '#f59e0b' },
    { name: 'Machine Learning', emoji: '🤖', color: '#a855f7' },
    { name: 'Artificial Intelligence', emoji: '🧠', color: '#ef4444' },
    { name: 'Aptitude', emoji: '🔢', color: '#8b5cf6' },
  ];

  list.innerHTML = subjects.map(s => {
    const pct = studyProgress[s.name] || 0;
    return `<div class="subj-prog-item">
      <div class="subj-prog-emoji">${s.emoji}</div>
      <div class="subj-prog-name">${s.name}</div>
      <div class="subj-prog-bar-wrap">
        <div class="subj-prog-bar-fill" style="width:${pct}%;background:${s.color}"></div>
      </div>
      <div class="subj-prog-pct">${pct}%</div>
    </div>`;
  }).join('');
}

function updateOverviewStats() {
  const streakEl = document.getElementById('streakCount');
  const hoursEl = document.getElementById('totalHours');
  const questionsEl = document.getElementById('questionsAttempted');
  const mockEl = document.getElementById('mockScore');

  const totalHours = parseInt(localStorage.getItem('gate2027_totalHours') || '0');
  const totalQ = parseInt(localStorage.getItem('gate2027_totalQ') || '0');
  const lastMock = localStorage.getItem('gate2027_lastMock') || '--';

  if (streakEl) streakEl.textContent = studyStreak;
  if (hoursEl) hoursEl.textContent = `${totalHours}h`;
  if (questionsEl) questionsEl.textContent = totalQ;
  if (mockEl) mockEl.textContent = lastMock;
}

function logStudySession() {
  const subject = document.getElementById('logSubject')?.value;
  const mins = parseInt(document.getElementById('logMinutes')?.value || '0');
  const questions = parseInt(document.getElementById('logQuestions')?.value || '0');

  if (!subject) { showNotification('⚠️ Select a Subject', 'Please choose a subject first!', 'warning'); return; }
  if (mins < 1) { showNotification('⚠️ Enter Minutes', 'How many minutes did you study?', 'warning'); return; }

  // Update progress
  const current = studyProgress[subject] || 0;
  studyProgress[subject] = Math.min(100, current + Math.floor(mins / 30));
  localStorage.setItem('gate2027_progress', JSON.stringify(studyProgress));

  const totalHours = parseInt(localStorage.getItem('gate2027_totalHours') || '0') + Math.floor(mins / 60);
  localStorage.setItem('gate2027_totalHours', totalHours);

  const totalQ = parseInt(localStorage.getItem('gate2027_totalQ') || '0') + questions;
  localStorage.setItem('gate2027_totalQ', totalQ);

  // Update streak
  const today = new Date().toDateString();
  const lastStudy = localStorage.getItem('gate2027_lastStudy');
  if (lastStudy !== today) {
    studyStreak = lastStudy === new Date(Date.now() - 86400000).toDateString() ? studyStreak + 1 : 1;
    localStorage.setItem('gate2027_streak', studyStreak);
    localStorage.setItem('gate2027_lastStudy', today);
  }

  renderProgressList();
  updateOverviewStats();

  // Clear form
  const logSubject = document.getElementById('logSubject');
  const logMinutes = document.getElementById('logMinutes');
  const logQuestions = document.getElementById('logQuestions');
  if (logSubject) logSubject.value = '';
  if (logMinutes) logMinutes.value = '';
  if (logQuestions) logQuestions.value = '';

  showNotification('🎉 Session Logged!', `${mins} min of ${subject}. Keep it up! 🔥`, 'success');
}

// ============================================================
// NAVIGATION & SCROLL
// ============================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
        // Animate section in
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => observer.observe(s));

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(link.dataset.section);
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ============================================================
// SESSION ALERTS
// ============================================================
function setupSessionAlerts() {
  setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    const alerts = [
      { h: 5, m: 25, msg: '⏰ Wake up! Morning GATE study session starts in 5 minutes!', title: '🌅 Morning Session' },
      { h: 5, m: 30, msg: '📚 Time to study GATE DA Theory! 90 minutes of focused learning.', title: '📚 GATE Theory Time' },
      { h: 20, m: 0, msg: '💻 Skill Development session begins! Python, SQL, ML or Projects.', title: '💻 Skill Dev Time' },
      { h: 21, m: 30, msg: '📝 Last GATE push of the day! 10 MCQs + revision.', title: '📝 GATE MCQs' },
      { h: 22, m: 25, msg: '🌙 Time to rest. Great work today! Sleep well — tomorrow is another day.', title: '🌙 Sleep Time' },
    ];

    alerts.forEach(a => {
      if (h === a.h && m === a.m) {
        systemNotify(a.title, a.msg);
      }
    });
  }, 60000); // Check every minute
}

// ============================================================
// ADD FLOATING ORBS TO BODY
// ============================================================
function addOrbs() {
  ['orb-1', 'orb-2', 'orb-3'].forEach((cls, i) => {
    const orb = document.createElement('div');
    orb.className = `orb ${cls}`;
    document.body.appendChild(orb);
  });
}

// ============================================================
// CHAT ENTER KEY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }
});

// ============================================================
// INIT
// ============================================================
function init() {
  // Canvas
  resizeCanvas();
  initParticles();
  animateParticles();
  window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

  // Clock
  updateClock();
  setInterval(updateClock, 1000);

  // Generate content
  generateTimerCards();
  generateTasks();
  buildSubjectsGrid();

  // Show default schedule
  showSchedule('weekday');
  // Show default resources
  showResources('books');

  // AI
  refreshAIRecommendation();
  loadAIInsights();

  // Progress
  loadProgress();

  // Navigation
  setupNavigation();

  // Session alerts
  setupSessionAlerts();

  // Notification button
  const notifyBtn = document.getElementById('notifyBtn');
  if (notifyBtn) notifyBtn.addEventListener('click', requestNotificationPermission);

  // Floating orbs
  addOrbs();

  // Welcome notification
  setTimeout(() => {
    const h = new Date().getHours();
    let greeting = h < 12 ? '🌅 Good Morning!' : h < 17 ? '☀️ Good Afternoon!' : '🌙 Good Evening!';
    showNotification(greeting, 'Welcome to your GATE DA 2027 dashboard. Let\'s ace it!', 'info', 6000);
  }, 1500);

  // Hero section visible immediately
  const hero = document.getElementById('hero');
  if (hero) hero.classList.add('visible');
}

// Run on load
window.addEventListener('load', init);
