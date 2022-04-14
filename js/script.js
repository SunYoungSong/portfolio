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

//  section slide : 첫번째 섹션을 제외하고 나머지를 숨기고 버튼을 누를 때마다 슬라이드 형식으로 페이지를 보여준다. 
// const sectionOne = document.querySelector(".section1");
// const sectionTwo = document.querySelector(".section2");
// console.log(sectionTwo);




// contect : 마우스 오버시 해당되는 구간에 애니메이션 효과를 넣어준다.
 const license = document.querySelectorAll('.license>p');
 const percent = document.querySelectorAll('.percentBox>div');
 console.log(license);
 console.log(percent);

for(let i =0; i<license.length;i++){
    license[i].addEventListener('mouseover',function(){
        percent[i].classList.replace('animateNone','animateUp')
    });
    license[i].addEventListener('mouseout',function(){
        percent[i].classList.replace('animateUp','animateNone')
    });
}
