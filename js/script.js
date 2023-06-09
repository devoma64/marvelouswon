
/* =============================== Toggle the navbar icon ====================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
}

/* =============================== Scroll section active links ====================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

      sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop -150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height){
                  navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                  });
            };
      });

/* =============================== making sticky navbar ====================== */

let header = document.querySelector('header');
header.classList.toggle('make_it_sticky', window.scrollY > 100);


/* ======================= Remove menuIcon and navbar when click ===================== */

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');


};


/* ======================= Remove menuIcon and navbar when click ===================== */

ScrollReveal ({

      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
});

ScrollReveal().reveal(
      '.home-content, .heading', {origin: 'top'}
);

ScrollReveal().reveal(

      '.home-img, .services-container, .portfolio-box', {origin: 'bottom'}
      
);

