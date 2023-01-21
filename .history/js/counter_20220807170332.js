const counters = document.querySelectorAll('.value');
const speed = 600;

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

