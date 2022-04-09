// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "1rem 1rem";
        document.getElementById("navbar").style.fontSize = "1.5rem";
        document.getElementById("navbar").style.backgroundColor = "#edf2f4ff";
        document.getElementById("nav-logo").style.width = "4rem";
        document.getElementById("nav-logo").style.height = "4rem";
        document.getElementById("nav-logo").style.borderBottomLeftRadius = "7rem";
        document.getElementById("nav-logo").style.borderBottomRightRadius = "7rem";
    } else {
        document.getElementById("navbar").style.padding = "2rem 1rem";
        document.getElementById("navbar").style.fontSize = "2rem";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("nav-logo").style.width = "5rem";
        document.getElementById("nav-logo").style.height = "5rem";
    }
}

// Owl Carousel initialize
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            750: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
});
