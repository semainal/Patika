
const USERS = ["AYŞE","MehMet","TugCE","AkSEL"];

// userName içinde orjinal isim kalsın
// shırtName içinde ilk harf büyük (A.)
// newName içinde ilk harf büyük olsun
// {userName: "AYŞE", shortName: "A.", newName: "Ayşe"}

const NEW_USERS =USERS.map(user => user.toLowerCase());
console.log(NEW_USERS);

const USERS_OBJ =USERS.map(item => 
    {
        return {
            userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}}` }

})
console.log(USERS_OBJ);