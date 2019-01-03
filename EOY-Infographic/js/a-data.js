
// Replace with Site/Condition names

let siteName = "Asthma.net";
let conditionName = "Asthma";
let number = "32,539";
let advocates = "/community/experts";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/asthmadotnet/";
let insta = "https://www.instagram.com/asthma_hu/";
let twitter = "https://twitter.com/Asthma_HU";
// Infographic Data Points

let data = [
    1,14,429,61,"18,000+","1,726",21,"7,000+",72,42,73,"18,600+","~37,660","~180","~260","Juneau, AK"
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
