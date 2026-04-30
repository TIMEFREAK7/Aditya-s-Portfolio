// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  const moon = toggle.querySelector('.fa-moon');
  const sun = toggle.querySelector('.fa-sun');
  const updateIcons = (isDark) => {
    if (isDark) {
      moon.style.display = 'none';
      sun.style.display = 'inline-block';
    } else {
      moon.style.display = 'inline-block';
      sun.style.display = 'none';
    }
  };
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    updateIcons(true);
  }
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
  });
}

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.style.display = 'flex';
  else scrollBtn.style.display = 'none';
});
if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    if (!name || !email || !message) {
      feedback.textContent = '❌ All fields are required.';
      feedback.style.color = 'red';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = '❌ Enter a valid email.';
      return;
    }
    feedback.style.color = '#10b981';
    feedback.textContent = `✓ Thanks ${name}! Your message has been sent.`;
    console.log('Contact:', { name, email, message });
    form.reset();
    setTimeout(() => feedback.textContent = '', 3000);
  });
}