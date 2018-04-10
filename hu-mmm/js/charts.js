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
            data: [55, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true
    }
});


var chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [13, 100],
            backgroundColor: [
                '#FFEF57',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});

var chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        datasets: [{
            data: [77, 100],
            backgroundColor: [
                '#84D0F1',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        datasets: [{
            data: [42, 100],
            backgroundColor: [
                '#F5A396',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        datasets: [{
            data: [88, 100],
            backgroundColor: [
                '#5450F5',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart6 = new Chart(ctx6, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart7 = new Chart(ctx7, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                '#F76381',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart8 = new Chart(ctx8, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                '#84D0F1',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart9 = new Chart(ctx9, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                '#FFEF57',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});
var chart10 = new Chart(ctx10, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                '#F5A396',
                '#FFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
    	responsive: true
    }
});

var chartData = [
	[64,51,25,8,7,11], //SC
	[63,55,23,7,5,11], //MS
	[56,44,17,0,6,0], //BloodC
	[54,44,19,7,5,11], //PD
	[43,36,17,6,1,11], //LC
	[31,23,15,8,0,0], //PC
	[83,83,17,0,0,0], //BladderC
	[83,71,33,20,7,11], //HepC
	[79,64,42,14,9,11], //IBS
	[76,63,37,12,8,11], // Migraine
	[76,65,41,10,9,11], //AD
	[75,61,36,13,7,11], //A
	[74,61,35,12,7,11], //pso
	[71,58,26,9,7,11], //t2d
	[69,56,32,9,7,11], //psa
	[69,61,28,13,9,11], //Alz
	[68,54,26,13,6,11], //COPD
	[68,55,31,13,5,11], //IBD
	[68,55,27,8,5,11], //RA
	[65,54,26,9,9,11] //UC
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
	[64,51,25,8,7,11], //SC
	[63,55,23,7,5,11], //MS
	[56,44,17,null,6,null], //BloodC
	[54,44,19,7,5,11], //PD
	[43,36,17,6,1,11], //LC
	[31,23,15,8,null,null], //PC
	[83,83,17,null,null,null], //BladderC
	[83,71,33,20,7,11], //HepC
	[79,64,42,14,9,11], //IBS
	[76,63,37,12,8,11], // Migraine
	[76,65,41,10,9,11], //AD
	[75,61,36,13,7,11], //A
	[74,61,35,12,7,11], //pso
	[71,58,26,9,7,11], //t2d
	[69,56,32,9,7,11], //psa
	[69,61,28,13,9,11], //Alz
	[68,54,26,13,6,11], //COPD
	[68,55,31,13,5,11], //IBD
	[68,55,27,8,5,11], //RA
	[65,54,26,9,9,11] //UC
];

var colors = [
	"#69CDF6",
	"#FF574C",
	"#979AED",
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
	"#5285C6",
	"#1BABA4",
	"#6059AF",
	"#8D55A4",
	"#333"
]




function changeLineColor() {
    document.getElementById("chartLine").setAttribute("fill", currentColor);
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
bc.addEventListener("click", function() {
	generateData(2);
});
pd.addEventListener("click", function() {
	generateData(3);
});
lc.addEventListener("click", function() {
	generateData(4);
});
pc.addEventListener("click", function() {
	generateData(5);
});
b.addEventListener("click", function() {
	generateData(6);
});
hepc.addEventListener("click", function() {
	generateData(7);
});
ibs.addEventListener("click", function() {
	generateData(8);
});
m.addEventListener("click", function() {
	generateData(9);
});
ad.addEventListener("click", function() {
	generateData(10);
});
a.addEventListener("click", function() {
	generateData(11);
});
pso.addEventListener("click", function() {
	generateData(12);
});
t2d.addEventListener("click", function() {
	generateData(13);
});
psa.addEventListener("click", function() {
	generateData(14);
});
alz.addEventListener("click", function() {
	generateData(15);
});
copd.addEventListener("click", function() {
	generateData(16);
});
ibd.addEventListener("click", function() {
	generateData(17);
});
ra.addEventListener("click", function() {
	generateData(18);
});
uc.addEventListener("click", function() {
	generateData(19);
});
		