const month = document.getElementById("month");

const monthName = new Date().toLocaleString('default', { month: 'long' });
console.log(monthName);

month.textContent = monthName;
let newproduct = document.getElementById("new-btn")
let dialog_box =document.getElementById("box")

newproduct.addEventListener("click",()=>{
    dialog_box.style.display=dialog_box.style.display==="none"?"flex":"none"
})