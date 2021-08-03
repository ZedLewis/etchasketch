const container = document.getElementById('container')
const btnBlack = document.getElementById('button')
const btnGrey = document.getElementById('button')
const btnRGB = document.getElementById('button')
const btnSize = document.getElementById('button')
const buttonsContainer = document.getElementById('buttons')

function createDivs(col,rows) {
    for (i = 0 ; i < (col * rows) ; i++){
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRow = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16, 16);