
// Replace with Site/Condition names

let siteName = "COPD.net";
let conditionName = "COPD";
let number = "32,539";
let advocates = "/community/experts/";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/copddotnet/";
// let insta = "";
let twitter = "https://twitter.com/COPD_hu";
// Infographic Data Points

let data = [
    3,14,276,73,"18,000+","1,726",45,"35,000+",14,53,144,"56,000+","~39,040","~500","Atlantic City, NJ"
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;
document.getElementById('advocates').href = 'https://' + siteName + advocates;
document.getElementById('stories').href = 'https://' + siteName + stories;
document.getElementById('qa').href = 'https://' + siteName + qa;
document.getElementById('fb-link').href = fb;
// document.getElementById('insta-link').href = insta;
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
