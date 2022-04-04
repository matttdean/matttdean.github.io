(function() {

    function CreateIpa1() {
        let inputList = document.getElementsByClassName("build-ipa-1");
        let output = document.getElementById("ipa-1-output");
        let preview =document.getElementById("ipa-1-preview")
        let siteURL = "";
        inputList[0].addEventListener("input", function () {
            document.getElementById("ipa-1-site-name").innerHTML = inputList[0].value;
            siteURL = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa__bg-element-1");
            e1[0].src = "https://" + siteURL + inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa__bg-element-2")
            e2[0].src = "https://" + siteURL + inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa__portrait")
            e3[0].src = "https://" + siteURL + inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("ipa__text")
            e4[0].innerHTML = "&ldquo;" + inputList[4].value + "&rdquo;";
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link").href = inputList[5].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link").innerHTML = inputList[6].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIpa1Floating() {
        let inputList = document.getElementsByClassName("build-ipa-1-floating");
        let output = document.getElementById("ipa-1-floating-output");
        let preview =document.getElementById("ipa-1-floating-preview")
        let siteURL = "";
        inputList[0].addEventListener("input", function () {
            document.getElementById("ipa-1-site-name-floating").innerHTML = inputList[0].value;
            siteURL = inputList[0].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa--floating");
            e1[0].style.backgroundColor = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa__bg-element--floating-1");
            e2[0].src = "https://" + siteURL + inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa__bg-element--floating-2");
            e3[0].src = "https://" + siteURL + inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("ipa__text--floating")
            e4[0].innerHTML = "&ldquo;" + inputList[4].value + "&rdquo;";
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link-floating").href = inputList[5].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            document.getElementById("ipa-1-advocate-link-floating").innerHTML = inputList[6].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[7].addEventListener("input", function () {
            let e7 = document.getElementsByClassName("ipa__bg-element--floating-3");
            e7[0].src = "https://" + siteURL + inputList[7].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[8].addEventListener("input", function () {
            let e8 = document.getElementsByClassName("ipa__portrait--floating");
            e8[0].src = "https://" + siteURL + inputList[8].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIpa2() {
        let inputList = document.getElementsByClassName("build-ipa-2");
        let output = document.getElementById("ipa-2-output");
        let preview =document.getElementById("ipa-2-preview")
        let siteURL = "";
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementById("ipa-2-site-name");
            e0.innerHTML = inputList[0].value;
            siteURL = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa-2");
            e1[0].style.backgroundColor = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa-2__text-background--mobile");
            e2[0].src = "https://" + siteURL + inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa-2__text-background--desktop");
            e3[0].src = "https://" + siteURL + inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("ipa-2__text");
            e4[0].innerHTML = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            let e5 = document.getElementsByClassName("ipa-2__portrait");
            e5[0].src = "https://" + siteURL + inputList[5].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            let e6 = document.getElementById("ipa-2-advocate-link");
            e6.href = inputList[6].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[7].addEventListener("input", function () {
            let e7 = document.getElementsByClassName("ipa-2__name");
            e7[0].innerHTML = inputList[7].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[8].addEventListener("input", function () {
            let e8 = document.getElementsByClassName("ipa-2__name");
            e8[0].style.color = inputList[8].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIpa2Floating() {
        let inputList = document.getElementsByClassName("build-ipa-2-floating");
        let output = document.getElementById("ipa-2-floating-output");
        let preview = document.getElementById("ipa-2-floating-preview")
        let siteURL = "";
        inputList[0].addEventListener("input", function () {
            let e0 = document.getElementById("ipa-2-floating-site-name");
            e0.innerHTML = inputList[0].value;
            siteURL = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e1 = document.getElementsByClassName("ipa-2__text-background--floating");
            e1[0].src = "https://" + siteURL + inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let e2 = document.getElementsByClassName("ipa-2__text--floating");
            e2[0].innerHTML = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e3 = document.getElementsByClassName("ipa-2__portrait--floating");
            e3[0].src = "https://" + siteURL + inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
         inputList[4].addEventListener("input", function () {
            let e4 = document.getElementById("ipa-2-floating-advocate-link");
            e4.href = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            let e5 = document.getElementsByClassName("ipa-2__name--floating");
            e5[0].innerHTML = inputList[5].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            let e6 = document.getElementsByClassName("ipa-2__name--floating");
            e6[0].style.backgroundColor = inputList[6].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateOutput(o,p,s) {
        let outputText = p.innerHTML;
        outputText = outputText.replaceAll("https://" + s, "");
        o.innerHTML = "<xmp>" +outputText + "</xmp>";
    }

       CreateIpa1();
       CreateIpa1Floating();
       CreateIpa2();
       CreateIpa2Floating();
}())