
// const btnBlack = document.getElementById('button')
// const btnGrey = document.getElementById('button')
// const btnRGB = document.getElementById('button')
// const btnSize = document.getElementById('button')
// const buttonsContainer = document.getElementById('buttons')


window.onload = function main() {
    const container = document.getElementById('container');
    
    createDivs(16, 16);
    greyBtn();
    blackBtn();
    rgbBtn();
}


// Function for creating rows, currently isn't adjustable within the browser. 

function createDivs(col,rows) {
    for (i = 0 ; i < (col * rows) ; i++){
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRow = `repeat(${rows}, 1fr)`;
        container.style.backgroundColor = 'white';
        container.appendChild(div).classList.add('box');
    }
}


// working grey and black buttons, RGB button seems to work with other colors so is functional, but can't get it working as random
function greyBtn() {
    const buttons = document.getElementById('buttonsContainer')
    const btnGrey = document.getElementById('greyBtn')
    const box = container.querySelectorAll('.box');
    btnGrey.textContent = 'Grey';
    btnGrey.addEventListener('click',  () =>{
        box.forEach(box => box.addEventListener('mouseover', () => {
        let Rnum = Math.floor(Math.random() * 255)
        box.style.backgroundColor = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
    }))
})
buttons.appendChild(btnGrey).classList.add('btn');
}

function blackBtn() {
    const buttons = document.getElementById('buttonsContainer')
    const btnBlack = document.getElementById('blackBtn')
    const box = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click',  () =>{
        box.forEach(box => box.addEventListener('mouseover', () => {
        let Rnum = Math.floor(Math.random() * 255)
        box.style.backgroundColor = 'black';
    }))
})
buttons.appendChild(btnBlack).classList.add('btn');
}

function rgbBtn() {
    const buttons = document.getElementById('buttonsContainer')
    const btnRgb = document.getElementById('rgbBtn')
    const box = container.querySelectorAll('.box');
    btnRgb.textContent = 'RGB';
    btnRgb.addEventListener('click',  () =>{
        box.forEach(box => box.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.backgroundColor = `rgb(${R}. ${G}, ${B})`;
    }))
})
buttons.appendChild(btnRgb).classList.add('btn');
}


