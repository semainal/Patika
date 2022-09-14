// karşılaştırma operatörleri ve mantıksal operatöler


let price = "100";
let user = "hakan";
// == eşitse

// console.log("== :", price == 1); // false
// console.log("== :", price == 100); // true

// === hem değeri hem de türü eşitse
// console.log("=== :",price ===1); //  false
// console.log("=== :",price ===100); // false

// != Eşit değilse
console.log(price != "guest"); // true

// < küçükse

console.log(price < 1000); // true

// > büyükse

console.log(price > 200); // false

// <== küçük veya eşitse

console.log(price <= 100) // true

// <== büyük veya eşitse

console.log(price >= 100) // true

// && ve

price =0;
console.log(price >0  && user != "guest") // false

// || veya

console.log(price > 0 || user != "guest"); //true

// ! değil (tersi)
user = "guest";
price =1;
console.log(price >0 && !user == "guest"); // false


user ="guest";
price =1;

console.log(price >0 && user == "guest");