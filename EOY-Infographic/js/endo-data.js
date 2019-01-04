
// Replace with Site/Condition names

let siteName = "Endometriosis.net";
let conditionName = "Endometriosis";
let number = "32,539";
let advocates = "/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/EndometriosisDotNet/";
let insta = "https://www.instagram.com/endometriosis_hu/";
let twitter = "https://twitter.com/Endo_HU";

// Infographic Data Points

let data = [
    22,22,110,12,"18,000+","1,726",15,"7,000+",75,31,8,"3,000+","~7,420","~310","~80","Montpelier, VT",
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
