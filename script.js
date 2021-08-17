
window.onload = function main() {
    const container = document.getElementById('container');
    createDivs(16, 16);
    greyBtn();
    blackBtn();
    rgbBtn();
    clear();
}



// Function for creating divs, trying to make this work properly when pressing the clear button to adjust size

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


// Three button functions to change color on etch a sketch.
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
        box.setAttribute('style', generateRandomColors())
    }))
})
buttons.appendChild(btnRgb).classList.add('btn');
}

// Function used with RGB button to pick random colors 
function generateRandomColors () {
    let str = []
    for (let i = 0; i < 3; i++) {
      str.push(Math.floor(Math.random() * 255));
    }
    return(`background-color: rgb(${str})`)
  }

// Button to reset squares to original state
function clear() {
    const buttons = document.getElementById('buttonsContainer')
    const clrbtn = document.getElementById('clear');
    const wholeGrid = container.querySelectorAll('div');
    clrbtn.textContent = 'Clear';
    clrbtn.addEventListener('click', () => {
        wholeGrid.forEach(div => div.style.backgroundColor = '#fff');
        wholeGrid.forEach(div => div.style.border = '1px solid black');
        let user = prompt('What size do you want your grid to be?');
        //Doesn't seem to work when changing size, impression I'm getting is it's stacking on the current function call of 16,16 and creating a weird rectanular shape? Or not recognizing the div layout from previous function
        if(user === null || user < 1) {
            createDivs(16, 16);
            greyBtn();
            blackBtn();
            rgbBtn();
            clear();
        }
        else{
            createDivs(user, user);
            greyBtn();
            blackBtn();
            rgbBtn();
            clear();
        }
    })
buttons.appendChild(clrbtn).classList.add('btn');    
}

