//object destructing:

let settings = {
    userName: "loremIpsum",
    password:"BadPassword",
    isActive: true,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}


// obje içindeki bilgilerin tek seferde çıkarılması

// let userName= settings.userName;
// console.log(userName);


//rename yaptık - destructing yaptık
let {
    userName: user,password,isActive,ip:serverIp , serverName
} = settings // parçalara böldüm

console.log(user,password,isActive,serverIp,serverName);
console.log(settings);
console.log(user) // artık tek seferde istediğim bilgiye ulaşabilirim

// obje içindeki bazı bilgilerin çıkarılması
let {userName: userName2, password:password2, isActive:isActive2, ... newSettings} = settings;
console.log(newSettings)

// objenin destructing ile kopyalanması

//hatalı
// let settings2 = settings;
// settings2.userName = "değişen bilgi";
// console.log("settings", settings);
// console.log("settings2",settings2);



//doğrusu
let settings2 = {...settings}
settings2.userName = "değişen bilgi";
console.log("settings", settings);
console.log("settings2",settings2);


let score = [100,200,300,400];

let [score1, score2, ...otherScore] = score;
console.log(score1,score2, otherScore);

let copyOfScore2 = [...score];
console.log(copyOfScore2);


