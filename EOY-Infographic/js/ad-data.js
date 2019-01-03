
// Replace with Site/Condition names

let siteName = "AtopicDermatitis.net";
let conditionName = "AtopicDermatitis";
let number = "32,539";
let advocates = "/community/community-advocates";
let stories = "/stories";
let qa = "/q-and-a";
let fb = "https://www.facebook.com/AtopicDermatitisDotNet/";
let insta = "https://www.instagram.com/atopicdermatitis_hu/";
let twitter = "https://twitter.com/AtopicDerm_HU";
// Infographic Data Points

let data = [
    6,18,244,77,"18,000+","1,726",9,"26,000+",19,53,24,"4,900+","~11,800","~400","~350","Sedona, AZ"
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
