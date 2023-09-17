// Typing Animation
const typed = new Typed('.text', {
  strings: ['Web Designer', 'UI/UX Designer', 'Content Writer'],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

const fadeOut = () => {
  const loaderWrapper = document.querySelector('.lds-heart');
  loaderWrapper.classList.add('.fade');
}
window.addEventListener('load', fadeOut);

/*var loader=document.getElementById('lds-heart');
window.addEventListener("load", function(){
  loader.style.display="none";
})*/


/* Send Button */
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);



// ----- Send Button Above------------------------------
const input = document.getElementById('ghost-inputs');
const bubble = document.getElementById('ghost-bubbles');
const mouth = document.querySelector('.ghost__mouths');
let mouthChatter;

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    bubble.innerText = e.target.value;
    e.target.value = '';

    // Clear any existing mouthChatter interval
    if (mouthChatter) clearInterval(mouthChatter);

    // Start the mouth chatter animation
    let i = 0;
    mouthChatter = setInterval(() => {
      mouth.classList.toggle('ghost__mouth--opens');
      if (i === 6) {
        clearInterval(mouthChatter);
      }
      i++;
    }, 300);
  }
});

