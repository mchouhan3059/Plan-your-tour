var drop1 = document.querySelector('.drop1')
var drop2 = document.querySelector('.drop2')
var navDestination = document.querySelector('#navDestination')
var overlayDrop = document.querySelector('.overlayDrop');
var navByDestination = document.querySelector('#navByDestination')
var navEnquiry = document.querySelector('#navEnquiry')
var enquiryForm = document.querySelector('.enquiryForm')
var overlayEnquiry = document.querySelector('.overlayEnquiry')
var cross = document.querySelector('.cross')
var submitEnquiryForm = document.querySelector('.enquiryForm form')
var packageEnquiryBtn = document.querySelectorAll('.packageTheme article button')
var burgerMenu = document.querySelector('header button')
var showBurger = document.querySelector('.showBurger')
var menuBurger = document.querySelector('.menuBurger')
let closeBurger = document.querySelector('.closeBurger')
navDestination.addEventListener('click', () => {
    drop2.classList.remove('show')
    drop1.classList.toggle('show')
    overlayDrop.classList.add('show')
    console.log('clicked')
})

navByDestination.addEventListener('click', () => {
    drop1.classList.remove('show')
    drop2.classList.toggle('show')
    overlayDrop.classList.remove('show')
    overlayDrop.classList.add('show')
})

overlayDrop.addEventListener('click', () => {
    drop1.classList.remove('show')
    drop2.classList.remove('show')
    overlayDrop.classList.remove('show')
})

navEnquiry.addEventListener('click', () => {
    drop1.classList.remove('show')
    drop2.classList.remove('show')
    enquiryForm.classList.add('slideShow')
    overlayEnquiry.classList.add('show')
})

cross.addEventListener('click', () => {
    overlayEnquiry.classList.remove('show')
    enquiryForm.classList.remove('slideShow')
})

overlayEnquiry.addEventListener('click', () => {
    setTimeout(() => {
        enquiryForm.style.scale = 1;
    }, 300)

    enquiryForm.style.scale = 1.02;
})

submitEnquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
})

packageEnquiryBtn.forEach((enqBtn) => {
    enqBtn.addEventListener('click', () => {
        drop1.classList.remove('show')
        drop2.classList.remove('show')
        enquiryForm.classList.add('slideShow')
        overlayEnquiry.classList.add('show')
    })
})


burgerMenu.addEventListener('click', () => {
    menuBurger.classList.add('showBurger')
})

menuBurger.addEventListener('click', (e) => {
    if (e.target.innerHTML == '×') {
        menuBurger.classList.remove('showBurger')
    }
})
$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 100,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                nav: false
            },
            600: {
                items: 2,
                loop: true,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            }
        }

    });
});