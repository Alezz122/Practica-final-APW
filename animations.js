// NAVBAR

var navbar = document.getElementById('navbar'),
svgTriangle = document.getElementById('svg-triangle'),
navbarItems = document.getElementById('navbar-items');

navbar.addEventListener('mouseover', () => {
    navbar.classList.add('navbar-anim-in')
    svgTriangle.classList.add('svg-triangle-anim-in')
    navbarItems.classList.add('navbar-items-in')

    navbar.classList.remove('navbar-anim-out')
    svgTriangle.classList.remove('svg-triangle-anim-out')
    navbarItems.classList.remove('navbar-items-out')
})

navbar.addEventListener('mouseout', () => {
    navbar.classList.add('navbar-anim-out')
    svgTriangle.classList.add('svg-triangle-anim-out')
    navbarItems.classList.add('navbar-items-out')

    navbar.classList.remove('navbar-anim-in')
    svgTriangle.classList.remove('svg-triangle-anim-in')  
    navbarItems.classList.remove('navbar-items-in')
})

