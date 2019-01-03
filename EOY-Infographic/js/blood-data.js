
// Replace with Site/Condition names

let siteName = "Blood-Cancer.com";
let conditionName = "Blood Cancer";
let number = "32,539";
let advocates = "/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/BloodCancerDotCom/";
let insta = "https://www.instagram.com/bloodcancer_hu/";
let twitter = "https://twitter.com/BloodCancer_HU";
// Infographic Data Points

let data = [
    29,29,208,23,"18,000+","1,726",27,"12000+",47,6,25,"6,600+","~11,240","~310","~150","Sedona, AZ",620
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
