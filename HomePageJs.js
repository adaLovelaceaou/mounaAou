var button = document.getElementById("menu");
var content = document.getElementById("nav");
button.onclick = function () {
    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}