//client page testimonial
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
//testimonial end here


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

//testimonial start here===>> home page
$(document).ready(function(){
  $(".testimonial .indicators li").click(function(){
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            $(".testimonial .tabs li").click(function(){
                var targetElement = $(".testimonial .tabs li");
                targetElement.addClass('active');
                targetElement.not($(this)).removeClass('active');
            });
        });
$(document).ready(function(){
    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});
//testimonial end here=======>> home page
//scroll to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
////scroll to top button end

// js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here

$(document).ready(function(event) {
  var top_header = $(".carousel .fill");

  $(window).scroll(function() {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.8 + "px)"
    });
  });
});


