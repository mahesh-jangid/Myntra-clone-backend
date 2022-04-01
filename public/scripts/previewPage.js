import navbar from "./navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
import { fetchUser, updateWishlist } from "./loginSystem.js";

let isSignedIn = localStorage.getItem("isSignedIn") || "false";
var PreviewData = JSON.parse(localStorage.getItem("previewarr")) || [];
//   var addtobag = JSON.parse(localStorage.getItem("addtobag")) || [];
let currentUser;
let cart;
if (isSignedIn == "true") {
  let signedIndex = localStorage.getItem("signedInUser");
  currentUser = fetchUser(signedIndex);
  cart = currentUser.cart;
}

PreviewData.map(function (obj) {
  document.querySelector("#btn1").addEventListener("click", function () {
    addToCart(obj);
  });

  var image = document.createElement("img");
  image.setAttribute("src", obj.imageURL);

  var p = document.createElement("p");
  p.textContent = obj.productName;

  let stars = (Math.random() * 3 + 2).toFixed(1);
  document.querySelector("#realRating").textContent = `${stars} / 5.0`;

  let counter = 1;
  for (let i = 0; i < 5; i++) {
    let newStar = document.createElement("div");
    if (counter <= Math.ceil(stars)) {
      document.querySelectorAll(".fa-star")[i].classList.add("checked");
      counter++;
    }
  }

  document.querySelector(".head-title").textContent = obj.Brand;

  document.querySelector(".demo_image").append(image);

  document.querySelector(".disc").append(p);

  document.querySelector(".rate").textContent = `Rs.${obj.price}`;

  document.querySelector(".do").textContent = `Rs.${obj.strikedPrice}`;

  document.querySelector(".rate1").textContent = `Rs.${obj.price}`;

  document.querySelector(".do1").textContent = `Rs.${obj.strikedPrice}`;
});

function addToCart(data) {
  if (isSignedIn == "false") {
    return alert("Please sign in to add items to the cart!");
  }

  //Checking if the element in already in the cart

  for (let i = 0; i < cart.length; i++) {
    if (data.imageURL == cart[i].imageURL) {
      return alert("Item is alredy in the cart!");
    }
  }

  cart.push(data);
  document.querySelector("#cart-counter").textContent = currentUser.cart.length;
  document.querySelector("#cart-counter").classList.remove("hidden");
  updateWishlist(localStorage.getItem("signedInUser"), currentUser);
  console.log(JSON.parse(localStorage.getItem("myntraUsers")));
  alert("added successsfully");
}
