document.addEventListener("DOMContentLoaded", function() {
   // script 1
   const modal = document.querySelector(".modal");
   modal.showModal();
 
   // script 2
   const button = document.querySelector("#newsletterOpen");
   button.addEventListener("click", function() {
     window.open("https://news-letter-signup.onrender.com", "_blank");
     modal.close;
     setTimeout(function() {
      modal.close();
   }, 500);
   });
 
   // script 3
   const button2 = document.querySelector("#close-button")
   button2.addEventListener("click", function(){
    modal.close();
    //  modal.style.display = "none"
   })
 });

 
 function inputGroup1Check() {
  var inputG1 = document.getElementById("input-group-1");
  var inputG1V = inputG1.value;
  if (inputG1V) {
    return true;
  } else {
    document.getElementById("input-group-1").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: you must fill out this field</p>");
    return false;
  }
}

function inputGroup1_1Check() {
  var inputG11 = document.getElementById("input-group-1-1");
  var inputG11V = inputG11.value;
  if (inputG11V) {
    return true;
  } else {
    document.getElementById("input-group-1-1").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: you must fill out this field</p>");
    return false;
  }
}

function inputGroup2Check() {
  var inputG2 = document.getElementById("input-group-2");
  var inputG2V = inputG2.value;
  if (inputG2V.length >= 4 && inputG2V.length <= 16) {
    return true;
  } else {
    document.getElementById("input-group-2").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: user name must between 4-16 characters</p>");
    return false;
  }
}

function inputGroup3Check() {
  var inputG3 = document.getElementById("input-group-3");
  var inputG3V = inputG3.value;
  if (inputG3V.includes("@") && inputG3V.indexOf("@") != 0) {
    return true;
  } else {
    document.getElementById("input-group-3").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: incorrect email format please type a correct email address </p>");
    return false;
  }
}

function inputGroup4Check() {
  var inputG4 = document.getElementById("input-group-4");
  var inputG4V = inputG4.value;
  if (inputG4V >= 1900 && inputG4V <= 2023) {
    alert("true IG-4")
    return true;
  } else {
    document.getElementById("input-group-4").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: the date must be between 1900 and 2023 </p>");
    return false;
  }
}
function inputGroup5Check() {
  var inputG5 = document.getElementById("input-group-5");
  var inputG5V = inputG5.value;
  const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  if (inputG5V.match(decimal)) {
    return true;
  } else {
    document.getElementById("input-group-5").insertAdjacentHTML("afterend", "<p style='color: red;'>Error: password nust be between 8-16 charachters and must include at least: one lowercase letter, one uppercase letter, one numeric digit, and one special character</p>");    return false;
  }
}

function inputGroup6Check() {
  var inputG6 = document.getElementById("input-group-6");
  var inputG6V = inputG6.value;
  if (inputG6V) {
    return true;
  } else {
    return false;
  }
}
function inputGroup8Check() {
  var inputG8 = document.getElementById("input-group-8");
  var inputG8V = inputG8.value;
  if (inputG8V) {
    return true;
  } else {
    return false;
  }
}

function healthCheck() {
  var inputGroup1Result = inputGroup1Check();
  var inputGroup1_1Result = inputGroup1_1Check();
  var inputGroup2Result = inputGroup2Check();
  var inputGroup3Result = inputGroup3Check();
  var inputGroup4Result = inputGroup4Check();
  var inputGroup5Result = inputGroup5Check();
  var inputGroup6Result = inputGroup6Check();

  if (!inputGroup1Result) {
    return false;
  }
  if (!inputGroup1_1Result) {
    alert("input-group-1-1 check failed");
    return false;
  }
  if (!inputGroup2Result) {
    alert("input-group-2 check failed");
    return false;
  }
  if (!inputGroup3Result) {
    alert("input-group-3 check failed");
    return false;
  }
  if (!inputGroup4Result) {
    alert("input-group-4 check failed");
    return false;
  }
  if (!inputGroup5Result) {
    alert("input-group-5 check failed");
    return false;
  }
  if (!inputGroup6Result) {
    alert("input-group-6 check failed");
    return false;
  }
  return true;
}


