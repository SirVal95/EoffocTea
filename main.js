
// FOR THE MOBILE VIEW OF TH NAVIGATION BAR

const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".menu");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
}))


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// PRELOADER

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})


// scroll reveal

ScrollReveal({
  reset: true,
  distance:'20px',
  delay: 60,
  duration: 1500
});


ScrollReveal().reveal('.roasted-coffee img', { delay: 50, origin: 'left' });
ScrollReveal().reveal('.bulk-sell img', { delay: 50, origin: 'right' });
ScrollReveal().reveal('.buy-your-craving, .roasted-coffee-described, .bulk-sell-described,  .footer-right', { delay: 50, origin: 'top', interval: 100 });
ScrollReveal().reveal('.buy-black-coffee1, .the-box-container, .testimony-box, .the-blog-box, .footer-left, .designed-by p', { delay: 50, origin: 'bottom', interval: 100 });


