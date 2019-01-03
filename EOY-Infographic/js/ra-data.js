
// Replace with Site/Condition names

let siteName = "RheumatoidArthritis.net";
let conditionName = "Rheumatoid Arthritis";
let number = "32,539";
let advocates = "/community/experts";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/PsoriaticArthritisdotcom/";
let insta = "https://www.instagram.com/rheumatoidarthritis_hu/";
let twitter = "https://twitter.com/PsA_HU";
// Infographic Data Points

let data = [
    5,20,307,80,"18,000+","1,726",75,"91,000+",5,49,193,"64,000+","~123,170","~1,800","~3,470","Topeka, KS"
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
