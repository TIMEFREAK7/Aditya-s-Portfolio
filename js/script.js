// Dark mode toggle with localStorage
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') document.body.classList.add('dark');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.style.display = 'flex';
  else scrollBtn.style.display = 'none';
});
if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contact form validation + console log
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    if (!name || !email || !message) {
      feedback.textContent = 'All fields are required.';
      feedback.style.color = 'red';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = 'Enter a valid email address.';
      return;
    }
    feedback.style.color = 'green';
    feedback.textContent = `✓ Message sent (simulated). Thanks ${name}!`;
    console.log('Contact Form:', { name, email, message });
    contactForm.reset();
    setTimeout(() => feedback.textContent = '', 3000);
  });
}

// Download CV placeholder alert
const downloadBtn = document.getElementById('downloadCVBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('CV download simulation — you can replace with actual PDF file.');
  });
}

// Active page highlight (already handled by class="active" in HTML)