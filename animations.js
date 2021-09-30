// NAVBAR

var navbar = document.getElementById('navbar'),
svgTriangle = document.getElementById('svg-triangle'),
navbarItems = document.getElementById('navbar-items'),
navbarLinks = document.getElementsByClassName('navbar-link-item');

console.log(navbarLinks)

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

for(let i=0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener('mouseover', () => {
        navbarLinks[i].classList.add('nav-links-anim-in');
        navbarLinks[i].classList.remove('nav-links-anim-out');
    })

    navbarLinks[i].addEventListener('mouseout', () => {
        navbarLinks[i].classList.add('nav-links-anim-out');
        navbarLinks[i].classList.remove('nav-links-anim-in');
    })
}