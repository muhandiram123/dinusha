// ================================================
// PORTFOLIO JS - Dinusha Madhushan Somarathna
// Password: 0715157912
// ================================================

const EDIT_PASSWORD = '0715157912';
let editMode = false;

// ---- DATA ----
const siteData = {
  name: 'P.G Dinusha Madhushan Somarathna',
  bio: 'Passionate student at University of Sri Jayewardenepura, driven by technology and creativity. Building innovative solutions one line of code at a time. 🚀',
  about: "I'm <strong>P.G Dinusha Madhushan Somarathna</strong>, a passionate and dedicated student at the University of Sri Jayewardenepura. I love exploring technology, building creative projects, and constantly learning new things. My goal is to contribute meaningfully to the world through innovation and hard work.",
  fullname: 'P.G Dinusha Madhushan Somarathna',
  phone: '0782363699',
  email: 'dinushamadhushan017@gmail.com',
  university: 'University of Sri Jayewardenepura',
  location: 'Sri Lanka 🇱🇰',
  status: 'Open to Opportunities',
  edu1_title: 'University of Sri Jayewardenepura',
  edu1_sub: 'Undergraduate Student',
  edu1_period: '2022 - Present',
  edu1_desc: 'Pursuing undergraduate studies at one of Sri Lanka\'s most prestigious universities, gaining knowledge in technology, innovation and leadership.',
  edu2_title: 'Advanced Level Education',
  edu2_sub: 'Physical Science Stream',
  edu2_period: '2019 - 2022',
  edu2_desc: 'Completed A/L examinations with focus on physical science subjects, demonstrating strong analytical and problem-solving abilities.',
  edu3_title: 'Ordinary Level Education',
  edu3_sub: 'Secondary School',
  edu3_period: '2014 - 2019',
  edu3_desc: 'Completed O/L examinations with excellent results, building a strong foundation across multiple disciplines.',
  proj1_title: 'Portfolio Website',
  proj1_desc: 'A fully animated, responsive personal portfolio built with pure HTML, CSS and JavaScript featuring dark mode glassmorphism design.',
  proj2_title: 'Student Management App',
  proj2_desc: 'A comprehensive student management system built for university use, featuring attendance tracking and grade management.',
  proj3_title: 'Data Analysis Tool',
  proj3_desc: 'Python-based data analysis and visualization tool using pandas and matplotlib for academic research purposes.',
  contact_text: 'Have a project idea, want to collaborate, or just want to say hi? Feel free to reach out. I\'m always open to new opportunities and connections!',
  contact_phone: '0782363699',
  contact_email: 'dinushamadhushan017@gmail.com',
  contact_location: 'Sri Jayewardenepura, Sri Lanka',
  footer_text: 'Crafted with ❤️ by Dinusha Madhushan Somarathna'
};

// Load saved data from localStorage
function loadSavedData() {
  const saved = localStorage.getItem('dms_portfolio_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(siteData, parsed);
    } catch(e) {}
  }
  applyData();
}

function applyData() {
  document.querySelectorAll('[data-editable]').forEach(el => {
    const key = el.dataset.editable;
    if (siteData[key] !== undefined) {
      el.innerHTML = siteData[key];
    }
  });
}

// ================================================
// LOADER
// ================================================
window.addEventListener('load', () => {
  loadSavedData();
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startAnimations();
  }, 2800);
});

// ================================================
// CURSOR
// ================================================
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateCursorTrail() {
  trailX += (mouseX - trailX) * 0.08;
  trailY += (mouseY - trailY) * 0.08;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top = trailY + 'px';
  requestAnimationFrame(animateCursorTrail);
}
animateCursorTrail();

document.querySelectorAll('a, button, input, textarea, [onclick]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.background = '#ec4899';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    cursor.style.background = '#a855f7';
  });
});

// ================================================
// PARTICLES
// ================================================
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#7c3aed','#a855f7','#ec4899','#3b82f6','#10b981'];
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 6 + 2;
    particle.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(particle);
  }
}

// ================================================
// TYPEWRITER
// ================================================
const roles = [
  'Student 🎓',
  'Web Developer 💻',
  'Creative Thinker 💡',
  'Problem Solver 🔧',
  'Tech Enthusiast 🚀',
  'Future Engineer ⚡'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeWriter() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    setTimeout(typeWriter, 80);
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) { isDeleting = true; setTimeout(typeWriter, 1500); }
    else { setTimeout(typeWriter, 120); }
  }
}

// ================================================
// NAVBAR
// ================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  // Active link
  let current = '';
  sections.forEach(s => {
    const sTop = s.offsetTop - 120;
    if (window.scrollY >= sTop) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });

  // Back to top
  const backTop = document.getElementById('backTop');
  if (window.scrollY > 400) backTop.classList.remove('hidden');
  else backTop.classList.add('hidden');

  // AOS
  revealAOS();

  // Skill bars
  revealSkillBars();

  // Count stats
  revealStats();
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  const nl = document.getElementById('navLinks');
  nl.classList.toggle('open');
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ================================================
// AOS (Animate on Scroll)
// ================================================
function revealAOS() {
  document.querySelectorAll('[data-aos]').forEach(el => {
    const rect = el.getBoundingClientRect();
    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
    if (rect.top < window.innerHeight - 80) {
      setTimeout(() => el.classList.add('aos-visible'), delay);
    }
  });
}

// ================================================
// SKILL BARS
// ================================================
let skillBarsRevealed = false;
function revealSkillBars() {
  if (skillBarsRevealed) return;
  const section = document.getElementById('skills');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillBarsRevealed = true;
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }
}

// ================================================
// STATS COUNTER
// ================================================
let statsRevealed = false;
function revealStats() {
  if (statsRevealed) return;
  const section = document.querySelector('.stats-section');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    statsRevealed = true;
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
      }, 25);
    });
  }
}

// ================================================
// START ALL ANIMATIONS
// ================================================
function startAnimations() {
  createParticles();
  typeWriter();
  revealAOS();
  revealSkillBars();
  revealStats();
}

// ================================================
// PASSWORD MODAL
// ================================================
function openModal() {
  document.getElementById('pwModal').classList.remove('hidden');
  document.getElementById('pwInput').value = '';
  document.getElementById('pwError').classList.add('hidden');
  setTimeout(() => document.getElementById('pwInput').focus(), 100);
}

function closeModal() {
  document.getElementById('pwModal').classList.add('hidden');
}

document.getElementById('pwInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
  const val = document.getElementById('pwInput').value;
  if (val === EDIT_PASSWORD) {
    closeModal();
    enableEditMode();
  } else {
    const err = document.getElementById('pwError');
    err.classList.remove('hidden');
    err.style.animation = 'none';
    setTimeout(() => err.style.animation = '', 50);
    document.getElementById('pwInput').value = '';
    document.getElementById('pwInput').style.borderColor = '#ef4444';
    setTimeout(() => document.getElementById('pwInput').style.borderColor = '', 1000);
  }
}

// ================================================
// EDIT MODE
// ================================================
function enableEditMode() {
  editMode = true;
  buildEditPanel();
  document.getElementById('editPanel').classList.remove('hidden');
  showToast('🔓 Edit Mode Unlocked! You can now edit the site.');
}

function lockEdit() {
  editMode = false;
  document.getElementById('editPanel').classList.add('hidden');
  showToast('🔒 Edit Mode Locked.');
}

function buildEditPanel() {
  const container = document.getElementById('editFields');
  container.innerHTML = '';

  const editableLabels = {
    name: 'Your Name (Hero)',
    bio: 'Hero Bio',
    about: 'About Me Text',
    fullname: 'Full Name (Info Card)',
    phone: 'Phone',
    email: 'Email',
    university: 'University',
    location: 'Location',
    status: 'Status',
    edu1_title: 'Education 1 - Title',
    edu1_sub: 'Education 1 - Subtitle',
    edu1_period: 'Education 1 - Period',
    edu1_desc: 'Education 1 - Description',
    edu2_title: 'Education 2 - Title',
    edu2_sub: 'Education 2 - Subtitle',
    edu2_period: 'Education 2 - Period',
    edu2_desc: 'Education 2 - Description',
    edu3_title: 'Education 3 - Title',
    edu3_sub: 'Education 3 - Subtitle',
    edu3_period: 'Education 3 - Period',
    edu3_desc: 'Education 3 - Description',
    proj1_title: 'Project 1 - Title',
    proj1_desc: 'Project 1 - Description',
    proj2_title: 'Project 2 - Title',
    proj2_desc: 'Project 2 - Description',
    proj3_title: 'Project 3 - Title',
    proj3_desc: 'Project 3 - Description',
    contact_text: 'Contact Section - Text',
    contact_phone: 'Contact Phone',
    contact_email: 'Contact Email',
    contact_location: 'Contact Location',
    footer_text: 'Footer Text'
  };

  const longFields = ['bio','about','edu1_desc','edu2_desc','edu3_desc','proj1_desc','proj2_desc','proj3_desc','contact_text'];

  for (const [key, label] of Object.entries(editableLabels)) {
    const group = document.createElement('div');
    group.className = 'edit-field-group';

    const lbl = document.createElement('label');
    lbl.textContent = label;

    let input;
    if (longFields.includes(key)) {
      input = document.createElement('textarea');
      input.rows = 3;
    } else {
      input = document.createElement('input');
      input.type = 'text';
    }
    input.value = siteData[key] ? siteData[key].replace(/<[^>]+>/g,'') : '';
    input.dataset.key = key;
    input.addEventListener('input', (e) => {
      const k = e.target.dataset.key;
      siteData[k] = e.target.value;
      // Live update
      document.querySelectorAll(`[data-editable="${k}"]`).forEach(el => {
        el.innerHTML = e.target.value;
      });
    });

    group.appendChild(lbl);
    group.appendChild(input);
    container.appendChild(group);
  }

  // Photo upload
  const photoGroup = document.createElement('div');
  photoGroup.className = 'edit-field-group';
  photoGroup.innerHTML = `
    <label>📷 Change Photo</label>
    <input type="file" accept="image/*" id="photoUpload" style="color: var(--text-muted); cursor:pointer;" />
  `;
  container.appendChild(photoGroup);
  document.getElementById('photoUpload').addEventListener('change', handlePhotoUpload);
}

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const src = ev.target.result;
    document.querySelectorAll('.hero-photo, .about-photo').forEach(img => img.src = src);
    localStorage.setItem('dms_portfolio_photo', src);
    showToast('📷 Photo updated successfully!');
  };
  reader.readAsDataURL(file);
}

function saveChanges() {
  localStorage.setItem('dms_portfolio_data', JSON.stringify(siteData));
  showToast('✅ Changes saved successfully!');
}

// Load saved photo
const savedPhoto = localStorage.getItem('dms_portfolio_photo');
if (savedPhoto) {
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hero-photo, .about-photo').forEach(img => img.src = savedPhoto);
  });
}

// ================================================
// CONTACT FORM
// ================================================
function sendMessage(e) {
  e.preventDefault();
  showToast('✉️ Message sent! I\'ll get back to you soon.');
  e.target.reset();
}

// ================================================
// COPY TO CLIPBOARD
// ================================================
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 ${label} copied: ${text}`);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(`📋 ${label} copied: ${text}`);
  });
}

// ================================================
// TOAST
// ================================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 3500);
}

// ================================================
// CLOSE MODAL ON OVERLAY CLICK
// ================================================
document.getElementById('pwModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('pwModal')) closeModal();
});

// ================================================
// LOAD PHOTO FROM LOCAL
// ================================================
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dms_portfolio_photo');
  if (saved) {
    document.querySelectorAll('.hero-photo, .about-photo').forEach(img => img.src = saved);
  }
});

// ================================================
// SKILL BUBBLE INTERACTION
// ================================================
document.querySelectorAll('.skill-bubble').forEach(bubble => {
  bubble.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.05)';
  });
  bubble.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
  bubble.addEventListener('click', function() {
    showToast(`⚡ Skill: ${this.dataset.skill}`);
  });
});

// ================================================
// PROJECT CARD TILT EFFECT
// ================================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / rect.height) * 10;
    const rotY = (x / rect.width) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ================================================
// SMOOTH SCROLL (Fallback for older browsers)
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ================================================
// KEYBOARD SHORTCUTS
// ================================================
document.addEventListener('keydown', (e) => {
  // Escape closes modal and edit panel
  if (e.key === 'Escape') {
    closeModal();
    if (editMode) lockEdit();
  }
  // Ctrl+E opens edit modal
  if (e.ctrlKey && e.key === 'e') {
    e.preventDefault();
    openModal();
  }
});
