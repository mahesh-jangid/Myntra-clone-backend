import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
import { fetchUser, updateWishlist } from "./loginSystem.js";

//checking if the user is signed in
let isSignedIn = localStorage.getItem("isSignedIn") || "false";

// Initiating currentUser and wishlist
let cart;
let currentUser;
let wishlist = [];

if (isSignedIn == "true") {
  let signedIndex = localStorage.getItem("signedInUser");
  currentUser = fetchUser(signedIndex);
  wishlist = currentUser.wishlist;
  cart = currentUser.cart;
}

if (wishlist.length === 0) {
  emptyList();
} else {
  mapData(wishlist);
}

//if there is no data in the wishlist
function emptyList() {
  document.querySelector("#wish_page").innerHTML = "";
  document.querySelector("#wishcount").innerHTML = "";
  let emptydiv = document.createElement("div");
  emptydiv.setAttribute("id", "emptydiv");
  document.querySelector("#wishcount").append(emptydiv);

  let wishhead = document.createElement("h3");
  wishhead.setAttribute("id", "wishhead");
  wishhead.innerText = "YOUR WISHLIST IS EMPTY";

  let wishpara = document.createElement("p");
  wishpara.setAttribute("id", "wishpara");
  wishpara.innerText =
    "Add items that you like to your wishlist. Review them anytime and easily move them to the bag.";

  let emptyimage = document.createElement("img");
  emptyimage.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BlePOVMhfrbX39Tq5nhKIVu4t8ksu_n1uj5z7l8B6e2rs6dUZcGjzLEC1gTAcQn5Q1g&usqp=CAU"
  );
  emptyimage.setAttribute("id", "emptyimage");

  let shoppingbutton = document.createElement("button");
  shoppingbutton.innerText = "CONTINUE SHOPPING";
  shoppingbutton.setAttribute("id", "shoppingbutton");
  shoppingbutton.addEventListener('click', function() {
    window.location.href = "./index.html"
  })

  emptydiv.append(wishhead, wishpara, emptyimage, shoppingbutton);
}

//If there is data
function mapData(wishlist) {
  document.querySelector("#wish_page").innerHTML = "";
  document.querySelector("#wishcount").innerHTML = "";

  let wishdiv = document.createElement("div");

  wishdiv.setAttribute("id", "countdiv");

  let head1 = document.createElement("p");

  let itemsInCart = document.createElement("p");
  itemsInCart.textContent = `${wishlist.length} Items`;
  itemsInCart.style.fontWeight = "400";

  head1.innerText = "My Wishlist";
  wishdiv.append(head1, itemsInCart);
  document.querySelector("#wishcount").append(wishdiv);

  //mapping function
  wishlist.map(function (data, index) {
    let carddiv = document.createElement("div");
    carddiv.setAttribute("id", "carddiv");

    let imagediv = document.createElement("div");
    imagediv.setAttribute("id", "imagediv");

    let deletebtn = document.createElement("div");
    deletebtn.textContent = "x";
    deletebtn.setAttribute("id", "deletebtn");
    deletebtn.addEventListener("click", function (event) {
      deleteItem(index);
    });

    let image = document.createElement("img");
    image.setAttribute("src", data.imageURL);
    image.setAttribute("id", "brandimage");

    image.append(deletebtn);
    imagediv.append(deletebtn, image);

    let bandp = document.createElement("div");
    bandp.setAttribute = ("id", "bandp");

    let desc = document.createElement("div");
    desc.textContent = data.productName;
    desc.setAttribute("id", "brand");

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");

    let price = document.createElement("div");
    price.setAttribute("id", "price");
    price.textContent = "₹" + data.price;

    let strikeprice = document.createElement("div");
    strikeprice.textContent = "₹" + data.strikedPrice;
    strikeprice.setAttribute("id", "strikeprice");

    let discount = document.createElement("div");
    discount.setAttribute("id", "discount");
    discount.textContent = "(20% OFF)";

    pricediv.append(price, strikeprice, discount);
    bandp.append(desc, pricediv);

    let btndiv = document.createElement("div");
    btndiv.setAttribute("id", "btndiv");

    let btn = document.createElement("button");
    btn.setAttribute("id", "wishbutton");
    btn.addEventListener("click", function () {
      addToCart(data, index);
    });

    btndiv.append(btn);
    btn.textContent = "MOVE TO BAG";

    carddiv.append(imagediv, bandp, btndiv);
    document.querySelector("#wish_page").append(carddiv);
  });
}

//Add to cart functionality
function addToCart(data, index) {
  if (isSignedIn == "false") {
    return alert("Please sign in to add items to the cart!");
  }

  //Checking if the element in already in the cart

  for (let i = 0; i < cart.length; i++) {
    if (data.imageURL == cart[i].imageURL) {
      return alert("Item is already in the cart!");
    }
  }

  cart.push(data);
  deleteItem(index);
  document.querySelector("#cart-counter").textContent = currentUser.cart.length;
  document.querySelector("#cart-counter").classList.remove("hidden");
  // updateWishlist(localStorage.getItem("signedInUser"), currentUser);
  alert("added successsfully");
}

//Function delete from wishlist
function deleteItem(index) {
  wishlist.splice(index, 1);
  if(!wishlist.length) {
    emptyList();
  } else {
    mapData(wishlist);
  }
  updateWishlist(localStorage.getItem("signedInUser"), currentUser);
  
}
