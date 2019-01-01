
// Replace with Site/Condition names

let siteName = "Migraine.com ";
let conditionName = "migraine ";

// Infographic Data Points

let data = [
    3,
    21,
    276,
    83,
    "18,000+",
    "1,726",
    147,
    "135,000+",
    3,
    55,
    252,
    "102,000+",
    "~185,890",
    "~1,400",
    "~19,270",
    "Salt Lake City, UT",
    "NA"
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');

[].slice.call(sites).forEach(function (site) {
    site.innerHTML = siteName;
});

[].slice.call(conditions).forEach(function (condition) {
    condition.innerHTML = conditionName;
});

for (i=0; i<data.length; i++) {
    document.getElementById("dataPoint" + i).innerHTML = data[i];
}
