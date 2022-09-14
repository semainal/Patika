// ***string veri türü

let email = "semainal35@gmail.com";
let firstName = "sema";
let lastName ="İNAL";



// string karakter sayısı => length
console.log(email.length);

//ilk karakteri bulma => [0];
console.log(firstName[0]);
console.log(lastName.charAt(2));

// büyük harf / küçük harf:
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName)
;
lastName = lastName.toLowerCase();
console.log(lastName);

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak => search
console.log(email.search("@"));
console.log(email[10]);

email.search("olmayan") // olmayan birşey aratırsam -1 döner

// belli bir yere kadar al => slice
console.log(email.slice(0,10));

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))) // sadece gmail kısmını aldık

// bilgiyi değiştir => replace
email = email.replace("gmail.com","kodluyoruz.com")
console.log(email);

// istediğim bilgi var mı? => includes
console.log(email.includes("djhhabkj")); // false
console.log(email.includes("@")); // true



// istediğim bilgiyle başladı mı - bitti mi? => startsWith, endswith

console.log(email.startsWith("s"));
console.log(email.endsWith("com"));

// ilk harflerini büyük yap
firstName = "firstname";
lastName = "lastname"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName);


