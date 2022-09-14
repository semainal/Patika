let username = prompt("Kullanıcı Adınız: ");
let age = prompt("Yaşınız: ");
let info = document.querySelector("#info");

if (username && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz.";
} else if(!username) {
    info.innerHTML = "Kullanı adınız yok";
} else if (!(age >=18)) {
    info.innerHTML = "Yaş bilginiz yok veya yaşınız tutmuyor";
} 