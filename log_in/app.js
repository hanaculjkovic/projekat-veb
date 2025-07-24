const forma= document.getElementById("logInForm");
localStorage.setItem("isLogedIn", false);
let users=[];
forma.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username= document.getElementById("username").value.trim();
    const password= document.getElementById("password").value.tirm();
    let user={
        username,
        password,
    };
    users.push(user);
    localStorage.setItem("user",JSON.stringify(users));
    localStorage.setItem("isLogedIn", true);
});
const logIn= document.getElementById("submit");
logIn.addEventListener("click", ()=>{
window.location.href='../home/index.html';
});

