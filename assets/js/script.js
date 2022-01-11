if(screen.width < 768) {
 $("#wave").attr("src","assets/images/R.png");
 $("#footer").attr("style","background-image: url('assets/images/rodape.webp')"); 
 $(".fundo").attr("src","assets/images/Caixa de fala da cegonha.webp");
} else if(screen.width > 768) {
  $("#footer").attr("style","background-image: url('assets/images/Rectangle 220.webp')"); 
}

document.getElementById("azulMobile").addEventListener("click", function() {
  if(document.getElementById("azulMobile").classList.contains("activeBlue") == false) {
    document.getElementById("azulMobile").classList.add("activeBlue");
    document.getElementById("rosaMobile").classList.remove("activeRosa");
    document.getElementById("verdeMobile").classList.remove("activeVerde");
  }
});

document.getElementById("verdeMobile").addEventListener("click", function() {
  if(document.getElementById("verdeMobile").classList.contains("activeVerde") == false) {
    document.getElementById("verdeMobile").classList.add("activeVerde");
    document.getElementById("rosaMobile").classList.remove("activeRosa");
    document.getElementById("azulMobile").classList.remove("activeBlue");
  }
});

document.getElementById("rosaMobile").addEventListener("click", function() {
  if(document.getElementById("rosaMobile").classList.contains("activeRosa") == false) {
    document.getElementById("rosaMobile").classList.add("activeRosa");
    document.getElementById("azulMobile").classList.remove("activeBlue");
    document.getElementById("verdeMobile").classList.remove("activeVerde");
  }
});