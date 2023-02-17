'use strict';
const arrAlphabet = [
    {
        num: 1,
        picSrc: "pictures/a.jpg",
        transcription: "А",
        description: ""
    },
    {
        num: 2,
        picSrc: "pictures/b.jpg",
        transcription: "Б",
        description: ""
    },
    {
        num: 3,
        picSrc: "pictures/c.jpg",
        transcription: "Ц",
        description: ""
    },
    {
        num: 4,
        picSrc: "pictures/сс.jpg",
        transcription: "Ц",
        description: "резко"
    },
    {
        num: 5,
        picSrc: "pictures/ch.jpg",
        transcription: "Ч",
        description: ""
    },
    {
        num: 6,
        picSrc: "pictures/chch.jpg",
        transcription: "Ч",
        description: "резко"
    },
    {
        num: 7,
        picSrc: "pictures/d.jpg",
        transcription: "Д",
        description: ""
    },
    {
        num: 8,
        picSrc: "pictures/dj.jpg",
        transcription: "ДЖ",
        description: "звонко"
    },
    {
        num: 9,
        picSrc: "pictures/dz.jpg",
        transcription: "ДЗ",
        description: "звонко"
    },
    {
        num: 10,
        picSrc: "pictures/e.jpg",
        transcription: "Э",
        description: ""
    },
    {
        num: 11,
        picSrc: "pictures/g.jpg",
        transcription: "Г",
        description: ""
    },
    {
        num: 12,
        picSrc: "pictures/ggg.jpg",
        transcription: "Г",
        description: "с выдыхом"
    },
    {
        num: 13,
        picSrc: "pictures/h.jpg",
        transcription: "Х",
        description: ""
    },
    {
        num: 14,
        picSrc: "pictures/hh.jpg",
        transcription: "Х",
        description: "с придыханием"
    },
    {
        num: 15,
        picSrc: "pictures/i.jpg",
        transcription: "И",
        description: ""
    },
    {
        num: 16,
        picSrc: "pictures/j.jpg",
        transcription: "Ж",
        description: ""
    },
    {
        num: 17,
        picSrc: "pictures/k.jpg",
        transcription: "К",
        description: ""
    },
    {
        num: 18,
        picSrc: "pictures/kk.jpg",
        transcription: "К",
        description: "с придыханием"
    },
    {
        num: 19,
        picSrc: "pictures/kkkk.jpg",
        transcription: "К",
        description: "гортанный"
    },
    {
        num: 20,
        picSrc: "pictures/l.jpg",
        transcription: "Л",
        description: ""
    },
    {
        num: 21,
        picSrc: "pictures/m.jpg",
        transcription: "М",
        description: ""
    },
    {
        num: 22,
        picSrc: "pictures/n.jpg",
        transcription: "Н",
        description: ""
    },
    {
        num: 23,
        picSrc: "pictures/o.jpg",
        transcription: "О",
        description: ""
    },
    {
        num: 24,
        picSrc: "pictures/p.jpg",
        transcription: "П",
        description: ""
    },
    {
        num: 25,
        picSrc: "pictures/pp.jpg",
        transcription: "П",
        description: "с придыханием"
    },
    {
        num: 26,
        picSrc: "pictures/r.jpg",
        transcription: "Р",
        description: ""
    },
    {
        num: 27,
        picSrc: "pictures/s.jpg",
        transcription: "C",
        description: ""
    },
    {
        num: 28,
        picSrc: "pictures/sh.jpg",
        transcription: "Ш",
        description: ""
    },
    {
        num: 29,
        picSrc: "pictures/t.jpg",
        transcription: "Т",
        description: ""
    },
    {
        num: 30,
        picSrc: "pictures/tt.jpg",
        transcription: "Т",
        description: "с придыханием"
    },
    {
        num: 31,
        picSrc: "pictures/u.jpg",
        transcription: "У",
        description: ""
    },
    {
        num: 32,
        picSrc: "pictures/v.jpg",
        transcription: "В",
        description: ""
    },
    {
        num: 33,
        picSrc: "pictures/z.jpg",
        transcription: "З",
        description: ""
    }
];

const keyboard =`<div id="allKey"; style="display: flex; flex-wrap: wrap; justify-content: space-around;">
<button id="b1"; class="keyboard"><b>А</b></button>
<button id="b2"; class="keyboard"><b>Б</b></button>
<button id="b3"; class="keyboard"><b>Ц</b></button>
<button id="b4"; class="keyboard"><b>Ц</b> резко</button>
<button id="b5"; class="keyboard"><b>Ч</b></button>
<button id="b6"; class="keyboard"><b>Ч</b> резко</button>
<button id="b7"; class="keyboard"><b>Д</b></button>
<button id="b8"; class="keyboard"><b>ДЖ</b> звонко</button>
<button id="b9"; class="keyboard"><b>ДЗ</b> звонко</button>
<button id="b10"; class="keyboard"><b>Э</b></button>
<button id="b11"; class="keyboard"><b>Г</b></button>
<button id="b12"; class="keyboard"><b>Г</b> с выдохом</button>
<button id="b13"; class="keyboard"><b>Х</b></button>
<button id="b14"; class="keyboard"><b>Х</b> с придыханием</button>
<button id="b15"; class="keyboard"><b>И</b></button>
<button id="b16"; class="keyboard"><b>Ж</b></button>
<button id="b17"; class="keyboard"><b>К</b></button>
<button id="b18"; class="keyboard"><b>К</b> с придыханием</button>
<button id="b19"; class="keyboard"><b>К</b> гортанный</button>
<button id="b20"; class="keyboard"><b>Л</b></button>
<button id="b21"; class="keyboard"><b>М</b></button>
<button id="b22"; class="keyboard"><b>Н</b></button>
<button id="b23"; class="keyboard"><b>О</b></button>
<button id="b24"; class="keyboard"><b>П</b></button>
<button id="b25"; class="keyboard"><b>П</b> с придыханием</button>
<button id="b26"; class="keyboard"><b>Р</b></button>
<button id="b27"; class="keyboard"><b>С</b></button>
<button id="b28"; class="keyboard"><b>Ш</b></button>
<button id="b29"; class="keyboard"><b>Т</b></button>
<button id="b30"; class="keyboard"><b>Т</b> с придыханием</button>
<button id="b31"; class="keyboard"><b>У</b></button>
<button id="b32"; class="keyboard"><b>В</b></button>
<button id="b33"; class="keyboard"><b>З</b></button>
<button id="stop"><b>Выход.</b></button>
</div>`;

const oneWindow = document.querySelectorAll("#window1")[0];
const twoWindow = document.querySelectorAll("#window2")[0];
const threeWindow = document.querySelectorAll("#window3")[0];
const footerWindow = document.querySelectorAll("#window4")[0];


let numAll = 0;
let numTrue = 0;
let numFalse = 0;
let numRes = 0;
let newLetter;

let srcPic = "pictures/alphabet.jpg";

function randomLetter() {
    return arrAlphabet[Math.floor(Math.random() * (33 - 1)) + 1];
}

function updateWindowOne() {
    oneWindow.innerHTML = `<h2>Ваш результат.</h2> <p>Всего: ${numAll}</p> <p>Верно: ${numTrue}</p>
                            <p>Неверно: ${numFalse}</p> <p>Результат: ${numRes}%</p>`;
   
}

function updateWindowTwo() {
twoWindow.innerHTML = `<button id="help"><p>Подсказка</p></button><img src=${srcPic} style='width: 50%;'>`;
twoWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center";
}

function update2WindowThree() {
    threeWindow.innerHTML = `<h2>Для начала нажмите старт.</h2> 
    <button id="btn1"; style='background-color: yellow; border-radius: 0.5vw; width: 50%; height: 3vw;'>Start.</button> 
    <p>Для грузинской буквы выбираем русскую транскрипцию.</p>`;
    threeWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function updateWindowThree() {
    threeWindow.innerHTML = `<h2>Для начала нажмите старт.</h2> 
                        <button id="btn1"><p>Start.</p></button> 
                        <p>Для грузинской буквы выбираем русскую транскрипцию.</p>`;
    threeWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function updateWindowFooter() {
    footerWindow.innerHTML = `<p>Tkachev D. A.</p>`;
    footerWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function answer(str1) {
    twoWindow.innerHTML = `${str1}`;
    twoWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function start() {
    newLetter = randomLetter();
    srcPic = newLetter.picSrc;
    updateWindowTwo();
    threeWindow.innerHTML = `<h4>Выбери правильный ответ.</h4>
    ${keyboard}`;

    const btnStop = document.querySelector("#stop");
    btnStop.onclick = function() {
        srcPic = "pictures/alphabet.jpg";
        updateWindowOne();
        updateWindowTwo();
        updateWindowThree();
        btnStart = document.querySelector("#btn1");
        console.dir (btnStop)
        btnStart.onclick = () => start();
    }
    let btn;
    for (let i = 1; i <= 33; i++) {
        console.log(i);
        btn = document.querySelector(`#b${i}`);
        btn.onclick = (() => {
            let ind = i;
            if (newLetter.num === ind) {
                answer(`<h2>Верно.</h2>`);
                ++numAll;
                ++numTrue;
                numRes = Math.trunc(numTrue / numAll * 100);
                updateWindowOne();
                setTimeout(() => start(), 1000);
            } else {
                answer(`<h2>Неверно.</h2><h2>Правильный ответ</h2><h1 style="color: red;">${newLetter.transcription + " " + newLetter.description}</h1>`);
                ++numAll;
                ++numFalse;
                numRes = Math.trunc(numTrue / numAll * 100);
                updateWindowOne();
                setTimeout(() => start(), 1000);
            }
        });
        let btnHelp = document.querySelector("#help");
        btnHelp.onclick = (() => {
            answer(`<h1>${newLetter.transcription} ${newLetter.description}</h1>`);
            setTimeout(() => updateWindowTwo(), 1000);
        });
    }
}

updateWindowOne();
updateWindowTwo();
updateWindowThree();
updateWindowFooter();

let btnStart = document.querySelector("#btn1");
btnStart.onclick = () => start();


       








