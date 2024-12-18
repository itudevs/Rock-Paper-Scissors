
score=null;
rounds=0;
score=(score===null)?{wins:0,losses:0,ties:0}:JSON.parse(localStorage.getItem('score'));
function genMove(StrMove)
{
 if (rounds===5)
 {
  if (score.wins>score.losses)
  {
    document.querySelector('.Result').innerText=`You Win`
  }
 else if (score.losses>score.wins)
  {
document.querySelector('.Result').innerText=`You Lose,Try Again`
  }
  else{
    document.querySelector('.Result').innerText=`Tie,Try Again`
  }

 }
 else{

 
 let  rNumber=Math.random();
let computermove=null;
if (rNumber>=0 && rNumber<1/3){
 computermove='Rock';
}else if (rNumber>=1/3 && rNumber<2/3)
{
  computermove='Paper';
}
else if (rNumber>=2/3 && rNumber<1)
{
  computermove='Scissors';
}
console.log(computermove);
let Output='';  

Output = (computermove === StrMove) ? 'Tie' :
    (computermove === 'Rock' && StrMove === 'Scissors') || 
    (computermove === 'Paper' && StrMove === 'Rock') || 
    (computermove === 'Scissors' && StrMove === 'Paper') ? 'Lose' : 'Win';
    score.wins+=(Output==='Win')? 1:0;score.losses+=(Output==='Lose')? 1:0;score.ties+=(Output==='Tie') ? 1 :0;  
 localStorage.setItem('score',JSON.stringify(score));
 ++rounds;
 UpdateScore();
 Result(StrMove,computermove,Output);
}
}
function UpdateScore(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
 }
 function Result(StrMove,computermove,Output){
    document.querySelector('.js-result').innerHTML=`You picked <img class="JsImages" src="Images/${StrMove}.jpg" ">, Computer picked <img class="JsImages" src="Images/${computermove}.jpg" > , result ${Output}
  `;
 }
function restscore()
{
   score.wins=0;
   score.losses=0;
   score.ties=0; 
   localStorage.removeItem('score');
   UpdateScore(); 
}