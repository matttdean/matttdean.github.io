
// Replace with Site/Condition names

let siteName = "Blood-Cancer.com";
let conditionName = "Blood Cancer";
let number = 345;

// Infographic Data Points

let data = [
    29,29,208,23,"18,000+","1,726",27,"12000+",47,6,25,"6,600+","~11,240","~310","~150","Sedona, AZ",620
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
