const PRODUCTS = ["Laptop","Phone","Speaker","Desktop PC","Server","House","Keyboard"];

// PRODUCTS.forEach((product,index,array) => console.log(product,index,array));

// PRODUCTS.forEach((product,index,array) => array[index] = product + " 111");


PRODUCTS.forEach((product,index,array) => array[index] = `${product.toUpperCase()}`);
console.log(PRODUCTS);


// const userListDOM =document.querySelector("#userList");

// let index = 0;
// for(; index < users.length; index++) {
//     const liDOM = document.createElement("li");
//     liDOM.innerHTML= users[index];
//     userListDOM.appendChild(liDOM);
    
// }

const userListDOM =document.querySelector("#userList");
PRODUCTS.forEach( item => {

    const liDOM = document.createElement("li");
    liDOM.innerHTML= item;
    userListDOM.appendChild(liDOM);
})