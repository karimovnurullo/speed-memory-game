const gameDiv = document.querySelector('.game');
const boxs = document.querySelectorAll('.box');
let randomBox = Math.floor(Math.random() * 9);

let boxNumber = 16;
let gridNum = boxNumber === 36 ? boxNumber / 6 : boxNumber === 25 ? boxNumber / 5 : boxNumber === 4 ? boxNumber / 2 : boxNumber / 4;
gameDiv.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
gameDiv.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

/**
 * grid number 9, 16, 25, 36,
 * agar num === 9, 16 let gridNum2 = boxNumber / 4;
 * agar num === 25 let gridNum2 = boxNumber / 5;
 * agar num === 36 let gridNum2 = boxNumber / 6;
 */

let arr = [];
function renderRandom() {
    arr = [];
    for (let i = 0; i < Math.floor(boxNumber / 4); i++) {
        let randomNumber = Math.floor(Math.random() * boxNumber);
        while (arr.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * boxNumber);
        }
        arr.push(randomNumber);
    }
    return arr
}
renderRandom();
console.log("renderRandom", renderRandom());

function renderBoxs() {
    let clickedBox = [];
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < boxNumber; i++) {
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        if (arr.includes(i)) {
            newBox.classList.add('show');
            setTimeout(() => {
                newBox.classList.remove('show');
            }, 500);
            newBox.addEventListener('click', () => {
                newBox.classList.add('show');
            });
        }
        newBox.addEventListener('click', (e) => {
            clickedBox.push(i);
            newBox.classList.add('active');
            if (!arr.includes(i)) {
                newBox.classList.add('wrong');
                setTimeout(() => {
                    newBox.classList.remove('wrong');
                    newBox.classList.remove('active');
                }, 700);
            }
            if (arr.includes(i)) {
                newBox.classList.add('show');
            }
        });
        fragment.appendChild(newBox);
    }
    gameDiv.appendChild(fragment);
}
renderBoxs();