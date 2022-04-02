import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector(".navbar-profile-items").classList.add("hidden");

let info = document.getElementById("displayno");
let mobilenumber = localStorage.getItem("mobileno");

info.textContent = `Sent to ${mobilenumber}`;

var otprandom = (Math.random() * 9000 + 1000).toFixed(0);
alert(`Otp is ${otprandom}`);
//verifying otp
function verifyotp(e) {
  if (e.key == `Enter`) {
    var str = "";

    str = str + document.getElementById("otpContainer1").value;
    str = str + document.getElementById("otpContainer2").value;
    str = str + document.getElementById("otpContainer3").value;
    str = str + document.getElementById("otpContainer4").value;
    if (str == otprandom) {
      alert("OTP verified succesfully!");
      addUser(mobilenumber);
      window.location.href = "./index.html";
    } else {
      alert("Invalid OTP!");
    }
  }
}

let input1 = document.getElementById("otpContainer4");
input1.addEventListener("keypress", verifyotp);

//RESENT OTP BUTTON
document.querySelector("#newOTP").addEventListener("click", function() {
    otprandom = (Math.random() * 9000 + 1000).toFixed(0);
    alert(`Otp is ${otprandom}`);
})


//REGISTERED USERS
function addUser(number) {
  let users = JSON.parse(localStorage.getItem("myntraUsers")) || [];
  for(let i = 0; i < users.length; i++) {
    if(users[i].phone == number) {
      localStorage.setItem('isSignedIn', true);
      localStorage.setItem("signedInUser", i);
      return;
    }
  }

  let newUser = {
    "phone": number,
    "cart": [],
    "wishlist": []
  }

  users.push(newUser);
  localStorage.setItem("myntraUsers", JSON.stringify(users));
  localStorage.setItem('isSignedIn', true);
  localStorage.setItem("signedInUser", users.length-1);
}