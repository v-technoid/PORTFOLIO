// Typing Animation
const typed = new Typed('.text', {
    strings: ['Web Designer', 'UI/UX Designer', 'Content Writer'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });

// Target the elements you want to animate
const logo = document.querySelector('.logo');
const navbarLinks = document.querySelectorAll('.navbar a');
const homeContent = document.querySelector('.home-content');

// Define the animations
const logoAnimation = anime({
  targets: logo,
  opacity: [0, 1],
  translateX: [-100, 0],
  duration: 1000,
  easing: 'easeOutExpo',
});

const navbarAnimation = anime({
  targets: navbarLinks,
  opacity: [0, 1],
  translateY: [100, 0],
  delay: anime.stagger(200, { start: 500 }),
  duration: 1000,
  easing: 'easeOutExpo',
});

const homeContentAnimation = anime({
  targets: homeContent,
  opacity: [0, 1],
  translateY: [100, 0],
  delay: 1500,
  duration: 1000,
  easing: 'easeOutExpo',
});