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

    $(".product-carousel__box__carousel__nav").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 5,
        loop: false,
        rtl: true,
        nav: false,
        dots: false,
        navText: ['<i class="fa-solid fa-angle-right fa-2x"></i>', '<i class="fa-solid fa-angle-left fa-2x"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            775: {
                items: 2,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    $(".product-carousel__box__carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 5,
        loop: false,
        rewind: true,
        rtl: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            775: {
                items: 2,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    $(".blog-carousel__body__carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 4,
        loop: true,
        rewind: false,
        rtl: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            775: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });
});

// Google Map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(36.55820215309203, 52.690926418338194),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// ***  Modal    ***
// Get the modal
var modal = document.getElementById("signin-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Modal Tabulator page
function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("signin-modal__modal-page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
}

// Toggle Show Button
function toggleShow() {
    var x = document.getElementById("basket-list");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
