const text = document.querySelector('.text-animation');

text.addEventListener('animationend', () => {
  text.style.animation = 'none';
  setTimeout(() => {
    text.style.animation = 'textclip 2s linear infinite';
  }, 0);
});
