
// Replace with Site/Condition names

let siteName = "MultipleSclerosis.net";
let conditionName = "Multiple Sclerosis";
let number = "32,539";
let advocates = "/community/experts";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/MultipleSclerosisDotNet/";
let insta = "https://www.instagram.com/multiplesclerosis_hu/";
let twitter = "https://twitter.com/MS_HealthUnion";
// Infographic Data Points

let data = [
    3,23,449,80,"18,000+","1,726",204,"95,000+",5,33,134,"90,000+","~133,340","~1,640","~3,290","Charleston, SC",164
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;
document.getElementById('advocates').href = 'https://' + siteName + advocates;
document.getElementById('stories').href = 'https://' + siteName + stories;
document.getElementById('qa').href = 'https://' + siteName + qa;
document.getElementById('fb-link').href = fb;
document.getElementById('insta-link').href = insta;
document.getElementById('twitter-link').href = twitter;


[].slice.call(sites).forEach(function (site) {
    site.innerHTML = siteName;
});

[].slice.call(conditions).forEach(function (condition) {
    condition.innerHTML = conditionName;
});

for (i=0; i<data.length; i++) {
    document.getElementById("dataPoint" + i).innerHTML = data[i];
}
