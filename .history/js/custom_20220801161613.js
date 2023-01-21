var galleryThumbs = new Swiper(".gallery-thumbs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
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
    slideShadows: false
  }
});

var galleryTop = new Swiper(".swiper-container.testimonial", {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  direction: "vertical",
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    type: "bullets"
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


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
}, 3500);

//preloader js code end from here


//number counter code start==> homepage
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 7000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      });
      a = 1;
    }
  
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




// js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here


