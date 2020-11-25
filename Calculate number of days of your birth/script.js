let countBtn = document.getElementById("count-btn");
let resetBtn = document.getElementById("reset-btn");
let h3Element = document.getElementById("result");

countBtn.addEventListener("click", countFunct);
resetBtn.addEventListener("click", resetFunct);

function countFunct(){
    let DOY = prompt("Enter your birth year");
    let noOfDays = calculate(DOY);
    h3Element.innerHTML = `Number of days since your birth is ${noOfDays} days`;
}

function calculate(DOY){
    return (2020 - DOY) * 365;
}

function resetFunct(){
    window.location.reload;
    h3Element.innerHTML = "";
}


