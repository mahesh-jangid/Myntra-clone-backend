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

//Flat 80% off
let row1 = document.querySelector("#row1");
var row1array = [
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/79f0c7f7-47c1-462e-968e-94960bf7a1301645185413429-DK_Main-Banner_02.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/af9af6cd-6316-4634-ac0e-090af2f027321645185413435-DK_Main-Banner_03.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/faf38e26-69ce-44a5-9468-f71ef499711f1645185413442-DK_Main-Banner_04.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/9b907144-92d0-440b-9294-39d4ac8615111645185413450-DK_Main-Banner_05.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/8e48f2da-9bbb-4d72-ba97-079e5c68aa291645185413456-DK_Main-Banner_06.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/d76bf98d-ee23-49ab-9636-e6796ddbe4751645185413462-DK_Main-Banner_07.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/63a42e8a-60bf-4645-8fcc-9dc6bd8769851645185413469-DK_Main-Banner_08.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/27d633ca-76f7-4c90-a5ca-3a0b48528eea1645185413476-DK_Main-Banner_09.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/49d5df51-d891-4126-bff6-8d5ed57a61181645185413483-DK_Main-Banner_10.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/3d7847d0-7f96-4a09-9478-8c02e33527c11645185413490-DK_Main-Banner_11.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/50e9fbce-da2b-4da0-8cca-d4834344098c1645185413497-DK_Main-Banner_12.jpg",
  "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/f83fb797-de61-414a-9e36-867e524fdba21645185413504-DK_Main-Banner_13.jpg",
];


row1array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col-3");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row1.append(col);
});


//Virat Kohli
var row2array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/47ad993c-8bd7-4c94-9764-26cb2e7b7a491645111000330-Puma-_Adidas_-_Reebok.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/975d9a56-2b0f-4347-b834-b4a5659d75101645110999624-JJ-_FM.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/19/6e79121e-a657-4563-96fe-0985f1def9c61645265404628-unnamed--41-.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/0b7d0f85-b9e4-4ffd-8254-7e5546deac871645110999394-HOP-_Ode.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/fc8e1f2b-1026-4e79-96f6-c4afd8533ebb1645110998866-AS-_VH.jpg",
];

let row2 = document.querySelector("#row2");
row2array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row2.append(col);
});


//Stylish Sportwear
var row3array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/8cadfe9c-5286-4971-882e-60cd20f671fb1645110052946-Nike_at_Nike_Upto_50.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/fbc9fa57-1270-4451-8280-2e917a053e3f1645110053282-Puma_Sport_shoes_-_min_40_Off.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/90dddfcb-1450-43a9-838d-eb400f41cbe71645110051737-Crocs_upto_60_Off.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/7dd8410f-5df0-4841-a417-1ff3ef7d9dcc1645110053376-Roadster_Men-s_Casual_Starting_199_-699-.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/5e274b40-5bf7-489a-a8e7-4abd0f4792561645110052474-Levis-_USPA_Min_50.jpg",
];

let row3 = document.querySelector("#row3");
row3array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row3.append(col);
});


//Casual Wear
var row4array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/9b36a8a5-c7bf-4884-adb1-293a1c321a1a1645091289577-Allen_Solly.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/6bb3b456-8d5c-4dd8-9c2e-1d98716b538d1645091289595-CK_Jeans.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/004129ed-7b25-4728-a37f-fc936e8785b81645091289657-Louis_Philippe.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/b2c5e540-3f1f-41de-a348-d056e077723d1645091289730-Tommy_Hilfiger.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/c390b077-6e43-49df-ba87-8ffe5e333ef91645091289749-UCB.jpg",
];

let row4 = document.querySelector("#row4");
row4array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row4.append(col);
});

//Levi's Flat 50% Off
var row5array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/dd4adfe0-714f-4eb3-bf62-e229b1a59bb61645091807984-_14.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/864081ce-a3bb-4778-8ea9-cf988502df3c1645091808190-Calvin_Klein.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/2a5354ca-c30b-4f07-aaaa-4a558cb0a00e1645091807927-_5.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/f91e2ad0-523d-4b3b-9fce-008cb83770421645091807902-_1.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/aa08f707-037c-4c90-aab0-f49cc37e495e1645091808046-_23.jpg",
];

let row5 = document.querySelector("#row5");
row5array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row5.append(col);
});

//Watches
var row6array = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/b8d80b2e-9ceb-4adf-bf2e-08e94ed3054a1645090184911-QL_Homepage_Watches.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/1e9b72c1-a878-4012-bef0-47e8134386661645090184949-QL_men_-Shirts.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/706d4bde-d2a2-461c-a040-f30241dd28311645090184993-QL_men_Kurtas-_-Sets_.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/abdcd696-b7d5-4c37-8157-43b08cdce5021645090184937-QL_men_-Jeans.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/aa6b91f5-ffa1-4d6a-a9b8-5bfde44230f91645090184985-QL_men_Jackets.jpg",
];

let row6 = document.querySelector("#row6");
row6array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row6.append(col);
});


//T-Shirts
var row7array = [
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2fae3107-de8b-4a41-bc0e-8165684effb61645178740426-Clearance_DK_MP_02.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2e804e65-ad39-4602-bdff-209a78d6b7531645178740433-Clearance_DK_MP_03.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/957b9d50-6005-40da-8653-3ae5bca129001645178740440-Clearance_DK_MP_04.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0f18a6de-8e88-47ec-8b9c-2cc9e4c3c8df1645178740447-Clearance_DK_MP_05.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/643ffd2d-7dc0-46e1-8aa9-d2ece73a4bc31645178740453-Clearance_DK_MP_06.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/21f5f9ce-d5a8-4048-8db8-e162b277b9531645178740459-Clearance_DK_MP_07.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/198bbdac-d47e-4756-bee6-4f36471b40b41645178740465-Clearance_DK_MP_08.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/3d7b50a7-b0af-413a-94b8-919d81fd8e0b1645178740473-Clearance_DK_MP_09.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/ec6694ab-7d25-459c-bc12-69c65330f9101645178740481-Clearance_DK_MP_10.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/17b6e412-8fb4-4e56-870d-cda758fd3adb1645178740488-Clearance_DK_MP_11.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/508db410-ceaa-4e39-a13d-c31f930c8e5f1645178740495-Clearance_DK_MP_12.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/571441c6-f69e-4b6f-a926-29e468789e0e1645178740502-Clearance_DK_MP_13.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/53e06c3c-4ab4-4d18-bd86-51000e5e7b191645178740509-Clearance_DK_MP_14.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/9dc04f62-b5b7-4408-b5b5-183f3c66611f1645178740516-Clearance_DK_MP_15.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/13ea19ee-049c-4b04-8df5-149ee7fcfff61645178740522-Clearance_DK_MP_16.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/6cc92cf1-0ddb-4693-8b0e-9bf33ea5984b1645178740530-Clearance_DK_MP_17.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/a93ed707-864e-41cf-85c7-8a049ec49a191645178740540-Clearance_DK_MP_18.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/6fe87b7f-a427-4db1-8203-1780f208430d1645178740547-Clearance_DK_MP_19.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7eca4ed9-8cc7-42b2-b712-76c9192abe351645178740554-Clearance_DK_MP_20.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0d1e9795-94aa-42fd-a469-2ac345c6274e1645178740561-Clearance_DK_MP_21.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/495c3672-2aed-4c5e-9961-a3088d0abe031645178740568-Clearance_DK_MP_22.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b7dd5981-f7e7-4e3e-b55d-68c9c267cbbe1645178740576-Clearance_DK_MP_23.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/6cb4ac60-1910-4091-bdaa-6c0137717f271645178740586-Clearance_DK_MP_24.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/8868286a-0250-4f34-95b5-aa5b83c33a011645178740594-Clearance_DK_MP_25.jpg",
];

let row7 = document.querySelector("#row7");
row7array.forEach((elem) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col-2");
  let img = document.createElement("img");
  img.setAttribute("class", "h-100 w-100");
  img.src = elem;
  col.append(img);
  row7.append(col);
});

document.querySelector("#site-container").addEventListener('click', function() {
  window.location.href = "categorymen.html"
})
