// Month

const month = document.getElementById("month");
if (month) {
  const monthName = new Date().toLocaleString('default', { month: 'long' });
  console.log(monthName);
  month.textContent = monthName;
}



// New Product

let newproduct = document.querySelectorAll(".new-btn")
let dialog_box =document.getElementById("box")
let exit_btn = document.querySelector(".exit-btn")

newproduct.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    dialog_box.classList.toggle("show");
})
})

dialog_box.addEventListener("click",(e)=>{
    if (e.target == dialog_box || e.target == exit_btn ){
        dialog_box.classList.remove("show");
    }

})

function star(){
        dialog_box.classList.remove("show");
}

// New Product Variance

const template = document.getElementById("row-template");

const fieldConfig = {
  size: ["Size", "Price"],
  color: ["Color", "Price"],
  other: ["Title", "Price"]
};

document.querySelector(".variance").addEventListener("change", e => {
  if (e.target.type === "checkbox") {
    const item = e.target.closest(".item");
    const fields = item.querySelector(".fields");
    const type = item.dataset.type;

    fields.innerHTML = ""; // remove old rows

    if (e.target.checked) {
      fields.style.display = "flex";
      addRow(fields, type);
      addPlusButton(fields, type);
    } else {
      fields.style.display = "none";
    }
  }
});

function addRow(container, type) {
  const row = template.content.cloneNode(true);
  row.querySelector(".label1").textContent = fieldConfig[type][0];
  row.querySelector(".label2").textContent = fieldConfig[type][1];
  container.append(row);
}

// Add single + button at the end
function addPlusButton(container, type) {
  const plusContainer = document.createElement("div");
  plusContainer.className = "add-btn-container";
  plusContainer.innerHTML = `<span class="add">+</span>`;
  container.appendChild(plusContainer);

  plusContainer.querySelector(".add").addEventListener("click", () => {
    addRow(container, type);
    container.appendChild(plusContainer); // keep + at the bottom
  });
}



//Emailjs

  function sendEmail(event) {
    event.preventDefault(); // prevent page reload

    const params = {
      productName : document.getElementById("product-name").value,
      description: document.getElementById("description").value,
      media: document.getElementById("media").value,
      category: document.getElementById("category").value,
      price: document.getElementById("price").value,
      charge: document.getElementById("charge").value,
      variance: document.getElementById("variance").value,
      rating: document.getElementById("rating").value,
      offer: document.getElementById("offer").value,
    };

    emailjs
      .send("service_6qjegmo", "template_msl8dna", params)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        document.getElementById("add-form").reset();
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
  }

  document
    .getElementById("add-form")
    .addEventListener("submit", sendEmail);



  // Category

    const customerDialog = document.getElementById("customerDialog");
const customerClose = document.getElementById("customerClose");

function showdialog() {
  customerDialog.classList.add("show");
}

// Close button
customerClose.addEventListener("click", () => {
  customerDialog.classList.remove("show");
});

// Close when clicking outside
customerDialog.addEventListener("click", (e) => {
  if (e.target === customerDialog) {
    customerDialog.classList.remove("show");
  }
});
