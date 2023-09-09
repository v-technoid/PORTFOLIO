// Typing Animation
const typed = new Typed('.text', {
    strings: ['Web Designer', 'UI/UX Designer', 'Content Writer'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });

  const fadeOut= () => {
    const loaderWrapper = document.querySelector('.lds-heart');
    loaderWrapper.classList.add('.fade');
  }
  window.addEventListener('load', fadeOut);
  
// Target the elements you want to animate
