var imgPanda = [{title: "panda1", path:"assets/img/1.jpg"},
                {title: "panda2", path:"assets/img/2.jpg"},
                {title: "panda3", path:"assets/img/3.jpg"},
                {title: "panda4", path:"assets/img/4.jpg"},]

function createImgPanda() {
  imgPanda.forEach(function(object) {
    var docFragment = document.createDocumentFragment();

    var divImg = document.createElement("div");
    divImg.classList.add("img-panda");
    docFragment.appendChild(divImg);

    var span = document.createElement("span");
    span.classList.add("close");
    var text = document.createTextNode("x");
    span.appendChild(text);
    divImg.appendChild(span);

    var img = document.createElement("img");
    img.setAttribute("src", object.path);
    img.setAttribute("alt", object.title);
    divImg.appendChild(img);

    var gallery = document.getElementsByClassName("gallery")[0];
    gallery.appendChild(docFragment);
  })
}

createImgPanda();
