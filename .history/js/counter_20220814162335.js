const counters = document.querySelectorAll('.value');
const speed = 700;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 5);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


 // scroll to top btn
 const button = document.querySelector(".top-btn");

 const displayButton = () => {
   window.addEventListener("scroll", () => {
     console.log(window.scrollY);

     if (window.scrollY > 100) {
       button.style.display = "block";
     } else {
       button.style.display = "none";
     }
   });
 };

 const scrollToTop = () => {
   button.addEventListener("click", () => {
     window.scroll({
       top: 0,
       left: 0,
       behavior: "smooth",
     });
     console.log(event);
   });
 };

 displayButton();
 scrollToTop();

 // js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here