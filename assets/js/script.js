/**funcionalidades */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/**boton para cerrar menu para responsive */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
     navbar.classList.toggle('active');
}

/**funcion de links de menu -- hace que el color de los links cambien para ver la seccion seleccionada */
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /** menu fijo - el menu sigue visto mientras deslizas hacia abajo*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    /** al dar click en un icon de menu responsive el menu se oculta*/
     menuIcon.classList.remove('fa-x');
     navbar.classList.remove('active');

};

  /**funciones de scroll reveal - hace que la seccion home y h2 tenga animacion de aparecer al recargar la pagina */

  ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  /** hace la animacion de la img, targets de conocimiento, proyectos, form*/
  ScrollReveal().reveal('.home-img, .learn-container, .study-container, .proyects-box, .contact form', { origin: 'bottom' });
  /** animacion de la imagen de secion about*/
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


  /**typed js - reescritura de texto */
  const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Junior', 'Ingeniero en Sistemas', 'Soporte IT'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });



