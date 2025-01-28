const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    toggle.classList.toggle('active');
  });
});