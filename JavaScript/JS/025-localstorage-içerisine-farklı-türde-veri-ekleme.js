let user = {userName: "Semainal", isActive: true};

// Normalde key-value şeklinde verilen bilgi key olarak tek başına geliyor.
// ama daha komplex bir yapı olduğu zaman, array gibi o zaman
// JSON a ihtiyaç var. veriyi stringe çevirmek için localStorage.setItem
//(" ",JSON.stringify), // bilgiyi geri çevirmek için JSON.parse, 
// bilgiyi geri almak içinde getItem ı kullanıyoruz.

localStorage.setItem("userInfo",JSON.stringify(user)); 

let userInfo = localStorage.getItem("userInfo"); // bilgiyi al
userInfo = JSON.parse(userInfo);

console.log(userInfo)


let items = [1,2,3,user];

localStorage.setItem("newItem",JSON.stringify(items));
localStorage.getItem("newItem");
localStorage.parse(items);


console.log(items);




