let userName = prompt ("Adınız: ").toUpperCase();
let info = document.querySelector("#box");

const todayTime = new Date();
let hours = todayTime.getHours();
let minutes = todayTime.getMinutes();
let date = todayTime.getDate();
let month = todayTime.getMonth();
let year = todayTime.getFullYear();
let seconds = todayTime.getSeconds();
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
];

let day = days[todayTime.getDay()];

let text = document.querySelector(".text");

text = `Merhaba ${userName}. Hoş geldin! Bugün  ${date}. ${month+1}. ${year} / ${day} tarihinde 
Kodluyoruz Frontend Web Development Patikası'nın JavaScript bölümü 1.Ödevindeyiz. Şu an saat: ${hours}:${minutes}:${seconds}.`

if (userName) {
    info.innerHTML = text;
}

