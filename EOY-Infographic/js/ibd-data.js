
// Replace with Site/Condition names

let siteName = "InflammatoryBowelDisease.net";
let conditionName = "Inflammatory Bowel Disease";
let number = "32,539";
let advocates = "/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/inflammatoryboweldiseasedotnet/";
let insta = "https://www.instagram.com/ibd_hu/";
let twitter = "https://twitter.com/IBD_HU";
// Infographic Data Points

let data = [
    6,20,401,76,"18,000+","1,726",36,"53,000+",10,1,58,"17,000+","~41,450","~650","~640","Atlantic City, NJ"
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
