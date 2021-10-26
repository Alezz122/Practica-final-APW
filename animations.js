// START PAGE

var bodyEl =  document.body;

bodyEl.classList.add('start-page-anim')

// SCROLL

var exploreContainer = document.getElementById('explore-container');

document.addEventListener('onscroll', () => {
  console.log('a')
  if(bodyEl.scrollTop > 100){
    console.log('b')
    exploreContainer.classList.add('scroll-animation')
  }
})

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

// NAVBAR

// navbar.addEventListener('mouseover', () => {
//     navbar.classList.add('navbar-anim-in')
//     svgTriangle.classList.add('svg-triangle-anim-in')
//     navbarItems.classList.add('navbar-items-in')

//     navbar.classList.remove('navbar-anim-out')
//     svgTriangle.classList.remove('svg-triangle-anim-out')
//     navbarItems.classList.remove('navbar-items-out')
// })

// navbar.addEventListener('mouseout', () => {
//     navbar.classList.add('navbar-anim-out')
//     svgTriangle.classList.add('svg-triangle-anim-out')
//     navbarItems.classList.add('navbar-items-out')

//     navbar.classList.remove('navbar-anim-in')
//     svgTriangle.classList.remove('svg-triangle-anim-in')  
//     navbarItems.classList.remove('navbar-items-in')
// })

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

/* SEARCHER */

var searcherContainer = document.getElementById('searcher-container'),
searcher = document.getElementById('searcher'),
submitButton = document.getElementById('submit'),
arrowSubmit = document.getElementById('arrow');

// searcherContainer.addEventListener('mouseover', () => {
//   searcherContainer.classList.add('searcher-container-in');
//   searcher.classList.add('searcher-in');
//   submitButton.classList.add('submit-in');
//   arrowSubmit.classList.add('arrow-in');
//   searcher.classList.remove('searcher-out');
//   searcherContainer.classList.remove('searcher-container-out')
//   submitButton.classList.remove('submit-out');
//   arrowSubmit.classList.remove('arrow-out');
// })
// searcherContainer.addEventListener('mouseout', () => {
//   searcherContainer.classList.add('searcher-container-out')
//   searcher.classList.add('searcher-out');
//   submitButton.classList.add('submit-out');
//   arrowSubmit.classList.add('arrow-out');
//   searcherContainer.classList.remove('searcher-container-in')
//   searcher.classList.remove('searcher-in');
//   submitButton.classList.remove('submit-in');
//   arrowSubmit.classList.remove('arrow-in');
// })

makeAnimations(searcherContainer,
              searcherContainer, 'searcher-container-in', 'searcher-container-out',
              searcher, 'searcher-in', 'searcher-out',
              submitButton, 'submit-in', 'submit-out',
              arrowSubmit, 'arrow-in', 'arrow-out')




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


// VISITS SECTION

var mainWindowVisits = document.getElementById('visits-content'),
imageVisits = document.getElementById('visits-image'),
titleVisits = document.getElementById('visits-title'),
visitsContainer = document.getElementById('visits-container');


// mainWindowVisits.addEventListener('mouseover', () => {
//   imageVisits.classList.add('image-visits-in');
//   titleVisits.classList.add('title-visits-in');
//   visitsContainer.classList.add('visits-container-in');
//   imageVisits.classList.remove('image-visits-out');
//   titleVisits.classList.remove('title-visits-out');
//   visitsContainer.classList.remove('visits-container-out');
// })

// mainWindowVisits.addEventListener('mouseout', () => {
//   imageVisits.classList.add('image-visits-out');
//   titleVisits.classList.add('title-visits-out');
//   visitsContainer.classList.add('visits-container-out');
//   imageVisits.classList.remove('image-visits-in');
//   titleVisits.classList.remove('title-visits-in');
//   visitsContainer.classList.remove('visits-container-in');
// })

makeAnimations(mainWindowVisits,
              imageVisits, 'image-visits-in', 'image-visits-out',
              titleVisits, 'title-visits-in', 'title-visits-out',
              visitsContainer, 'visits-container-in', 'visits-container-out')

// RESERVE SECTION

var titleReserve = document.getElementById('title-reserve'),
circles = document.getElementsByClassName("circle"),
mainWindowReserve = document.getElementById("main-window-reserve");

titleReserve.addEventListener('mouseover', () => {
    titleReserve.classList.add('text-reserve-in');
    mainWindowReserve.classList.add('bg-zoom-in');
    titleReserve.classList.remove('text-reserve-out');
    mainWindowReserve.classList.remove('bg-zoom-out');
    circle0.pause()
    circle1.pause()
    circle2.pause()
    
    for(let i=0; i<circles.length;i++){
        circles[i].classList.add('circles-in');
        circles[i].classList.remove('circles-out');
    }
})

titleReserve.addEventListener('mouseout', () => {
    titleReserve.classList.add('text-reserve-out');
    mainWindowReserve.classList.add('bg-zoom-out');
    titleReserve.classList.remove('text-reserve-in');
    mainWindowReserve.classList.remove('bg-zoom-in');
    circle0.play()
    circle1.play()
    circle2.play()

    for(let i=0; i<circles.length;i++){
        circles[i].classList.add('circles-out');
        circles[i].classList.remove('circles-in');
    }
    
})

    var circle0 = circles[0].animate([
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
      var circle1 = circles[1].animate([
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
      var circle2 = circles[2].animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(200px)' },
        { transform: 'translateX(-200px)' },
        { transform: 'translateY(0px)' },
      ], {
        // timing options
        duration: 80000,
        iterations: Infinity
      });
