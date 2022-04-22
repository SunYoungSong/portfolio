 // font script
 (function (d) {
     var config = {
             kitId: 'nuu5zsz',
             scriptTimeout: 3000,
             async: true
         },
         h = d.documentElement,
         t = setTimeout(function () {
             h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
         }, config.scriptTimeout),
         tk = d.createElement("script"),
         f = false,
         s = d.getElementsByTagName("script")[0],
         a;
     h.className += " wf-loading";
     tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
     tk.async = true;
     tk.onload = tk.onreadystatechange = function () {
         a = this.readyState;
         if (f || a && a != "complete" && a != "loaded") return;
         f = true;
         clearTimeout(t);
         try {
             Typekit.load(config)
         } catch (e) {}
     };
     s.parentNode.insertBefore(tk, s)
 })(document);


//  reset
 //  section slide : 첫번째 섹션을 제외하고 나머지를 숨기고 버튼을 누를 때마다 슬라이드 형식으로 페이지를 보여준다. 
 // main- font change
 const sectionOne = document.querySelector(".section1");
 const sectionTwo = document.querySelector(".section2");
 const sectionTwoBt =document.querySelector('.linkBt');
 console.log(sectionTwo);
//  텍스트 
 const wai = document.querySelector(".wai");
 const work = document.querySelector(".work");
 const etc = document.querySelector(".etc");
 console.log("wai");
// section2 능력치 
const percentDiv = document.querySelectorAll('.percentBox>div');
const sectionTwoTextRight = document.querySelector('.textRight>p');
const sectionTwoTextLeft = document.querySelector('.textLeft>p');
const pic = document.querySelectorAll('.pic');
console.log(percentDiv);
console.log(sectionTwoTextRight);



 wai.addEventListener('mouseover', function () {
     wai.classList.toggle('neon');
    wai.style.cursor = 'pointer';
 });
 wai.addEventListener('click',function(){
    sectionTwo.classList.remove('hidden');
    sectionTwoTextLeft.classList.add('textShaking');
    sectionTwoTextRight.classList.add('textShaking');
    
    for(let i=0; i<percentDiv.length;i++){
        percentDiv[i].classList.add('show');
        pic[i].classList.add('picShaking');
    }

 });
 sectionTwoBt.addEventListener('click',function(){
     sectionTwo.classList.add('hidden');
 });

 

 work.addEventListener('mouseover', function () {
     work.classList.toggle('neon');
     work.style.cursor = 'pointer';
 });
 etc.addEventListener('mouseover', function () {
     etc.classList.toggle('neon');
     etc.style.cursor = 'pointer';
 });


//  말풍선 
const me = document.querySelector('.main-c');
const bubble = document.querySelector('.bubble');
const bubbleText = document.querySelector('.bubble>p');
console.log(bubble);

me.addEventListener('click',function(){
    bubble.classList.toggle('hidden');
    bubbleText.classList.add('textOn');
    me.style.cursor = 'pointer';
    
});


