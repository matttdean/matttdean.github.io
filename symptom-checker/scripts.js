(function() {

let spot1 = document.getElementById("spot-1");
let spot2 = document.getElementById("spot-2");
let spot3 = document.getElementById("spot-3");
let spot4 = document.getElementById("spot-4");
let tooltip1 = document.getElementById("tooltip-1");
let tooltip2 = document.getElementById("tooltip-2");
let tooltip3 = document.getElementById("tooltip-3");
let tooltip4 = document.getElementById("tooltip-4");
let activeTooltip = "unset";
let symptomButton1 = document.getElementById("symptom-button-1");
let symptomHidden1 = document.getElementById("symptom-hidden-1");
let symptomButton2 = document.getElementById("symptom-button-2");
let symptomHidden2 = document.getElementById("symptom-hidden-2");
let symptomButton3 = document.getElementById("symptom-button-3");
let symptomHidden3 = document.getElementById("symptom-hidden-3");
let symptomButton4 = document.getElementById("symptom-button-4");
let symptomHidden4 = document.getElementById("symptom-hidden-4");


spot1.addEventListener("mouseover", function () {
    if(activeTooltip != "unset"){
        activeTooltip.style.opacity = "0";
        activeTooltip.style.display = "none"
    }
    tooltip1.style.display = "block"
    setTimeout(function() {
        tooltip1.style.opacity = "1";
      }, 100);
    activeTooltip = tooltip1;
});
spot2.addEventListener("mouseover", function () {
    if(activeTooltip != "unset"){
        activeTooltip.style.opacity = "0";
        activeTooltip.style.display = "none"
    }
    tooltip2.style.display = "block"
    setTimeout(function() {
        tooltip2.style.opacity = "1";
      }, 100);
    activeTooltip = tooltip2;
});
spot3.addEventListener("mouseover", function () {
    if(activeTooltip != "unset"){
        activeTooltip.style.opacity = "0";
        activeTooltip.style.display = "none"
    }
    tooltip3.style.display = "block"
    setTimeout(function() {
        tooltip3.style.opacity = "1";
      }, 100);
    activeTooltip = tooltip3;
});
spot4.addEventListener("mouseover", function () {
    if(activeTooltip != "unset"){
        activeTooltip.style.opacity = "0";
        activeTooltip.style.display = "none"
    }
    tooltip4.style.display = "block"
    setTimeout(function() {
        tooltip4.style.opacity = "1";
      }, 100);
    activeTooltip = tooltip4;
});

symptomButton1.addEventListener("click", function () {
    if (symptomHidden1.classList.contains("symptom__active")){
        symptomHidden1.classList.remove("symptom__active");
        symptomButton1.innerHTML = "+ Expand +";
    } else {
        symptomHidden1.classList.add("symptom__active");
        symptomButton1.innerHTML = "^ Close Window ^";
    }
});
symptomButton2.addEventListener("click", function () {
    if (symptomHidden2.classList.contains("symptom__active")){
        symptomHidden2.classList.remove("symptom__active");
        symptomButton2.innerHTML = "+ Expand +";
    } else {
        symptomHidden2.classList.add("symptom__active");
        symptomButton2.innerHTML = "^ Close Window ^";
    }
});
symptomButton3.addEventListener("click", function () {
    if (symptomHidden3.classList.contains("symptom__active")){
        symptomHidden3.classList.remove("symptom__active");
        symptomButton3.innerHTML = "+ Expand +";
    } else {
        symptomHidden3.classList.add("symptom__active");
        symptomButton3.innerHTML = "^ Close Window ^";
    }
});
symptomButton4.addEventListener("click", function () {
    if (symptomHidden4.classList.contains("symptom__active")){
        symptomHidden4.classList.remove("symptom__active");
        symptomButton4.innerHTML = "+ Expand +";
    } else {
        symptomHidden4.classList.add("symptom__active");
        symptomButton4.innerHTML = "^ Close Window ^";
    }
});



}())