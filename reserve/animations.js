// START PAGE

var bodyEl =  document.body;

bodyEl.classList.add('start-page-anim')

// NAVBAR

var navbar = document.getElementById('navbar'),
svgTriangle = document.getElementById('svg-triangle'),
navbarItems = document.getElementById('navbar-items'),
navbarLinks = document.getElementsByClassName('navbar-link-item');

// FUNCTIONS

function makeAnimations(selector, ...args){
  let x=0,
  y = 3;
    selector.addEventListener('mouseover', () => {
      x=0
      y=3

      for(let i=0; i < args.length / 3;i++){
        let arrayArgs = args.slice(x, y)


        arrayArgs[0].classList.add(arrayArgs[1]);
        arrayArgs[0].classList.remove(arrayArgs[2]);

        x = x+3
        y = y+3
      }
    })
    selector.addEventListener('mouseout', () => {
      x=0
      y=3

      for(let i=0; i < args.length / 3;i++){
        let arrayArgs = args.slice(x, y)
      
        arrayArgs[0].classList.add(arrayArgs[2]);
        arrayArgs[0].classList.remove(arrayArgs[1]);

        x = x+3
        y = y+3
      }
    })
}

makeAnimations(navbar,
              navbar, 'navbar-anim-in', 'navbar-anim-out',
              svgTriangle, 'svg-triangle-anim-in', 'svg-triangle-anim-out',
              navbarItems, 'navbar-items-in', 'navbar-items-out');

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

