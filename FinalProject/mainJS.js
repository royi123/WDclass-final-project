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
    return false;
  }
}

function inputGroup2Check() {
  var inputG2 = document.getElementById("input-group-2");
  var inputG2V = inputG2.value;
  if (inputG2V) {
    return true;
  } else {
    return false;
  }
}

function inputGroup3Check() {
  var inputG3 = document.getElementById("input-group-3");
  var inputG3V = inputG3.value;
  if (inputG3V) {
    return true;
  } else {
    return false;
  }
}

function inputGroup4Check() {
  var inputG4 = document.getElementById("input-group-4");
  var inputG4V = inputG4.value;
  if (inputG4V) {
    return true;
  } else {
    return false;
  }
}

function inputGroup5Check() {
  var inputG5 = document.getElementById("input-group-5");
  var inputG5V = inputG5.value;
  if (inputG5V) {
    return true;
  } else {
    return false;
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

function healthCheck() {
  var inputGroup1Result = inputGroup1Check();
  var inputGroup2Result = inputGroup2Check();
  var inputGroup3Result = inputGroup3Check();
  var inputGroup4Result = inputGroup4Check();
  var inputGroup5Result = inputGroup5Check();
  var inputGroup6Result = inputGroup6Check();

  if (!inputGroup1Result) {
    alert("input-group-1 check failed");
  }
  if (!inputGroup2Result) {
    console.error("input-group-2 check failed");
  }
  if (!inputGroup3Result) {
    console.error("input-group-3 check failed");
  }
  if (!inputGroup4Result) {
    console.error("input-group-4 check failed");
  }
  if (!inputGroup5Result) {
    console.error("input-group-5 check failed");
  }
  if (!inputGroup6Result) {
    console.error("input-group-6 check failed");
  }
}
