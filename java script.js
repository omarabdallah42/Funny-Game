let score = document.getElementById('score');
let play = document.getElementById('play');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let randomNumber = Math.floor(Math.random() * 100);
let TotalScore = 0;
function RamdomNumber(){
    let nane = Math.floor(Math.random() * 100);
    let btn1 = button1.innerHTML = nane;
    let btn2= button2.innerHTML = nane + randomNumber;
    let btn3 = button3.innerHTML = nane - randomNumber;  
    let Buttons = [button1,button2,button3];
    let randomPick = Buttons[Math.floor(Math.random()*Buttons.length)]; // Random Items
    let buttons  = document.getElementsByClassName('button');
    function CreateRandom(){
        for(let i = 0;i<buttons.length;i++){
            if(randomPick == buttons[i]){
                TotalScore = TotalScore+.5;
                score.innerText = "Score : "+TotalScore;
                RamdomNumber();
                break;
            }else{
                TotalScore = TotalScore-.5;
                score.innerText = "Score : "+TotalScore;
                RamdomNumber();
                break;
            };
        };
    };
        button1.onclick = function(){
        if(button1.innerText ==nane){
            CreateRandom();
        }else{
            CreateRandom();
        };
        if (TotalScore ==11){
            window.alert('you are winner');
            TotalScore = 0;
        }
        CreateRandom();
    };
    button2.onclick = function(){
        if(button2.innerText ==nane){
            CreateRandom();
        }else{
            CreateRandom();
        };
        if (TotalScore ==11){
            window.alert('you are winner');
            TotalScore = 0;
        };
        CreateRandom();
    };
    button3.onclick = function(){
        if(button3.innerText == nane){
            CreateRandom();
        }else{
            CreateRandom();
        };
        if (TotalScore == 11){
            window.alert('you are winner');
            TotalScore = 0;
        };
        CreateRandom();
    };
};
play.onclick = function(){
    RamdomNumber();
};