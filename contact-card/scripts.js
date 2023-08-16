const card = document.querySelector("main");
const overglow = document.getElementsByClassName("overglow")[0];
const button = document.getElementById("do-not-press");
const textBox = document.querySelector("p")
const text = 'This is a temporary placeholder until my full portfolio is completed. While you wait, check out my ';
const balls = document.getElementsByClassName("ball");
const curly = document.getElementsByClassName("curly");
const amp = document.getElementsByClassName("amp")[0];
const pokemonLink = document.createElement("a");
pokemonLink.setAttribute("href", "https://matttdean.github.io/Pokemon/");
pokemonLink.innerText = "Pokemon Simulator";
pokemonLink.id = "pokemon";

let colorMode = "dark";

const adjustColorMode = (ver, bg, color, mode) => {
    card.style.backgroundColor = bg;
    card.style.color = color;
    if (ver === "dark") {
        amp.classList.remove("white");
        curly[0].classList.remove("white");
        curly[1].classList.remove("white");
        document.getElementById("pokemon").style.color = "#01c8ee";
        textBox.style.borderColor = "#01c8ee";

    } else {
        if (colorMode === "dark") {
            amp.classList.add("white");
            curly[0].classList.add("white");
            curly[1].classList.add("white");
            document.getElementById("pokemon").style.color = "white";
            textBox.style.borderColor = "white";
        }
    }
    colorMode = mode;
};

balls[0].addEventListener("click", () => {
    adjustColorMode("light", "#01c8ee", "hsl(223,55%,10%)", "lightblue");
});
balls[1].addEventListener("click", () => {
    adjustColorMode("light", "#e41376", "hsl(223,55%,10%)", "red")
});
balls[2].addEventListener("click", () => {
    adjustColorMode("light", "hsl(250,85%,45%)", "hsl(223,55%,10%)", "blue");
});
balls[3].addEventListener("click", () => {
    adjustColorMode("light", "hsl(30,85%,45%)", "hsl(223,55%,10%)", "yellow");
});
balls[4].addEventListener("click", () => {
    adjustColorMode("dark", "hsl(223,55%,10%)", "white", "dark");
});

window.addEventListener("load", () => {
    displayText(text, pokemonLink);
});

card.addEventListener("mousemove", (e) => {
    rotateElement(e, card);
    lightElement(e, overglow);
});

card.addEventListener("touchmove", (e) => {
    rotateElement(e, card);
    lightElement(e, overglow);
});

button.addEventListener("mouseenter", () => {
    button.innerText = "PLEASE NO!"
});

button.addEventListener("mouseout", () => {
    button.innerText = "DO NOT PRESS!"
});

button.addEventListener("click", () => {
    card.classList.remove("stable");
    setTimeout(() => {
        card.classList.add("fly");
    }, 2000)
    setTimeout(() => {
        card.classList.add("stable");
        card.classList.remove("fly");
    }, 6000)
});

card.addEventListener("mouseleave", () => {
    card.style.setProperty("--transition", "200ms");
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
    overglow.style.opacity = "0";
    card.style.setProperty("--transition", "0");
});


const rotateElement = (event, element) => {
    let x;
    let y;
    if (event.type === "touchmove") {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }
    
    const middleX = card.offsetWidth / 2;
    const middleY = card.offsetHeight / 2;

    const offSetX = ((x - middleX) / middleX  * 2.5);
    const offSetY = ((y - middleY) / middleY * 2.5);
    element.style.setProperty("--rotateX", -1 * offSetY + "deg");
    element.style.setProperty("--rotateY", offSetX + "deg");

    if(offSetX > 0 && offSetY > 0) {
        if (colorMode === "blue") {
            element.style.setProperty("--background-color", "hsl(270,85%,60%)");
        } else {
            element.style.setProperty("--background-color", "hsl(250,85%,50%)");
        }
    } else if (offSetX < 0 && offSetY > 0) {
        if (colorMode === "yellow") {
            element.style.setProperty("--background-color", "hsl(30,100%,60%)");
        } else {
            element.style.setProperty("--background-color", "hsl(30,85%,50%)");
        }
    } else if (offSetX > 0 && offSetY < 0) {
        if (colorMode === "lightblue") {
            element.style.setProperty("--background-color", "hsl(190,100%,90%)");
        } else {
            element.style.setProperty("--background-color", "hsl(190,100%,47%)");
        }
    } else if (offSetX < 0 && offSetY < 0) { 
        if (colorMode === "red") {
            element.style.setProperty("--background-color", "hsl(332,100%,79%)");
        } else {
            element.style.setProperty("--background-color", "hsl(332,85%,49%)");
    }   
        }
        
    
};

const lightElement = (event, element) => {
    let x;
    let y;
    if (event.type === "touchmove") {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }
    
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offSetX = (x - middleX);
    const offSetY = (y - middleY + 80);
    
    element.style.opacity = "0.5";
    element.style.setProperty("--translateY", offSetY + "px");
    element.style.setProperty("--translateX", offSetX + "px");
};

const displayText = (text, link) => {
    let newText = text.split("");
    let result = [];
    for (let i = 0; i < newText.length; i += 3) result.push(newText.slice(i, i + 3));
    result.forEach((element, i) => setTimeout(() => {
        textBox.textContent += element.join("")
        if (i === 32) {
            setTimeout(() => {
                textBox.appendChild(link)
                textBox.innerHTML += " (WIP).";
            }, 100);
        }
    }, 50 * i));
};

let oldPos = 0;
const slider = document.getElementsByClassName("bottom-ball")[0];
const sliderContainer = document.getElementsByClassName("box")[0];
const glow = document.getElementsByClassName("underglow")[0];

dragElement(slider);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    //document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
    //elmnt.addEventListener("touchstart", dragMouseDown, { passive: false });
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    if (e.type === "touchstart" || e.type === "touchmove" || e.type === "touchend") {
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
    } else {
        pos3 = e.clientX;
        pos4 = e.clientY;
    }
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
    //document.addEventListener("touchmove", elementDrag, { passive: false });
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    let dragAmount
    // calculate the new cursor position:
    if (e.type === "touchstart" || e.type === "touchmove" || e.type === "touchend") {
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
    } else {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    }

    dragAmount = elmnt.offsetLeft - pos1;

    if (dragAmount >= sliderContainer.clientWidth + 10) {
        dragAmount = sliderContainer.clientWidth + 10;
    } else if (dragAmount <= 30) {
        dragAmount = 30;
    }
    // if (dragAmount < sliderContainer.clientWidth * 0.25) {
    //     elmnt.style.backgroundColor = "white"
    // } else if (dragAmount > sliderContainer.clientWidth * 0.25 && dragAmount < sliderContainer.clientWidth * 0.5) {
    //     elmnt.style.backgroundColor = "hsl(332,85%,49%)"
    // } else if (dragAmount > sliderContainer.clientWidth * 0.5 && dragAmount < sliderContainer.clientWidth * 0.75) {
    //     elmnt.style.backgroundColor = "hsl(250,85%,50%)"
    // } else if (dragAmount > sliderContainer.clientWidth * 0.75) {
    //     elmnt.style.backgroundColor = "hsl(30,85%,50%)"
    // }

    //elmnt.style.backgroundColor = "hsl(" + (dragAmount / sliderContainer.clientWidth * 360) + ",85%,49%)"
    // set the element's new position:
    elmnt.style.left = (dragAmount) + "px";
    glow.style.transform = "rotate(" + dragAmount / sliderContainer.clientWidth * 360 + "deg) scale(" + ((dragAmount / sliderContainer.clientWidth * 1.2) + 1) +")";
   
        if (oldPos !== dragAmount) {
            elmnt.style.width = "40px";
        } 
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = elmnt.style.width = "20px";
    document.ontouchend = elmnt.style.width = "20px";
    document.onmousemove = null;
    document.ontouchmove = null;
  }
}