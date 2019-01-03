
// Replace with Site/Condition names

let siteName = "ProstateCancer.net";
let conditionName = "Prostate Cancer";
let number = "32,539";
let advocates = "/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/prostatecancerdotnet/";
let insta = "https://www.instagram.com/prostatecancer_hu/";
let twitter = "https://twitter.com/Prostate_HU";
// Infographic Data Points

let data = [
    7,15,181,67,"18,000+","1,726",41,"18,000+",29,11,43,"4,300+","~9,220","~100","~150","Montpelier, VT",25
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
