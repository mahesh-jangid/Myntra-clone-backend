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

var mensData = [
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
      "https://static.zara.net/photos///2021/I/0/2/p/4161/302/600/2/w/444/4161302600_2_1_1.jpg?ts=1629820726346",
    productName: "JOGGING TROUSERS STRIPES",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 55,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/9632/305/600/2/w/444/9632305600_2_1_1.jpg?ts=1632328635845",
    productName: "FLORAL PRINT TROUSERS",
    price: 1790,
    strikedPrice: 4590,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 60,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6861/352/251/2/w/444/6861352251_2_1_1.jpg?ts=1627902247424",
    productName: "COTTON PLEATED TROUSERS",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 55,
    Brand: "ADIDAS",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/1/p/5862/472/800/2/w/444/5862472800_2_1_1.jpg?ts=1638531159793",
    productName: "SOFT DENIM TROUSERS",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Trousers",
    sale: 55,
    Brand: "Nike",
  },

  //SHORTS
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/1538/395/600/2/w/444/1538395600_2_1_1.jpg?ts=1627028315740",
    productName: "FLORAL PRINT SHORTS",
    price: 590,
    strikedPrice: 1990,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 70,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4090/314/712/22/w/444/4090314712_2_1_1.jpg?ts=1626187210769",
    productName: "ABSTRACT PRINT KNIT BERMUDA SHORTS",
    price: 590,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 75,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4365/404/406/2/w/444/4365404406_2_1_1.jpg?ts=1620814292315",
    productName: "RIPPED DENIM BERMUDA SHORTS",
    price: 590,
    strikedPrice: 1590,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 60,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/4130/401/251/2/w/444/4130401251_2_1_1.jpg?ts=1626249137154",
    productName: "CONTRAST BERMUDA SHORTS",
    price: 590,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 75,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0679/303/015/22/w/444/0679303015_2_1_1.jpg?ts=1626186975611",
    productName: "STRIPED JOGGING SHORTS",
    price: 590,
    strikedPrice: 2790,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 75,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/V/0/2/p/4365/430/800/2/w/444/4365430800_2_1_1.jpg?ts=1619780655556",
    productName: "STRAIGHT FIT DENIM BERMUDA SHORTS",
    price: 590,
    strikedPrice: 1590,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 60,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/6786/425/710/3/w/444/6786425710_2_1_1.jpg?ts=1626304080448",
    productName: "BERMUDA SHORTS WITH SIDE TAPING",
    price: 590,
    strikedPrice: 2490,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 75,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/1538/431/427/2/w/444/1538431427_2_1_1.jpg?ts=1624881300886",
    productName: "SKATE FIT DENIM BERMUDA SHORTS",
    price: 590,
    strikedPrice: 2490,
    itemGender: "male",
    itemCategory: "Shorts",
    sale: 75,
    Brand: "Nike",
  },
  //ZARA ATHLETICS
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/2651/402/800/2/w/444/2651402800_6_1_1.jpg?ts=1632839329295",
    productName: "TECHNICAL T-SHIRT WITH ZIP",
    price: 1990,
    strikedPrice: 3990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 50,
    Brand: "Nike",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0761/603/681/2/w/444/0761603681_6_1_1.jpg?ts=1632944352739",
    productName: "HOODIE",
    price: 1790,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 40,
    Brand: "FILA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/2651/402/442/2/w/444/2651402442_6_1_1.jpg?ts=1632843098235",
    productName: "TECHNICAL T-SHIRT WITH ZIP",
    price: 1990,
    strikedPrice: 3990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 50,
    Brand: "Puma",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0119/403/524/2/w/444/0119403524_6_1_1.jpg?ts=1632837484798",
    productName: "SEAMLESS SINGLET TOP",
    price: 790,
    strikedPrice: 1890,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 55,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/5644/404/803/2/w/444/5644404803_6_1_1.jpg?ts=1635944504115",
    productName: "ZIP-UP NEXT T-SHIRT",
    price: 1790,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 40,
    Brand: "one8 x PUMA",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0119/403/803/2/w/444/0119403803_6_1_1.jpg?ts=1632904303431",
    productName: "SEAMLESS SINGLET TOP",
    price: 790,
    strikedPrice: 1890,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 40,
    Brand: "hummel",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/1368/402/803/2/w/444/1368402803_6_1_1.jpg?ts=1635944590857",
    productName: "SEAMLESS LEGGINGS",
    price: 1290,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 55,
    Brand: "HRX by Hrithik Rosha",
  },
  {
    imageURL:
      "https://static.zara.net/photos///2021/I/0/2/p/0119/402/524/2/w/444/0119402524_6_1_1.jpg?ts=1632837528646",
    productName: "LONG SLEEVE SEAMLESS T-SHIRT",
    price: 990,
    strikedPrice: 2990,
    itemGender: "male",
    itemCategory: "Zara_Athleticz",
    sale: 65,
    Brand: "Puma",
  },
];

appendproducts(mensData, productList);

var sorting = document.querySelector("#select-sorting");
sorting.addEventListener("change", () => {
  var selected = document.querySelector("#select-sorting").value;
  if (selected == "high") {
    mensData.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    //ascending
    mensData.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }

  appendproducts(mensData, productList);
});

var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "T-Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Knitwear") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Overshirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Shirt") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check5 = document.querySelector("input[name=check5]");
check5.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Zara_Athleticz") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check6 = document.querySelector("input[name=check6]");
check6.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Jackets") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check7 = document.querySelector("input[name=check7]");
check7.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Shorts") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check8 = document.querySelector("input[name=check8]");
check8.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.itemCategory == "Trousers") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check9 = document.querySelector("input[name=check9]");
check9.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "Puma") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check10 = document.querySelector("input[name=check10]");
check10.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "HRX by Hrithik Rosha") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check11 = document.querySelector("input[name=check11]");
check11.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "FILA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check12 = document.querySelector("input[name=check12]");
check12.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "hummel") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check13 = document.querySelector("input[name=check13]");
check13.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "ADIDAS") {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check14 = document.querySelector("input[name=check14]");
check14.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "Lotto") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check15 = document.querySelector("input[name=check15]");
check15.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "Nike") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check16 = document.querySelector("input[name=check16]");
check16.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.Brand == "one8 x PUMA") {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check17 = document.querySelector("input[name=check17]");
check17.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.price > 0 && elem.price < 1000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
var check18 = document.querySelector("input[name=check18]");
check18.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.price > 1000 && elem.price < 1500) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check19 = document.querySelector("input[name=check19]");
check19.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.price > 1500 && elem.price < 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});

var check20 = document.querySelector("input[name=check20]");
check20.addEventListener("change", () => {
  let data = mensData.filter(function (elem) {
    if (elem.price > 2000) {
      return elem;
    }
  });
  appendproducts(data, productList);
});
