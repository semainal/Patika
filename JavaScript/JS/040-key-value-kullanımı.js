let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg":2,
    model_name: "Macbook Pro",
    modelName: "Macbook Pro",
}


//doğru anahtar bilgisi oluşturmak
console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1["2kg"]);
console.log(laptop1["modelName"]);


// varolan anahtar bilgisininin değerini değiştirmek

laptop1.brand = "Mac";
console.log(laptop1.brand);
laptop1["brand"] = "Mac 1";
console.log(laptop1);

// yeni değer eklemek
laptop1.version = "1.2.5";
console.log(laptop1);


// anahtar bilgilerine ulaşmak (keys) => object.keys(item)

keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])

} );

//değer bilgilerine ulaşmak (value) => object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log(value)
    console.log(laptop1[value])
})


let settings = {
    password: 1234,
    userName: "user1",
}

console.log(settings);