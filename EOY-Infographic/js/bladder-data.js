
// Replace with Site/Condition names

let siteName = "BladderCancer.net";
let conditionName = "Bladder Cancer";
let number = "32,539";
let advocates = "/community/advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/BladderCancerDotNet/";
// let insta = "";
let twitter = "https://twitter.com/BladderCancerHU";
// Infographic Data Points

let data = [
    3,13,257,73,"18,000+","1,726",17,"5000+",106,13,21,"4400+","~6660","~280","Aspen, CO",69
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;
document.getElementById('advocates').href = 'https://' + siteName + advocates;
document.getElementById('stories').href = 'https://' + siteName + stories;
document.getElementById('qa').href = 'https://' + siteName + qa;
document.getElementById('fb-link').href = fb;
// document.getElementById('insta-link').href = insta;
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
