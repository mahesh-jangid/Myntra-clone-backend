import  {fetchUser, updateWishlist} from "./loginSystem.js";


// var wishlistarr = JSON.parse(localStorage.getItem("Wishlist")) || [];

function appendproducts(info, main) {
  let currentUser;
  let wishlist;
  if (localStorage.getItem("isSignedIn") == "true") {
    let signedIndex = localStorage.getItem("signedInUser");
    currentUser = fetchUser(signedIndex);
    wishlist = currentUser.wishlist;
  }
  var previewarr = [];
  main.innerHTML = "";
  info.map(function (data) {
    var num = (Math.random() * 1.5 + 3).toFixed(1);
    var num1 = Math.round(Math.random() * 100);

    var div1 = document.createElement("div");
    div1.className = "product";

    var div2 = document.createElement("div");
    div2.className = "product-content";

    var div3 = document.createElement("div");
    div3.className = "product-img";
    div3.addEventListener("click", () => {
      previewarr.push(data);
      localStorage.setItem("previewarr", JSON.stringify(previewarr));
      window.location.href = "./previewpage.html";
    });

    var img = document.createElement("img");
    img.src = data.imageURL;

    div3.append(img);

    var div4 = document.createElement("div");
    div4.className = "product-rating";
    div4.innerHTML = `${num} <span><i class = "fas fa-star"></i></span> | ${num1} K`;

    div2.append(div3, div4);

    var div5 = document.createElement("div");
    div5.className = "product-info";

    var div6 = document.createElement("div");
    div6.className = "wishlist-card";

    var div7 = document.createElement("div");
    div7.className = "wishlist-btn";

    var btn = document.createElement("button");
    btn.className = "wishlist-btn-cart";
    btn.innerText = "WISHLIST";
    btn.addEventListener("click", function () {
      addToWishlist(data);
    });

    var img2 = document.createElement("img");
    img2.src =
      "https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png";

    btn.append(img2);

    var p = document.createElement("p");
    p.innerText = "Sizes: S,M,L,XL,XXL,3XL";

    div7.append(btn);

    div6.append(div7, p);

    var div8 = document.createElement("div");
    div8.className = "product-info-top";

    var div9 = document.createElement("div");
    div9.className = "product-info-top-1";

    var h = document.createElement("p");

    h.innerText = data.Brand;

    div9.append(h);

    var div10 = document.createElement("div");
    div10.className = "product-info-top-2";

    var p2 = document.createElement("p");
    p2.innerText = data.productName;

    div10.append(p2);

    div8.append(div9, div10);

    var div11 = document.createElement("div");
    div11.className = "product-price";

    var span1 = document.createElement("span");
    span1.className = "product-price-info";

    var h1 = document.createElement("p");
    h1.innerText = "₹" + data.price;

    span1.append(h1);

    var span2 = document.createElement("span");
    span2.className = "product-price-info";

    var p3 = document.createElement("p");
    p3.innerText = "₹" + data.strikedPrice;

    span2.append(p3);

    var span3 = document.createElement("span");
    span3.className = "product-price-info";
    span3.id = "off-info";

    var h2 = document.createElement("p");
    h2.innerText = "(25% OFF)";

    span3.append(h2);

    div11.append(span1, span2, span3);
    div5.append(div6, div8, div11);
    div1.append(div2, div5);

    main.append(div1);
  });

  //ADDING TO WISHLIST
  function addToWishlist(data) {
    if (localStorage.getItem("isSignedIn") == "false") {
      return alert("Please sign in to add items to the wishlist!");
    } else {
      wishlist.push(data);
      updateWishlist(localStorage.getItem("signedInUser"), currentUser);
      console.log(JSON.parse(localStorage.getItem('myntraUsers')));
    }
    alert("added successsfully");
  }
}


export { appendproducts };
