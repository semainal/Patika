let FORMdom = document.querySelector("#userForm");
FORMdom.addEventListener("submit", formSubmit);


function formSubmit(event) {
    event.preventDefault(); // default işlemini engelledik
    console.log("işlem gerçekleşti");
}