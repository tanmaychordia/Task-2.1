var nxtbtn = document.querySelector(".next-btn");
nxtbtn.addEventListener("click",show);
nxtbtn.addEventListener("click",dots);


var prevbtn = document.querySelector(".prev-btn");
prevbtn.addEventListener("click",show);
prevbtn.addEventListener("click",dots);

function show() {
  var x = document.querySelector(".second-image");
  var y = document.querySelector(".first-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}



// function dots(){
//   var dot1 = document.querySelector(".single-dot");
//   var dot2 = document.querySelector(".active");

//   if(dot1.style.backgroundColor = "#333"){
//     dot1.style.backgroundColor = "#eee";
//     dot2.style.backgroundColor = "#333";
//   }else{
//     dot1.style.backgroundColor = "#333";
//     dot2.style.backgroundColor = "#eee";
//   }

// }

// dot1.addEventListener("click", dots)
// dot2.addEventListener("click", dots)


nxtbtn.addEventListener("click",dots);
  
function dots(){
  
  var dot1 = document.querySelector(".single-dot");
  var dot2 = document.querySelector(".active");

  // document.getElementById("first-dot").classList.remove("passive");
  // document.getElementById("first-dot").classList.add("white");
  // document.getElementById("second-dot").classList.remove("active");
  // document.getElementById("second-dot").classList.add("black");
  
  
  if(dot1.style.backgroundColor = "#333"){
    document.getElementById("first-dot").setAttribute("style", "background-color: #eee;")
    document.getElementById("second-dot").setAttribute("style", "background-color: #333;")  
  }else{
    document.getElementById("first-dot").setAttribute("style", "background-color: #333;")
    document.getElementById("second-dot").setAttribute("style", "background-color: #eee;")  
  }
  
}





// let o = addEventListener('click',show)













// function dots(){
//   var myElement = document.querySelector(".single-dot");
//   myElement.style.backgroundColor = "#eee";

//   var myElement2 = document.querySelector(".active");
//   myElement2.style.backgroundColor = "#333";
// }



