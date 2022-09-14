// **** Let ve const ile değişken tanımlama

// **var ile değişken tanımala:

// var serverName = "api.kodluyoruz.org";
//console.log(serverName);

// **let ile değişkeni boş tanımlama:
let serverName;
console.log(serverName);

// **let ile değişkene bilgi atama:
serverName = "https://kodluyoruz.org"
console.log(serverName);

// **let ile değişkene bilgi atayarak tanımlama:

let password = "1234";
console.log(password);

// değişken ataması yapmadan önce kullanmaya çalışma:

/* HATALI KULLANIM
console.log(fullName);
fullName ="Sema İnal";
*/


fullName ="Sema İnal";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirme:

fullName = "Melis İnal"
console.log(fullName);

//birleştirme veya ekleme işlemi:

fullName = fullName + " Yeni eklenen Bilgi";
fullName += " Yeni bilgi ekledi"
console.log(fullName);

// const ile değişkeni boş tanımlamaya çalışma:
// const serverPassword = HATA ALIRSIN


// const ile değişken tanımlama:

const SERVER_PASSWORD = "12345";
console.log(SERVER_PASSWORD);


var x = true;

console.log(Boolean(x));