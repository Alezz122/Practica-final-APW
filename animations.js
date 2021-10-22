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

// GALLERY CONTAINER 

    // gallery.addEventListener('mousedown', (e) => {
    //     var xPos = [e.clientX]
    //     zeroPos = [...xPos],
    //     moveright = 0,
    //     moveleft = 0;

    //     console.log('ZeroPos: '+ zeroPos[0])
    //     gallery.addEventListener('mousemove', (e) => {
    //         console.log(e.clientX)
    //         if(zeroPos[0] > e.clientX){
    //             gallery.style.right = moveright++;
    //         }else if(zeroPos[0] < e.clientX){
    //             gallery.style.left = moveleft++;
    //         }
    //     })
    //     gallery.addEventListener('mouseup', () => { 
    //     })
    // })

// 


// RESERVE SECTION

var titleVisit = document.getElementById('title-visit')
var circles = document.getElementsByClassName("circle");

titleVisit.addEventListener('mouseover', () => {
    titleVisit.classList.add('text-reserve-in');
    titleVisit.classList.remove('text-reserve-out');
    
    for(let i=0; i<circles.length;i++){
        circles[i].classList.add('circles-in');
        circles[i].classList.remove('circles-out');
    }
})

titleVisit.addEventListener('mouseout', () => {
    titleVisit.classList.add('text-reserve-out');
    titleVisit.classList.remove('text-reserve-in');

    for(let i=0; i<circles.length;i++){
        circles[i].classList.add('circles-out');
        circles[i].classList.remove('circles-in');
    }
    
})

    circles[0].animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-100px)' },
        { transform: 'translateX(100px)' },
        { transform: 'translateY(0px)' },
      ], {
        // timing options
        duration: 80000,
        iterations: Infinity
      });
      circles[1].animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-200px)' },
        { transform: 'translateX(-100px)' },
        { transform: 'translateY(0px)' },
      ], {
        // timing options
        duration: 80000,
        iterations: Infinity
      });
      circles[2].animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(200px)' },
        { transform: 'translateX(300px)' },
        { transform: 'translateY(0px)' },
      ], {
        // timing options
        duration: 80000,
        iterations: Infinity
      });
