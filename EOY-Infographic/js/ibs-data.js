
// Replace with Site/Condition names

let siteName = "IrritableBowelSyndrome.net";
let conditionName = "Irritable Bowel Syndrome";
let number = "32,539";
let advocates = "/experts";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/ibsdotnet/";
let insta = "https://www.instagram.com/irritablebowelsyndrome_hu/";
let twitter = "https://twitter.com/IBS_HU";
// Infographic Data Points

let data = [
    6,21,321,79,"18,000+","1,726",29,"25,000+",21,38,57,"21,000+","~29,350","~632","~560","Princeton, NJ"
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
