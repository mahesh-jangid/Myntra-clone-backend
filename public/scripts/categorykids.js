import { appendproducts } from "./category.js";
import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
import discountdiv from "./discountdiv.js";
document.querySelector("#discount-div").innerHTML = discountdiv();
import footer from "./footer.js";
document.querySelector("#footer").innerHTML = footer();

var sidebar1 = document.querySelector(".FreeShippingBanner-sidebar-collapsed");
sidebar1.addEventListener("click", ()=>{
    sidebar1.style.display = "none";
    document.querySelector(".maindiscountbar").style.display = "";
})
var sidebar2 = document.querySelector(".FreeShippingBanner-sidebar");
sidebar2.addEventListener("click", ()=>{
    document.querySelector(".maindiscountbar").style.display = "none";
    sidebar1.style.display = "";
})



  const productList = document.querySelector(".product-items");

  var Data=async function(){
    var  res=await fetch("http://localhost:5000/kidsdataentry");
    var fres=await res.json();
    
    console.log("mongodata:",fres);
    appendproducts(fres, productList);
    return fres;
    
  }
  Data();
  
  var Data=async function(){
    var  res=await fetch("http://localhost:5000/kidsdataentry");
    var fres=await res.json();
    
    console.log("mongodata:",fres);
    var sorting = document.querySelector("#select-sorting");
    sorting.addEventListener("change", () => {
      var selected = document.querySelector("#select-sorting").value;
      if (selected == "high") {
          fres.sort(function (a, b) {
          return Number(b.price) - Number(a.price);
        });
      }
      if (selected == "low") {
        //ascending
          fres.sort(function (a, b) {
          return Number(a.price) - Number(b.price);
        });
      }
  
      appendproducts(fres, productList);
    });
   
    
  }
  Data();

  var Data=async function(){
    var  res=await fetch("http://localhost:5000/kidsdataentry");
    var fres=await res.json();
    
    console.log("mongodata:",fres);
    var check1 = document.querySelector("input[name=check1]");
  check1.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.itemCategory == "T-SHIRTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check2 = document.querySelector("input[name=check2]");
  check2.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.itemCategory == "DRESSES | JUMPSUITS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check3 = document.querySelector("input[name=check3]");
  check3.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.itemCategory == "SWEATSHIRTS | JACKETS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check4 = document.querySelector("input[name=check4]");
  check4.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.itemCategory == "TROUSERS | JEANS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check5 = document.querySelector("input[name=check5]");
  check5.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.itemCategory == "SHIRTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check6 = document.querySelector("input[name=check6]");
  check6.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "max") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check7 = document.querySelector("input[name=check7]");
  check7.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "YK") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check8 = document.querySelector("input[name=check8]");
  check8.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "Pantaloons Junior") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check9 = document.querySelector("input[name=check9]");
  check9.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "CUTECUMBER") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check10 = document.querySelector("input[name=check10]");
  check10.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "A.T.U.N") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check11 = document.querySelector("input[name=check11]");
  check11.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "Tiny Girl") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check12 = document.querySelector("input[name=check12]");
  check12.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "Wish Karo") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check13 = document.querySelector("input[name=check13]");
  check13.addEventListener("change", () => {
    let data = fres.filter(function (elem) {
      if (elem.Brand == "MINI KLUB") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
    
    
  }
  Data();
  