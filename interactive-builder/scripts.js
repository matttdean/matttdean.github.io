(function() {

    function CreateIpa1() {
        let inputList = document.getElementsByClassName("build-ipa-1");
        let output = document.getElementById("ipa-1-output");
        let preview =document.getElementById("ipa-1-preview")
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementsByClassName("ipa__bg-element-1");
            e0[0].src = inputList[0].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa__bg-element-2")
            e1[0].src = inputList[1].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa__portrait")
            e2[0].src = inputList[2].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa__text")
            e3[0].innerHTML = "&ldquo;" + inputList[3].value + "&rdquo;";
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link").href = inputList[4].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link").innerHTML = inputList[5].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[6].addEventListener("input", function () {
            document.getElementById("ipa-1-site-name").innerHTML = inputList[6].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
    }

    function CreateIpa1Floating() {
        let inputList = document.getElementsByClassName("build-ipa-1-floating");
        let output = document.getElementById("ipa-1-floating-output");
        let preview =document.getElementById("ipa-1-floating-preview")
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementsByClassName("ipa--floating");
            e0[0].style.backgroundColor = inputList[0].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa__bg-element--floating-1");
            e1[0].src = inputList[1].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa__bg-element--floating-2");
            e2[0].src = inputList[2].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa__text--floating")
            e3[0].innerHTML = "&ldquo;" + inputList[3].value + "&rdquo;";
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link-floating").href = inputList[4].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link-floating").innerHTML = inputList[5].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[6].addEventListener("input", function () {
            document.getElementById("ipa-1-site-name-floating").innerHTML = inputList[6].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[7].addEventListener("input", function () {
            let e7 = document.getElementsByClassName("ipa__bg-element--floating-3");
            e7[0].src = inputList[7].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[8].addEventListener("input", function () {
            let e8 = document.getElementsByClassName("ipa__portrait--floating");
            e8[0].src = inputList[8].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
    }

    function CreateIpa2() {
        let inputList = document.getElementsByClassName("build-ipa-2");
        let output = document.getElementById("ipa-2-output");
        let preview =document.getElementById("ipa-2-preview")
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementsByClassName("ipa-2");
            e0[0].style.backgroundColor = inputList[0].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa-2__text-background--mobile");
            e1[0].src = inputList[1].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa-2__text-background--desktop");
            e2[0].src = inputList[2].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa-2__text");
            e3[0].innerHTML = inputList[3].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("ipa-2__portrait");
            e4[0].src = inputList[4].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[5].addEventListener("input", function () {
            let e5 = document.getElementById("ipa-2-advocate-link");
            e5.href = inputList[5].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[6].addEventListener("input", function () {
            let e6 = document.getElementsByClassName("ipa-2__name");
            e6[0].innerHTML = inputList[6].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[7].addEventListener("input", function () {
            let e7 = document.getElementById("ipa-2-site-name");
            e7.innerHTML = inputList[7].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
    }

    function CreateIpa2Floating() {
        let inputList = document.getElementsByClassName("build-ipa-2-floating");
        let output = document.getElementById("ipa-2-floating-output");
        let preview =document.getElementById("ipa-2-floating-preview")
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementsByClassName("ipa-2__text-background--floating");
            e0[0].src = inputList[0].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa-2__text--floating");
            e1[0].innerHTML = inputList[1].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa-2__portrait--floating");
            e2[0].src = inputList[2].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
         inputList[3].addEventListener("input", function () {
            let e3 = document.getElementById("ipa-2-floating-advocate-link");
            e3.href = inputList[3].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("ipa-2__name--floating");
            e4[0].innerHTML = inputList[4].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[5].addEventListener("input", function () {
            let e5 = document.getElementsByClassName("ipa-2__name--floating");
            e5[0].style.backgroundColor = inputList[5].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
        inputList[6].addEventListener("input", function () {
            let e6 = document.getElementById("ipa-2-floating-site-name");
            e6.innerHTML = inputList[6].value;
            output.innerHTML = "<xmp>" + preview.innerHTML + "</xmp>";
        });
    }

       CreateIpa1();
       CreateIpa1Floating();
       CreateIpa2();
       CreateIpa2Floating();
}())