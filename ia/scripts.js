var ctx = document.getElementById("chart1").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
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
