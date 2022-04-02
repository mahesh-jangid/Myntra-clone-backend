function navbar() {
  return `<nav
  class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100"
>
  <a class="navbar-brand ms-5 me-4 mb-4" href="./index.html">
    <img
      src="./myntra logo.png"
      width="53"
      height="36"
      alt=""
    />
  </a>

  <div id="navbar-categories" class="me-5 ms-1">
    <div class="navbar-categories-li">MEN</div>
    <div class="navbar-categories-li">WOMEN</div>
    <div class="navbar-categories-li">KIDS</div>
    <div class="navbar-categories-li">HOME & LIVING</div>
    <div class="navbar-categories-li">BEAUTY</div>
    <div class="navbar-categories-li">STUDIO</div>
  </div>

  <form class="my-2 my-lg-0 w-25 ms-5 d-flex me-5" id="navbar-search-box">
    <i class="bi bi-search mt-1 me-2"></i>
    <input
      class="form-control mr-sm-2 w-100"
      id="navbar-search"
      type="search"
      placeholder="Search for products, brands and more"
    />
  </form>

  <div id="navbar-profile-bag-wish" class="d-flex ms-5">
    <div class="navbar-profile-items">
      <i class="bi bi-person"></i>Profile
    </div>
    <div class="navbar-profile-items">
      <i class="bi bi-heart"></i>Wishlist
    </div>
    <div class="navbar-profile-items"><i class="bi bi-handbag"></i>Bag<div class="hidden" id="cart-counter">2</div></div>
    
  </div>
  <div class="navbar-mapping-div hidden fade-in"></div>
  <div class="navbar-studio-div hidden fade-in">
    <img src="./photos/Studio_ss.png" alt="" />
  </div>
  <div class="navbar-profile-div fade-in hidden">
    <div>
      <div class="mb-1" id="welcome">Welcome</div>
      <p class="profile_text number_div">To access account and manage orders</p>
    </div>
    <button class="btn border profile_button">LOGIN / SIGNUP</button>
    <hr />
    <div>
      <p class="profile_text">Orders</p>
      <p class="profile_text">Wishlist</p>
      <p class="profile_text">Gift Cards</p>
      <p class="profile_text">Contact Us</p>
      <p class="profile_text">Myntra Insider</p>
    </div>
    <hr /><div>
      <p class="profile_text">Myntra Credit</p>
      <p class="profile_text">Coupons</p>
      <p class="profile_text">Saved Cards</p>
      <p class="profile_text">Contact Us</p>
      <p class="profile_text">Saved Addresses</p>
    </div>
    <hr class="hidden" id="loginSpecial"/>
        <div class="hidden" id="loginSpecial">
          <p class="profile_text">Edit Profile</p>
          <p class="profile_text">Logout</p>
        </div>
  </div>
  
</nav>
<div id="overlay" class="hidden"></div>`;
}

export default navbar;

// // Fetching data for mapping
// import mappingDataFetcher from "./home_page_map_data.js";
// mappingDataFetcher();
// let map_data = JSON.parse(localStorage.getItem("category_array"));
// // console.log(map_data);
// let overlay = document.querySelector("#overlay");

// //Index --> color object for mapping
// let map_colors = [
//   "#ee5f73",
//   "#fb56c1",
//   "#f26a10",
//   "#f2c210",
//   "#0db7af",
//   "#ff3f6c",
// ];

// //navbar menu container hover effect
// let mapBox = document.querySelector(".navbar-mapping-div");
// let navCategory = document.querySelectorAll(".navbar-categories-li");

// //map box hover function
// mapBox.addEventListener("mouseover", function () {
//   overlay.classList.remove("hidden");
//   mapBox.classList.remove("hidden");
// });

// mapBox.addEventListener("mouseleave", function () {
//   overlay.classList.add("hidden");
//   mapBox.innerHTML = "";
//   mapBox.classList.add("hidden");
//   //   navCategory.forEach((elem, index) => {
//   //     elem.style.border = "0";
//   //   });
// });

// //Adding hover for the mapBox on navCategory
// navCategory.forEach((elem, index) => {
//   if (index == 5) {
//     return;
//   }
//   elem.addEventListener("mouseover", function () {
//     elem.style.cursor = "pointer";
//     displayFlex(index);

//     mapBox.addEventListener("mouseover", function () {
//       for (let i = 0; i < 5; i++) {
//         if (i == index) {
//           navCategory[i].style.borderBottom = "4px solid " + map_colors[index];
//         } else {
//           navCategory[i].style.borderBottom = "0";
//         }
//       }
//     });
//   });
//   elem.addEventListener("mouseleave", function () {
//     displayHidden(index);
//     mapBox.addEventListener("mouseleave", function () {
//       elem.style.border = "0";
//     });
//   });
// });

// //displayFlex on hover
// function displayFlex(index) {
//   overlay.classList.remove("hidden");
//   mapBox.classList.remove("hidden");

//   //Write data mapping function here
//   let current_data = map_data[index];
//   mapCategoryData(current_data, index);
//   navCategory[index].style.borderBottom = "4px solid " + map_colors[index];
//   //Keep displaying data if the cursor moves from category selector to the hidden div
//   mapBox.addEventListener("mouseover", function () {
//     mapBox.innerHTML = "";
//     mapCategoryData(current_data, index);
//     mapBox.classList.remove("hidden");
//   });
// }

// //display Hidden on mouseleave
// function displayHidden(index) {
//   overlay.classList.add("hidden");
//   navCategory[index].style.borderBottom = "0";
//   mapBox.innerHTML = "";
//   mapBox.classList.add("hidden");
// }

// function mapCategoryData(data, index) {
//   if (!mapBox.innerHTML == "") {
//     return;
//   }
//   data.forEach((elem) => {
//     let currentBox = document.createElement("div");

//     currentBox.setAttribute("id", "nav_map_innerBox");
//     // currentBox.style.border = "1px solid red";

//     //mapping the internal data on the current box
//     for (let i = 0; i < elem.length; i++) {
//       let line = document.createElement("p");

//       line.style.cursor = "pointer";
//       if (i == 0) {
//         //   line.setAttribute('class', "innerHeading");
//         line.style.color = map_colors[index];
//         line.style.fontWeight = "700";
//         line.style.marginBottom = "10px";
//       }

//       line.setAttribute("class", "nav_innerBox_text");

//       line.textContent = elem[i];
//       currentBox.append(line);
//     }

//     mapBox.append(currentBox);
//     // mapBox.addEventListener('mouseleave', function() {

//     // })
//   });
// }

// //Giving hover display block to the studio div
// //also to the profile div

// //studio div and button
// let studioDiv = document.querySelector(".navbar-studio-div");
// let categoryStudio = document.querySelector(".navbar-categories-li:nth-child(6)");

// //profile div and buttons
// let profileDiv = document.querySelector(".navbar-profile-div");
// let categoryProfile = document.querySelector(".navbar-profile-items:nth-child(1)");

// // profile
// categoryProfile.addEventListener('mouseover', function() {
//   categoryProfile.style.borderBottom = "4px solid " + map_colors[5];
//   profileDiv.classList.remove("hidden");
// })

// categoryProfile.addEventListener('mouseleave', function() {
//   categoryProfile.style.borderBottom = "0";
//   profileDiv.classList.add("hidden");
// })

// profileDiv.addEventListener('mouseover', function() {
//   profileDiv.classList.remove("hidden");
//   categoryProfile.style.borderBottom = "4px solid " + map_colors[5];
// })

// profileDiv.addEventListener('mouseleave', function() {
//   categoryProfile.style.borderBottom = "0";
//   profileDiv.classList.add("hidden");
// })

// //category
// categoryStudio.addEventListener('mouseover', function() {
//   overlay.classList.remove("hidden");
//   categoryStudio.style.borderBottom = "4px solid " + map_colors[5];
//   studioDiv.classList.remove("hidden");
// })

// categoryStudio.addEventListener('mouseleave', function() {
//   overlay.classList.add("hidden");
//   categoryStudio.style.borderBottom = "0";
//   studioDiv.classList.add("hidden");
// })

// studioDiv.addEventListener('mouseover', function() {
//   overlay.classList.remove("hidden");
//   studioDiv.classList.remove("hidden");
//   categoryStudio.style.borderBottom = "4px solid " + map_colors[5];
// })

// studioDiv.addEventListener('mouseleave', function() {
//   overlay.classList.add("hidden");
//   categoryStudio.style.borderBottom = "0";
//   studioDiv.classList.add("hidden");
// })
