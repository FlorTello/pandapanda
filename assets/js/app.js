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
    //if (e.target.parentNode){
    //  e.target.parentNode.remove();
    //}
  })
}
