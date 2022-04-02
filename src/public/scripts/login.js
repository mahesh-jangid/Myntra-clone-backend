//Navbar import
import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#loginbutton").addEventListener("click", function () {
  let mobilenos = document.getElementById("mobileno").value;
  if (mobilenos.length != 10) {
    return document.querySelector("#failedLogin").classList.remove("hidden");
  }
  console.log(mobilenos);
  localStorage.setItem("mobileno", mobilenos);
  window.location.href = "otppage.html";
});

window.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let mobilenos = document.getElementById("mobileno").value;
    if (mobilenos.length != 10) {
      return document.querySelector("#failedLogin").classList.remove("hidden");
    }
      localStorage.setItem("mobileno", mobilenos);
      window.location.href = "otppage.html";
    
  }
});

document.querySelector(".navbar-profile-items").classList.add("hidden");
