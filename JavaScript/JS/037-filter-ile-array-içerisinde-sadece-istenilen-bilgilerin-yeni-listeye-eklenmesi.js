
//5 harften fazla olanlar
const  PRODUCT = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"];

// aktif kullanıcılar

const USERS = [
    {fullName: "Sema İnal", isActive: false},
    {fullName: "Tolga İnal", isActive: true},
    {fullName: "Nil İçkin Köçken", isActive: false},
    {fullName: "Gökay Köçken", isActive: true},

]

const bigger5 = PRODUCT.filter(item => item.length >5);
console.log(bigger5);


// const activeUsers = USERS.filter(item => item.isActive === true);
const activeUsers = USERS.filter(item => item.isActive);
console.log(activeUsers);
