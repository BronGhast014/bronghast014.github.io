var slideId = [
    "slideshow1",
    "slideshow2",
    "slideshow3",
    "slideshow4",
    "slideshow5",
    "slideshow6",
    "slideshow7",
    "slideshow8",
    "slideshow9",
    "slideshow10",
    "slideshow11",
    "slideshow12",
    "slideshow13",
    "slideshow14",
    "slideshow15",
]
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ]

cycleSlides()

function cycleSlides() {
    for (var i = 0; i < slideId.length; i++) {
        showSlides(1, i);
    }
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    x[slideIndex[no] - 1].style.display = "block";
}