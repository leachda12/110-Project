const navBar = document.querySelector('nav');
const header = document.querySelector('header');
const howSect = document.querySelector('.how');
const navLinks = document.querySelectorAll('.nav-link');
const homeLink = document.querySelector('.home-link');
const logo = document.querySelector('.logo');


const topCheckOptions = {threshold: 1};

const topCheck = new IntersectionObserver(function(entries, topCheck) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navBar.classList.add('nav-off-top');
            navLinks.forEach(navLink => {
                navLink.classList.add('link-off-top')
            });
            homeLink.classList.add('home-off-top');
            logo.classList.add('logo-off-top');
        }
        else {
            navBar.classList.remove('nav-off-top');
            navLinks.forEach(navLink => {
                navLink.classList.remove('link-off-top')
            });
            homeLink.classList.remove('home-off-top');
            logo.classList.remove('logo-off-top');
        }
    });
},
topCheckOptions);

topCheck.observe(header);


const shrinkOptions = {rootMargin: '-600px 0px 0px 0px'};

const shrinkTest = new IntersectionObserver(function(entries, shrinkTest) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navBar.classList.add('nav-shrink');
        }
        else {
            navBar.classList.remove('nav-shrink');
        }
    })
},
shrinkOptions);

shrinkTest.observe(header);



$('.prop-row').slick({
    infinite: true,
    slidesToShow: 4,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn')
    },
);

$('.cred-content').slick({
    infinite: true,
    slidesToShow: 1,
    prevArrow: '<button class="cred-prev">‹</button>',
    nextArrow: '<button class="cred-next">›</button>'
    },
);
   
