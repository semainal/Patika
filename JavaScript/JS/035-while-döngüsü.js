let counter = 0;

while(counter < 10) {
    console.log(counter);
    counter ++;

}

let userName = "";

// while (userName == "") // alttaki şekilde de kullanabiliriz.
while (!userName) {
   userName = prompt("Kullanıcı Adınızı Giriniz");
   console.log(userName);
}