import { fetchUser, updateWishlist } from "./loginSystem.js";

let signedIndex = localStorage.getItem("signedInUser");
let currentUser = fetchUser(signedIndex);
console.log(currentUser);

document.querySelector("#mobnumber").textContent = currentUser.phone;

document.querySelector("#savebtn").addEventListener("click", function () {
  console.log(currentUser)
  let name = document.querySelector("#nameinput").value;

  if (name == "") {
    return alert("please enter your name");
  }
  currentUser.name = name;
  updateWishlist(signedIndex, currentUser);
  alert("Profile updated successfully!")
  window.location.href = "./index.html";

});
