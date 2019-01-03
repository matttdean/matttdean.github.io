
// Replace with Site/Condition names

let siteName = "LungCancer.net";
let conditionName = "Lung Cancer";
let number = "32,539";
let advocates = "/communityadvocates/";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/LungCancerDotNet/";
let insta = "https://www.instagram.com/lungcancer_hu/";
let twitter = "https://twitter.com/LungCancer_HU";
// Infographic Data Points

let data = [
    11,24,355,74,"18,000+","1,726",32,"21,000+",24,44,25,"10,000+","~20,390","~170","~570","Augusta, ME",138
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
