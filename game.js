let playerScore = 0;
let pcScore = 0;
let playerHand ;

//get my pick
function pcPick(){ 
    let hand;
   const choices = ['Rock', 'Paper', 'Scissors'];
   let random = Math.floor(Math.random() * choices.length);
   return choices[random];

} ;



function rock(){
    playerHand = 'Rock';
    let pcHand = pcPick();
    document.querySelector('.userPick').innerHTML = `<h1> User hand: ${playerHand}`;
    document.querySelector('.pcPick').innerHTML = `<h1> PC hand: ${pcHand}`;
    console.log(playerHand);
    
}
function paper(){
    playerHand = 'Paper';
    let pcHand = pcPick();
    document.querySelector('.userPick').innerHTML = `<h1> User hand: ${playerHand}`;
    document.querySelector('.pcPick').innerHTML = `<h1> PC hand: ${pcHand}`;
    console.log(playerHand);
    
}
function scissors(){
    playerHand = 'Scissors';
    let pcHand = pcPick();
    document.querySelector('.userPick').innerHTML = `<h1> User hand: ${playerHand}`;
    document.querySelector('.pcPick').innerHTML = `<h1> PC hand: ${pcHand}`;
    console.log(playerHand);
    
}
// get pc pick


let pcHand = pcPick();

//game 

function gameStart(playerHand ,pcHand ){


    if(playerHand === 'Rock'){
        if(pcHand === 'Paper'){
            pcScore = pcScore + 1;
            document.querySelector('.round').innerHTML = '<h1>Round: PC win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
            
        }else if(pcHand === 'Scissors'){
            playerScore = playerScore + 1;
            document.querySelector('.round').innerHTML = '<h1>Round: User win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
        
        }else if(playerHand === pcHand){
            document.querySelector('.round').innerHTML = '<h1>Round: Draw</h1>';
        }
    }
    
    if(playerHand === 'Paper'){
        if(pcHand === 'Scissors'){
            pcScore = pcScore + 1;
            document.querySelector('.round').innerHTML = '<h1>Round: PC win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
        
        }else if(pcHand === 'Rock'){
            playerScore = playerScore + 1;

            document.querySelector('.round').innerHTML = '<h1>Round: User win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
        
        }else if(playerHand === pcHand){
            document.querySelector('.round').innerHTML = '<h1>Round: Draw</h1>';
        }
    }
    
    if(playerHand === 'Scissors'){
        if(pcHand === 'Paper'){
            playerScore = playerScore + 1;
            document.querySelector('.round').innerHTML = '<h1>Round: PC win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
        
        }else if(pcHand === 'Rock'){
            pcScore = pcScore + 1;

            document.querySelector('.round').innerHTML = '<h1>Round: User win !</h1>';
            document.querySelector('.userScore').innerHTML = `<h1>User Score : ${playerScore}`;
            document.querySelector('.pcScore').innerHTML = `<h1>PC Score : ${pcScore}`;
        
        }else if(playerHand === pcHand){
            document.querySelector('.round').innerHTML = '<h1>Round: Draw</h1>';
        }
    }

    if(playerScore == 5 || pcScore == 5){

        document.getElementById('game').style.display = 'none';
        document.getElementById('endgame').innerHTML = `<h1>Final Score: Player = ${playerScore} , Pc Score = ${pcScore}`;

    }
    

}








    
   