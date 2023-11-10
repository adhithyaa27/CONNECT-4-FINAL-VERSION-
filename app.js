var nickname = document.getElementById('input1')

var nickname2 = document.getElementById('input2')

var button = document.getElementById("letsplay")


button.onclick =()=>{
  console.log(nickname)
    let nickname1 = nickname.value

    window.localStorage.setItem('name',nickname1)
    let nickname3 = nickname2.value
    window.localStorage.setItem('name2',nickname3)

}
var music = new Audio("./assets/a1.mp3")
       
music.play()
music.loop=true;

function checkScreenWidth() {
  const isMobile = window.innerWidth < 766;

  if (isMobile) {
    showMobilePopup();
  } else {
    removeMobilePopup();
  }
}

