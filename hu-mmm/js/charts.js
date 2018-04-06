var abc = document.getElementById("abc");
var t2d = document.getElementById("t2d");
var pc = document.getElementById("pc");
var b = document.getElementById("b");
var c = document.getElementById("c");
var bc = document.getElementById("bc");
var pd = document.getElementById("pd");
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


var abcData = [
	15,
	77,
	13,
	34,
	88,
	13
];
var t2dData = [
	52,
	17,
	73,
	13,
	55,
	22
];
var pcData = [
	15,
	77,
	13,
	34,
	88,
	11
];
var bData = [
	15,
	77,
	13,
	34,
	88,
	25
];
var cData = [
	15,
	77,
	13,
	34,
	88,
	21
];
var bcData = [
	15,
	77,
	13,
	34,
	88,
	64
];
var pdData = [
	15,
	77,
	13,
	34,
	88,
	51
];
var scData = [
	15,
	77,
	13,
	34,
	88,
	14
];
var raData = [
	15,
	77,
	13,
	34,
	88
];
var psaData = [
	15,
	77,
	13,
	34,
	88
];
var psoData = [
	15,
	77,
	13,
	34,
	88
];
var msData = [
	15,
	77,
	13,
	34,
	88
];
var mData = [
	15,
	77,
	13,
	34,
	88
];
var lcData = [
	15,
	77,
	13,
	34,
	88
];
var ibsData = [
	15,
	77,
	13,
	34,
	88
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


	function updateCharts(){
		window.chart1.update();	
		window.chart2.update();
		window.chart3.update();
		window.chart4.update();	
		window.chart5.update();
		window.chart6.update();
	}

	function generateABCData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, abcData[i]);
		}
		updateCharts()
	}
	function generateT2DData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, t2dData[i]);
		}
		updateCharts()
	}
	function generatePCData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, pcData[i]);
		}
		updateCharts()
	}
	function generateBData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, bData[i]);
		}
		updateCharts()
	}
	function generateCData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, cData[i]);
		}
		updateCharts()
	}
	function generateBCData() {
		for (i=0; i<charts.length; i++) {
		charts[i].splice(0, 1, bcData[i]);
		}
		updateCharts()
	}

	abc.addEventListener("mouseover", generateABCData);
	t2d.addEventListener("mouseover", generateT2DData);
	pc.addEventListener("mouseover", generatePCData);
	b.addEventListener("mouseover", generateBData);
	c.addEventListener("mouseover", generateCData);
	bc.addEventListener("mouseover", generateBCData);

		