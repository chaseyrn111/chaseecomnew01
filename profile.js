// Smooth hover effect for images
const lifestyleCards = document.querySelectorAll('.blog-card-wrapper');

lifestyleCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
