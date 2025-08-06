//selecting side navbar,menuIcon

let sideNav = document.getElementById("sideNav");
let closeBtn = document.getElementById("closeBtn");
let menuIcon = document.getElementById("menuIcon");


//when to add or remove classes in tailwind css use "classList"
menuIcon.addEventListener("click",function(){
  sideNav.classList.remove("-right-1/3");
  sideNav.classList.add("right-0");
})

closeBtn.addEventListener("click",function(){
  sideNav.classList.remove("right-0");
  sideNav.classList.add("-right-1/3");
})

// product search
let productContainer = document.getElementById("productContainer");
let searchInput = document.getElementById("searchInput");
let products = productContainer.querySelectorAll("div");


searchInput.addEventListener("keyup",function(event){
    let searchValue = event.target.value.toUpperCase();
    products.forEach(function(product){
        let productName = product.querySelector(".productName").textContent.toUpperCase();
        // Check if the product name contains the search value
        if(productName.indexOf(searchValue) > -1){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });

  })