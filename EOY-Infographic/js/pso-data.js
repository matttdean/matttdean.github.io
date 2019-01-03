
// Replace with Site/Condition names

let siteName = "PlaquePsoriasis.com";
let conditionName = "Plaque Psoriasis";
let number = "32,539";
let advocates = "/meet-experts-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/PsoriaticArthritisdotcom/";
let insta = "https://www.instagram.com/psoriasis_hu/";
let twitter = "https://twitter.com/PsA_HU";
// Infographic Data Points

let data = [
    6,15,232,66,"18,000+","1,726",9,"34,000+",15,35,26,"9,300+","~24,820","~800","~570","Key West, FL"
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
