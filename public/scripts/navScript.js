import { fetchUser, updateWishlist } from "./loginSystem.js";

document.querySelector("title").append(``);
//Checking if any user is signed in... If yes, then fetching the user information from lognSystem.
//Here I am using a index system to fetch the logged in user from the list of total users
let isSignedIn = localStorage.getItem("isSignedIn") || "false";
let signedIndex;
let currentUser = null;
if (isSignedIn == "true") {
  signedIndex = localStorage.getItem("signedInUser");
  currentUser = fetchUser(signedIndex);
  document.querySelector(".profile_button").classList.add("hidden");

  if(currentUser.hasOwnProperty("name")) {
    document.querySelector("#welcome").textContent = "Hello " + currentUser.name;
  } else {
    document.querySelector("#welcome").textContent = "Hello Myntra User";
  }
  
  document.querySelector(".number_div").textContent = currentUser.phone;
  document.querySelectorAll("#loginSpecial").forEach((elem) => {
    elem.classList.remove("hidden");
    if (currentUser.cart.length) {
      document.querySelector("#cart-counter").textContent =
        currentUser.cart.length;
      document.querySelector("#cart-counter").classList.remove("hidden");
      let x = setInterval(function () {
        currentUser = fetchUser(signedIndex);
        document.querySelector("#cart-counter").textContent =
          currentUser.cart.length;
      }, 1000);
    }
  });
}

//Adding functionality to the logout button
document
  .querySelectorAll(".profile_text")
  [document.querySelectorAll(".profile_text").length - 1].addEventListener(
    "click",
    function () {
      localStorage.setItem("isSignedIn", "false");
      location.reload();
    }
  );

  document
  .querySelectorAll(".profile_text")
  [document.querySelectorAll(".profile_text").length - 2].addEventListener(
    "click",
    function () {
      window.location.href = './editprofile.html';
    }
  );

console.log(currentUser);

// Fetching data for mapping
// console.log("dfdf")
import mappingDataFetcher from "./home_page_map_data.js";
mappingDataFetcher();
let map_data = JSON.parse(localStorage.getItem("category_array"));
// console.log(map_data);
let overlay = document.querySelector("#overlay");

//Index --> color object for mapping
let map_colors = [
  "#ee5f73",
  "#fb56c1",
  "#f26a10",
  "#f2c210",
  "#0db7af",
  "#ff3f6c",
];

//navbar menu container hover effect
let mapBox = document.querySelector(".navbar-mapping-div");
let navCategory = document.querySelectorAll(".navbar-categories-li");

//map box hover function
mapBox.addEventListener("mouseover", function () {
  overlay.classList.remove("hidden");
  mapBox.classList.remove("hidden");
});

mapBox.addEventListener("mouseleave", function () {
  overlay.classList.add("hidden");
  mapBox.innerHTML = "";
  mapBox.classList.add("hidden");
  //   navCategory.forEach((elem, index) => {
  //     elem.style.border = "0";
  //   });
});

//Adding hover for the mapBox on navCategory
navCategory.forEach((elem, index) => {
  if (index == 5) {
    return;
  }
  elem.addEventListener("mouseover", function () {
    elem.style.cursor = "pointer";
    displayFlex(index);

    mapBox.addEventListener("mouseover", function () {
      for (let i = 0; i < 5; i++) {
        if (i == index) {
          navCategory[i].style.borderBottom = "4px solid " + map_colors[index];
        } else {
          navCategory[i].style.borderBottom = "0";
        }
      }
    });
  });
  elem.addEventListener("mouseleave", function () {
    displayHidden(index);
    mapBox.addEventListener("mouseleave", function () {
      elem.style.border = "0";
    });
  });
});

//displayFlex on hover
function displayFlex(index) {
  overlay.classList.remove("hidden");
  mapBox.classList.remove("hidden");

  //Write data mapping function here
  let current_data = map_data[index];
  mapCategoryData(current_data, index);
  navCategory[index].style.borderBottom = "4px solid " + map_colors[index];
  //Keep displaying data if the cursor moves from category selector to the hidden div
  mapBox.addEventListener("mouseover", function () {
    mapBox.innerHTML = "";
    mapCategoryData(current_data, index);
    mapBox.classList.remove("hidden");
  });
}

//display Hidden on mouseleave
function displayHidden(index) {
  overlay.classList.add("hidden");
  navCategory[index].style.borderBottom = "0";
  mapBox.innerHTML = "";
  mapBox.classList.add("hidden");
}

function mapCategoryData(data, index) {
  if (!mapBox.innerHTML == "") {
    return;
  }
  data.forEach((elem) => {
    let currentBox = document.createElement("div");

    currentBox.setAttribute("id", "nav_map_innerBox");
    // currentBox.style.border = "1px solid red";

    currentBox.addEventListener("click", function () {
      console.log("dfdf");
      // console.log('dfd')
      // window.location.href = "./menInter.html"
    });

    //mapping the internal data on the current box
    for (let i = 0; i < elem.length; i++) {
      let line = document.createElement("p");

      line.style.cursor = "pointer";
      if (i == 0) {
        //   line.setAttribute('class', "innerHeading");
        line.style.color = map_colors[index];
        line.style.fontWeight = "700";
        line.style.marginBottom = "10px";
      }

      line.setAttribute("class", "nav_innerBox_text");

      line.textContent = elem[i];

      currentBox.append(line);
    }

    mapBox.append(currentBox);
    // mapBox.addEventListener('mouseleave', function() {

    // })
  });
}

//Giving hover display block to the studio div
//also to the profile div

//studio div and button
let studioDiv = document.querySelector(".navbar-studio-div");
let categoryStudio = document.querySelector(
  ".navbar-categories-li:nth-child(6)"
);

//profile div and buttons
let profileDiv = document.querySelector(".navbar-profile-div");
let categoryProfile = document.querySelector(
  ".navbar-profile-items:nth-child(1)"
);

// profile
categoryProfile.addEventListener("mouseover", function () {
  categoryProfile.style.borderBottom = "4px solid " + map_colors[5];
  profileDiv.classList.remove("hidden");
});

categoryProfile.addEventListener("mouseleave", function () {
  categoryProfile.style.borderBottom = "0";
  profileDiv.classList.add("hidden");
});

profileDiv.addEventListener("mouseover", function () {
  profileDiv.classList.remove("hidden");
  categoryProfile.style.borderBottom = "4px solid " + map_colors[5];
});

profileDiv.addEventListener("mouseleave", function () {
  categoryProfile.style.borderBottom = "0";
  profileDiv.classList.add("hidden");
});

//category
categoryStudio.addEventListener("mouseover", function () {
  overlay.classList.remove("hidden");
  categoryStudio.style.borderBottom = "4px solid " + map_colors[5];
  studioDiv.classList.remove("hidden");
});

categoryStudio.addEventListener("mouseleave", function () {
  overlay.classList.add("hidden");
  categoryStudio.style.borderBottom = "0";
  studioDiv.classList.add("hidden");
});

studioDiv.addEventListener("mouseover", function () {
  overlay.classList.remove("hidden");
  studioDiv.classList.remove("hidden");
  categoryStudio.style.borderBottom = "4px solid " + map_colors[5];
});

studioDiv.addEventListener("mouseleave", function () {
  overlay.classList.add("hidden");
  categoryStudio.style.borderBottom = "0";
  studioDiv.classList.add("hidden");
});

//Adding functionality to the Login/Button
document
  .querySelector(".profile_button")
  .addEventListener("click", function () {
    window.location.href = "./login.html";
  });

//Adding functionality to the Men and Women Inter pages

//Mens page
document
  .querySelectorAll(".navbar-categories-li")[0]
  .addEventListener("click", function () {
    window.location.href = "./menInter.html";
  });
document
  .querySelectorAll(".navbar-categories-li")[1]
  .addEventListener("click", function () {
    window.location.href = "./womenInter.html";
  });

//Linking the wishlist page
document
  .querySelectorAll(".navbar-profile-items")[1]
  .addEventListener("click", function () {
    window.location.href = "./wishlist.html";
  });


  document.querySelectorAll(".navbar-categories-li")[2].addEventListener('click', function(event) {
    window.location.href = "./categorykids.html"
  })

  document.querySelectorAll(".navbar-categories-li")[3].addEventListener('click', function(event) {
    window.location.href = "./categoryhome.html"
  })

  document.querySelectorAll(".navbar-categories-li")[4].addEventListener('click', function(event) {
    window.location.href = "./beautypage.html"
  })

  document.querySelectorAll(".navbar-profile-items")[2].addEventListener("click", function() {
    window.location.href = "./bag.html";
  })

  document.querySelector("#navbar-search").addEventListener('input', function(event) {
    let query = event.target.value;
    localStorage.setItem("searchQuery", query);
  })

  window.addEventListener('keypress', function(event) {
    if(event.key == "Enter") {
      window.location.href = "searchpage.html";
    }
  })