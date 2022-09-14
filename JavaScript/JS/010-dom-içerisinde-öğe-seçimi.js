// let title = document.getElementsByTagName("h2");

let title = document.getElementById("title");
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML);

// let link = document.querySelector("ul#list>li>a");
let link = document.querySelector("#kodluyoruzLink");
link.innerHTML += " Değişti!!"
link.style.color = "pink";
link.classList.add("btn");
console.log(link);
