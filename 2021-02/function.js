
// Merger - Merge Your Qrcode Together. Even Quicker.
// User docs: https://merger.justhx.com/#/
// Released under GNU General Public License v3.0. Open source at https://github.com/hifocus/merger.
// Author @hifocus (https://github.com/hifocus), @LF112 (https://github.com/LF112)
// Copyright reservation is required.

var client;
var selected;
var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas

profile_error = 0;

if (typeof profile === "undefined" || profile === null || profile === "") {
  profile_error = 1;
}
else if (profile.includes('@') && !profile.includes('http')) { // Verify if value entered is a email
  var email = profile.split("@")
  var suffix = email[1];
  
}
else {
  profile_url = profile_lg = profile; // If email is not entered, use whatever value entered (presumably a url)
}

if (profile_error > 0) {
  profile_url = profile_lg = 'https://ae01.alicdn.com/kf/Udaba9d58fade4a3e921c0ceba62db2b7n.png'; // Set a default avatar in case profile image is undefined
}

document.getElementById("i").style.background = "url('" + profile_lg + "') no-repeat center/cover"; // Set center picture
$("#favicon").attr("href", profile_url); // Set page icon


var userLang = navigator.language || navigator.userLanguage;
if (multilingual !== false) {
  if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    if (typeof myname_hans === "string") {
      var myname = myname_hans;
    }
  }
}

// Add multilingual suppport
if (multilingual === false) {
  var finaltitle = title;
}
else {
  if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    // detect browser langauge, simplified chinese only
    document.write("<style>body { font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', sans-serif; }</style>");
    
    document.title = 'NAS引导页';
    
    var finaltitle = "去哪？干啥？和谁？";
    var finalsub = "谢绝bot，这里啥也没有";
    
  }

}

// Fill in tile and subtitle
document.getElementById("name").innerHTML = finaltitle;
document.getElementById("description").innerHTML = finalsub;
