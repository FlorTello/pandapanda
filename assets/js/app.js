var origenArt = document.getElementById("origen-article");
var origen = document.getElementById("origen-btn").addEventListener("click", function (e) {
  origenArt.classList.toggle("hidden");
})

var historiaArt = document.getElementById("historia-article");
var historia = document.getElementById("historia-btn").addEventListener("click", function(e) {
  historiaArt.classList.toggle("hidden");
})

var closeBtns = document.getElementsByClassName("close");
for (var i=0; i<closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function(e) {
    var parent = e.target.parentNode;
    parent.classList.add("none");
  })
}

var imgPanda = document.getElementsByClassName("img-panda");
var restaurar = document.getElementById("restaurar-btn").addEventListener("click", function(e) {
  for (var i=0; i<imgPanda.length; i++) {
    imgPanda[i].classList.remove("none");
  }
})
