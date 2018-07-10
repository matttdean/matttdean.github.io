//
// $(document).ready(function(){
//   $(".tower-1").addClass("t1").delay(5000)
// });

$(".tower-1").addClass("towerLoad").delay(1000).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-2").addClass("towerLoad").delay(1100).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-3").addClass("towerLoad").delay(1200).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-4").addClass("towerLoad").delay(1600).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-5").addClass("towerLoad").delay(1400).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-6").addClass("towerLoad").delay(1700).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-7").addClass("towerLoad").delay(800).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-8").addClass("towerLoad").delay(1100).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".tower-9").addClass("towerLoad").delay(1300).queue(function(next){
    $(this).removeClass("towerLoad");
    next();
});
$(".square").addClass("squareLoad").delay(2000).queue(function(next){
    $(this).removeClass("squareLoad");
    next();
});
$(".square").addClass("squareTransition").delay(1000).queue(function(next){
    $(this).removeClass("squareTransition");
    next();
});

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);

var xDirection = "";
var yDirection = "";

var oldX = 0;
var oldY = 0;

function getMouseDirection(e) {
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
    } else {
        xDirection = "left";
    }

    //deal with the vertical case
    if (oldY < e.pageY) {
        yDirection = "down";
    } else {
        yDirection = "up";
    }

    oldX = e.pageX;
    oldY = e.pageY;

}


function pushElements(x, speed) {
  $("#" + x + "").hover(
      function(e){
        if (xDirection === "right") {
          $("#" + x + "").addClass("push-left-" + speed + "");
        } else {
          $("#" + x + "").addClass("push-right-" + speed + "");
        }
      }, // over
      function(e){
          $("#" + x + "").removeClass("push-left-" + speed + "");

          $("#" + x + "").removeClass("push-right-" + speed + "");
       }  // out
  );
};

//Make the DIV element draggagle:
dragElement(document.getElementById("square"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



pushElements("t1", "1");
pushElements("t2", "2");
// pushElements("square", "2");
pushElements("t3", "1");
pushElements("t4", "2");
pushElements("t5", "1");
pushElements("t6", "1");
pushElements("t7", "1");
pushElements("t8", "2");
pushElements("t9", "1");
