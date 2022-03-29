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

  var kidsData = [
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
        "https://static.zara.net/photos///2021/I/0/3/p/9007/817/620/102/w/386/9007817620_1_1_1.jpg?ts=1636033500773",
      productName: "SHINY TROUSERS WITH VENTS",
      price: 690,
      strikedPrice: 1690,
      itemGender: "womens",
      itemCategory: "TROUSERS | JEANS",
      sale: "55 % OFF",
      age: "6-14 Years",
      Brand: "Tiny Girl",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/9007/817/620/2/w/386/9007817620_6_1_1.jpg?ts=1636027971254",
      productName: "SHINY TROUSERS WITH VENTS",
      price: 690,
      strikedPrice: 1690,
      itemGender: "womens",
      itemCategory: "TROUSERS | JEANS",
      sale: "55 % OFF",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/6317/263/630/2/w/386/6317263630_6_1_1.jpg?ts=1629108094449",
      productName: "FLORAL LOOSE FIT TROUSERS",
      price: 1190,
      strikedPrice: 1990,
      itemGender: "womens",
      itemCategory: "TROUSERS | JEANS",
      sale: "40 % OFF",
      age: "6-14 Years",
      Brand: "Wish Karo",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/2224/765/611/2/w/386/2224765611_6_1_1.jpg?ts=1636551456838",
      productName: "LOGO HOODIE",
      price: 1190,
      strikedPrice: 1490,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/1656/661/746/2/w/386/1656661746_6_1_1.jpg?ts=1637583779502",
      productName: "HOUNDSTOOTH TROUSERS WITH ELASTIC WAIST",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "max",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/3/p/1887/675/401/2/w/386/1887675401_6_1_1.jpg?ts=1613571576121",
      productName: "BASIC PIQUÉ POLO SHIRT",
      price: 350,
      strikedPrice: 490,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "YK",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/4805/794/406/2/w/386/4805794406_6_1_1.jpg?ts=1626775273937",
      productName: "BEACH WEEK T-SHIRT",
      price: 450,
      strikedPrice: 790,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "Pantaloons Junior",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/6917/663/500/2/w/386/6917663500_6_1_1.jpg?ts=1638449964902",
      productName: "CORDUROY JOGGING TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "CUTECUMBER",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/5643/761/700/2/w/386/5643761700_6_1_1.jpg?ts=1626764750925",
      productName: "JUST TROPICAL T-SHIRT",
      price: 450,
      strikedPrice: 790,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "A.T.U.N",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/6917/663/807/2/w/386/6917663807_6_1_1.jpg?ts=1638447890505",
      productName: "CORDUROY JOGGING TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "Tiny Girl",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/5372/660/812/2/w/386/5372660812_6_1_1.jpg?ts=1638284219956",
      productName: "CONTRAST SPORTS TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "UP TO 50% OFF",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/2224/765/611/302/w/386/2224765611_1_1_1.jpg?ts=1636644918774",
      productName: "LOGO HOODIE",
      price: 1190,
      strikedPrice: 1490,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "Wish Karo",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/2224/765/611/2/w/386/2224765611_6_1_1.jpg?ts=1636551456838",
      productName: "LOGO HOODIE",
      price: 1190,
      strikedPrice: 1490,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "max",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/5584/602/527/2/w/386/5584602527_6_1_1.jpg?ts=1638374392270",
      productName: "PLAIN SWEATSHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "YK",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/5584/602/401/2/w/386/5584602401_6_1_1.jpg?ts=1638447890141",
      productName: "PLAIN SWEATSHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "Pantaloons Junior",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/5584/602/615/2/w/386/5584602615_6_1_1.jpg?ts=1639125642502",
      productName: "PLAIN SWEATSHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "CUTECUMBER",
    },

    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/8288/720/800/2/w/386/8288720800_6_1_1.jpg?ts=1635429351103",
      productName: "TUXEDO BLAZER",
      price: 2390,
      strikedPrice: 3990,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "A.T.U.N",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/2795/793/250/2/w/386/2795793250_6_1_1.jpg?ts=1634567002751",
      productName: "PIKACHU POKÉMON © NINTENDO HOODIE",
      price: 1590,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "Tiny Girl",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/4805/716/712/2/w/386/4805716712_6_1_1.jpg?ts=1632913384675",
      productName: "CHEQUERED HOODIE",
      price: 990,
      strikedPrice: 1690,
      itemGender: "mens",
      itemCategory: "SWEATSHIRTS | JACKETS",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/1887/675/401/303/w/386/1887675401_1_1_1.jpg?ts=1624362464545",
      productName: "BASIC PIQUÉ POLO SHIRT",
      price: 350,
      strikedPrice: 490,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "Wish Karo",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/1887/675/401/302/w/386/1887675401_1_1_1.jpg?ts=1624362460138",
      productName: "BASIC PIQUÉ POLO SHIRT",
      price: 350,
      strikedPrice: 490,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/3/p/1887/675/401/2/w/386/1887675401_6_1_1.jpg?ts=1613571576121",
      productName: "BASIC PIQUÉ POLO SHIRT",
      price: 350,
      strikedPrice: 490,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "max",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/5643/761/700/2/w/386/5643761700_6_1_1.jpg?ts=1626764750925",
      productName: "JUST TROPICAL T-SHIRT",
      price: 450,
      strikedPrice: 790,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "YK",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/5643/761/700/2/w/386/5643761700_6_1_1.jpg?ts=1626764750925",
      productName: "JUST TROPICAL T-SHIRT",
      price: 450,
      strikedPrice: 790,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "Pantaloons Junior",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/0962/761/250/304/w/386/0962761250_1_1_1.jpg?ts=1625819235740",
      productName: "KEITH HARING ™ T-SHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "CUTECUMBER",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/0962/761/250/2/w/386/0962761250_6_2_1.jpg?ts=1625224309548",
      productName: "KEITH HARING ™ T-SHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "A.T.U.N",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/0962/761/250/2/w/386/0962761250_6_1_1.jpg?ts=1625231829347",
      productName: "KEITH HARING ™ T-SHIRT",
      price: 690,
      strikedPrice: 1290,
      itemGender: "mens",
      itemCategory: "T-SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "Tiny Girl",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/1656/661/746/403/w/386/1656661746_1_1_1.jpg?ts=1639512488759",
      productName: "HOUNDSTOOTH TROUSERS WITH ELASTIC WAIST",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/1656/661/746/402/w/386/1656661746_1_1_1.jpg?ts=1639512498181",
      productName: "HOUNDSTOOTH TROUSERS WITH ELASTIC WAIST",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "Wish Karo",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/1656/661/746/2/w/386/1656661746_6_1_1.jpg?ts=1637583779502",
      productName: "HOUNDSTOOTH TROUSERS WITH ELASTIC WAIST",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "max",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/8696/782/220/2/w/386/8696782220_6_1_1.jpg?ts=1633358681999",
      productName: "SKELETON JUMPSUIT",
      price: 990,
      strikedPrice: 2990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "YK",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/6917/663/500/2/w/386/6917663500_6_1_1.jpg?ts=1638449964902",
      productName: "CORDUROY JOGGING TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "Pantaloons Junior",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/6917/663/807/302/w/386/6917663807_1_1_1.jpg?ts=1639731122891",
      productName: "CORDUROY JOGGING TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "CUTECUMBER",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/6917/663/807/2/w/386/6917663807_6_1_1.jpg?ts=1638447890505",
      productName: "CORDUROY JOGGING TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "A.T.U.N",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/3/p/5372/660/812/302/w/386/5372660812_1_1_1.jpg?ts=1639570507424",
      productName: "CONTRAST SPORTS TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "mens",
      itemCategory: "TROUSERS | JEANS",
      sale: "",
      age: "6-14 Years",
      Brand: "Tiny Girl",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/3182/777/505/302/w/386/3182777505_1_1_1.jpg?ts=1633532076215",
      productName: "FLANNEL SHIRT WITH SLOGAN",
      price: 1190,
      strikedPrice: 1690,
      itemGender: "mens",
      itemCategory: "SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "MINI KLUB",
    },
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/3/p/3182/777/505/2/w/386/3182777505_6_1_1.jpg?ts=1632990703448",
      productName: "FLANNEL SHIRT WITH SLOGAN",
      price: 1190,
      strikedPrice: 1690,
      itemGender: "mens",
      itemCategory: "SHIRTS",
      sale: "",
      age: "6-14 Years",
      Brand: "Wish Karo",
    },
  ];
  appendproducts(kidsData, productList);

  var sorting = document.querySelector("#select-sorting");
  sorting.addEventListener("change", () => {
    var selected = document.querySelector("#select-sorting").value;
    if (selected == "high") {
      kidsData.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (selected == "low") {
      //ascending
      kidsData.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }

    appendproducts(kidsData, productList);
  });
  var check1 = document.querySelector("input[name=check1]");
  check1.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.itemCategory == "T-SHIRTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check2 = document.querySelector("input[name=check2]");
  check2.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.itemCategory == "DRESSES | JUMPSUITS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check3 = document.querySelector("input[name=check3]");
  check3.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.itemCategory == "SWEATSHIRTS | JACKETS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check4 = document.querySelector("input[name=check4]");
  check4.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.itemCategory == "TROUSERS | JEANS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check5 = document.querySelector("input[name=check5]");
  check5.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.itemCategory == "SHIRTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check6 = document.querySelector("input[name=check6]");
  check6.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "max") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check7 = document.querySelector("input[name=check7]");
  check7.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "YK") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check8 = document.querySelector("input[name=check8]");
  check8.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "Pantaloons Junior") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check9 = document.querySelector("input[name=check9]");
  check9.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "CUTECUMBER") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check10 = document.querySelector("input[name=check10]");
  check10.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "A.T.U.N") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check11 = document.querySelector("input[name=check11]");
  check11.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "Tiny Girl") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check12 = document.querySelector("input[name=check12]");
  check12.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "Wish Karo") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check13 = document.querySelector("input[name=check13]");
  check13.addEventListener("change", () => {
    let data = kidsData.filter(function (elem) {
      if (elem.Brand == "MINI KLUB") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });