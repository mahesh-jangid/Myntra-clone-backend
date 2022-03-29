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
  //data below this
  var homesData = [
    {
      Brand: "Mijia",
      productName: "Kitchen Water Faucet",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180910/T012429/T0124290368/goods_thumb_220-v1/165525-7474.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Mijia",
      productName: " Household Thermometer Hygro",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/24/goods_thumb_220-v2/20191224115424_89103.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Mijia",
      productName: "Xiaomi Mijia ClearGrass",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16414/goods_thumb_220-v1/7a80cf6a4866.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Mijia",
      productName: "Thermometer Hygrometer-White",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/26/goods_thumb_220-v3/20190326142031_54598.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Mijia",
      productName: "Rechargeable Table Lamp - White",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/12/goods_thumb_220-v2/20190612084209_48810.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Mijia",
      productName: "Tableware Protective Sleeve",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/21/goods_thumb_220-v1/20180921155855_69634.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Yishiyuan",
      productName: "Creative Beer Cups",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/09/goods_thumb_220-v2/20201209150515_5fd0772bebdfc.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Yishiyuan",
      productName: "LED Flash Big Beer",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180720/T006445/T0064450140/goods_thumb_220-v1/145942-8310.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Yishiyuan",
      productName: "Kitchen YISHIYUAN Utensil",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190701/T020157/T0201570253/goods_thumb_220-v3/162145-8565.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Yishiyuan",
      productName: " Snowscape Printed Waterproof",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/11/24/goods_thumb_220-v1/20171124110523_81512.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Brelong",
      productName:
        "BRELONG YJ200 Smart UV Toothbrush Sterilizer Holder Multifunctional Bathroom Wall-mounted Tooth Rack Sterilization",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/18/goods_thumb_220-v1/20200218121031_5e4b63b7c4b8a.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Baseus",
      productName: "MLFALLS Baseus M1136CW Benchtop Basin Faucet",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/30/goods_thumb_220-v1/20181030163820_63165.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Baseus",
      productName:
        "Baseus SDS - A5 LED Color Shower Head Hotel Temperature Control Three Color",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/14/goods_thumb_220-v1/20181114162957_58252.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Baseus",
      productName:
        "Retro Style Beach Baseus Starfish Seaweed Big Turtle Printed Shower Curtain",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v1/20190724164525_18244.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Langria",
      productName: "LANGRIA LED Fashionable Dreamlike Shower Head",
      imageURL:
        "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171121/HQBWC2351/HQBWC23510002/goods-goods_thumb_220/1511207554887741347.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Langria",
      productName: "LANGRIA European Creative Hardware Table Lamp",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181217/T032617/T0326170183/goods_thumb_220-v1/123444-4688.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Langria",
      productName: "LANGRIA Chrysanthemum Artificial Flower Home Decorations",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180927/T027872/T0278720041/goods_thumb_220-v1/215606-3486.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Langria",
      productName:
        "LANGRIA Home Wall Decor Flower 5D Diamond Painting Full DIY Embroidery Cross Craft",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180817/T015601/T0156010428/goods_thumb_220-v1/141908-7351.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "YSDAFEN",
      productName:
        "YSDAFEN Handmade LED Light String Beaded Feather Dream Catcher",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2019/05/06/goods_thumb_220-v1/20190506191408_80879.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "YSDAFEN",
      productName:
        "Silver YSDAFEN Orbital Desk Decoration Perpetual Motion Model",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-provider-img/straight-product-img/20180511/T023129/T0231290069/source-img/154256-9609.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "YSDAFEN",
      productName: "BRELONG Living Room.....",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181103/T013692/T0136920335/goods_thumb_220-v1/132216-1646.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "YSDAFEN",
      productName: "Heart Shaped Romantic.",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/12/13/goods_thumb_220-v1/20171213115601_85471.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Brelong",
      productName: "BRELONG Multi-layer..",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/16/goods_thumb_220-v2/20181016164954_94461.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      brand: "YSDAFEN",
      productName: "YSDAFEN Business Golf",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/25/goods_thumb_220-v1/20180925120126_99914.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
    {
      Brand: "Brelong",
      productName: "BRELONG Slow Masticating",
      imageURL:
        "https://gloimg.gbtcdn.com/soa/gb/item/6868971002878160896/16393/goods_thumb_220-v1/e72a0ab241ca.jpg",
      price: 1190,
      strikedPrice: 2990,
    },
  ];

  appendproducts(homesData, productList);

  var sorting = document.querySelector("#select-sorting");
  sorting.addEventListener("change", () => {
    var selected = document.querySelector("#select-sorting").value;
    if (selected == "high") {
      homesData.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (selected == "low") {
      //ascending
      homesData.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }

    appendproducts(homesData, productList);
  });
  var check1 = document.querySelector("input[name=check1]");
  check1.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Bedsheets") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check2 = document.querySelector("input[name=check2]");
  check2.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Blankets Quilts and Dohars") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check3 = document.querySelector("input[name=check3]");
  check3.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Curtains and Sheers") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check4 = document.querySelector("input[name=check4]");
  check4.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Bath Towels") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check5 = document.querySelector("input[name=check5]");
  check5.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Water Bottle") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check6 = document.querySelector("input[name=check6]");
  check6.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Cushions") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check7 = document.querySelector("input[name=check7]");
  check7.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Bath Robe") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check8 = document.querySelector("input[name=check8]");
  check8.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.itemCategory == "Decals and Stickers") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check9 = document.querySelector("input[name=check9]");
  check9.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "Mijia") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check10 = document.querySelector("input[name=check10]");
  check10.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "Yishiyuan") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check11 = document.querySelector("input[name=check11]");
  check11.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "Brelong") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check12 = document.querySelector("input[name=check12]");
  check12.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "Baseus") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check13 = document.querySelector("input[name=check13]");
  check13.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "Langria") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check14 = document.querySelector("input[name=check14]");
  check14.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.Brand == "YSDAFEN") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check15 = document.querySelector("input[name=check15]");
  check15.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.price > 0 && elem.price < 1000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check16 = document.querySelector("input[name=check16]");
  check16.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.price > 1000 && elem.price < 1500) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check17 = document.querySelector("input[name=check17]");
  check17.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.price > 1500 && elem.price < 2000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check18 = document.querySelector("input[name=check18]");
  check18.addEventListener("change", () => {
    let data = homesData.filter(function (elem) {
      if (elem.price > 2000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });