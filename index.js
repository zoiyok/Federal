function open_passage() {
    window.location.href="passage.html";
}
function open_passage_2021_27() {
    window.location.href="2021_27.html";
}
function open_2022_1_president() {
    window.location.href="2022_1_president.html";
}
function open_2022_2() {
    window.location.href="2022_2.html";
}
function open_2022_3() {
    window.location.href="2022_3.html";
}
function open_2022_4() {
    window.location.href="2022_4.html";
}
function open_2022_1_law() {
    window.location.href="2022_1_law.html";
}
function ShowHome() {
    window.location.href="index.html";
}

var tt = 40;
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > tt && window.screen.width > 768) {
        lplp.style.height = "50px";
        lplp.style.lineHeight = "50px";
        logoid.style.paddingBottom = "15px";
    } else if (t < tt && window.screen.width > 768) {
        lplp.style.lineHeight = "70px";
        lplp.style.height = "70px";
        logoid.style.paddingBottom = "20px";
    }
}
 
