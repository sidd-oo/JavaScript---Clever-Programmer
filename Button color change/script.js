let allButtons = document.getElementsByTagName('button');
let copyAllButtons = [];
let currentBtnStatus = [];

for(let i = 0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[0]);
}

console.log(allButtons);
console.log(copyAllButtons);

function buttonColorChange(choice){
    if(choice.value === 'red'){
        redColorChange();
    }else if(choice.value === 'green'){
        greenColorChange();
    }else if(choice.value === 'reset'){
        resetColors();
    }else{
        //random colors
        randomColors();
    }
}

function resetColors(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add(copyAllButtons[i])
    }

        //Testing
        for(let i = 0; i < allButtons.length; i++){
            currentBtnStatus.push(allButtons[i].classList[0]);
        }
        console.log(currentBtnStatus);
        currentBtnStatus = [];
}

function randomColors(){
    let choices = ["redButtons", "greenButtons", "blueButtons", "yellowButtons", "whiteButtons", "pinkButtons"];
    for(let i = 0; i < allButtons.length; i++){
        let randomColorNumber = Math.floor(Math.random()*6);
        allButtons[i].classList.remove(allButtons[i].classList[i]);
        allButtons[i].classList.add(choices[randomColorNumber]);
    }

        //Testing
        for(let i = 0; i < allButtons.length; i++){
            currentBtnStatus.push(allButtons[i].classList[0]);
        }
        console.log(currentBtnStatus);
        currentBtnStatus = [];
}

function redColorChange(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add("redButtons");
    }

        //Testing
        for(let i = 0; i < allButtons.length; i++){
            currentBtnStatus.push(allButtons[i].classList[0]);
        }
        console.log(currentBtnStatus);
        currentBtnStatus = [];
}

function greenColorChange(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add("greenButtons");
    }
        //Testing
        for(let i = 0; i < allButtons.length; i++){
            currentBtnStatus.push(allButtons[i].classList[0]);
        }
        console.log(currentBtnStatus);  
        currentBtnStatus = [];
}