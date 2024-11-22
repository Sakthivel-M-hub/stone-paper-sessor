const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const sesser = document.querySelector("#sesser");
const playerChoice = document.querySelector("#playerchoice");
const computerChoice = document.querySelector("#computerchoice");
const result = document.querySelector("#display")
const playerSelectionList = document.querySelector("#playerselectionlist")

function setIcon(){
    playerChoice.style.backgroundRepeat ='no-repeat';
    playerChoice.style.width = '200px';
    playerChoice.style.height = '200px';
    playerChoice.style.backgroundPosition = 'center';
    computerChoice.style.backgroundRepeat ='no-repeat';
    computerChoice.style.width = '200px';
    computerChoice.style.height = '200px';
    computerChoice.style.backgroundPosition = 'center';
};

function systemPlay(){
    if (onClick=playerChoice){
        //console.log("start");
        let computerSelection = Math.floor(Math.random()*3);
        console.log(computerSelection);
            let computer = 
            computerSelection===1?stone
            : computerSelection===2?paper
            : sesser;
            console.log(computer)
            let imageResult=
             //console.log(playerChoice)
             //stone!=computer
             stone&&computer===stone?computerChoice.style.backgroundImage='url("https://cdn-icons-png.flaticon.com/128/3562/3562093.png")':
             stone&&computer===paper? computerChoice.style.backgroundImage= 'url("https://cdn-icons-png.flaticon.com/128/3179/3179232.png")':
             //console.log("you win");
            //let paperResult=
             paper&&computer===paper?computerChoice.style.backgroundImage= 'url("https://cdn-icons-png.flaticon.com/128/3179/3179232.png")':
             paper&&computer===sesser? computerChoice.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/9437/9437548.png")':
             //console.log("you win");
            //let sesserResult=
             sesser&&computer===sesser?computerChoice.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/9437/9437548.png")':
             sesser&&computer===stone? computerChoice.style.backgroundImage='url("https://cdn-icons-png.flaticon.com/128/3562/3562093.png")':
             console.log("you win");
         }
         
}

function showResult(){
    let displayResult =
    //playerChoice.stone==computerChoice.stone?console.log("match tie"):
    //playerChoice.stone==computerChoice.paper?console.log("you lose "):
    playerChoice.style.backgroundImage==computerChoice.style.backgroundImage?matchTie():
    playerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/3562/3562093.png")'&&computerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/3179/3179232.png")'?lose():
    playerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/3179/3179232.png")'&&computerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/9437/9437548.png")'?lose():
    playerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/9437/9437548.png")'&&computerChoice.style.backgroundImage=='url("https://cdn-icons-png.flaticon.com/128/3562/3562093.png")'?lose():
    win();
}

function styleOfresult(){
    result.style.width = '200px';
    result.style.height = '200px';
    result.backgroundSize='auto';
    result.style.backgroundPosition='center';
}

function win(){
    result.style.backgroundImage='url("https://cdn-icons-gif.flaticon.com/6172/6172530.gif")';
    styleOfresult();
}

function lose(){
    result.style.backgroundImage='url("https://cdn-icons-png.flaticon.com/128/153/153739.png")';
    styleOfresult();
}

function matchTie(){
    result.style.backgroundImage='url("https://cdn-icons-png.flaticon.com/128/4626/4626815.png")';
    styleOfresult();
}


stone.addEventListener("click",(event)=>{
    //event.preventDefault();
    playerChoice.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/3562/3562093.png")';
    setIcon();
    systemPlay();
    showResult();
    console.log("stone clicked")
})

paper.addEventListener("click",(event)=>{
    playerChoice.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/3179/3179232.png")';
    setIcon();
    systemPlay();
    showResult();
    console.log("paper clicked");
})

sesser.addEventListener("click",(event)=>{
    playerChoice.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/9437/9437548.png")';
    setIcon();
    systemPlay();
    showResult();
    console.log("sessor clicked");
})

