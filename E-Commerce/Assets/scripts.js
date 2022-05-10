window.addEventListener("load", function() {
    $("#pixelslide").addClass(
        "startslide");
})

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");

var span = document.getElementsByClassName("close")[0];


img.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Modal 2
var modal2 = document.getElementById("myModal2");

var img2 = document.getElementById("myImg2");

var span2 = document.getElementById("close2");


img2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Modal 3
var modal3 = document.getElementById("myModal3");

var img3 = document.getElementById("myImg3");

var span3 = document.getElementById("close3");


img3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Modal 4
var modal4 = document.getElementById("myModal4");

var img4 = document.getElementById("myImg4");

var span4 = document.getElementById("close4");


img4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
    modal4.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// Modal 5
var modal5 = document.getElementById("myModal5");

var img5 = document.getElementById("myImg5");

var span5 = document.getElementById("close5");


img5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
    modal5.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

// Modal 6
var modal6 = document.getElementById("myModal6");

var img6 = document.getElementById("myImg6");

var span6 = document.getElementById("close6");


img6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
    modal6.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

// Modal 7
var modal7 = document.getElementById("myModal7");

var img7 = document.getElementById("myImg7");

var span7 = document.getElementById("close7");


img7.onclick = function() {
  modal7.style.display = "block";
}

span7.onclick = function() {
    modal7.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

// Modal 8
var modal8 = document.getElementById("myModal8");

var img8 = document.getElementById("myImg8");

var span8 = document.getElementById("close8");


img8.onclick = function() {
  modal8.style.display = "block";
}

span8.onclick = function() {
    modal8.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

// Modal 9
var modal9 = document.getElementById("myModal9");

var img9 = document.getElementById("myImg9");

var span9 = document.getElementById("close9");


img9.onclick = function() {
  modal9.style.display = "block";
}

span9.onclick = function() {
    modal9.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

// Modal 10
var modal10 = document.getElementById("myModal10");

var img10 = document.getElementById("myImg10");

var span10 = document.getElementById("close10");


img10.onclick = function() {
  modal10.style.display = "block";
}

span10.onclick = function() {
    modal10.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}

// Modal 11
var modal11 = document.getElementById("myModal11");

var img11 = document.getElementById("myImg11");

var span11 = document.getElementById("close11");


img11.onclick = function() {
  modal11.style.display = "block";
}

span11.onclick = function() {
    modal11.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}

// Modal 12
var modal12 = document.getElementById("myModal12");

var img12 = document.getElementById("myImg12");

var span12 = document.getElementById("close12");


img12.onclick = function() {
  modal12.style.display = "block";
}

span12.onclick = function() {
    modal12.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}


function fade() {
    $("#item-added").toggleClass("startfade");
    
   
}

function validateForm() {
let x = document.forms["fanForm"]["fname"].value;
let y = document.forms["fanForm"]["lname"].value;
let z = document.forms["fanForm"]["phone"].value;
let v = document.forms["fanForm"]["email"].value;
if (x == "") {
    alert ("First name must be filled out");
    return false;
}
else if (y == "") {
    alert ("Last name must be filled out");
    return false;
}
else if (z == "") {
    alert ("Phone number must be filled out");
    return false;
}
else if (v == "") {
    alert ("Email must be filled out");
    return false;
}
else if (v.inclues("@") = false) {
    alert ("An actual email must be filled out");
    return false;
}
}