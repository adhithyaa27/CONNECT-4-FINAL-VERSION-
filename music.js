

function background() {
    const music = document.getElementById("music");
    music.volume = 0.5;
}

document.addEventListener("DOMContentLoaded", background);

var playbutton = document.querySelector('.playButtonDiv');
playbutton.addEventListener('click', () => {
    window.location.href = 'instructions.html';
});

function checkScreenWidth() {
    const isMobile = window.innerWidth < 766;
  
    if (isMobile) {
      showMobilePopup();
    } else {
      removeMobilePopup();
    }
  }
  
  function showMobilePopup() {
    document.getElementById("mobilePopup").style.display = "flex";
  }
  
  function removeMobilePopup() {
    document.getElementById("mobilePopup").style.display = "none";
  }
  
  window.addEventListener("DOMContentLoaded", checkScreenWidth);
  window.addEventListener("resize", checkScreenWidth);