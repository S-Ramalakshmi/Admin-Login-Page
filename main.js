let eye=document.getElementById("eye")
let password=document.getElementById("password")
var pict = document.getElementById("pic")

eye.addEventListener("click",()=>{
    password.type=password.type==="password"?"text":"password"
    pict.src=pict.src==="https://img.icons8.com/?size=100&id=85028&format=png&color=000000"?"https://img.icons8.com/?size=100&id=85035&format=png&color=000000":"https://img.icons8.com/?size=100&id=85028&format=png&color=000000"
})