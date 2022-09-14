// prompt ile kullanıcıdan bilgi alma

let userName = prompt("Lütfen adınızı giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:aqua">${userName}<small>`
