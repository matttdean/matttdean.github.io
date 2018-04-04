var abc = document.getElementById("abc");
var ctx = document.getElementById("mentalHealthCondition").getContext('2d');
var ctx2 = document.getElementById("depression").getContext('2d');
var ctx3 = document.getElementById("anxiety").getContext('2d');
var ctx4 = document.getElementById("panicDisorder").getContext('2d');
var ctx5 = document.getElementById("sad").getContext('2d');
var ctx6 = document.getElementById("stress").getContext('2d');

var mentalHealthCondition = new Chart(ctx, {
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

var depression = new Chart(ctx2, {
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

var anxiety = new Chart(ctx3, {
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
var panicDisorder = new Chart(ctx4, {
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
var sad = new Chart(ctx5, {
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
var stress = new Chart(ctx6, {
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

	var newData = {
		data: [15, 100],
		backgroundColor: [
            '#F76381',
            '#FFF',
        ],
        borderWidth: 0
	};
	var newData2 = {
		data: [77, 100],
		backgroundColor: [
            '#FFEF57',
            '#FFF',
        ],
        borderWidth: 0
	};
	var newData3 = {
		data: [23, 100],
		backgroundColor: [
            '#84D0F1',
            '#FFF',
        ],
        borderWidth: 0
	};
	var newData4 = {
		data: [88, 100],
		backgroundColor: [
            '#F5A396',
            '#FFF',
        ],
        borderWidth: 0
	};
	var newData5 = {
		data: [12, 100],
		backgroundColor: [
            '#5450F5',
            '#FFF',
        ],
        borderWidth: 0
	};
	var newData6 = {
		data: [67, 100],
		backgroundColor: [
            '#F76381',
            '#FFF',
        ],
        borderWidth: 0
	};

		function updateCharts(){
			window.mentalHealthCondition.update();	
			window.depression.update();
			window.anxiety.update();
			window.panicDisorder.update();	
			window.sad.update();
			window.stress.update();
		}

		function generateNewData() {
			mentalHealthCondition.data.datasets.splice(0, 1, newData);
			depression.data.datasets.splice(0, 1, newData2);
			anxiety.data.datasets.splice(0, 1, newData3);
			panicDisorder.data.datasets.splice(0, 1, newData4);
			sad.data.datasets.splice(0, 1, newData5);
			stress.data.datasets.splice(0, 1, newData6);
			updateCharts()
		}

		abc.addEventListener("click", generateNewData);
		