const dateInput = document.getElementById("dateInput");
const showDateBtn = document.getElementById("showdate");

showDateBtn.addEventListener("click", function () {
  showDateBtn.style.display = "none"; 
  dateInput.style.display = "block";  
});

    

    const allBtn = document.getElementById("all");
    const unpaidBtn = document.getElementById("unpaid");
    const leadBtn = document.getElementById("lead");
    const deliveredBtn = document.getElementById("delivered");
    const shippingBtn = document.getElementById("shipping");
 


  const table1=document.getElementById("table-1");
  const table2=document.getElementById("table-2");
  const table3=document.getElementById("table-3");
  const table4=document.getElementById("table-4");
  const table5=document.getElementById("table-5");

  const buttons = [allBtn, unpaidBtn, leadBtn, deliveredBtn, shippingBtn];
    buttons.forEach(btn => btn.classList.remove("active"));

    function setActiveTab(button) {
    button.classList.add("active"); 
}

      function hideall(){
      table1.style.display = "none"
      table2.style.display = "none"
      table3.style.display = "none"
      table4.style.display = "none"
      table5.style.display = "none"
       const buttons = [allBtn, unpaidBtn, leadBtn, deliveredBtn, shippingBtn];
    buttons.forEach(btn => btn.classList.remove("active"));

    }

    hideall()
    table1.style.display="block"

  allBtn.addEventListener("click",()=>{
        hideall()
        setActiveTab(allBtn)
        table1.style.display = table1.style.display === "none" ? "block" : "none";
  })
  unpaidBtn.addEventListener("click",()=>{
        hideall()
        setActiveTab(unpaidBtn)
        table2.style.display = table2.style.display === "none" ? "block" : "none";
  })
  leadBtn.addEventListener("click",()=>{
        hideall()
        setActiveTab(leadBtn)
        table3.style.display = table3.style.display === "none" ? "block" : "none";
  })


  deliveredBtn.addEventListener("click",()=>{
        hideall()
        setActiveTab(deliveredBtn)
        table4.style.display = table4.style.display === "none" ? "block" : "none";
  })

  shippingBtn.addEventListener("click",()=>{
        hideall()
        setActiveTab(shippingBtn)
        table5.style.display = table5.style.display === "none" ? "block" : "none";
  })


  


    



