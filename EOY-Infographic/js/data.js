
// Replace with Site/Condition names

let siteName = "Migraine.com";
let conditionName = "Migraine";
let number = "32,539";
let advocates = "";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "";
let insta = "";
let twitter = "";
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
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;
document.getElementById('advocates').innerHTML = advocates;
document.getElementById('stories').innerHTML = siteName + stories;
document.getElementById('qa').innerHTML = siteName + qa;
document.getElementById('fb-link').innerHTML = fb;
document.getElementById('insta-link').innerHTML = insta;
document.getElementById('twitter-link').innerHTML = twitter;


[].slice.call(sites).forEach(function (site) {
    site.innerHTML = siteName;
});

[].slice.call(conditions).forEach(function (condition) {
    condition.innerHTML = conditionName;
});

for (i=0; i<data.length; i++) {
    document.getElementById("dataPoint" + i).innerHTML = data[i];
}
