//  메인시티팝 배경 및 별 동산 

const bgOne = document.querySelector('.bg1');
const bgTwo = document.querySelector('.bg2');
const bgThree = document.querySelector('.bg3');
const $btittle = document.querySelector('.bigtittle');
const $sOne = document.querySelector('#s-one');
const $sTwo = document.querySelector('#s-Two');

window.addEventListener('load',function(){
    function plus (){
        for (let i = 0; i < 1000; i++) {
            const starOne = document.createElement('star');
            $sOne.appendChild(starOne);
            starOne.classList.add('starTwo');
            // console.log(starOne);
        }
    }
    setTimeout(() => {
        plus();
    }, 300);
});
    window.addEventListener('wheel', function () {
        const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                const $currectStarOne = document.querySelectorAll('.starTwo');
                function random() {
                    for (let i = 0; i < $currectStarOne.length; i++) {
                        let width = Math.floor(Math.random() * 3000);
                        let height = Math.floor(Math.random() * 3000);
                        let sizeW = Math.floor(Math.random() * 40);
                        let sizeh = Math.floor(Math.random() * 40);
                        let opacity = Math.floor(Math.random() * 1);
                        $currectStarOne[i].style.top = (width + 'px');
                        $currectStarOne[i].style.left = (height + 'px');
                        $currectStarOne[i].style.width = (sizeW + 'px');
                        $currectStarOne[i].style.height = (sizeh + 'px');
                        $currectStarOne[i].style.opacity = (opacity - '0.2' + 'px');
                    }
                }
                bingbing();
        
                function starbing() {
                    bingbing();
                }
        
                function bingbing() {
                 setInterval(() => {
                     random();
                 }, 300);
                }
        
                bgTwo.style.opacity = "1";
                bgTwo.style.top = '10%';
                bgTwo.classList.add('shine');
                bgThree.style.bottom = '0';
                $btittle.style.color = 'rgb(247, 184, 221)';
                $btittle.style.top = '3%';
                $btittle.style.left = '45%';
            } 
       
       
    });


// const $bilding 

//  레코드판 

const $rc = document.querySelectorAll('.rc');
const $p = document.querySelectorAll('.p');
const $record = document.querySelector('#record>img');
// const $player = document.querySelector('#auido');
const $player = document.querySelectorAll('#playbox>audio');
const $playbox =document.querySelectorAll('#playbox');
console.log($player);

for(let i = 0; i<$rc.length;i++){
    $rc[i].addEventListener('click',function(){
        $p[i].classList.replace('hidden','text');
        
    });
    $p[i].addEventListener('mouseout',function(){
        $p[i].classList.replace('text','hidden');
    });
    $p[i].addEventListener('click',function(){
        $record.classList.add('turn');
        $playbox[i].classList.remove('hidden');
        $player[i].play();
    });
    $p[i].addEventListener('dblclick',function(){
        $playbox[i].classList.add('hidden');
        $record.classList.remove('turn');
        $player[i].pause();
    });
}


// last 파일
const sign = document.querySelector('#sign');
const $elbum =document.querySelector('#elbum');
const $tag = document.querySelector('#hash');
const sFour = document.querySelector('#s-four');
const btright = document.querySelector('#right');
const btleft = document.querySelector('#left');
const eb1 = document.querySelector('.elbum1');
const eb2 = document.querySelector('.elbum2');
const $luv = document.querySelector('.love');
sFour.addEventListener('wheel',function(){
    sign.style.top = '5%';
    $tag.style.opacity = '1';
    // $elbum.style.top = '20vh';
    
});

$luv.addEventListener('click',function(){
    $elbum.style.top = '20vh';
});
btright.addEventListener('click',function(){
 eb1.classList.add('hidden');
 eb2.classList.remove('hidden');
});
