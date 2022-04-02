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
  var  res=await fetch("http://localhost:5000/mensdataentry");
  var fres=await res.json();
  
  console.log("mongodata:",fres);
  appendproducts(fres, productList);
  return fres;
  
}
Data();

var Data=async function(){
  var  res=await fetch("http://localhost:5000/mensdataentry");
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
  var  res=await fetch("http://localhost:5000/mensdataentry");
  var fres =await res.json();
  
  console.log("mongodata:",fres);
  
  var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "T-Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Knitwear") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Overshirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check5 = document.querySelector("input[name=check5]");
check5.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Zara_Athleticz") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check6 = document.querySelector("input[name=check6]");
check6.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Jackets") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check7 = document.querySelector("input[name=check7]");
check7.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Shorts") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check8 = document.querySelector("input[name=check8]");
check8.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.itemCategory == "Trousers") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check9 = document.querySelector("input[name=check9]");
check9.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "Puma") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check10 = document.querySelector("input[name=check10]");
check10.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "HRX by Hrithik Rosha") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check11 = document.querySelector("input[name=check11]");
check11.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "FILA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check12 = document.querySelector("input[name=check12]");
check12.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "hummel") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check13 = document.querySelector("input[name=check13]");
check13.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "ADIDAS") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check14 = document.querySelector("input[name=check14]");
check14.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "Lotto") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check15 = document.querySelector("input[name=check15]");
check15.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "Nike") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check16 = document.querySelector("input[name=check16]");
check16.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.Brand == "one8 x PUMA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check17 = document.querySelector("input[name=check17]");
check17.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 0 && elem.price < 1000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check18 = document.querySelector("input[name=check18]");
check18.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 1000 && elem.price < 1500) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check19 = document.querySelector("input[name=check19]");
check19.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 1500 && elem.price < 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check20 = document.querySelector("input[name=check20]");
check20.addEventListener("change", () => {
  let data = fres.filter(function (elem) {
    if (elem.price > 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
  
}
Data();

