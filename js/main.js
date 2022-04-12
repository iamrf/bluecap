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
    $(".hero-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        rtl: true,
        dots: true,
    });
});

$(document).ready(function () {
    $(".offers__box__carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 5,
        loop: true,
        rtl: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            775: {
                items: 2,
            },
            1000: {
                items: 4,
                loop: true,
            },
            1200: {
                items: 5,
                loop: true,
            },
        },
    });
});

$(document).ready(function () {
    $(".blog-posts__box__carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 4,
        loop: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,
            },
            775: {
                items: 2,
            },
            1000: {
                items: 3,
                loop: true,
            },
            1200: {
                items: 4,
                loop: true,
            },
        },
    });
});
