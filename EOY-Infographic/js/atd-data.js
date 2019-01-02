
// Replace with Site/Condition names

let siteName = "AtopicDermatitis.net";
let conditionName = "Atopic Dermatitis";
let number = 345;

// Infographic Data Points

let data = [
    6,18,244,77,"18,000+","1,726",9,"26,000+",19,53,24,"4,900+","~11,800","~400","~350","Sedona, AZ",NA
];

let conditions = document.getElementsByClassName('condition');
let sites = document.getElementsByClassName('site');
document.getElementById('number').innerHTML = number;

[].slice.call(sites).forEach(function (site) {
    site.innerHTML = siteName;
});

[].slice.call(conditions).forEach(function (condition) {
    condition.innerHTML = conditionName;
});

for (i=0; i<data.length; i++) {
    document.getElementById("dataPoint" + i).innerHTML = data[i];
}
