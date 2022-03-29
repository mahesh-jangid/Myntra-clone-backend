import { appendproducts } from "./category.js";
import navbar from "./navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
const productList = document.querySelector(".product-items");

let query = localStorage.getItem('searchQuery');

var searchData = [
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/0219/609/629/2/w/386/0219609629_6_1_1.jpg?ts=1638288109449",
    productName: "TEXTURED FLORAL DRESS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "40 % OFF",
    age: "6-14 Years",
    Brand: "max",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/1015/190/070/2/w/386/1015190070_6_1_1.jpg?ts=1638206832306",
    productName: "HOUNDSTOOTH PINAFORE DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "YK",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6227/293/902/2/w/750/6227293902_6_1_1.jpg?ts=1625580220615",
    productName: "TEXTURED CROSSOVER JUMPSUIT",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "Pantaloons Junior",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/9002/803/800/2/w/386/9002803800_6_1_1.jpg?ts=1636981819116",
    productName: "SHIMMERY VELVET LEGGINGS",
    price: 790,
    strikedPrice: 1290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "35 % OFF",
    age: "6-14 Years",
    Brand: "CUTECUMBER",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6317/263/630/2/w/386/6317263630_6_1_1.jpg?ts=1629108094449",
    productName: "FLORAL LOOSE FIT TROUSERS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "40 % OFF",
    age: "6-14 Years",
    Brand: "A.T.U.N",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/5584/602/527/2/w/386/5584602527_6_1_1.jpg?ts=1638374392270",
    productName: "PLAIN SWEATSHIRT",
    price: 690,
    strikedPrice: 1290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45% OFF / +2 COLOURS",
    age: "6-14 Years",
    Brand: "Tiny Girl",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6323/263/630/2/w/386/6323263630_6_1_1.jpg?ts=1629285423004",
    productName: "SHIRT WITH FLORAL KNOT",
    price: 790,
    strikedPrice: 1490,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45% OFF",
    age: "6-14 Years",
    Brand: "Wish Karo",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6185/203/807/2/w/386/6185203807_6_1_1.jpg?ts=1626164268012",
    productName: "TEXTURED PLUMETIS DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45% OFF",
    age: "6-14 Years",
    Brand: "MINI KLUB",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6350/263/630/2/w/386/6350263630_6_1_1.jpg?ts=1629270736442",
    productName: "FLORAL SHIRT DRESS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "40% OFF",
    age: "6-14 Years",
    Brand: "max",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/5584/602/401/2/w/386/5584602401_6_1_1.jpg?ts=1638447890141",
    productName: "PLAIN SWEATSHIRT",
    price: 690,
    strikedPrice: 1290,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "45% OFF / +2 COLOURS",
    age: "6-14 Years",
    Brand: "YK",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/4805/600/712/2/w/750/4805600712_6_1_1.jpg?ts=1640082687710",
    productName: "RIBBED RAGLAN SLEEVE T-SHIRT",
    price: 550,
    strikedPrice: 990,
    itemGender: "womens",
    itemCategory: "UP TO 50% OFF",
    sale: "40% OFF",
    age: "6-14 Years",
    Brand: "Pantaloons Junior",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/0219/609/629/2/w/386/0219609629_6_1_1.jpg?ts=1638288109449",
    productName: "TEXTURED FLORAL DRESS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "40 % OFF",
    age: "6-14 Years",
    Brand: "CUTECUMBER",
  },

  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/1015/190/070/102/w/386/1015190070_1_1_1.jpg?ts=1638530076727",
    productName: "HOUNDSTOOTH PINAFORE DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "A.T.U.N",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/1015/190/070/2/w/386/1015190070_6_1_1.jpg?ts=1638206832306",
    productName: "HOUNDSTOOTH PINAFORE DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "Tiny Girl",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/6201/601/933/2/w/750/6201601933_6_1_1.jpg?ts=1641399328051",
    productName: "CONTRAST FLORAL RIBBED JUMPSUIT",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "MINI KLUB",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/2236/600/800/2/w/386/2236600800_6_1_1.jpg?ts=1639562828313",
    productName: "TEXTURED PLUMETIS DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "45 % OFF",
    age: "6-14 Years",
    Brand: "Wish Karo",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6185/203/807/2/w/386/6185203807_6_1_1.jpg?ts=1626164268012",
    productName: "TEXTURED PLUMETIS DRESS",
    price: 1190,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "45% OFF",
    age: "6-14 Years",
    Brand: "max",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6350/263/630/102/w/386/6350263630_1_1_1.jpg?ts=1630950585121",
    productName: "FLORAL SHIRT DRESS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "DRESSES | JUMPSUITS",
    sale: "40% OFF",
    age: "6-14 Years",
    Brand: "YK",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/1639/735/420/2/w/750/1639735420_6_1_1.jpg?ts=1627561879861",
    productName: "DENIM OVERSHIRT WITH SNAP BUTTONS",
    price: 1190,
    strikedPrice: 1990,
    itemGender: "womens",
    itemCategory: "SWEATSHIRTS | JACKETS",
    sale: "40% OFF",
    age: "6-14 Years",
    Brand: "Pantaloons Junior",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/103/w/386/6475558400_1_1_1.jpg?ts=1635959548383",
    productName: "PAISLEY FAUX SHEARLING GILET",
    price: 1590,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "SWEATSHIRTS | JACKETS",
    sale: "30% OFF",
    age: "6-14 Years",
    Brand: "CUTECUMBER",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/6475/558/400/2/w/386/6475558400_6_1_1.jpg?ts=1635420789607",
    productName: "PAISLEY FAUX SHEARLING GILET",
    price: 1590,
    strikedPrice: 2290,
    itemGender: "womens",
    itemCategory: "SWEATSHIRTS | JACKETS",
    sale: "30% OFF",
    age: "6-14 Years",
    Brand: "A.T.U.N",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/3402/110/400/2/w/386/3402110400_6_1_1.jpg?ts=1638267194044",
    productName: "RIBBED POLO SHIRT",
    price: 350,
    strikedPrice: 790,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "55% OFF / +2 COLOURS",
    age: "6-14 Years",
    Brand: "Tiny Girl",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/102/w/386/3037722330_1_1_1.jpg?ts=1633961160124",
    productName: "STRIPED T-SHIRT",
    price: 350,
    strikedPrice: 790,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "55% OFF",
    age: "6-14 Years",
    Brand: "MINI KLUB",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/3037/722/330/2/w/386/3037722330_6_1_1.jpg?ts=1634112432606",
    productName: "STRIPED T-SHIRT",
    price: 350,
    strikedPrice: 790,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "55% OFF",
    age: "6-14 Years",
    Brand: "Wish Karo",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/1081/190/070/2/w/750/1081190070_6_1_1.jpg?ts=1638535811872",
    productName: "HOUNDSTOOTH OVERSHIRT",
    price: 1190,
    strikedPrice: 2490,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "50% OFF",
    age: "6-14 Years",
    Brand: "max",
  },

  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/3/p/9006/608/712/2/w/750/9006608712_6_1_1.jpg?ts=1640192382730",
    productName: "RIBBED RAGLAN SLEEVE T-SHIRT",
    price: 550,
    strikedPrice: 990,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "40% OFF",
    age: "6-14 Years",
    Brand: "YK",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/4333/706/620/102/w/386/4333706620_1_1_1.jpg?ts=1637142764432",
    productName: "RIBBED T-SHIRT WITH HEARTS",
    price: 550,
    strikedPrice: 990,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "55% OFF",
    age: "6-14 Years",
    Brand: "Pantaloons Junior",
  },
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
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/4333/706/620/2/w/386/4333706620_6_1_1.jpg?ts=1635421116458",
    productName: "RIBBED T-SHIRT WITH HEARTS",
    price: 550,
    strikedPrice: 990,
    itemGender: "womens",
    itemCategory: "T-SHIRTS",
    sale: "55% OFF",
    age: "6-14 Years",
    Brand: "CUTECUMBER",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/3/p/9002/803/800/2/w/386/9002803800_6_1_1.jpg?ts=1636981819116",
    productName: "SHIMMERY VELVET LEGGINGS",
    price: 790,
    strikedPrice: 1290,
    itemGender: "womens",
    itemCategory: "TROUSERS | JEANS",
    sale: "35 % OFF",
    age: "6-14 Years",
    Brand: "A.T.U.N",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0706/336/305/2/w/444/0706336305_2_1_1.jpg?ts=1632298344216",
    productName: "CONTRAST COLLAR JACKET",
    price: 3490,
    strikedPrice: 7990,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 55,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0706/331/052/2/w/444/0706331052_2_1_1.jpg?ts=1629375819454",
    productName: "TEXTURED BLAZER",
    price: 2290,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 55,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/9621/470/710/2/w/444/9621470710_2_1_1.jpg?ts=1627035611819",
    productName: "LIGHTWIEGHT RUBBERISED",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 50,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4667/155/251/2/w/444/4667155251_2_1_1.jpg?ts=1628848868184",
    productName: "COTTON JACKET POCKETS",
    price: 3490,
    strikedPrice: 7990,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 55,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/1538/313/305/2/w/444/1538313305_2_1_1.jpg?ts=1631277001985",
    productName: "BASIC DENIM JACKET",
    price: 2290,
    strikedPrice: 2999,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 20,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/3562/326/712/2/w/444/3562326712_2_1_1.jpg?ts=1628850964624",
    productName: "OVERSHIRT WITH CONTRAST",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 55,
    Brand: "hummel",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/3918/306/251/2/w/444/3918306251_2_1_1.jpg?ts=1633072946418",
    productName: "TECHNICAL JACKET",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 50,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/9621/430/300/2/w/444/9621430300_2_1_1.jpg?ts=1627033368623",
    productName: "LIGHTWIEGHT TECHNICAL JACKET",
    price: 2290,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Jackets",
    sale: 55,
    Brand: "hummel",
  },

  //OVERSHIRTS
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/2/p/3057/204/800/2/w/444/3057204800_2_1_1.jpg?ts=1638351856835",
    productName: "GEOMETRIC JACQUARD",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 45,
    Brand: "hummel",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0072/927/401/2/w/444/0072927401_2_1_1.jpg?ts=1631867549480",
    productName: "OVERSHIRT POCKETS",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 55,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0693/331/800/2/w/444/0693331800_2_1_1.jpg?ts=1628608130880",
    productName: "STRIPED JACQUARD SHIRT",
    price: 1590,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 65,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/7446/313/676/2/w/444/7446313676_2_1_1.jpg?ts=1632915632883",
    productName: "CORDUROY OVERSHIRT",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 55,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4477/431/710/3/w/444/4477431710_2_5_1.jpg?ts=1626252294014",
    productName: "PATCH OVERSHIRT",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 55,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/1248/414/800/2/w/444/1248414800_2_1_1.jpg?ts=1633506734448",
    productName: "FAUX SHEARLING CHECK",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 45,
    Brand: "hummel",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/2675/308/300/2/w/444/2675308300_2_1_1.jpg?ts=1628671908667",
    productName: "STRIPED JACQUARD ",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 45,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/5950/515/400/2/w/444/5950515400_2_2_1.jpg?ts=1633074426695",
    productName: "® ERIN WILSON OVERSHIRT",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "male",
    itemCategory: "Overshirt",
    sale: 45,
    Brand: "Lotto",
  },

  //KNITWEAR
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0077/301/710/2/w/444/0077301710_2_1_1.jpg?ts=1628074520816",
    productName: "COTTON AND SILK SHIRT",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/2893/306/832/2/w/444/2893306832_2_1_1.jpg?ts=1636542185679",
    productName: "WOOL-SILK SWEATER",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/3284/309/439/2/w/444/3284309439_2_1_1.jpg?ts=1633691154910",
    productName: "COTTON SWEATER DETAIL",
    price: 1290,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6674/300/520/3/w/444/6674300520_2_1_1.jpg?ts=1626187633056",
    productName: "COMBINED KNIT T-SHIRT",
    price: 990,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 60,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4090/322/401/2/w/444/4090322401_2_1_1.jpg?ts=1636449667602",
    productName: "GRAPHIC PRINT SWEATER",
    price: 1290,
    strikedPrice: 2590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0048/309/803/2/w/444/0048309803_2_1_1.jpg?ts=1637673986198",
    productName: "ABSTRACT JACQUARD SWEATER",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "Lotto",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/5755/307/400/2/w/444/5755307400_2_1_1.jpg?ts=1637138062196",
    productName: "STRIPED SWEATER",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "Lotto",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4938/313/802/2/w/444/4938313802_2_1_1.jpg?ts=1629448666038",
    productName: "MOUNTAIN JACQUARD CARDIGAN",
    price: 2290,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Knitwear",
    sale: 50,
    Brand: "Puma",
  },

  //SHIRTS
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/3717/350/250/2/w/444/3717350250_2_1_1.jpg?ts=1630063982843",
    productName: "CONTRAST SLOGAN SHIRT",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 55,
    Brand: "Lotto",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6987/360/707/2/w/444/6987360707_2_1_1.jpg?ts=1631885303474",
    productName: "COLOURED COTTON SHIRT",
    price: 1290,
    strikedPrice: 1990,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 35,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/7545/225/679/2/w/444/7545225679_2_1_1.jpg?ts=1622476872265",
    productName: "LYOCELL-LINEN SHIRT",
    price: 1490,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 45,
    Brand: "Adidas",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6917/324/250/2/w/444/6917324250_2_1_1.jpg?ts=1627028393401",
    productName: "WATERCOLOUR PRINT SHIRT",
    price: 1490,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 50,
    Brand: "Lotto",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/2/p/6085/305/800/2/w/444/6085305800_2_1_1.jpg?ts=1638291014174",
    productName: "SLOGAN PRINT SHIRT",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 55,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/8574/337/300/2/w/444/8574337300_2_1_1.jpg?ts=1626693047023",
    productName: "FLORAL PRINT SHIRT",
    price: 1490,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 45,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6917/318/615/22/w/444/6917318615_2_3_1.jpg?ts=1626187910297",
    productName: "PALM TREE PRINT SHIRT",
    price: 1490,
    strikedPrice: 2999,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 50,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/8727/302/052/2/w/444/8727302052_2_1_1.jpg?ts=1626683134354",
    productName: "COTTON - HEMP SHIRT",
    price: 1290,
    strikedPrice: 2999,
    itemGender: "male",
    itemCategory: "Shirt",
    sale: 55,
    Brand: "HRX by Hrithik Rosha",
  },

  //TSHIRTS
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0840/302/609/2/w/444/0840302609_2_1_1.jpg?ts=1628241474850",
    productName: "TIE-DYE PRINT SWEATSHIRT",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 55,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/0722/410/250/12/w/444/0722410250_2_1_1.jpg?ts=1629791310289",
    productName: "BASIC LIGHTWEIGHT T-SHIRT",
    price: 590,
    strikedPrice: 790,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 25,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0962/303/251/2/w/444/0962303251_2_1_1.jpg?ts=1628068341757",
    productName: "CHERRY COKE T-SHIRT",
    price: 990,
    strikedPrice: 1990,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 50,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/5644/341/800/2/w/444/5644341800_2_1_1.jpg?ts=1628072377647",
    productName: "CONTRAST PRINT T-SHIRT",
    price: 990,
    strikedPrice: 1990,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 50,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/7878/307/183/2/w/444/7878307183_2_1_1.jpg?ts=1629463792668",
    productName: "MICKEY MOUSE PRINT T-SHIRT",
    price: 990,
    strikedPrice: 1990,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 50,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6462/301/401/2/w/444/6462301401_2_1_1.jpg?ts=1624881360120",
    productName: "PIQUÉ TEXTURE T-SHIRT",
    price: 790,
    strikedPrice: 1590,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 50,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4231/400/439/3/w/444/4231400439_2_1_1.jpg?ts=1626295089339",
    productName: "KNIT T-SHIRT",
    price: 990,
    strikedPrice: 1790,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 45,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0495/441/251/2/w/444/0495441251_2_1_1.jpg?ts=1623841540341",
    productName: "PAINT SPLATTER PRINT T-SHIRT",
    price: 990,
    strikedPrice: 1999,
    itemGender: "male",
    itemCategory: "T-Shirt",
    sale: 50,
    Brand: "Puma",
  },

  //TROUSERS AND JEANS
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6688/368/427/2/w/444/6688368427_2_1_1.jpg?ts=1629882542785",
    productName: "THE 90S SLIM FIT JEANS",
    price: 2490,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 45,

    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/9632/309/401/2/w/444/9632309401_2_1_1.jpg?ts=1632485888406",
    productName: "TEXTURED COTTON TROUSERS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 60,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6688/316/709/2/w/444/6688316709_2_1_1.jpg?ts=1633514006739",
    productName: "THE 90S CROPPED JEANS",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 55,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/2649/455/710/2/w/444/2649455710_2_1_1.jpg?ts=1628092549536",
    productName: "COTTON-LYOCELL TROUSERS",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 55,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/12/w/334/4369254800_1_1_1.jpg?ts=1634205243744",
    productName: "QUILTED JACKET",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%",
    Brand: "Pothys",
  },
  // 2==2
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4369/254/800/3/w/334/4369254800_2_3_1.jpg?ts=1633623294149",
    productName: "QUILTED JACKET",
    price: 2990,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%",
    Brand: "Mitera",
  },
  //  2==3
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2010/739/612/2/w/334/2010739612_1_1_1.jpg?ts=1636472339384",
    productName: "FAUX SHEARLING SHIRT",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%",
    Brand: "Anouk",
  },
  // 2==4
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/334/2712312826_1_1_1.jpg?ts=1629886294215",
    productName: "BLOCK SWEATSHI",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "45%",
    Brand: "Unnati silks",
  },
  // 2==5
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8197/711/505/2/w/437/8197711505_6_1_1.jpg?ts=1632327855935",
    productName: "JACKET WITH POCKETS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "60%",
    Brand: "W",
  },
  // 2==6
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/0858/626/409/2/w/437/0858626409_1_1_1.jpg?ts=1629901592395",
    productName: "RETRO JACKET",
    price: 1590,
    strikedPrice: 2790,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "40%",
    Brand: "Mitera",
  },
  // 2==7
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4877/250/800/2/w/437/4877250800_2_1_1.jpg?ts=1633520163851",
    productName: "DENIM OVERSHIRT",
    price: 1990,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%",
    Brand: "Mitera",
  },
  // 2==8
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2969/094/505/2/w/437/2969094505_6_1_1.jpg?ts=1628601765316",
    productName: "WATER-REPELLENT JACKET",
    price: 1990,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%",
    Brand: "Mitera",
  },
  // 2==9
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/5598/243/600/2/w/334/5598243600_2_3_1.jpg?ts=1626886150232",
    productName: "REVERSIBLE PRINTED KIMONO",
    price: 2990,
    strikedPrice: 5590,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%",
    Brand: "Mitera",
  },
  // 2==10
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2903/062/712/2/w/334/2903062712_1_1_1.jpg?ts=1622448126787",
    productName: "SHORT KIMONO WITH BELT",
    price: 1990,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "30%",
    Brand: "Sangria",
  },
  // 2==11
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8716/744/515/2/w/334/8716744515_2_5_1.jpg?ts=1630401056004",
    productName: "WOOL BLEND COAT BUTT..",
    price: 4990,
    strikedPrice: 9990,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "50%",
    Brand: "7Threads",
  },
  // 2==12
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/1/p/2010/748/700/2/w/334/2010748700_1_1_1.jpg?ts=1637858335093",
    productName: "CROPPED CHECK BLAZER",
    price: 2990,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "JACKETS_PUFFERS",
    sale: "50%",
    Brand: "KALINI",
  },
  // 3==1
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8726/749/716/2/w/334/8726749716_2_1_1.jpg?ts=1631202978380",
    productName: "TAILORED BLAZER",
    price: 3990,
    strikedPrice: 7990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%",
    Brand: "Pothys",
  },
  // 3==2
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/3187/273/250/3/w/334/3187273250_2_3_1.jpg?ts=1623917995622",
    productName: "TEXTURED CROPPED BLAZER",
    price: 2990,
    strikedPrice: 5490,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "45%",
    Brand: "Anouk",
  },
  // 3==3
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9006/968/800/2/w/334/9006968800_2_3_1.jpg?ts=1632486631488",
    productName: "GATHERED BLAZER",
    price: 3990,
    strikedPrice: 7990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%",
    Brand: "Mitera",
  },
  // 3==4
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7720/805/736/2/w/334/7720805736_1_1_1.jpg?ts=1620921049302",
    productName: "STRAIGHT LINEN BLAZER",
    price: 2990,
    strikedPrice: 6990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "55%",
    Brand: "Unnati silks",
  },
  // 3==5
  {
    imageURL:
      "https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/334/3187273250_1_1_1.jpg?ts=1619601165162",
    productName: "TEXTURED CROPPED BLAZER",
    price: 2990,
    strikedPrice: 5490,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "45%",
    Brand: "W",
  },
  // 3==6
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9577/722/706/2/w/334/9577722706_1_1_1.jpg?ts=1637916751505",
    productName: "CREASED-EFFECT BLAZER",
    price: 3990,
    strikedPrice: 6990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "40%",
    Brand: "Unnati silks",
  },
  // 3==7
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9033/718/800/2/w/334/9033718800_1_1_1.jpg?ts=1638866546879",
    productName: "WOOL BLEND COAT",
    price: 4990,
    strikedPrice: 10990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "50%",
    Brand: "Unnati silks",
  },
  // 3==8
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8763/822/802/2/w/334/8763822802_1_1_1.jpg?ts=1634105994980",
    productName: "LIMITED EDITION BLAZER",
    price: 3990,
    strikedPrice: 9990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%",
    Brand: "Unnati silks",
  },
  // 3==9
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9095/725/800/2/w/334/9095725800_1_1_1.jpg?ts=1632481147339",
    productName: "DINNER JACKET EDITION",
    price: 3990,
    strikedPrice: 9990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%",
    Brand: "Unnati silks",
  },
  // 3==10
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9548/793/800/3/w/334/9548793800_15_1_1.jpg?ts=1638443639152",
    productName: "MATCHING VELVET WAISTCOAT",
    price: 1990,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%",
    Brand: "Sangria",
  },
  // 3==11
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4661/708/800/72/w/334/4661708800_2_2_1.jpg?ts=1621424472587",
    productName: "LINEN BLEND HALTERNECK WAISTCOAT",
    price: 1790,
    strikedPrice: 2590,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 3==12
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7784/587/710/72/w/334/7784587710_2_3_1.jpg?ts=1621945692184",
    productName: "OVERSIZE FLOWING BLAZER",
    price: 2990,
    strikedPrice: 6990,
    itemGender: "female",
    itemCategory: "BLAZERS_COATS",
    sale: "60%",
    Brand: "KALINI",
  },
  // 4==1
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4437/272/623/2/w/334/4437272623_1_1_1.jpg?ts=1627568609620",
    productName: "PRINTED MIDI DRESS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "Pothys",
  },
  // 4==2
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2969/287/800/2/w/334/2969287800_1_1_1.jpg?ts=1631872676085",
    productName: "FAUX LEATHER DRESS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "Unnati silks",
  },
  // 4==3
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4437/312/800/2/w/334/4437312800_2_2_1.jpg?ts=1630498686776",
    productName: "LINEN BLEND DRESS WITH CUT-OUT",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "Mitera",
  },
  // 4==4
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8990/608/538/2/w/334/8990608538_2_4_1.jpg?ts=1632407623736",
    productName: "SATIN MIDI DRESS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "Anouk",
  },
  // 4==5
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/5107/300/519/2/w/334/5107300519_2_2_1.jpg?ts=1627397400600",
    productName: "LONG EMBROIDERED DRESS",
    price: 1190,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "70%",
    Brand: "W",
  },
  // 4==6
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/9182/211/330/2/w/334/9182211330_1_1_1.jpg?ts=1632929118320",
    productName: "RUFFLED PRINTED DRESS",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 4==7
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/0387/188/800/2/w/334/0387188800_1_1_1.jpg?ts=1631186717492",
    productName: "MINI DRESS WITH KNOT",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 4==8
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/2183/263/800/2/w/334/2183263800_2_15_1.jpg?ts=1632299076589",
    productName: "PRINTED SATIN DRESS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 4==9
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/4877/243/800/2/w/334/4877243800_2_1_1.jpg?ts=1630401140733",
    productName: "DENIM DRESS",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 4==10
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/1131/847/061/2/w/334/1131847061_1_1_1.jpg?ts=1621326407949",
    productName: "KAPPA UNITARD",
    price: 990,
    strikedPrice: 1990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "Sangria",
  },
  // 4==11
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8671/542/050/2/w/334/8671542050_1_1_1.jpg?ts=1629884212803",
    productName: "PRINTED SATIN DRESS",
    price: 1190,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "7Threads",
  },
  // 4==12
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7901/423/800/2/w/334/7901423800_1_1_1.jpg?ts=1631110293978",
    productName: "RIBBED MIDI DRESS",
    price: 990,
    strikedPrice: 1990,
    itemGender: "female",
    itemCategory: "DRESSES_JUMPSUITS",
    sale: "60%",
    Brand: "KALINI",
  },
  // 5==1
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7957/021/712/3/w/334/7957021712_2_1_1.jpg?ts=1624019882619",
    productName: "TEXTURED PRINTED BLOUSE",
    price: 1590,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "Pothys",
  },
  // 5==2
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8561/577/400/2/w/334/8561577400_1_1_1.jpg?ts=1632910749725",
    productName: "FINE CORDUROY SHIRT",
    price: 990,
    strikedPrice: 1990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "50%",
    Brand: "Anouk",
  },
  // 5==3
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7484/166/942/2/w/334/7484166942_1_1_1.jpg?ts=1630580738069",
    productName: "FLOWING JACQUARD SHIRT",
    price: 1590,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "Mitera",
  },
  // 5==4
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7563/268/629/2/w/334/7563268629_2_1_1.jpg?ts=1632486605364",
    productName: "VOLUMINOUS POPLIN SHIRT",
    price: 1590,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "Unnati silks",
  },
  // 5==5
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/7563/252/606/2/w/334/7563252606_2_1_1.jpg?ts=1627046994062",
    productName: "CROSSOVER PRINTED BLOUSE",
    price: 1590,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "W",
  },
  // 5==6
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/8351/239/330/2/w/334/8351239330_1_1_1.jpg?ts=1634294247335",
    productName: "PRINTED PLEATED BLOUSE",
    price: 1590,
    strikedPrice: 2790,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "KALINI",
  },
  // 5==7
  {
    imageURL:
      "https://static.zara.net/photos///2022/V/0/1/p/4437/042/507/2/w/334/4437042507_2_1_1.jpg?ts=1636560539578",
    productName: "FITTED KNIT BLOUSE",
    price: 1590,
    strikedPrice: 2990,
    itemGender: "female",
    itemCategory: "SHIRTS",
    sale: "45%",
    Brand: "KALINI",
  },
  // 5==8
];

//Adding the query to search Data
searchData = searchData.filter(function(elem) {
    if(elem.productName.includes(query) || elem.productName.includes(query.toUpperCase())) {
        return elem;
    }
})


appendproducts(searchData, productList);
var sorting = document.querySelector("#select-sorting");
sorting.addEventListener("change", () => {
  var selected = document.querySelector("#select-sorting").value;
  if (selected == "high") {
    searchData.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    //ascending
    searchData.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }

  appendproducts(searchData, productList);
});
var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "T-Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Knitwear") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Overshirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check5 = document.querySelector("input[name=check5]");
check5.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Zara_Athleticz") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check6 = document.querySelector("input[name=check6]");
check6.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Jackets") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check7 = document.querySelector("input[name=check7]");
check7.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Shorts") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check8 = document.querySelector("input[name=check8]");
check8.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.itemCategory == "Trousers") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check9 = document.querySelector("input[name=check9]");
check9.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "Puma") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check10 = document.querySelector("input[name=check10]");
check10.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "HRX by Hrithik Rosha") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check11 = document.querySelector("input[name=check11]");
check11.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "FILA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check12 = document.querySelector("input[name=check12]");
check12.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "hummel") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check13 = document.querySelector("input[name=check13]");
check13.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "ADIDAS") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check14 = document.querySelector("input[name=check14]");
check14.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "Lotto") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check15 = document.querySelector("input[name=check15]");
check15.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "Nike") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check16 = document.querySelector("input[name=check16]");
check16.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.Brand == "one8 x PUMA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check17 = document.querySelector("input[name=check17]");
check17.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.price > 0 && elem.price < 1000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check18 = document.querySelector("input[name=check18]");
check18.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.price > 1000 && elem.price < 1500) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check19 = document.querySelector("input[name=check19]");
check19.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.price > 1500 && elem.price < 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check20 = document.querySelector("input[name=check20]");
check20.addEventListener("change", () => {
  let data = searchData.filter(function (elem) {
    if (elem.price > 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
