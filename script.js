'use strict';
const arrAlphabet = [  //Буквы в виде оъектов. Номер\путь к картинке\транскрипция\описание
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
// ------------------------------------------------
// Клавиатура / сохраняем в константу

const keyboard =`<div style="display: flex; flex-wrap: wrap; justify-content: space-around;"> 
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

const oneWindow = document.querySelectorAll("#window1")[0];   // Получаем достум к первому окну с результатами
const twoWindow = document.querySelectorAll("#window2")[0];   // Получаем доступ к второму окну с алфавитом\буквами
const threeWindow = document.querySelectorAll("#window3")[0];  // Получаем доступ к третьему окну старт\клавиатура
const footerWindow = document.querySelectorAll("#window4")[0]; // Получаем доступ к Футеру

// -------------------------
//Переменные
let numAll = 0;    //  Всего ответов
let numTrue = 0;   //  Правильных ответов
let numFalse = 0;  //  Неправильных ответов
let numRes = 0;    //  Результат в процентах
let newLetter;     //  Хранится случайный объект буква

let srcPic = "pictures/alphabet.png";  // Путь к начальной картинке Грузинский алфавит

function randomLetter() {  // Функция рандомного получения объекта буквы
    return arrAlphabet[Math.floor(Math.random() * (33 - 1)) + 1];
}

function updateWindowOne() {   //Функция заполнения первого окна
    oneWindow.innerHTML = `<h2>Ваш результат.</h2> <p>Всего: ${numAll}</p> <p>Верно: ${numTrue}</p>
                            <p>Неверно: ${numFalse}</p> <p>Результат: ${numRes}%</p>`;
}

function updateWindowTwo() {   //Функция заполнения второго окна
    twoWindow.innerHTML = `<button id="help"><p>Подсказка</p></button><img id="imgAlph" src=${srcPic} style='width: 50%;'>`;
    twoWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center";
}

function updateWindowThree() {  //Функция заполнения Третьего окна
    threeWindow.innerHTML = `<h2>Для начала нажмите старт.</h2> 
                        <button id="btn1"><p>Start.</p></button> 
                        <p>Для грузинской буквы выбираем русскую транскрипцию.</p>`;
    threeWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function updateWindowFooter() {  // Функция заполнения футера
    footerWindow.innerHTML = `<img class="bolt1" src="pictures/bolt.png"><p>Tkachev D. A.</p><img class="bolt2" src="pictures/bolt.png">`;
}

function answer(str1) {  // Функция диалога Верно\Неверно 
    twoWindow.innerHTML = `${str1}`;
    twoWindow.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1vw";
}

function outputKeyboard() {   // Клавиатура для третьего окна
    threeWindow.innerHTML = `<h4>Выбери правильный ответ.</h4>
    ${keyboard}`;
}

//-----------------------------
// Вход по кнопке Stert
function start() {   // Главная функция\ весь алгоритм работы тренажера здесь
    newLetter = randomLetter();    //  Получаем случайный объект букву Грузинского алфавита
    srcPic = newLetter.picSrc;     //  Получаем путь к картинке буквы из объекта
    updateWindowTwo();             //  Заполняем второе окно
    outputKeyboard()               //  Меняем содержимое третьего окна \ выводим клавиатуру

    //--------------------------
    // Вsход по кнопке Выход (Stop)
    const btnStop = document.querySelector("#stop");  // Получаем доступ к кнопке Stop
    btnStop.onclick = function() {       // Ожидаем нажатия кнопки Stop и после нажатия выполняем функцию
        srcPic = "pictures/alphabet.png";  // Меняем картинку буквы на алфавит
        updateWindowOne();       // Обновляем окно один
        updateWindowTwo();         // Обновляем окно два
        updateWindowThree();          // Обновляем окно три

        //----------------------
        // Выходим на начальный экран с сохранением результатов
        btnStart = document.querySelector("#btn1");      // Получаем доступ к кнопке Start
        btnStart.onclick = () => start();           // Ожидаем нажатия кнопки Start и затем запускаем функцию start()
        
        const btnAlphabet = document.querySelector("#help");  // Получаем доступ к кнопке "подсказка" на начальном экране
        btnAlphabet.onclick = () => {    // Когда кнопка нажимается запускается функция
            const img = document.querySelector("#imgAlph")   // Получаем доступ к картинке алфавита
            img.style.cssText ="position: absolute; height: 100%";    // Меняем стили для увеличения картинки
            img.onclick = () => {   // Ждем клика на картинку и запускаем функцию
                img.style.cssText ="position: static; width: 50%;";  // Возвращаем стили в предыдущее состояние
            }
        }; 
    }
    let btn;    // Задается переменная для кнопок клавиатуры
    for (let i = 1; i <= 33; i++) {      // Цикл для всех 33 кнопок

        btn = document.querySelector(`#b${i}`);  //Получаем доступ к каждой кнопке клавиатура Грузинского алфавита по id 
        btn.onclick = (() => {   // Для каждой нажатой кнопки алфавита будет выполнена функция
            // -----------------------------
            // Проверяем правильность ответа Верно\Неверно
            // id кнопок на клавиатуре Грузинского алфавита (id="b1" и тд) соответствует номеру 
            // объекта буквы newLetter.num.

            if (newLetter.num === i) {    // Если номер объекта и номер буквы в алфавите равно, то ответ: Верно
                answer(`<h2 class="trueAnswer">Верно.</h2>`);   // Выводим результат во второе окно
                ++numAll;     // Увеличиваем в первом окне всего на 1 
                ++numTrue;     // Увеличиваем в первом окне вверно на 1 
                numRes = Math.trunc(numTrue / numAll * 100);    // Считаем процент результата
                updateWindowOne();     // Обновляем первое окно
                setTimeout(() => start(), 2000);  // Запускаем функцию start() заново с задержкой
            } else {   // Иначе ответ: Неверно
                answer(`<h2 class="falseText1">Неверно.</h2><h2>Правильный ответ:</h2><h1 class="falseText2">${newLetter.transcription}</h1><h1 style="color: red">${newLetter.description}</h1>`);  // Выводим результат во второе окно
                ++numAll;     // Увеличиваем в первом окне всего на 1 
                ++numFalse;   // Увеличиваем в первом окне неверно на 1 
                numRes = Math.trunc(numTrue / numAll * 100);     // Считаем процент результата    
                updateWindowOne();         // Обновляем первое окно 
                setTimeout(() => start(), 2000);   // Запускаем функцию start() заново с задержкой
            }
        });
    }
    const btnHelp = document.querySelector("#help");  // Получаем доступ к кнопке "подсказка"
    btnHelp.onclick = (() => {   // При нажатии выполняется функция
        answer(`<h1 class="helpText">${newLetter.transcription}</h1><h1>${newLetter.description}</h1>`);  // Выводим подсказку
        setTimeout(() => updateWindowTwo(), 2000);   // Задержка 3с 
    });

}

// ------------------------------------------------------------------
// Здесь происходит старт JS

updateWindowOne();     // Заполняем первое окно 
updateWindowTwo();     // Заполняем второе окно
updateWindowThree();   // Заполняем третье окно
updateWindowFooter();  // Заполняем футер

const btnAlphabet = document.querySelector("#help");  // Получаем доступ к кнопке "подсказка" на начальном экране
btnAlphabet.onclick = () => {   // При нажатии кнопки запускается функция
    const img = document.querySelector("#imgAlph");  // Получаем доступ к картинке Алфавит
    img.style.cssText ="position: absolute; height: 100%";  // Для увеличения картинки меняем стили
    img.onclick = () => {   // Функция запускается при нажатии на картинку
        img.style.cssText ="position: static; width: 50%;";  // Стили возвращаются в прежнее состояние и картинка тоже
    }
};

let btnStart = document.querySelector("#btn1");  //  Получаем доступ к кнопке Start
btnStart.onclick = () => start();  //  Ждем нажатия кнопки Start \ После нажатия Start запускаем функцию start()


       








