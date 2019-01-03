
// Replace with Site/Condition names

let siteName = "ParkinsonsDisease.net";
let conditionName = "Parkinsons Disease";
let number = "32,539";
let advocates = "/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/ParkinsonsDiseaseDotNet/";
// let insta = "https://www.instagram.com/prostatecancer_hu/";
let twitter = "https://twitter.com/Parkinsons_HU";
// Infographic Data Points

let data = [
    4,16,219,77,"18,000+","1,726",37,"22,000+",24,32,20,"19,000+","~22,130","~330","Augusta, ME",515
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
