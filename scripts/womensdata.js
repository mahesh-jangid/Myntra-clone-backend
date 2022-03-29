import { appendproducts } from "./category.js";
import navbar from "./navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

  const productList = document.querySelector(".product-items");

  var womensData = [
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
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2143/242/506/2/w/334/2143242506_2_2_1.jpg?ts=1627046995619",
      productName: "STRIPED BLOUSE WITH POCKET",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "SHIRTS",
      sale: "45%",
    },
    // 5==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_2_1_1.jpg?ts=1628782308563",
      productName: "RUSTIC TOP WITH POCKET",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "SHIRTS",
      sale: "45%",
      Brand: "KALINI",
    },
    // 5==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2298/218/330/2/w/334/2298218330_2_1_1.jpg?ts=1632479467987",
      productName: "FLORAL PRINT BLOUSE",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SHIRTS",
      sale: "45%",
      Brand: "Sangria",
    },
    // 5==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2143/241/426/2/w/334/2143241426_2_1_1.jpg?ts=1623939956197",
      productName: "TEXTURED COTTON BLOUSE",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SHIRTS",
      sale: "45%",
      Brand: "7Threads",
    },
    // 5==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9479/080/251/2/w/334/9479080251_2_3_1.jpg?ts=1627047029125",
      productName: "LOOSE-FITTING SHIRT WITH POCKETS",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SHIRTS",
      sale: "45%",
      Brand: "KALINI",
    },
    // 6==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8246/242/403/2/w/334/8246242403_2_1_1.jpg?ts=1628174682184",
      productName: "ZW THE CARPENTER STRAIGHT JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "40%",
      Brand: "Pothys",
    },
    // 6==2
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9632/240/251/2/w/334/9632240251_1_1_1.jpg?ts=1625061419331",
      productName: "ZW THE MERCER JOGGER JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "40%",
      Brand: "Anouk",
    },
    // 6==3
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/0060/216/104/17/w/334/0060216104_6_1_1.jpg?ts=1626687375093",
      productName: "FLARE STRIPED CROPPED JEANS",
      price: 1190,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Mitera",
    },
    // 6==4
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9632/258/800/2/w/334/9632258800_1_1_1.jpg?ts=1639496394747",
      productName: "SPLIT HEM ZW THE SKINNY JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Unnati silks",
    },
    // 6==5
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8197/210/251/2/w/334/8197210251_1_1_1.jpg?ts=1623162615161",
      productName: "FLARED TROUSERS",
      price: 1190,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "W",
    },
    // 6==6
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
      productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
      price: 1190,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Sangria",
    },
    // 6==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8246/250/446/2/w/334/8246250446_1_1_1.jpg?ts=1627641955263",
      productName: "ZW THE SKINNY FLARE JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Sangria",
    },
    // 6==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9863/243/400/3/w/334/9863243400_1_1_1.jpg?ts=1627291372223",
      productName: "ZW THE SKINNY FLARE JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Sangria",
    },
    // 6==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2553/262/400/2/w/334/2553262400_2_10_1.jpg?ts=1639735736183",
      productName: "ZW THE 90S SLIM SPLIT-HEM JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Sangria",
    },
    // 6==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/6164/226/805/2/w/334/6164226805_1_1_1.jpg?ts=1639043102110",
      productName: "Z1975 HIGH RISE SLIM FLARE JEANS",
      price: 1190,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "Sangria",
    },
    // 6==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/6840/245/620/2/w/334/6840245620_2_6_1.jpg?ts=1627370803933",
      productName: "JEANS ZW THE NOA MOM FIT",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "7Threads",
    },
    // 6==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9863/252/407/3/w/334/9863252407_1_1_1.jpg?ts=1636045574689",
      productName: "ZW THE SKINNY JEANS",
      price: 1790,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "JEANS",
      sale: "55%",
      Brand: "KALINI",
    },

    // 7==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7102/215/800/2/w/334/7102215800_2_6_1.jpg?ts=1630068751354",
      productName: "EXTRA-LONG LEGGINGS WITH VENT===",
      price: 990,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "60%",
      Brand: "Pothys",
    },
    // 7==2
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9479/242/806/2/w/334/9479242806_1_1_1.jpg?ts=1639735796124",
      productName: "CARROT FIT CROPPED TROUSERS",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "60%",
      Brand: "Anouk",
    },
    // 7==3
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/9479/284/700/2/w/334/9479284700_1_1_1.jpg?ts=1637684372845",
      productName: "SHIRRED WAIST TROUSERS",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 7==4
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1165/468/500/2/w/334/1165468500_2_2_1.jpg?ts=1636545143518",
      productName: "FINELY PLEATED PALAZZO TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "50%",
      Brand: "Unnati silks",
    },
    // 7==5
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8292/382/046/2/w/334/8292382046_1_1_1.jpg?ts=1626889458874",
      productName: "PRINTED CROPPED TROUSERS",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "45%",
      Brand: "W",
    },
    // 7==6
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9815/212/800/2/w/334/9815212800_2_4_1.jpg?ts=1630403040243",
      productName: "SPLIT HEM LEGGINGS",
      price: 990,
      strikedPrice: 1790,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "40%",
      Brand: "Pothys",
    },
    // 7==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/3564/222/800/2/w/334/3564222800_1_1_1.jpg?ts=1627482619691",
      productName: "STRAIGHT-LEG PYJAMA-STYLE TROUSER",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "40%",
      Brand: "Pothys",
    },
    // 7==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5580/035/710/2/w/334/5580035710_2_4_1.jpg?ts=1626436778682",
      productName: "RIBBED WIDE-LEG TROUSERS",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "50%",
      Brand: "Pothys",
    },
    // 7==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8527/353/030/2/w/334/8527353030_1_1_1.jpg?ts=1627648909636",
      productName: "FLORAL PRINT TROUSERS",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "45%",
      Brand: "Pothys",
    },
    // 7==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7290/041/500/2/w/334/7290041500_1_1_1.jpg?ts=1620379265369",
      productName: "SLIM FIT PRINTED TROUSERS",
      price: 890,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "30%",
      Brand: "Sangria",
    },
    // 7==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9479/246/426/3/w/334/9479246426_1_1_1.jpg?ts=1624019891172",
      productName: "TEXTURED COTTON TROUSERS",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "45%",
      Brand: "7Threads",
    },
    // 7==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7385/268/050/2/w/334/7385268050_1_1_1.jpg?ts=1632322997223",
      productName: "PRINTED FLARED TROUSERS",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "TROUSERS",
      sale: "40%",
      Brand: "KALINI",
    },
    // 8==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/4424/854/513/2/w/334/4424854513_6_1_1.jpg?ts=1622714535765",
      productName: "V-NECK BASIC T-SHIRT",
      price: 390,
      strikedPrice: 590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "30%",
      Brand: "Pothys",
    },
    // 8==2
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7901/484/250/2/w/334/7901484250_6_1_1.jpg?ts=1626777191810",
      productName: "RIBBED POLO SHIRT",
      price: 590,
      strikedPrice: 1590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "60%",
      Brand: "Anouk",
    },
    // 8==3
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/6050/319/099/2/w/334/6050319099_2_1_1.jpg?ts=1635258853922",
      productName: "CUT-OUT RIBBED TOP",
      price: 790,
      strikedPrice: 1790,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "55%",
      Brand: "Mitera",
    },
    // 8==4
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/1/p/4174/343/710/2/w/334/4174343710_6_1_1.jpg?ts=1615886104474",
      productName: "BASIC TANK TOP",
      price: 390,
      strikedPrice: 590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "30%",
      Brand: "Unnati silks",
    },
    // 8==5
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1660/811/800/2/w/334/1660811800_6_1_1.jpg?ts=1628769671624",
      productName: "T-SHIRT WITH BUTTON DETAILS",
      price: 490,
      strikedPrice: 890,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "30%",
      Brand: "W",
    },
    // 8==6
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/1/p/1044/159/737/2/w/334/1044159737_6_1_1.jpg?ts=1617020365137",
      productName: "ASYMMETRIC OVERSIZED T-SHIRT",
      price: 790,
      strikedPrice: 1790,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "55%",
      Brand: "Anouk",
    },
    // 8==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/V/0/1/p/0858/095/250/2/w/334/0858095250_6_1_1.jpg?ts=1617692828251",
      productName: "LYOCELL V-NECK T-SHIRT",
      price: 590,
      strikedPrice: 1490,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "30%",
      Brand: "Anouk",
    },
    // 8==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/0962/376/500/2/w/34/0962376500_6_1_1.jpg?ts=1621930685229",
      productName: "BASIC TANK TOP",
      price: 390,
      strikedPrice: 490,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "30%",
      Brand: "Anouk",
    },
    // 8==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5644/806/426/2/w/334/5644806426_6_1_1.jpg?ts=1627385522714",
      productName: "OVERSIZE V-NECK T-SHIRT",
      price: 590,
      strikedPrice: 1590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "60%",
      Brand: "Anouk",
    },
    // 8==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5644/816/400/2/w/334/5644816400_2_1_1.jpg?ts=1629303550438",
      productName: "ASYMMETRIC TOP",
      price: 590,
      strikedPrice: 1590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "60%",
      Brand: "Sangria",
    },
    // 8==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/0264/470/406/2/w/334/0264470406_6_1_1.jpg?ts=1626350283035",
      productName: "CROPPED POLO SHIRT",
      price: 790,
      strikedPrice: 1790,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "55%",
      Brand: "7Threads",
    },
    // 8==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7901/345/613/2/w/334/7901345613_1_1_1.jpg?ts=1629889209696",
      productName: "SEAMLESS TOP",
      price: 590,
      strikedPrice: 1590,
      itemGender: "female",
      itemCategory: "T-SHIRTS",
      sale: "60%",
      Brand: "KALINI",
    },
    // 9==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/4437/311/800/2/w/334/4437311800_2_1_1.jpg?ts=1630498628529",
      productName: "LINEN BLEND TOP WITH CUT-OUT DETAIL",
      price: 890,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "30%",
      Brand: "Pothys",
    },
    // 9==2
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/3067/469/611/17/w/334/3067469611_1_1_1.jpg?ts=1635155193868",
      productName: "SATIN CAMISOLE TOP",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "70%",
      Brand: "Anouk",
    },
    // 9==3
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/3067/455/050/2/w/334/3067455050_1_1_1.jpg?ts=1628759026107",
      productName: "CROPPED CORSETRY-INSPIRED CHECK..",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "50%",
      Brand: "Mitera",
    },
    // 9==4
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/3253/325/060/2/w/334/3253325060_2_1_1.jpg?ts=1622630295369",
      productName: "STRAPPY BODYSUIT",
      price: 490,
      strikedPrice: 990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "50%",
      Brand: "Unnati silks",
    },
    // 9==5
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/9219/561/051/2/w/334/9219561051_1_1_1.jpg?ts=1634568074769",
      productName: "PRINTED LINGERIE TOP",
      price: 690,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "65%",
      Brand: "W",
    },
    // 9==6
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/4661/480/668/2/w/334/4661480668_2_1_1.jpg?ts=1626866643029",
      productName: "SATIN-EFFECT STRAPPY BODYSUIT",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "50%",
      Brand: "Unnati silks",
    },
    //  9==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2143/244/746/2/w/334/2143244746_1_1_1.jpg?ts=1628781667372",
      productName: "RUSTIC TOP WITH POCKET",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "45%",
      Brand: "Unnati silks",
    },
    // 9==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5216/251/982/2/w/334/5216251982_2_1_1.jpg?ts=1627568607188",
      productName: "PRINTED TUNIC",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "45%",
      Brand: "Unnati silks",
    },
    // 9==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8490/336/330/2/w/334/8490336330_1_1_1.jpg?ts=1629464122450",
      productName: "PRINTED PATCHWORK TOP",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "40%",
      Brand: "Unnati silks",
    },
    // 9==10
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
      productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
      price: 1590,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "35%",
      Brand: "Sangria",
    },
    // 9==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2731/040/303/4/w/334/2731040303_2_10_1.jpg?ts=1639734568285",
      productName: "ASYMMETRIC TOP",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "40%",
      Brand: "7Threads",
    },
    // 9==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8784/671/050/2/w/334/8784671050_1_1_1.jpg?ts=1629904128613",
      productName: "FLORAL PRINT ASYMMETRIC TOP",
      price: 990,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "TOPS_BODYSUITS",
      sale: "60%",
      Brand: "KALINI",
    },
    // 10==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1165/230/032/2/w/334/1165230032_2_3_1.jpg?ts=1633000926818",
      productName: "",
      price: 1590,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Pothys",
    },
    // 10==2
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1165/222/500/2/w/334/1165222500_6_1_1.jpg?ts=1626161411421",
      productName: "TULLE MIDI SKIRT",
      price: 990,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "60%",
      Brand: "Anouk",
    },
    // 10==3
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7385/233/700/2/w/334/7385233700_1_1_1.jpg?ts=1631693265979",
      productName: "FLORAL SKORT",
      price: 990,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 10==4
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/0327/003/050/2/w/334/0327003050_6_1_1.jpg?ts=1624266674909",
      productName: "STRAIGHT SHORTS WITH DAISY PRINT",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Unnati silks",
    },
    // 10==5
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/6840/247/800/2/w/334/6840247800_6_1_1.jpg?ts=1621521765301",
      productName: "ZW THE HIGH WAIST SHORTS",
      price: 2790,
      strikedPrice: 1590,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "W",
    },
    // 10==6
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/7839/419/600/3/w/334/7839419600_1_1_1.jpg?ts=1628073456936",
      productName: "STRAIGHT SATIN SKIRT",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 10==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1971/222/400/2/w/334/1971222400_2_3_1.jpg?ts=1626274609977",
      productName: "FLORAL SKORT",
      price: 990,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 10==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1608/038/800/2/w/334/1608038800_1_1_1.jpg?ts=1622112454813",
      productName: "POLKA DOT SKORTS",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 10==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/8991/320/330/2/w/334/8991320330_2_2_1.jpg?ts=1631718366620",
      productName: "FLORAL PRINT SKIRT",
      price: 1590,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Mitera",
    },
    // 10==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2183/248/800/2/w/334/2183248800_1_1_1.jpg?ts=1626939170220",
      productName: "PRINTED SARONG SKIRT",
      price: 1190,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "Sangria",
    },
    // 10==11
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/4387/230/085/2/w/334/4387230085_2_3_1.jpg?ts=1627482612788",
      productName: "GINGHAM SKORT",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "7Threads",
    },
    // 10==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5862/163/406/17/w/334/5862163406_1_1_1.jpg?ts=1626251155044",
      productName: "BELTED BERMUDA SHORTS",
      price: 1190,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "SKIRTS_SHORTS",
      sale: "45%",
      Brand: "KALINI",
    },
    // 11==1
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/3653/109/305/2/w/334/3653109305_2_1_1.jpg?ts=1632929485827",
      productName: "KNIT FAUX FUR WAISTCOAT WITH OPENI",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "40%",
      Brand: "Pothys",
    },
    // 11==2
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/2/w/334/6771021070_2_9_1.jpg?ts=1639135334178",
      productName: "WOOL BLEND AND CASHMERE SWEATER",
      price: 1990,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "Anouk",
    },
    // 11==3
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5536/123/704/12/w/334/5536123704_2_2_1.jpg?ts=1633697178162",
      productName: "OVERSIZE KNIT PULLOVER WITH HOOD",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "40%",
      Brand: "Mitera",
    },
    // 11==4
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/6771/021/104/2/w/334/6771021104_2_9_1.jpg?ts=1639134203728",
      productName: "WOOL BLEND AND CASHMERE SWEATER",
      price: 1990,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "Unnati silks",
    },
    // 11==5
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/6771/021/070/12/w/334/6771021070_2_1_1.jpg?ts=1640188108005",
      productName: "WOOL BLEND AND CASHMERE SWEATER",
      price: 1990,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "W",
    },
    // 11==6
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/4331/138/330/12/w/334/4331138330_2_9_1.jpg?ts=1640003479715",
      productName: "JACQUARD TOP WITH CUT-OUT DETAIL",
      price: 1590,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "7Threads",
    },
    // 11==7
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5802/111/330/12/w/334/5802111330_2_3_1.jpg?ts=1632155779744",
      productName: "CABLE-KNIT SWEATER WITH STRIPES",
      price: 1990,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "7Threads",
    },
    // 11==8
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/1383/008/104/17/w/334/1383008104_2_3_1.jpg?ts=1628240767816",
      productName: "HOODED KNIT TOP",
      price: 1990,
      strikedPrice: 2990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "30%",
      Brand: "7Threads",
    },
    // 11==9
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5802/143/330/18/w/331/5802143330_1_1_1.jpg?ts=1628240772843",
      productName: "KNIT FLORAL CROP TOP",
      price: 790,
      strikedPrice: 990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "20%",
      Brand: "7Threads",
    },
    // 11==10
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/2712/312/826/2/w/331/2712312826_1_1_1.jpg?ts=1629886294215",
      productName: "CONTRASTING COLOUR BLOCK SWEATSHIR..",
      price: 1590,
      strikedPrice: 2790,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "35%",
      Brand: "Sangria",
    },
    // 11==11
    {
      imageURL:
        "https://static.zara.net/photos///2022/V/0/1/p/4331/024/716/2/w/331/4331024716_1_1_1.jpg?ts=1639495673304",
      productName: "KNIT TOP WITH OPEN BACK",
      price: 1590,
      strikedPrice: 1990,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "20%",
      Brand: "7Threads",
    },
    // 11==12
    {
      imageURL:
        "https://static.zara.net/photos///2021/I/0/1/p/5536/051/104/2/w/331/5536051104_1_1_1.jpg?ts=1633537948494",
      productName: "STRIPED KNIT VEST",
      price: 1590,
      strikedPrice: 2590,
      itemGender: "female",
      itemCategory: "KNITWEAR",
      sale: "35%",
      Brand: "KALINI",
    },
  ];

  appendproducts(womensData, productList);
  var sorting = document.querySelector("#select-sorting");
  sorting.addEventListener("change", () => {
    var selected = document.querySelector("#select-sorting").value;
    if (selected == "high") {
      womensData.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (selected == "low") {
      //ascending
      womensData.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }

    appendproducts(womensData, productList);
  });

  var check1 = document.querySelector("input[name=check1]");
  check1.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "SHIRTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check2 = document.querySelector("input[name=check2]");
  check2.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "TOPS_BODYSUITS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check3 = document.querySelector("input[name=check3]");
  check3.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "BLAZERS_COATS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check4 = document.querySelector("input[name=check4]");
  check4.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "DRESSES_JUMPSUITS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check5 = document.querySelector("input[name=check5]");
  check5.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "JEANS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check6 = document.querySelector("input[name=check6]");
  check6.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "JACKETS_PUFFERS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check7 = document.querySelector("input[name=check7]");
  check7.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "TROUSERS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check8 = document.querySelector("input[name=check8]");
  check8.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.itemCategory == "SKIRTS_SHORTS") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check9 = document.querySelector("input[name=check9]");
  check9.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "Pothys") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check10 = document.querySelector("input[name=check10]");
  check10.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "KALINI") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check11 = document.querySelector("input[name=check11]");
  check11.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "MITERA") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check12 = document.querySelector("input[name=check12]");
  check12.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "7Threads") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check13 = document.querySelector("input[name=check13]");
  check13.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "Anouk") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check14 = document.querySelector("input[name=check14]");
  check14.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "Sangria") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check15 = document.querySelector("input[name=check15]");
  check15.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "Unnati silks") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check16 = document.querySelector("input[name=check16]");
  check16.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.Brand == "W") {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check17 = document.querySelector("input[name=check17]");
  check17.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.price > 0 && elem.price < 1000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });
  var check18 = document.querySelector("input[name=check18]");
  check18.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.price > 1000 && elem.price < 1500) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check19 = document.querySelector("input[name=check19]");
  check19.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.price > 1500 && elem.price < 2000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

  var check20 = document.querySelector("input[name=check20]");
  check20.addEventListener("change", () => {
    let data = womensData.filter(function (elem) {
      if (elem.price > 2000) {
        return elem;
      }
    });
    appendproducts(data, productList);
  });

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