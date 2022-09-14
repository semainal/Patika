let items = [10,20,30,40, ]
console.log("items - ilk hali: ", items);

// array - sona öğe ekleme -> push

items.push(50);
console.log("50: ", items);

// array - başa öğe ekleme -> unshift

items.unshift(0);
console.log("0: ", items);

// array - sondaki öğeyi çıkartma -> pop
let lastItem = items.pop()  // son elemanı lastItem içerisine ekledik.
// ne sildiğimizi bilmiyoruz çünkü
console.log(lastItem, items);


// array - baştaki öğeyi çıkartma -> shift

items.shift();

let firstItem = items.shift();
console.log(firstItem, items);

// array içindeki bir öğenin bilgisinin değiştirilmesi - ilk öğe

items[0] = 5;
console.log(items);

// array içindeki bir öğenin bilgisinin değiştirilmesi - son öğe

items[items.length-1] = 100;
console.log(items);