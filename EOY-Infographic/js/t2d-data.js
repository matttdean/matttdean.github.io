
// Replace with Site/Condition names

let siteName = "Type2Diabetes.com";
let conditionName = "Type 2 Diabetes";
let number = "32,539";
let advocates = "/community/experts";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/Type2Diabetesdotcom/";
let insta = "https://www.instagram.com/type2diabetes_hu/";
let twitter = "https://twitter.com/T2D_HU";
// Infographic Data Points

let data = [
    4,21,403,84,"18,000+","1,726",11,"16,000+",32,10,26,"31,000+","~78,250","~320","~510","Boulder, CO"
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
