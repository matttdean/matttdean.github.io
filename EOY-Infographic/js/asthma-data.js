
// Replace with Site/Condition names

let siteName = "Asthma.net";
let conditionName = "Asthma";
let number = 345;

// Infographic Data Points

let data = [
    1,14,429,61,"18,000+","1,726",21,"7,000+",72,42,73,"18,600+","~37,660","~180","~260","Juneau, AK",NA
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;

[].slice.call(sites).forEach(function (site) {
    site.innerHTML = siteName;
});

[].slice.call(conditions).forEach(function (condition) {
    condition.innerHTML = conditionName;
});

for (i=0; i<data.length; i++) {
    document.getElementById("dataPoint" + i).innerHTML = data[i];
}
