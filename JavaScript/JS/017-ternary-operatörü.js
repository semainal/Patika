// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let username = prompt("Kullanıcı Bilginizi yazınız: ");

let info = document.querySelector("#info");


//ternary kullanımı
// koşul ? doğruysa : yanlışsa

info.innerHTML = `${username ? username :"Kullanıcı bilginiz bulunamadı :("}`