
// header sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("my-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// header sticky end

// preloader js code starts from here
setTimeout(function () {
  $('.loader-bg').fadeToggle();
}, 2500);

//preloader js code end from here


//number counter code start==> homepage
import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js';

function countStart(){
  const $counters = document.querySelectorAll(".js-count-up"),
        options = {
          useEasing: true,
          useGrouping: true,
          separator: ",",
          decimal: "."
        };

  $counters.forEach( (item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}

new Waypoint({
  element: document.querySelector('.level'),
  handler: function() {
    countStart()
    //this.destroy() //for once
  },
  offset: '50%'
});
//number counter code start==> homepage

//services tab js code end from here ===> home page
function seeService(serviceName) {
  var i;
  var x = document.getElementsByClassName("service");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(serviceName).style.display = "block";  
}
//services js code end from here
var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });



// js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here


/* user defined variables */
var timeOnSlide = 3, 		
    // the time each image will remain static on the screen, measured in seconds
timeBetweenSlides = 1, 	
    // the time taken to transition between images, measured in seconds

// test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
    // array of possible vendor prefixes
    pfx  = '',
    slidy = document.getElementById("slidy"); 
if (slidy.style.animationName !== undefined) { animation = true; } 
// browser supports keyframe animation w/o prefixes

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}

if( animation === false ) {
  // animate in JavaScript fallback
} else {
  var images = slidy.getElementsByTagName("img"),
      firstImg = images[0], 
      // get the first image inside the "slidy" element.
      imgWrap = firstImg.cloneNode(false);  // copy it.
  slidy.appendChild(imgWrap); // add the clone to the end of the images
  var imgCount = images.length, // count the number of images in the slide, including the new cloned element
      totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
      slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
      moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
      basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
      position = 0, // set the initial position of the slidy element
      css = document.createElement("style"); // start marking a new style sheet
  css.type = "text/css";
  css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
  css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
  for (i=0;i<(imgCount-1); i++) { // 
    position+= slideRatio; // make the keyframe the position of the image
    css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
}
  css.innerHTML += "}\n";
  css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
document.body.appendChild(css); // add the new stylesheet to the end of the document
}
//  textimonial

const testimonialPage = document.querySelector(".quotes-slide[data-slider-slide-index='1']");
testimonialPage.classList.add("quotes-slide--active");


document.querySelector(".quotes").addEventListener("mouseout", function(){
  document.querySelector(".quotes-slide--active").classList.remove("quotes-slide--active")
  document.querySelector(".quotes-slide[data-slider-slide-index='1']").classList.add("quotes-slide--active")
});


document.querySelectorAll(".quotes-slide").forEach( 
  elem => elem.addEventListener("mouseover", function(){
    document.querySelector(".quotes-slide--active").classList.remove("quotes-slide--active")
    this.classList.add("quotes-slide--active")
  })
)
// client review section


  