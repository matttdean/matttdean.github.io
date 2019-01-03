
// Replace with Site/Condition names

let siteName = "SkinCancer.net";
let conditionName = "Skin Cancer";
let number = "32,539";
let advocates = "/community/communityadvocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/skincancerdotnet/";
let insta = "https://www.instagram.com/skincancer_hu/";
let twitter = "https://twitter.com/SkinCancer_HU";
// Infographic Data Points

let data = [
    10,18,207,79,"18,000+","1,726",16,"21,000+",25,0,44,"4,700+","~10,210","~220","~210","Sedona, AZ"
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
