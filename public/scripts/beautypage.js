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

var beautyData=async function(){
  var  res=await fetch("http://localhost:5000/beautyproductdataentry");
  var fres=await res.json();
  
  console.log("mongodata:",fres);
  appendproducts(fres, productList);
  return fres;
  
}
beautyData();



// appendproducts(beautyData, productList);

var sorting = document.querySelector("#select-sorting");
var beautyData=async function(){
  var  res=await fetch("http://localhost:5000/beautyproductdataentry");
  var fres=await res.json();
  
  console.log("mongodata:",fres);
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
  
    appendproducts(fres,productList);
  });
 
  
}
beautyData();


var beautyData=async function(){
  var  res=await fetch("http://localhost:5000/beautyproductdataentry");
  var fres=await res.json();
  
  console.log("mongodata:",fres);
  var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "OCLEAN") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "SOOCAS") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "ELite99") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "FOCALLURE") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check5 = document.querySelector("input[name=check5]");
check5.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "langria") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check6 = document.querySelector("input[name=check6]");
check6.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 0 && elem.price < 1000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check7 = document.querySelector("input[name=check7]");
check7.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 1000 && elem.price < 1500) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check8 = document.querySelector("input[name=check8]");
check8.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 1500 && elem.price < 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check9 = document.querySelector("input[name=check9]");
check9.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

  
}
beautyData();

