var sc = document.getElementById("sc");
var ms = document.getElementById("ms");
var bc = document.getElementById("bc");
var pd = document.getElementById("pd");
var lc = document.getElementById("lc");
var pc = document.getElementById("pc");
var b = document.getElementById("b");
var hepc = document.getElementById("hepc");
var ibs = document.getElementById("ibs");
var m = document.getElementById("m");
var ad = document.getElementById("ad");
var a = document.getElementById("a");
var pso = document.getElementById("pso");
var t2d = document.getElementById("t2d");
var psa = document.getElementById("psa");
var alz = document.getElementById("alz");
var copd = document.getElementById("copd");
var ibd = document.getElementById("ibd");
var ra = document.getElementById("ra");
var uc = document.getElementById("uc");
var ctx = document.getElementById("mentalHealthCondition").getContext('2d');
var ctx2 = document.getElementById("depression").getContext('2d');
var ctx3 = document.getElementById("anxiety").getContext('2d');
var ctx4 = document.getElementById("panicDisorder").getContext('2d');
var ctx5 = document.getElementById("sad").getContext('2d');
var ctx6 = document.getElementById("stress").getContext('2d');
var ctx7 = document.getElementById("c-1").getContext('2d');
var ctx8 = document.getElementById("c-2").getContext('2d');
var ctx9 = document.getElementById("c-3").getContext('2d');
var ctx10 = document.getElementById("c-4").getContext('2d');
var currentColor;

// charts

var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [155, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        tooltips: {enabled: false}
    }
});


var chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [103, 100],
            backgroundColor: [
                '#FFEF57',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});

var chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        datasets: [{
            data: [33, 100],
            backgroundColor: [
                '#84D0F1',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        datasets: [{
            data: [7, 100],
            backgroundColor: [
                '#F5A396',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        datasets: [{
            data: [8, 100],
            backgroundColor: [
                '#5450F5',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart6 = new Chart(ctx6, {
    type: 'pie',
    data: {
        datasets: [{
            data: [42, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart7 = new Chart(ctx7, {
    type: 'pie',
    data: {
        datasets: [{
            data: [49, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart8 = new Chart(ctx8, {
    type: 'pie',
    data: {
        datasets: [{
            data: [36, 100],
            backgroundColor: [
                '#84D0F1',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart9 = new Chart(ctx9, {
    type: 'pie',
    data: {
        datasets: [{
            data: [32, 100],
            backgroundColor: [
                '#FFEF57',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});
var chart10 = new Chart(ctx10, {
    type: 'pie',
    data: {
        datasets: [{
            data: [13, 100],
            backgroundColor: [
                '#F5A396',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true,
        tooltips: {enabled: false}
    }
});

var chartData = [
	[200,103,33,7,8,32],
    [190,106,30,5,7,2],
    [106,64,29,5,7,2],
    [63,46,22,1,6,1],
    [42,33,15,null,8,1],
    [460,460,17,null,null,53],
    [460,290,33,7,20,45],
    [310,156,60,9,14,58],
    [310,160,57,8,12,59],
    [302,160,60,9,10,53],
    [300,160,36,7,13,39],
    [298,160,45,7,11,45],
    [290,130,39,7,9,54],
    [285,106,32,7,9,48],
    [165,104,26,6,13,42],
    [280,105,31,5,13,45],
    [280,105,27,5,7,32]
];
var chart1Data = chart1.data.datasets[0].data;
var chart2Data = chart2.data.datasets[0].data;
var chart3Data = chart3.data.datasets[0].data;
var chart4Data = chart4.data.datasets[0].data;
var chart5Data = chart5.data.datasets[0].data;
var chart6Data = chart6.data.datasets[0].data;

var charts = [
	chart1Data,
	chart2Data,
	chart3Data,
	chart4Data,
	chart5Data,
	chart6Data
];

var chartPercentage1 = document.getElementById("percent1");
var chartPercentage2 = document.getElementById("percent2");
var chartPercentage3 = document.getElementById("percent3");
var chartPercentage4 = document.getElementById("percent4");
var chartPercentage5 = document.getElementById("percent5");
var chartPercentage6 = document.getElementById("percent6");

var chartPercentages = [
	chartPercentage1,
	chartPercentage2,
	chartPercentage3,
	chartPercentage4,
	chartPercentage5,
	chartPercentage6
];
var percentages = [
	[64,51,25,7,8,32],
    [63,55,23,5,7,2],
    [54,44,19,5,7,2],
    [43,36,17,1,6,1],
    [31,23,15,null,8,1],
    [83,83,17,null,null,33],
    [83,71,33,7,20,35],
    [78,64,42,9,14,42],
    [76,63,37,8,12,39],
    [76,65,41,9,10,39],
    [75,61,36,7,13,39],
    [74,61,35,7,11,35],
    [71,58,26,7,9,37],
    [69,56,32,7,9,34],
    [68,54,26,6,13,29],
    [68,55,31,5,13,35],
    [68,55,27,5,7,32]
];

var colors = [
	"#69CDF6",
	"#FF574C",
	"#5B7288",
	"#7EBCF9",
	"#B094FF",
	"#F975AD",
	"#379EC1",
	"#5470C0",
	"#1E7EBE",
	"#ED3970",
	"#6385A1",
	"#FF6E43",
	"#EE394E",
	"#B84E8B",
	"#1BABA4",
	"#6059AF",
	"#8D55A4",
]


var chartLine = document.getElementById("chartLine");

function changeLineColor() {
    chartLine.setAttribute("fill", currentColor);
}

	function updateCharts(){
		window.chart1.update();	
		window.chart2.update();
		window.chart3.update();
		window.chart4.update();	
		window.chart5.update();
		window.chart6.update();
        changeLineColor();
	}

	function generateData(number) {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, chartData[number][i]);
		}
		for(i=0; i<chartPercentages.length; i++) {
	 		if (percentages[number][i] != null) {
	 			chartPercentages[i].innerHTML = percentages[number][i] + "%";
	 		} else { chartPercentages[i].innerHTML = "n/a" ;}
	 	}
        currentColor = colors[number];
		updateCharts()
	}

sc.addEventListener("click", function() {
	generateData(0);
});
ms.addEventListener("click", function() {
	generateData(1);
});
pd.addEventListener("click", function() {
	generateData(2);
});
lc.addEventListener("click", function() {
	generateData(3);
});
pc.addEventListener("click", function() {
	generateData(4);
});
b.addEventListener("click", function() {
	generateData(5);
});
hepc.addEventListener("click", function() {
	generateData(6);
});
ibs.addEventListener("click", function() {
	generateData(7);
});
m.addEventListener("click", function() {
	generateData(8);
});
ad.addEventListener("click", function() {
	generateData(9);
});
a.addEventListener("click", function() {
	generateData(10);
});
pso.addEventListener("click", function() {
	generateData(11);
});
t2d.addEventListener("click", function() {
	generateData(12);
});
psa.addEventListener("click", function() {
	generateData(13);
});
copd.addEventListener("click", function() {
	generateData(14);
});
ibd.addEventListener("click", function() {
	generateData(15);
});
ra.addEventListener("click", function() {
	generateData(16);
});

		