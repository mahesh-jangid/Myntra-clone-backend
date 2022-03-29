import { appendproducts } from "./category.js";
import navbar from "./navbar.js";

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


document.querySelector("#navbar").innerHTML = navbar();
const productList = document.querySelector(".product-items");

var beautyData = [
  {
    Brand: "OCLEAN",
    productName: "Oclean SE Electrical Toothbrush",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/08/goods_thumb_220-v1/20171208184306_19435.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  {
    Brand: "OCLEAN",
    productName: "Oclean One Rechargeable",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/10/26/goods_thumb_220-v1/20171026151645_53946.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  {
    Brand: "OCLEAN",
    productName: "Oclean Electric Toothbrush ",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/21/goods-goods_thumb_220/1511239809426549626.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  {
    Brand: "OCLEAN",
    productName: "Oclean W1 Smart Aerodynamics",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/10/goods_thumb_220-v2/20200810101602_42210.jpg",
    price: 790,
    strikedPrice: 1290,
  },

  {
    Brand: "OCLEAN",
    productName: "Oclean X Pro Smart Sonic Electric Toothbrush Touch Screen",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/22/goods_thumb_220-v4/20200422105655_25501.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  //SOOCAS

  {
    Brand: "SOOCAS",
    productName: "SOOCAS H3 Electric Hair Dryer",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/09/27/goods_thumb_220-v16/20180927142940_34187.jpg",
    price: 690,
    strikedPrice: 1290,
  },

  {
    Brand: "SOOCAS",
    productName: "SOOCAS H3 Negative Ions Dryer",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/05/22/source-img/20180522111211_94556.jpg",
    price: 790,
    strikedPrice: 1490,
  },

  {
    Brand: "SOOCAS",
    productName: "SOOCAS H3S Negative Dry Hair Dryer",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/01/goods_thumb_220-v1/20180901175358_96310.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  {
    Brand: "SOOCAS",
    productName: "SOOCAS H3S Massive Van Gogh Ver",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v2/20191219171531_5dfb3fb399510.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  {
    Brand: "SOOCAS",
    productName: "SOOCAS X3U Adult Gogh Ver",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/27/goods_thumb_220-v2/20191227144354_5e05a82a15c65.jpg",
    price: 690,
    strikedPrice: 1290,
  },

  //Elite99

  {
    Brand: "Elite99",
    productName: "Elite99 6Colors Polishing UV LED Set",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/02/16/goods_thumb_220-v1/20190216101042_42228.jpg",
    price: 550,
    strikedPrice: 990,
  },

  {
    Brand: "Elite99",
    productName: "Elite99 6Pcs UV LED Soak Kit",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_92477.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  {
    Brand: "Elite99",
    productName: "Elite99 LED UV 7ml Varnish",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2017/08/10/goods-goods_thumb_220/20170810163446_67739.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  {
    Brand: "Elite99",
    productName: "Elite99 One Step Gel Polish 10ml",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/2015/201508/goods-goods_thumb_220/1439746190262-P-2959428.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  {
    Brand: "Elite99",
    productName: "Elite99 6Pcs Polish UV LED Soak Off Gel Nail Gift Set",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_49597.jpg",
    price: 1190,
    strikedPrice: 2290,
  },

  //FOCALLURE

  {
    Brand: "FOCALLURE",
    productName: "FOCALLURE Professional Powder",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/11/24/source-img/20171124160200_92935.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  {
    Brand: "FOCALLURE",
    productName: "FOCALLURE Duo Bronzer Highlighter 2 Colors",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/01/28/goods-goods_thumb_220/20160128155538_93788.jpg",
    price: 1590,
    strikedPrice: 2290,
  },

  {
    Brand: "FOCALLURE",
    productName: "6ml FOCALLURE Fashionable Glue",
    imageURL:
      "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/04/11/goods-goods_thumb_220/20160411181022_93638.jpg",
    price: 350,
    strikedPrice: 790,
  },

  {
    Brand: "FOCALLURE",
    productName: "FOCALLURE Perfect Concealer",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/15/source-img/20171215101638_89313.jpg",
    price: 350,
    strikedPrice: 790,
  },

  {
    Brand: "FOCALLURE",
    productName: "FOCALLURE Coverage Concealer",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/23/source-img/20171223093245_89466.jpg",
    price: 550,
    strikedPrice: 990,
  },

  //MIJIA

  {
    Brand: "MIJIA",
    productName: "Mijia MES603 Toothbrush T100",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/19/goods_thumb_220-v1/20190919104808_69798.jpg",
    price: 550,
    strikedPrice: 990,
  },

  {
    Brand: "MIJIA",
    productName: "Mijia MJZJD002QW  Portable Set",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v2/20200727114758_5f1e4e6e75f1e.jpg",
    price: 790,
    strikedPrice: 1290,
  },

  {
    Brand: "MIJIA",
    productName: "Mijia MBS302 Universal Toothbrush T100",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/07/goods_thumb_220-v1/20191107183011_5dc3f2333c37d.jpg",
    price: 690,
    strikedPrice: 1690,
  },

  {
    Brand: "MIJIA",
    productName: "Mijia Sonic Electric Toothbrush",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/04/goods_thumb_220-v1/20180704103219_63529.jpg",
    price: 1190,
    strikedPrice: 1990,
  },

  {
    Brand: "MIJIA",
    productName: "Mijia Toothbrush  Head 3pcs",
    imageURL:
      "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/03/30/source-img/20180330091638_18545.jpg",
    price: 1190,
    strikedPrice: 1490,
  },
];

appendproducts(beautyData, productList);
var sorting = document.querySelector("#select-sorting");
sorting.addEventListener("change", () => {
  var selected = document.querySelector("#select-sorting").value;
  if (selected == "high") {
    beautyData.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    //ascending
    beautyData.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }

  appendproducts(beautyData, productList);
});

var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.Brand == "OCLEAN") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.Brand == "SOOCAS") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.Brand == "ELite99") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.Brand == "FOCALLURE") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check5 = document.querySelector("input[name=check5]");
check5.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.Brand == "langria") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check6 = document.querySelector("input[name=check6]");
check6.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.price > 0 && elem.price < 1000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check7 = document.querySelector("input[name=check7]");
check7.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.price > 1000 && elem.price < 1500) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check8 = document.querySelector("input[name=check8]");
check8.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.price > 1500 && elem.price < 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check9 = document.querySelector("input[name=check9]");
check9.addEventListener("change", () => {
  let data = beautyData.filter(function (elem) {
    if (elem.price > 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});