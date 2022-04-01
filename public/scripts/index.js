//Navbar import
import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
import discountdiv from "./discountdiv.js";
document.querySelector("#discount-div").innerHTML = discountdiv();
import footer from "./footer.js";
document.querySelector("#footer").innerHTML = footer();
// //Footer import
// import footer from "./components/footer.html"

// console.log(footer())

//Mapping row2
let row2 = document.querySelector("#row2");
let row2Array = [
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7b7be87c-abd9-44ab-afed-7cb00a0d509e1645185357432-DK_Main-Banner_02.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/5fa50d6f-da6f-40d5-b0fd-3f5c92fd5a3e1645185357439-DK_Main-Banner_03.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/a620fc28-92b3-403c-a497-8c3de8ba79c51645185357447-DK_Main-Banner_04.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/f5e08324-29e0-4d69-8b73-6eed14d306091645185357455-DK_Main-Banner_05.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/50189013-41f0-4f70-baa9-3360d6f0bc461645185357462-DK_Main-Banner_06.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7663490e-63f4-43b3-94a5-43fe342187e71645185357469-DK_Main-Banner_07.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/4dd3d8b8-ffb0-4983-b4d3-a3d0e023e21d1645185357479-DK_Main-Banner_08.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/4e204878-9e28-422f-94ef-dd66f9be8e211645185357487-DK_Main-Banner_09.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/39475f93-9e79-4b45-b782-aa3dc0ca934b1645185357499-DK_Main-Banner_10.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/91db34c2-6925-47f5-8f61-4326b1752dca1645185357505-DK_Main-Banner_11.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/e36a90aa-284e-4314-83c1-a8ade6d1b3bb1645185357513-DK_Main-Banner_12.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/5f14bec7-50b7-4efe-9f74-9f695ad7d45f1645185357520-DK_Main-Banner_13.jpg",
];

row2Array.forEach((elem) => {
  let img = document.createElement("img");
  img.setAttribute("class", "col-3");
  img.src = elem;
  row2.append(img);
});

//ROW 3 DATA
let row3 = document.querySelector("#row3");
let row3array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/fa2750b0-2b34-4943-bef7-619d32ce9bb81645110051520-Best_of_Dresses.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/e8ae2c76-1b62-4943-bc5d-52eede82ee461645110054355-Woodland-_Red_Chief_-_more_Min_35__off.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/0f37e81a-6bbd-4271-8e36-0b0c3ee040d11645110012572-Top_sellers_of_western_wear_.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/f37e34db-6307-44ae-accc-7c719e2202ca1645110052333-Kurta_Sets_1499__999.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/a6164b44-d34a-47c1-95ab-e32f19532aeb1645110051666-Cartlon_London-Roadster-_Dressberry_-_more_-_Min.60_off.jpg",
];

row3array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row3.append(col);
});

//ROW 4 DATA
let row4 = document.querySelector("#row4");
let row4array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/4341fe90-ee6a-4857-8cae-e17f60a981241645091289566-Adidas.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/9e50d189-910d-40ca-b1e5-e81cc728616e1645091289648-Jack_-_Jones.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/104ddee3-ecd5-43c2-8d64-5957e4b8ad401645091289667-Marks_-_Spencer.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/daa4eed2-0ba9-491a-a969-4a71369d956e1645091289710-Puma.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/7bfeda92-fa8e-46c9-b862-ca088fdb69671645091289769-USPA_Kids_min_50_OFF.jpg",
];

row4array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row4.append(col);
});

//ROW 5 DATA
let row5 = document.querySelector("#row5");
let row5array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/14859e42-0001-455b-862a-dd39fbbd02b51645091808159-_38.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/244841d4-48b1-48bb-b39a-dc8076e71f6c1645091808011-_18.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/21bb04e9-8f3a-4193-96c2-457f252324c81645091808089-_29.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/471c032d-6d8e-4815-b88b-b05f4441b0601645091807952-_9.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/359208ed-a6c5-42fb-ac60-964dcc29356a1645091808399-USPA.jpg",
];

row5array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row5.append(col);
});

//ROW 6 DATA
let row6 = document.querySelector("#row6");
let row6array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/bb6034fc-92ac-462c-9d21-23cddc2808d51645091808418-W.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/7f0d7235-45e6-44c3-a4fb-b645059ee5d41645091808308-Moda_Rapido.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/a50964af-6951-4a41-8483-80f60f650e091645091807958-_10.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/9fc5fe20-a122-499a-af7d-05f733bcb8261645091808239-House_of_Pataudi.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/76857cf9-0353-4db3-87d9-6785528d7a751645091808274-Kook_N_Keech.jpg",
];

row6array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row6.append(col);
});

//ROW 7 DATA
let row7 = document.querySelector("#row7");
let row7array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/6/1f662131-7da4-49ff-a97a-7af81773c3f11644159095085-Premium_Styles_from_International_Brands__-_Mango-_M-S.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/6/458391ae-7885-4e56-983f-3f7e9501b0301644159094918-Elegant_Sarees_.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/6/24a7df7d-53f2-4eb1-85d6-07cbdd01849c1644159094967-International_Fashion.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/6/db525c6c-156b-4584-82bf-afd060ab9a661644159095004-Kurtas.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/6/2b34ac61-9d6c-46a3-9123-8677a9d70acd1644159094976-Jeans_Starting_499_-999_-_Roadster-_HL_-_More.jpg",
];

row7array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row7.append(col);
});

//ROW 8 DATA
let row8 = document.querySelector("#row8");
let row8array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/bce706bd-5579-41a3-a566-a8e767dc87391645165791224-Footwear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c6a8cf79-5a75-4e5e-989d-633e84939fd21645165791211-Best-Of-Footwear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/092d9807-0cf2-4d04-862c-80d988e325b61645165791243-Top-Footwear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/849dab91-5e54-45ed-a6e1-1c494d472bca1645165791218-Bestselling-Footwear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/a1b3dcb5-fd84-4162-ac54-f36cbd2ab9261645165791237-Formal-Shoes.jpg",
];

row8array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row8.append(col);
});

//ROW 9 DATA
let row9 = document.querySelector("#row9");
let row9array = [
  "https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/fa6105aa-df1d-4738-9804-c012a9da06651645165720692-Dresses.jpg",
  "https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/80a1ccbf-bdb8-4624-adc7-4d2ac2161ce11645165720707-T-Shirts-_-Tops.jpg",
  "https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/d8c44513-d555-4443-810d-dcbae8900e441645165720699-Top-Brands.jpg",
];

row9array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row9.append(col);
});

//ROW 10 DATA
let row10 = document.querySelector("#row10");
let row10array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b114e79f-28b3-444a-b041-abd0d43846871645165832962-Hair-Serum-_-Kits.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b069d393-e812-4786-a09b-06145000c3151645165832950-Hair-Appliances.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0aaba96a-e0b4-407c-b457-537bdf1d937b1645165832943-Best-Of-Personal-Care.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0266ee6f-7314-48d9-9e89-fbcbc4efd8291645165832956-Hair-Care.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2af8b435-6557-41d0-9e28-196e334483831645165832975-Makeup_2.jpg",
];

row10array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row10.append(col);
});

//ROW 11 DATA
let row11 = document.querySelector("#row11");
let row11array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/5826b31a-3f1a-4807-b056-3a9f5b0df2a31645164971302-Handbags.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/933c6dcf-910c-4bfa-924b-82b8c758c5f51645164971295-Handbags--Wallets-_-Belts.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/676d66ff-73e2-4571-9838-59d13b50b3ed1645164971401-Watches_2.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/87679e01-e5bb-4e79-8445-5f6f4e26b1261645164971339-Neckband-Earphones.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/a6ff7d0d-80b4-4366-b7ac-34669f887c8e1645164971281-Earrings.jpg",
];

row11array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row11.append(col);
});

//ROW 12 DATA
let row12 = document.querySelector("#row12");
let row12array = [
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2d03454e-4a4f-4f43-a80e-5acdae15f06f1645165684809-Bedsheets.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/e8a553fb-3562-47a4-9174-b7eb265247a41645165684802-Bath-Essentials.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2358617d-3e1d-4a96-a735-981d2f4482e51645165684825-Kitchen-Decor.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0019cd82-960a-42cd-974f-b9537516590f1645165684817-Cushions-_-Cushion-Covers.jpg",
];

row12array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row12.append(col);
});

//ROW 13 DATA CATEGORIES
let row13array = [
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0f3792a7-6d3d-453a-94ef-b62195b1a8381645176963610-Clearance_DK_HP_02.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/185f9fc2-3c5b-49c8-b9cb-7ef1cdcb2a3f1645176963617-Clearance_DK_HP_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0efdd330-c3bf-42ef-97c9-746387a287ff1645176963625-Clearance_DK_HP_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/46651033-7dc5-43d8-b130-9e5b6fbc48851645176963633-Clearance_DK_HP_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b8698182-0561-4905-9a33-e9efab85888a1645176963641-Clearance_DK_HP_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/16e94d11-13da-457b-a105-b6fa84f2f8531645176963648-Clearance_DK_HP_07.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b6651e12-10d6-422c-a7be-446663fd472f1645176963656-Clearance_DK_HP_08.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/44b23c5b-93c8-438c-a493-4cc23fdeea391645176963662-Clearance_DK_HP_09.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/866f53d0-03c4-4ec4-a755-eca484906e9e1645176963671-Clearance_DK_HP_10.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/21a13fbf-ef34-4946-ac1b-dde789d06d8a1645176963679-Clearance_DK_HP_11.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/eacc3423-f384-4f32-93e1-4431e65811361645176963687-Clearance_DK_HP_12.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/94fec5ee-f4f7-4755-9dd7-014a593879dd1645176963696-Clearance_DK_HP_13.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0babf67b-e82f-4b39-9372-7558011bad8d1645176963703-Clearance_DK_HP_14.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/febe4bec-7ec4-45e3-b2da-b98f7e1bdb281645176963723-Clearance_DK_HP_15.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c82d64b6-fd66-4f25-a5ba-dd313f99fe3c1645176963732-Clearance_DK_HP_16.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7f7fd298-ec3d-42aa-8362-e109e6f7c2451645176963740-Clearance_DK_HP_17.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/cdd28719-2a8b-4718-a724-f54bcc5584831645176963749-Clearance_DK_HP_18.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/ceed7eb9-ab85-4a1d-a6f0-b3842782f40a1645176963757-Clearance_DK_HP_19.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/01e3eefe-ac40-473a-951f-32939dc4835d1645176963766-Clearance_DK_HP_20.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/3694f264-b333-49e8-8072-59183908501c1645176963774-Clearance_DK_HP_21.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/1a13c697-4fe7-4c46-b576-01ecf5265f371645176963782-Clearance_DK_HP_22.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/136e2be2-dc5e-4362-807a-daf2deb2bd921645176963790-Clearance_DK_HP_23.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/75bad719-1553-4467-a10f-918a75bedd881645176963799-Clearance_DK_HP_24.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/72586f73-4f74-493a-a1f1-9784e712e99f1645176963809-Clearance_DK_HP_25.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/77ab9e42-c28f-4922-8edc-c087b8783c0a1645176963820-Clearance_DK_HP_26.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/ead18b3d-b8b2-4c67-933c-9ad254c8ca981645176963828-Clearance_DK_HP_27.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/aebfb56e-a052-4e47-9b7c-002cf9ca56891645176963837-Clearance_DK_HP_28.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/98b2205c-cb77-4ca6-b121-c8fcb29398651645176963846-Clearance_DK_HP_29.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0c03741d-c0e5-4144-8f1a-bdb2622116321645176963856-Clearance_DK_HP_30.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/f0d44128-10e8-41bf-ac3d-a2fa63505dd61645176963863-Clearance_DK_HP_31.jpg",
];

row13array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col-2");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row13.append(col);
});

//ROW 14 DATA
let row14 = document.querySelector("#row14");
let row14array = [
  "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/aa7f72ef-ce34-44ad-a1bf-125d0436a7501645176963873-Clearance_DK_HP_32.jpg",
  "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c64a32cd-106c-4387-bea3-b9b62f99730a1645176963882-Clearance_DK_HP_33.jpg",
];

row14array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col-6");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row14.append(col);
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



document.querySelector("#row2").addEventListener("click", ()=>{
  window.location.href = "categorymen.html";
})  

document.querySelector("#row3").addEventListener("click", ()=>{
  window.location.href = "categorywomen.html";
}) 

document.querySelector("#row4").addEventListener("click", ()=>{
  window.location.href = "categorykids.html";
}) 

document.querySelector("#row5").addEventListener("click", ()=>{
  window.location.href = "categorymen.html";
}) 

document.querySelector("#row6").addEventListener("click", ()=>{
  window.location.href = "categorywomen.html";
});


document.querySelector("#row7").addEventListener("click", ()=>{
  window.location.href = "categorymen.html";
}) 

document.querySelector("#row8").addEventListener("click", ()=>{
  window.location.href = "categorymen.html";
}) 

document.querySelector("#row9").addEventListener("click", ()=>{
  window.location.href = "categorykids.html";
}) 

document.querySelector("#row10").addEventListener("click", ()=>{
  window.location.href = "beautypage.html";
}) 

document.querySelector("#row11").addEventListener("click", ()=>{
  window.location.href = "categoryhome.html";
}) 

document.querySelector("#row12").addEventListener("click", ()=>{
  window.location.href = "categoryhome.html";
}) 

document.querySelector("#row13").addEventListener("click", ()=>{
  window.location.href = "categorymen.html";
}) 

document.querySelector("#row14").addEventListener("click", ()=>{
  window.location.href = "categorywomen.html";
}) 