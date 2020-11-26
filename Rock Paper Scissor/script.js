function rpsGame(yourChoice){
    let humanChoice = yourChoice.id;
    let botChoice = botRandomChoice();
    console.log(humanChoice + " : " + botChoice);
    let result = findWinner(humanChoice, botChoice);
    let message = finalMessageDB(result);
    frontEndDisplay(humanChoice, botChoice, message);
}

function botRandomChoice(){
    return ['rock', 'paper', 'scissor'][Math.floor(Math.random()*3)];
}

function findWinner(humanChoice, botChoice){
    let database = {
        'rock':{'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0}
    };
    return database[humanChoice][botChoice]
}

function finalMessageDB(yourScore){
    if(yourScore === 0){
        return {"message": "You've lost.", "color":"red"};
    }else if(yourScore === 0.5){
        return {"message": "Tie.", "color":"orange"};
    }else{
        return {"message": "You've won.", "color":"green"};
    }
}

function frontEndDisplay(humanChoice, botChoice, message){
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    let myChoiceDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let botChoiceDiv = document.createElement("div");


    myChoiceDiv.innerHTML = "<img src = './Rock Paper Scissor/images/"+humanChoice +"-img.png' width = '150px' height = '150px' >";
    messageDiv.innerHTML = "<h2 style = 'color: "+message['color']+"; padding-top:10px; font-size:40px'>"+message['message']+ "</h2>";
    botChoiceDiv.innerHTML = "<img src = './Rock Paper Scissor/images/"+botChoice +"-img.png' width = '150px' height = '150px'>";

    let flexContainer = document.getElementById('flex-box-rps');
    flexContainer.appendChild(myChoiceDiv);
    flexContainer.appendChild(messageDiv);
    flexContainer.appendChild(botChoiceDiv);
}