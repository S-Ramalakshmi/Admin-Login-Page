       
    const dateinput=document.getElementById("dateInput");
    document.getElementById("showdate").addEventListener("click", function () {
       dateinput.style.display = dateinput.style.display === "none" ? "block" : "none";
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

      function hideall(){
      table1.style.display = "none"
      table2.style.display = "none"
      table3.style.display = "none"
      table4.style.display = "none"
      table5.style.display = "none"
    }

    hideall()
    table1.style.display="block"

  allBtn.addEventListener("click",()=>{
        hideall()
        table1.style.display = table1.style.display === "none" ? "block" : "none";
  })
  unpaidBtn.addEventListener("click",()=>{
        hideall()
        table2.style.display = table2.style.display === "none" ? "block" : "none";
  })
  leadBtn.addEventListener("click",()=>{
        hideall()
        table3.style.display = table3.style.display === "none" ? "block" : "none";
  })


  deliveredBtn.addEventListener("click",()=>{
        hideall()
        table4.style.display = table4.style.display === "none" ? "block" : "none";
  })

  shippingBtn.addEventListener("click",()=>{
        hideall()
        table5.style.display = table5.style.display === "none" ? "block" : "none";
  })


  


    



