let hitrn=0;

function makeBubble(){
    let clutter="";

for(let i=1; i<=165; i++){
    let rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;

}

document.querySelector('#pbtm').innerHTML=clutter;
}
makeBubble();

let timer=60;
function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#timervalue').textContent = timer;
        }
        
        else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML=`<h1>GAME OVER</h1>`;
        }
    }, 1000);
}
runTimer();


function getHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
}
getHit();

let score=0;
function increaseScore(){
    score +=10;
    document.querySelector('#scorevalue').textContent=score;
}
document.querySelector('#pbtm').addEventListener('click', function(details){
    // alert('running');
    // console.log(Number(details.target.textContent));//target wo hota hai jispe click hua ho
//    Number converts string to (number)
    // console.log(details.target.textContent);
    let clickedNumber=Number(details.target.textContent);
    if(clickedNumber===hitrn){
        increaseScore();
        makeBubble();
        getHit();
    }

});
// increaseScore();