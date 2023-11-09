var winner =document.getElementById("winner")

var result = window.localStorage.getItem("winner")

if (result=="Tie"){
    winner.innerText="Its a Tie"
}else{
    winner.innerText=`GAME WON BY ${result}`
}
var music = new Audio("./assets/a1.mp3")
       
music.play()
music.loop=true;

