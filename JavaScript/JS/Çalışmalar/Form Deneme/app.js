let userFormDOM =document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message,className="warning") => `
<div class = "alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value , SCORE.value) // gönderdikten sonra sıfırladık
        USER_NAME.value= "" 
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz!",
            "danger")
    }
    
}

let userListDOM = document.querySelector("#userList")


const addItem = (userName, score) => {
    let liDOM =document.createElement("li");
    if(score <= 50) {
        liDOM.innerHTML = `${userName}
        <span class="badge bg-danger rounded-pill">${score}</span>
        <span class ="bagge ">Sınavdan Kaldınız</span>
        <span class ="bagge bg-danger rounded-pill">FF</span>   `
        liDOM.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM); 
    } else if (score <=100 && score >=85) {
        liDOM.innerHTML = `${userName}
        <span class="badge bg-success rounded-pill">${score}</span>
        <span class ="bagge bg-success rounded-pill">AA</span> `
        liDOM.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM);  

    } else if (score <=84 && score >=70) {
        liDOM.innerHTML = `${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
        <span class ="bagge bg-primary rounded-pill">BB</span> `
        liDOM.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM);  

    } else if (score <=69 && score >=51) {
        liDOM.innerHTML = `${userName}
        <span class="badge bg-warning rounded-pill">${score}</span>
        <span class ="bagge bg-warning rounded-pill">CC</span> `
        liDOM.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM);  

    }

}


     

 

