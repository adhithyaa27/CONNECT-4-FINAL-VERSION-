var nickname = window.localStorage.getItem('name')
var yellow = document.getElementById('yellowinput')
yellow.innerText = nickname


var nickname2 = window.localStorage.getItem('name2')
var red = document.getElementById('redinput')
red.innerText = nickname2

function checkScreenWidth() {
    const isMobile = window.innerWidth < 766;
  
    if (isMobile) {
      showMobilePopup();
    } else {
      removeMobilePopup();
    }
  }
  
 


