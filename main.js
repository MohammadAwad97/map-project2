document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form");
    const submitBtn = document.getElementById("btn");

    //Inputs:
    
    

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        email: email,
        password: password
    }
    
    fetch("http://127.0.0.1:3000/api/v1/users/LogIn" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(user) 
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return response.json();
    })
    .then(responseData => {
        console.log(responseData.id)
        sessionStorage.setItem("userId" ,responseData.id);
        window.location.href = "http://127.0.0.1:5500/mapPage.html";

    }) 
    .catch(err => {
        console.log(err)
    })
    })












})
// const fetchData = () =>{
//     fetch("http://127.0.0.1:3000/api/v1/users").then((response) => response.json())
//     .then((data) => console.log(data))
// }
// fetchData();






