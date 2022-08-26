(function() {

    let siteURL = "";
    let siteInput = document.getElementById("site-name")
    siteInput.addEventListener("input", function () {
    siteURL = siteInput.value;
    });
    let horizontalChartCounter = 2;
    let verticalChartCounter = 2;
    let percentageCounter = 2;
    let percentActive = true;
    let recosCounter = 2;

    function CreateIAIntro() {
        let inputList = document.getElementsByClassName("build-intro");
        let output = document.getElementById("ia-intro-output");
        let preview = document.getElementById("ia-intro-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("intro-heading").innerHTML = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            document.getElementById("intro-text").innerHTML = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let lineList = document.getElementsByClassName("intro__line")
            let arrowList = document.getElementsByClassName("intro__arrow")
            for(i=0;i<lineList.length;i++){
                lineList[i].style.backgroundColor = inputList[2].value;
            }
            for(i=0;i<arrowList.length;i++){
                arrowList[i].style.borderLeftColor = inputList[2].value;
            }
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let chartList = document.getElementsByClassName("intro__chart")
            for(i=0;i<chartList.length;i++){
                chartList[i].style.backgroundColor = inputList[3].value;
            }
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            let e4 = document.getElementsByClassName("intro__pie-1")
            e4[0].style.backgroundColor = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            let e5 = document.getElementsByClassName("intro__pie-2")
            e5[0].style.backgroundColor = inputList[5].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            let e = document.getElementsByClassName("intro__circle-1")
            e[0].style.backgroundColor = inputList[6].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[7].addEventListener("input", function () {
            let e = document.getElementsByClassName("intro__circle-2")
            e[0].style.borderColor = inputList[7].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[8].addEventListener("input", function () {
            let e = document.getElementsByClassName("intro__illustration");
            e[0].src = inputList[8].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[9].addEventListener("input", function () {
            let e = document.getElementsByClassName("intro__logo");
            e[0].src = inputList[9].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateHorizontalBarChartCode() {
        let inputList = document.getElementsByClassName("build-horizontal-chart");
        let output = document.getElementById("ia-horizontal-chart-output");
        let preview = document.getElementById("ia-horizontal-chart-preview")
        let barColor = "";
        let textColor = "";
        inputList[0].addEventListener("input", function () {
            document.getElementById("ia-horizontal-module-title").innerHTML = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e = document.getElementsByClassName("module--horizontal-bar-chart");
            e[0].style.backgroundColor = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            barColor = inputList[2].value;
            let e = document.getElementsByClassName("horizontal-bar-chart__bar");
            e[0].style.backgroundColor = inputList[2].value;
            document.getElementById("horizontal-percent-1").style.color = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            textColor = inputList[3].value;
            document.getElementById("horizontal-title-1").style.color = inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("horizontal-title-1").innerHTML = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("horizontal-percent-1").innerHTML = inputList[5].value + "%";
            document.getElementById("horizontal-bar-1").style.width = inputList[5].value + "%";
            CreateOutput(output,preview,siteURL);
        });
        let horizontalChartModule = document.getElementById('horizontal-chart-container');
        let horizontalChartButton = document.getElementById("horizontal-chart-button");
        let horizontalInputs = document.getElementById('horizontal-inputs');
        horizontalChartButton.addEventListener("click", function() {
            if(horizontalChartCounter < 9) {
            horizontalChartModule.innerHTML += '<div class="horizontal-bar-chart"><div class="horizontal-bar-chart__bar-container"><div id="horizontal-bar-' + horizontalChartCounter + '" class="animate horizontal-bar-chart__bar active" style="width:0%;background-color:' + barColor + '"></div></div><div id="horizontal-percent-' + horizontalChartCounter + '" class="horizontal-bar-chart__percentage" style="color:' + barColor + ';">0%</div><div id="horizontal-title-' + horizontalChartCounter + '" class="horizontal-bar-chart__title" style="color:' + textColor + ';">Lorem Ipsum</div></div>';
            let chartTitleContainer = document.createElement("div");
            chartTitleContainer.className = "input__container";
            horizontalInputs.appendChild(chartTitleContainer);
            let chartTitleHeading = document.createElement("h3");
            chartTitleHeading.className = "input__title";
            chartTitleHeading.innerHTML = "Bar text " + horizontalChartCounter;
            chartTitleContainer.appendChild(chartTitleHeading);
            let chartTitle = document.createElement("input");
            chartTitle.type = "text";
            chartTitle.setAttribute('id',"build-horizontal-chart-title-" + horizontalChartCounter);
            chartTitleContainer.appendChild(chartTitle);
            let chartPercentContainer = document.createElement("div");
            chartPercentContainer.className = "input__container";
            horizontalInputs.appendChild(chartPercentContainer);
            let chartPercentHeading = document.createElement("h3");
            chartPercentHeading.className = "input__title";
            chartPercentHeading.innerHTML = "Bar percent " + horizontalChartCounter;
            chartPercentContainer.appendChild(chartPercentHeading);
            chartPercent = document.createElement("input");
            chartPercent.type = "text";
            chartPercent.setAttribute('id',"build-horizontal-chart-percent-" + horizontalChartCounter);
            chartPercentContainer.appendChild(chartPercent);
            horizontalChartCounter++;
            CreateOutput(output,preview,siteURL);
            }
            document.getElementById("horizontal-inputs").addEventListener( 'input', function ( event ) {
                if( event.target.id == 'build-horizontal-chart-title-2' ) {
                    let input = document.getElementById("build-horizontal-chart-title-2");
                    document.getElementById("horizontal-title-2").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-2' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-2");
                    document.getElementById("horizontal-percent-2").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-2").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-3' ) {
                    let input = document.getElementById("build-horizontal-chart-title-3");
                    document.getElementById("horizontal-title-3").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-3' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-3");
                    document.getElementById("horizontal-percent-3").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-3").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-4' ) {
                    let input = document.getElementById("build-horizontal-chart-title-4");
                    document.getElementById("horizontal-title-4").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-4' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-4");
                    document.getElementById("horizontal-percent-4").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-4").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-5' ) {
                    let input = document.getElementById("build-horizontal-chart-title-5");
                    document.getElementById("horizontal-title-5").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-5' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-5");
                    document.getElementById("horizontal-percent-5").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-5").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-6' ) {
                    let input = document.getElementById("build-horizontal-chart-title-6");
                    document.getElementById("horizontal-title-6").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-6' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-6");
                    document.getElementById("horizontal-percent-6").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-6").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-7' ) {
                    let input = document.getElementById("build-horizontal-chart-title-7");
                    document.getElementById("horizontal-title-7").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-7' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-7");
                    document.getElementById("horizontal-percent-7").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-7").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-title-8' ) {
                    let input = document.getElementById("build-horizontal-chart-title-8");
                    document.getElementById("horizontal-title-8").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-horizontal-chart-percent-8' ) {
                    let input = document.getElementById("build-horizontal-chart-percent-8");
                    document.getElementById("horizontal-percent-8").innerHTML = input.value + "%";
                    document.getElementById("horizontal-bar-8").style.width = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }

              });
        });

        let horizontalChartMinusButton = document.getElementById("horizontal-chart-minus-button");
        horizontalChartMinusButton.addEventListener("click", function() {
            if(horizontalChartCounter > 2) {
            let chartList = document.getElementsByClassName('horizontal-bar-chart');
            document.getElementById('build-horizontal-chart-title-' + (horizontalChartCounter-1)).remove();
            document.getElementById('build-horizontal-chart-percent-' + (horizontalChartCounter-1)).remove();
            chartList[horizontalChartCounter-2].remove();
            horizontalChartCounter--;
            CreateOutput(output,preview,siteURL);
            }

        });

    }



    function CreateVerticalBarChartCode() {
        let inputList = document.getElementsByClassName("build-vertical-chart");
        let output = document.getElementById("ia-vertical-chart-output");
        let preview =document.getElementById("ia-vertical-chart-preview");
        let barColor = "";
        let textColor = "";
        inputList[0].addEventListener("input", function () {
            document.getElementById("ia-vertical-chart-module-title").innerHTML = inputList[0].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e = document.getElementsByClassName("module--vertical-bar-chart");
            e[0].style.backgroundColor = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            barColor = inputList[2].value;
            let e = document.getElementsByClassName("vertical-bar-chart__bar");
            e[0].style.backgroundColor = inputList[2].value;
            document.getElementById("vertical-percent-1").style.color = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            textColor = inputList[3].value;
            document.getElementById("vertical-title-1").style.color = inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("vertical-title-1").innerHTML = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("vertical-percent-1").innerHTML = inputList[5].value + "%";
            document.getElementById("vertical-bar-1").style.height = inputList[5].value + "%";
            CreateOutput(output,preview,siteURL);
        });


        let verticalChartModule = document.getElementById('vertical-chart-container');
        let verticalChartButton = document.getElementById("vertical-chart-button");
        let verticalInputs = document.getElementById('vertical-inputs');
        verticalChartButton.addEventListener("click", function() {
            if(verticalChartCounter < 6) {
            verticalChartModule.innerHTML += '<div class="vertical-bar-chart__column"><div class="vertical-bar-chart__container"><div id="vertical-bar-' + verticalChartCounter + '" class="animate vertical-bar-chart__bar active" style="height:0%;background-color: ' + barColor + '"></div></div><div id="vertical-percent-' + verticalChartCounter + '" class="vertical-bar-chart__data vertical-bar-chart__data--percentage" style="color:' + barColor + ';">0%</div><div id="vertical-title-' + verticalChartCounter + '" class="vertical-bar-chart__data vertical-bar-chart__data--title" style="color: ' + textColor + '">Lorem <br> Ipsum</div></div>'
            let verticalTitleContainer = document.createElement("div");
            verticalTitleContainer.className = "input__container";
            verticalInputs.appendChild(verticalTitleContainer);
            let verticalTitleHeading = document.createElement("h3");
            verticalTitleHeading.className = "input__title";
            verticalTitleHeading.innerHTML = "Bar text " + verticalChartCounter;
            verticalTitleContainer.appendChild(verticalTitleHeading);
            let chartTitle = document.createElement("input");
            chartTitle.type = "text";
            chartTitle.setAttribute('id',"build-vertical-chart-title-" + verticalChartCounter);
            verticalTitleContainer.appendChild(chartTitle);
            let verticalPercentContainer = document.createElement("div");
            verticalPercentContainer.className = "input__container";
            verticalInputs.appendChild(verticalPercentContainer);
            let verticalPercentHeading = document.createElement("h3");
            verticalPercentHeading.className = "input__title";
            verticalPercentHeading.innerHTML = "Bar percent " + verticalChartCounter;
            verticalPercentContainer.appendChild(verticalPercentHeading);
            chartPercent = document.createElement("input");
            chartPercent.type = "text";
            chartPercent.setAttribute('id',"build-vertical-chart-percent-" + verticalChartCounter);
            verticalPercentContainer.appendChild(chartPercent);
            verticalChartCounter++;
            CreateOutput(output,preview,siteURL);
            }
            document.getElementById("vertical-inputs").addEventListener( 'input', function ( event ) {
                if( event.target.id == 'build-vertical-chart-title-2' ) {
                    let input = document.getElementById("build-vertical-chart-title-2");
                    document.getElementById("vertical-title-2").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-percent-2' ) {
                    let input = document.getElementById("build-vertical-chart-percent-2");
                    document.getElementById("vertical-percent-2").innerHTML = input.value + "%";
                    document.getElementById("vertical-bar-2").style.height = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-title-3' ) {
                    let input = document.getElementById("build-vertical-chart-title-3");
                    document.getElementById("vertical-title-3").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-percent-3' ) {
                    let input = document.getElementById("build-vertical-chart-percent-3");
                    document.getElementById("vertical-percent-3").innerHTML = input.value + "%";
                    document.getElementById("vertical-bar-3").style.height = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-title-4' ) {
                    let input = document.getElementById("build-vertical-chart-title-4");
                    document.getElementById("vertical-title-4").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-percent-4' ) {
                    let input = document.getElementById("build-vertical-chart-percent-4");
                    document.getElementById("vertical-percent-4").innerHTML = input.value + "%";
                    document.getElementById("vertical-bar-4").style.height = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-title-5' ) {
                    let input = document.getElementById("build-vertical-chart-title-5");
                    document.getElementById("vertical-title-5").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-vertical-chart-percent-5' ) {
                    let input = document.getElementById("build-vertical-chart-percent-5");
                    document.getElementById("vertical-percent-5").innerHTML = input.value + "%";
                    document.getElementById("vertical-bar-5").style.height = input.value + "%";
                    CreateOutput(output,preview,siteURL);
                }
              });
        });
            
        let verticalChartMinusButton = document.getElementById("vertical-chart-minus-button");
        verticalChartMinusButton.addEventListener("click", function() {
            if(verticalChartCounter > 2) {
            let chartList = document.getElementsByClassName('vertical-bar-chart__column');
            document.getElementById('build-vertical-chart-title-' + (verticalChartCounter-1)).remove();
            document.getElementById('build-vertical-chart-percent-' + (verticalChartCounter-1)).remove();
            chartList[verticalChartCounter-2].remove();
            verticalChartCounter--;
            CreateOutput(output,preview,siteURL);
            }
        });

    }

    function CreatePercentageCode() {
        let inputList = document.getElementsByClassName("build-ia-percentage");
        let output = document.getElementById("ia-percentage-output");
        let preview = document.getElementById("ia-percentage-preview")
        let barColor = "";
        let textColor = "";
        inputList[0].addEventListener("input", function () {
            document.getElementById("percentage-title-1").innerHTML = inputList[0].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            document.getElementById("percentage-container").style.backgroundColor = inputList[1].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            textColor = inputList[2].value;
            document.getElementById("percentage-text-1").style.color = inputList[2].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            barColor = inputList[3].value;
            document.getElementById("percentage-number-1").style.color = inputList[3].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            let e = document.getElementById("percentage-number-1");
            e.childNodes[0].innerHTML = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("percentage-text-1").innerHTML = inputList[5].value
            CreateOutput(output,preview,siteURL);
        });

        let percentageChartModule = document.getElementById('percentage-module-container');
        let percentageChartButton = document.getElementById("percentage-button");
        let percentageInputs = document.getElementById('percentage-inputs');
        percentageChartButton.addEventListener("click", function() {
            if(percentageCounter < 5) {
            percentageChartModule.innerHTML += '<div class="percentage__container"><div id="percentage-number-' + percentageCounter + '" class="percentage__number" style="color:' + barColor + ';"><span class="count">1</span><span class="percent-percent">%</span></div><div id="percentage-text-' + percentageCounter + '" class="percentage__text" style="color: ' + textColor + '">Lorem ipsum dolor sit amet, consectetur adipiscing elit*</div></div>'
            let chartNumberContainer = document.createElement("div");
            chartNumberContainer.className = "input__container";
            percentageInputs.appendChild(chartNumberContainer);
            let chartNumberHeading = document.createElement("h3");
            chartNumberHeading.className = "input__title";
            chartNumberHeading.innerHTML = "Data point value " + percentageCounter;
            chartNumberContainer.appendChild(chartNumberHeading);
            let chartNumber = document.createElement("input");
            chartNumber.type = "text";
            chartNumber.setAttribute('id',"build-percentage-number-" + percentageCounter);
            chartNumberContainer.appendChild(chartNumber);
            let chartTextContainer = document.createElement("div");
            chartTextContainer.className = "input__container";
            percentageInputs.appendChild(chartTextContainer);
            let chartTextHeading = document.createElement("h3");
            chartTextHeading.className = "input__title";
            chartTextHeading.innerHTML = "Data point text " + percentageCounter;
            chartTextContainer.appendChild(chartTextHeading);
            let chartText = document.createElement("input");
            chartText.type = "text";
            chartText.setAttribute('id',"build-percentage-text-" + percentageCounter);
            chartTextContainer.appendChild(chartText);
            percentageCounter++;
            CreateOutput(output,preview,siteURL);
            }
            document.getElementById("percentage-inputs").addEventListener( 'input', function ( event ) {
                if( event.target.id == 'build-percentage-number-2' ) {
                    let input = document.getElementById("build-percentage-number-2");
                    let e = document.getElementById("percentage-number-2");
                    e.childNodes[0].innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-percentage-text-2' ) {
                    let input = document.getElementById("build-percentage-text-2");
                    document.getElementById("percentage-text-2").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-percentage-number-3' ) {
                    let input = document.getElementById("build-percentage-number-3");
                    let e = document.getElementById("percentage-number-3");
                    e.childNodes[0].innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-percentage-text-3' ) {
                    let input = document.getElementById("build-percentage-text-3");
                    document.getElementById("percentage-text-3").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-percentage-number-4' ) {
                    let input = document.getElementById("build-percentage-number-4");
                    let e = document.getElementById("percentage-number-4");
                    e.childNodes[0].innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-percentage-text-4' ) {
                    let input = document.getElementById("build-percentage-text-4");
                    document.getElementById("percentage-text-4").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
              });
        });
        let percentageMinusButton = document.getElementById("percentage-minus-button");
        percentageMinusButton.addEventListener("click", function() {
            if(percentageCounter > 2) {
            let chartList = document.getElementsByClassName('percentage__container');
            document.getElementById('build-percentage-number-' + (percentageCounter-1)).remove();
            document.getElementById('build-percentage-text-' + (percentageCounter-1)).remove();
            chartList[percentageCounter-2].remove();
            percentageCounter--;
            CreateOutput(output,preview,siteURL);
            }
        });

        let percentagePercentButton = document.getElementById("percentage-percent-button");
        percentagePercentButton.addEventListener("click", function() {
            let percentList = document.getElementsByClassName('percent-percent');
            if (percentActive === true) {
               for (i=0;i<percentList.length;i++) {
                   percentList[i].innerHTML = "";
               } 
               CreateOutput(output,preview,siteURL);
               percentActive = false;
            } else if (percentActive === false) {
                for (i=0;i<percentList.length;i++) {
                    percentList[i].innerHTML = "%";
                } 
                CreateOutput(output,preview,siteURL);
                percentActive = true;
            }
        });

    }
    function CreateIAFloatingImageCode() {
        let inputList = document.getElementsByClassName("build-ia-floating-image");
        let output = document.getElementById("ia-floating-image-output");
        let preview = document.getElementById("ia-floating-image-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("floating-image").src = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e = document.getElementsByClassName("module--floating-image");
            e[0].style.backgroundColor = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
    }
    function CreateIAImageAndCopyCode() {
        let inputList = document.getElementsByClassName("build-ia-image-copy");
        let output = document.getElementById("ia-image-copy-output");
        let preview = document.getElementById("ia-image-copy-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("image-copy-image").src = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            document.getElementById("image-copy-title").innerHTML = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            document.getElementById("image-copy-text").innerHTML = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e = document.getElementsByClassName("module--image-copy");
            e[0].style.backgroundColor = inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("image-copy-title").style.color = inputList[4].value;
            document.getElementById("image-copy-text").style.color = inputList[4].value;
            CreateOutput(output,preview,siteURL);
        });
        

        let imageCopyButton = document.getElementById("image-copy-button");
        imageCopyButton.addEventListener("click", function() { 
            document.getElementById("image-copy-container").classList.toggle("module__container--reverse");
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIAQuote() {
        let inputList = document.getElementsByClassName("build-ia-quote");
        let output = document.getElementById("ia-quote-output");
        let preview = document.getElementById("ia-quote-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("quote-container").style.backgroundColor = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            document.getElementById("quote-quote").innerHTML = inputList[1].value;
            document.getElementById("quote-site-name").innerHTML = siteURL;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            document.getElementById("quote-quote").style.color = inputList[2].value;
            document.getElementById("quote-attribution").style.color = inputList[2].value;
            let e = document.getElementsByClassName("quote__mark");
            e[0].style.color = inputList[2].value;
            e[1].style.color = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIASpotImage() {
        let inputList = document.getElementsByClassName("build-ia-spot-image");
        let output = document.getElementById("ia-spot-image-output");
        let preview = document.getElementById("ia-spot-image-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("spot-image-container").style.backgroundColor = inputList[0].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            document.getElementById("spot-image-image").src = inputList[1].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            document.getElementById("spot-image-text").innerHTML = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            document.getElementById("spot-image-text").style.color = inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateIARecos() {
        let inputList = document.getElementsByClassName("build-recos");
        let output = document.getElementById("ia-recos-output");
        let preview = document.getElementById("ia-recos-preview")
        inputList[0].addEventListener("input", function () {
            document.getElementById("recos-avatar").src = inputList[0].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e = document.getElementsByClassName("more__title");
            e[0].innerHTML = inputList[1].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[2].addEventListener("input", function () {
            let e = document.getElementsByClassName("more__text");
            e[0].innerHTML = inputList[2].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[3].addEventListener("input", function () {
            let e = document.getElementsByClassName("more__footer-text");
            e[0].innerHTML = inputList[3].value;
            CreateOutput(output,preview,siteURL);
        });
        inputList[4].addEventListener("input", function () {
            document.getElementById("more-image-1").src = inputList[4].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[5].addEventListener("input", function () {
            document.getElementById("more-year-1").innerHTML = inputList[5].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[6].addEventListener("input", function () {
            document.getElementById("more-link-1").href = inputList[6].value
            CreateOutput(output,preview,siteURL);
        });

        let recosModule = document.getElementById('recos-container');
        let recosButton = document.getElementById("recos-button");
        let recosInputs = document.getElementById('recos-inputs');
        recosButton.addEventListener("click", function() {
            if (recosCounter < 7) {
                recosModule.innerHTML += '<a class="more__links" id="more-link-' + recosCounter + '" href="https://copd.net/"><div class="more__year"><img src="https://copd.net/wp-content/uploads/2022/01/illustration-1.png" id="more-image-' + recosCounter + '" alt="" class="more__year-image"><h3 id="more-year-' + recosCounter + '"class="more__year-text">0000</h3></div></a>'
                let recosImgContainer = document.createElement("div");
                recosImgContainer.className = "input__container";
                recosInputs.appendChild(recosImgContainer);
                let recosImgHeading = document.createElement("h3");
                recosImgHeading.className = "input__title";
                recosImgHeading.innerHTML = "Reco Image WP URL " + recosCounter;
                recosImgContainer.appendChild(recosImgHeading);
                let recosImg = document.createElement("input");
                recosImg.type = "text";
                recosImg.setAttribute('id',"build-recos-image-" + recosCounter);
                recosImgContainer.appendChild(recosImg);
                let recosDateContainer = document.createElement("div");
                recosDateContainer.className = "input__container";
                recosInputs.appendChild(recosDateContainer);
                let recosDateHeading = document.createElement("h3");
                recosDateHeading.className = "input__title";
                recosDateHeading.innerHTML = "Reco Date " + recosCounter;
                recosDateContainer.appendChild(recosDateHeading);
                let recosDate = document.createElement("input");
                recosDate.type = "text";
                recosDate.setAttribute('id',"build-recos-date-" + recosCounter);
                recosDateContainer.appendChild(recosDate);
                let recosUrlContainer = document.createElement("div");
                recosUrlContainer.className = "input__container";
                recosInputs.appendChild(recosUrlContainer);
                let recosURLHeading = document.createElement("h3");
                recosURLHeading.className = "input__title";
                recosURLHeading.innerHTML = "Reco PostID " + recosCounter;
                recosUrlContainer.appendChild(recosURLHeading);
                let recosUrl = document.createElement("input");
                recosUrl.type = "text";
                recosUrl.setAttribute('id',"build-recos-link-" + recosCounter);
                recosUrlContainer.appendChild(recosUrl);
                recosCounter++;
                CreateOutput(output,preview,siteURL);
            }
            document.getElementById("recos-inputs").addEventListener( 'input', function ( event ) {
                if( event.target.id == 'build-recos-image-2' ) {
                    let input = document.getElementById("build-recos-image-2");
                    document.getElementById("more-image-2").src = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-date-2' ) {
                    let input = document.getElementById("build-recos-date-2");
                    document.getElementById("more-year-2").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-link-2' ) {
                    let input = document.getElementById("build-recos-link-2");
                    document.getElementById("more-link-2").href = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-image-3' ) {
                    let input = document.getElementById("build-recos-image-3");
                    document.getElementById("more-image-3").src = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-date-3' ) {
                    let input = document.getElementById("build-recos-date-3");
                    document.getElementById("more-year-3").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-link-3' ) {
                    let input = document.getElementById("build-recos-link-3");
                    document.getElementById("more-link-3").href = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-image-4' ) {
                    let input = document.getElementById("build-recos-image-4");
                    document.getElementById("more-image-4").src = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-date-4' ) {
                    let input = document.getElementById("build-recos-date-4");
                    document.getElementById("more-year-4").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-link-4' ) {
                    let input = document.getElementById("build-recos-link-4");
                    document.getElementById("more-link-4").href = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-image-5' ) {
                    let input = document.getElementById("build-recos-image-5");
                    document.getElementById("more-image-5").src = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-date-5' ) {
                    let input = document.getElementById("build-recos-date-5");
                    document.getElementById("more-year-5").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-link-5' ) {
                    let input = document.getElementById("build-recos-link-5");
                    document.getElementById("more-link-5").href = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-image-6' ) {
                    let input = document.getElementById("build-recos-image-6");
                    document.getElementById("more-image-6").src = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-date-6' ) {
                    let input = document.getElementById("build-recos-date-6");
                    document.getElementById("more-year-6").innerHTML = input.value;
                    CreateOutput(output,preview,siteURL);
                }
                else if( event.target.id == 'build-recos-link-6' ) {
                    let input = document.getElementById("build-recos-link-6");
                    document.getElementById("more-link-6").href = input.value;
                    CreateOutput(output,preview,siteURL);
                }
              });
        });
        let recosMinusButton = document.getElementById("recos-minus-button");
        recosMinusButton.addEventListener("click", function() {
            if(recosCounter > 2) {
            let chartList = document.getElementsByClassName('more__links');
            document.getElementById('build-recos-image-' + (recosCounter-1)).remove();
            document.getElementById('build-recos-date-' + (recosCounter-1)).remove();
            document.getElementById('build-recos-link-' + (recosCounter-1)).remove();
            chartList[recosCounter-2].remove();
            recosCounter--;
            CreateOutput(output,preview,siteURL);
            }
        });
    }

    function CreateIARecosNew() {
        let inputList = document.getElementsByClassName("build-recos-new");
        let output = document.getElementById("ia-recos-new-output");
        let preview = document.getElementById("ia-recos-new-preview")
        
        inputList[0].addEventListener("input", function () {
            document.getElementById("recos-avatar-new").src = inputList[0].value
            CreateOutput(output,preview,siteURL);
        });
        inputList[1].addEventListener("input", function () {
            let e = document.getElementsByClassName("more__footer-text");
            e[1].innerHTML = inputList[1].value;

            CreateOutput(output,preview,siteURL);
        });
    }

    function CreateOutput(o,p,s) {
        let outputText = p.innerHTML;
        outputText = outputText.replaceAll("https://" + s + "", "");
        outputText = outputText.replaceAll(" active", "");
        o.innerHTML = "<xmp>" + outputText + "</xmp>";
        
    }

       CreateIAIntro();
       CreateHorizontalBarChartCode();
       CreateVerticalBarChartCode();
       CreatePercentageCode();
       CreateIAFloatingImageCode();
       CreateIAImageAndCopyCode();
       CreateIAQuote();
       CreateIASpotImage();
       CreateIARecos();
       CreateIARecosNew();

}())


(function(){

    var answers = document.getElementsByClassName("quiz__answer");
    var multiAnswers = document.getElementsByClassName("quiz__multi-answer");
    var answersBox = document.getElementById("answers");
    var multiAnswersBox = document.getElementById("multi-answers");
    var percent = document.getElementsByClassName("quiz__percent");
    var bar = document.getElementsByClassName("quiz__bar");
    var barData = document.getElementsByClassName("quiz__bar-data");
    var multiPercent = document.getElementsByClassName("multi-percent");
    var multiBar = document.getElementsByClassName("multi-bar");
    var multiBarData = document.getElementsByClassName("multi-data");
    var hasNotBeenClicked = true;
    var hasNotBeenSubmitted = true;
    
    // document.getElementById("multi-submit").addEventListener("click", ShowMultiResults);
    
    function ShowResults() {
        if(hasNotBeenClicked) {
        answersBox.classList.add("quiz__answer--hidden");
        document.getElementById("results").classList.add("quiz__results--active");
        percent[this.dataset.order].classList.add("quiz__percent--active");
        bar[this.dataset.order].classList.add("quiz__bar--active");
        barData[this.dataset.order].classList.add("quiz__bar-data--active");
        hasNotBeenClicked = false;
        }
    }
    
    function ShowMultiResults() {
        multiAnswersBox.classList.add("quiz__answer--hidden");
        document.getElementById("multi-results").classList.add("quiz__results--active");
        hasNotBeenSubmitted = false;
    }
    
    function SetAnswers() {
        if(hasNotBeenSubmitted) {
        this.classList.add("quiz__answer--active");
        multiPercent[this.dataset.order].classList.add("quiz__percent--active");
        multiBar[this.dataset.order].classList.add("quiz__bar--active");
        multiBarData[this.dataset.order].classList.add("quiz__bar-data--active");
        }
    }
    
    function SetListeners() {
        for (i=0; i<answers.length; i++) {
            answers[i].addEventListener('click', ShowResults);
            answers[i].setAttribute("data-order", "" + i + "")
        }
        for (i=0; i<multiAnswers.length; i++) {
            multiAnswers[i].addEventListener('click', SetAnswers);
            multiAnswers[i].setAttribute("data-order", "" + i + "")
        }
    }
    
    function AnimateValue(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current;
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
    }
    
    function AnimateCounter(i) {
      // The element we will observe.
      const timeCounter = document.getElementById('counter-'+ i);
      const duration = timeCounter.dataset.target;
      let hasNotAnimated =true;
      // Observer options.
      const options = {
          root: null,
          rootMargin: '0px'
      };
      // Callback function executed during observe.
      const callback = function( entries, observer ) {
          // Target the first entry available.
          let observedImg = entries[0];
          // Add or remove bar.
          if(observedImg.isIntersecting & hasNotAnimated) { 
              AnimateValue("counter-" + i, 0, duration, 1500);
              hasNotAnimated = false;
          }
      };
      // Construct Intersection Observer.
      const observer = new IntersectionObserver( callback, options );
    
      // Observe if element is present.
      if ( timeCounter ) {
          observer.observe( timeCounter );
      }
    }
    
    function SetNumbers() {
      var numbersList = document.getElementsByClassName("count");
      for(i=0;i<numbersList.length;i++){
        numbersList[i].id="counter-" + i;
        numbersList[i].dataset.target=numbersList[i].innerHTML;
      }
      for(i=0;i<numbersList.length;i++){
        AnimateCounter(i);
      }
    
    }
    
    const images = document.querySelectorAll('.animate');
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('active');
        } 
      });
    });
    
    images.forEach(image => {
      observer.observe(image);
    });
    SetListeners();
    SetNumbers();
    
    }())
    