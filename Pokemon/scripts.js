const createPixel = (x, y) => {
    return `${x}px ${y}px black`;
}

const pixelmaker = document.getElementById("pixelmaker");

const createPixelHorizontalLine = (startXValue, endXValue, yValue) => {
    let pixelLine = [];
    for(i = startXValue; i <= endXValue; i += 2) {
        pixelLine.push(`${i}px ${yValue}px black`);
    }
    pixelLineAsString = pixelLine.join(', ')
    pixelmaker.innerHTML = pixelLineAsString;
}

const createPixelVerticalLine = (startYValue, endYValue, xValue1, xValue2) => {
    let pixelLine = [];
    for(i = startYValue; i <= endYValue; i += 2) {
        pixelLine.push(`${xValue1}px ${i}px black, ${xValue2}px ${i}px black`);
    }
    pixelLineAsString = pixelLine.join(', ')
    pixelmaker.innerHTML = pixelLineAsString;
}

let selector = document.getElementById("menu__selector");
let selectorPosition = 1;

const moveSelector = e => {
    if (selectorPosition === 1) {
        if (e.key === "s") {
            selector.style.bottom = "30px";
            selectorPosition = 2;
        } else if (e.key === "d") {
            selector.style.left = "113px";
            selectorPosition = 3;
        }
    } else if (selectorPosition === 2) {
        if (e.key === "w") {
            selector.style.bottom = "61px";
            selectorPosition = 1;
        } else if (e.key === "d") {
            selector.style.left = "113px";
            selectorPosition = 4;
        }
    } else if (selectorPosition === 3) {
        if (e.key === "a") {
            selector.style.left = "16px";
            selectorPosition = 1;
        } else if (e.key === "s") {
            selector.style.bottom = "30px"
            selectorPosition = 4;
        }
    } else if (selectorPosition === 4) {
        if (e.key === "a") {
            selector.style.left = "16px"
            selectorPosition = 2;
        } else if (e.key === "w") {
            selector.style.bottom = "61px"
            selectorPosition = 3;
        }
    }

}

window.addEventListener("keydown", moveSelector);