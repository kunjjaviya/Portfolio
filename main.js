// heading = document.querySelector('.text');

// let text = 'Hi! I\'m Amit';
// let texts = ['Amit','Web Developer']

// let i = 1;
// isForwards = true;
// textCount = 0;

// setInterval(function(){
//   heading.textContent = texts[textCount].substring(0,i);
//   if (isForwards){
//     i++;
//   }
//   else {
//     i--;
//   }
//   if(i > text.length + 10) {
//     isForwards = false;
//   }
//   if(i<0){
//     isForwards = true;
//     textCount++;
//   }
//   if(textCount > texts.length-1) {
//     textCount = 0;
//   }
// },100)document

// const toggleIcon = document.querySelector('.toggle-icon');

// toggleIcon.addEventListener('click', () =>{
//   toggleIcon.classList.toggle('bx-moon');
// });

// const toggle = document.getElementById('toggle-icon');
// const body = document.getElementById('body');

// toggle.addEventListener('click',function(){
//   this.classList.toggle('bx bx-moon');
//   if(this.classList.toggle('toggle-icon')){
//     body.style.background = 'yellow';
//   }
// })

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();


gsap.from(".header .logo, .header a, .header .text-box",{
  y:-100,
  duration:2,
  delay:1,
  stagger:0.1
})

gsap.from(".first-section .one-se",{
  x:-800,
  duration:1,
  delay:2,
  // stagger:1,
  // scale:0
})

gsap.from(".first-section .two-se",{
  x:800,
  duration:1,
  delay:2,
  // stagger:1,
  // scale:0
})

gsap.from(".training-section .container .training-items",{
  y:-1000,
  duration:2,
  delay:3,
  stagger:1,
  scale:0
})