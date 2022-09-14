// kullanıcı bilgisi varsa ekranan ismini yazdır

// eğer (username.lenght >0) {
    //console.log(username)} değilse {console.log("bilgi yok")}


let username = prompt("Kullanıcı adınızı Giriniz: ")

if (username.length > 0) { // if kısmı her zaman true ise çalışır
    console.log(`Kullanıcı Bilginiz: ${username}`);
} else {
    console.log("Bilgi Yok");
}