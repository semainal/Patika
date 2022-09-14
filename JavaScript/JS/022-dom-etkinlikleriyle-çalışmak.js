let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click",function() {
//     console.log("Tıklandı.")
// })

// greeting.addEventListener("click",domClick )

// function domClick() {
//     console.log("tıklandı")
//     console.log(this.innerHTML= "BİLGİ DEĞİŞTİ");
// }


// function domClick() {
//     console.log("tıklandı")
//     this.style.color ="green";
// }

greeting.addEventListener("mouseover",domClick )
function domClick() {
    console.log("etkinlik çalışıyor")
    this.style.color == "green" ? this.style.color ="black" : this.style.color = "green";
}

