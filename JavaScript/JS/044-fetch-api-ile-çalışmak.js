//json dosyadan veri çektik

fetch("settings.json").then(
    response =>response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

//api üzerinden veri çektik

// fetch("https://jsonplaceholder.typicode.com/posts").then(
//     response => response.json()
// ).then(responseJson => {console.log(responseJson[0])})


let userListDOM = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})
