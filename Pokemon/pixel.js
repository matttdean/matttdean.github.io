let canvas = document.getElementById("canvas");
let codeOutput = document.getElementById("code-area");
let xDimensionInput = document.getElementById("x-dimensions");
let yDimensionInput = document.getElementById("y-dimensions");
let dimensionButton = document.getElementById("dimensions");
let colorInput = document.getElementById("color-input");
let refImage = document.getElementById("ref-image");
let refImageInput = document.getElementById("ref-image-input");
let refImageButton = document.getElementById("ref-image-button");
let canvasContainer = document.getElementById("canvas-image-container")
let currentColor = "black";
let isHeldDown = false;

const setRefImage = () => {
    refImage.src = refImageInput.value;
    refImage.style.display = "block";
};

refImageButton.addEventListener("click", setRefImage);

const setCurrentColor = (e) => {
 currentColor = e.target.value;
};
colorInput.addEventListener("input", setCurrentColor);

const buildCanvas = () => {
    let xValue = xDimensionInput.value;
    let yValue = yDimensionInput.value;
    setDimensions(xValue, yValue);
};

dimensionButton.addEventListener("click", buildCanvas);

const setDimensions = (x,y) => {
    canvas.replaceChildren();
    let width = x * 2;
    let height = y * 2;
    canvasContainer.style.width = `${width}px`
    canvasContainer.style.height = `${height}px`
    for(i = 1; i <= y; i++) {
        for (j = 1; j <= x; j++) {
            let newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            newPixel.dataset.xValue = j * 2;
            newPixel.dataset.yValue = i * 2;
            newPixel.dataset.isClicked = "no";
            canvas.appendChild(newPixel);
        } 
    }
};



document.addEventListener('mousedown', function (event) {
	if (event.target.matches('.pixel')) {
		isHeldDown = true;
        if (event.target.style.backgroundColor === currentColor) {
            event.target.style.removeProperty("background-color");
            event.target.dataset.isClicked = "no";
        } else {
            event.target.style.backgroundColor = currentColor;
            event.target.dataset.isClicked = "yes";
        }
        printIsClickedArray(canvas.children);
	}
}, false);

document.addEventListener('mouseover', function (event) {

	if (event.target.matches('.pixel') && isHeldDown === true) {
		// Run your code to open a modal
        if (event.target.style.backgroundColor === currentColor && isHeldDown === false) {
            event.target.style.removeProperty("background-color");
            event.target.dataset.isClicked = "no";
        } else {
            event.target.style.backgroundColor = currentColor;
            event.target.dataset.isClicked = "yes";
        }
        printIsClickedArray(canvas.children);
	}
}, false);

document.addEventListener('mouseup', function (event) {

	if (isHeldDown === true) {
        isHeldDown = false;
    }
}, false);


const printIsClickedArray = (array) => {
    let newArray = [];
    for(i=0;i<array.length;i++) {
        if (array[i].dataset.isClicked === "yes") {
            let xyValues = `${array[i].dataset.xValue}px ${array[i].dataset.yValue}px ${array[i].style.backgroundColor}`;
            newArray.push(xyValues);
        }
    }
    codeOutput.innerHTML = newArray.join(', ');
};