let button = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
button.style.display = "block";
} else {
button.style.display = "none";
}
}

// On click, return to top
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge and Opera
}
