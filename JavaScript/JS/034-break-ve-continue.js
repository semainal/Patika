const LOREM_LIST = [
    "lorem","ipsum","dolor","amet","consectetur","adipisicing","elit"
]

let counter = 0;

// for(; counter<10; counter++) {
//     console.log(counter)
//     if(counter ===5) {break}   // 5e kadar yazdırdı - 01234
// }

// for(; counter<10; counter++) {
    
//     if(counter ===5) {continue}  
//     console.log(counter) // 5ten sonra atladı - 012346789
// }


// const UL_DOM =document.querySelector("#userList");

// let index = 0;

// for(;index <LOREM_LIST.length; index ++) {
//     if(LOREM_LIST[index] == "dolor") {break}
//     let LI_DOM = document.createElement("li")
//     LI_DOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.appendChild(LI_DOM);
// }


const UL_DOM =document.querySelector("#userList");

let index = 0;

for(;index <LOREM_LIST.length; index ++) {
    if(LOREM_LIST[index] == "dolor") {continue}
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(LI_DOM);
}