$(document).ready(function(){
    //JQuery code goes here
    // $("#currentYear").html(new Date().getFullYear());

    // NAV -----------------------------------------------------------------------------------

    $(".triplebar").click(function() {
        $(".mobileMenu").css({ 
            "transition": "all 0.5s cubic-bezier(0.5, 0, 0.5, 1)",
            "transition-timing-function":"cubic-bezier(0.5, 0, 0.5, 1)"
        });
        $(".mobileMenu").toggleClass("expanded");
    });

    // SPLASH PAGE ---------------------------------------------------------------------------

    setTimeout(function() { $('#landing').fadeOut('fast'); }, 1500); // splash page

    // ZOOM IMG ------------------------------------------------------------------------------

    $(".featuredImage").click(function(){  // Zoom image when clicked
        $(this).toggleClass("engaged");
        $(this).parent().toggleClass("fullScreenImg");
    });

    // NAV LINKS -----------------------------------------------------------------------------

    $("#about").click(function(){ 
        removeNavLinksAll();
        $("#navlinksPopup").addClass("engaged");
        $("#navlinksPopup").addClass("about");
    });
    $("#contact").click(function(){ 
        removeNavLinksAll();
        $("#navlinksPopup").addClass("engaged");
        $("#navlinksPopup").addClass("contact");
    });

    $("#navlinksPopup").on("click",function(e){
        if (e.target.id !== 'navlinksPopup') return;
        $("#navlinksPopup").removeClass("engaged");
        removeNavLinksAll();
    })

    function removeNavLinksAll() {
        $("#navlinksPopup").removeClass("about");
        $("#navlinksPopup").removeClass("contact");
        commissionReset();
    }

    // GALLERY NAVIGATION ----------------------------------------------------------------------

    // Using image selectors
    let imageSelectors = document.querySelectorAll(".imageSelector");
    imageSelectors.forEach(function (el) {
        el.addEventListener("click", function(){
            el.parentElement.querySelectorAll(".imageSelector").forEach(function (image) {
                image.classList.remove("current");
            })
            el.classList.add("current");
            let featuredImage = el.parentElement.parentElement.querySelector(".featuredImage");
            // let AAA = "url('./images/" + el.getAttribute('data-fileName') + "')";

            let src = "./images/" + el.getAttribute('data-fileName');
            let str = 'url("' + src + '")';
            featuredImage.style.backgroundImage = str;
            console.log(str);
        });
    });

    // Using arrows
    let galleryToggles = document.querySelectorAll(".imageController");
    let galleryTogglePrev = document.querySelectorAll(".imageController .prev");
    let galleryToggleNext = document.querySelectorAll(".imageController .next");

    galleryTogglePrev.forEach(function (el) {
        el.addEventListener("click", function(){ navigateGallery(el, -1); });
    });
    galleryToggleNext.forEach(function (el) {
        el.addEventListener("click", function(){ navigateGallery(el, 1); });
    });

    function navigateGallery(e, direction) {
        let currentImageSelector = e.parentElement;
        let currentGallery = currentImageSelector.parentElement;
        let currentImagePosition = currentGallery.querySelector(".imageSelector.current");
        let allImages = currentGallery.querySelectorAll(".imageSelector");

        if(direction === 1) { // move forwards
            let targetNext = currentImagePosition.nextElementSibling;
            let firstImage = allImages[0];
            if(typeof targetNext !== "undefined" && typeof targetNext !== null) {
                if (!targetNext.classList.contains("imageSelector")) {
                    // Next image unavailable, loop back to start
                    navGal(firstImage);
                } else { navGal(targetNext); }
            }
        }

        if(direction === -1) { // move backwards
            let targetPrev = currentImagePosition.previousElementSibling;
            let lastImage = allImages[allImages.length - 1];
            if(typeof targetPrev !== "undefined" && typeof targetPrev !== null) {
                if (!targetPrev.classList.contains("imageSelector")) {
                    // previous image unavailable, loop to last image
                    navGal(lastImage);
                } else { navGal(targetPrev); }
            }
        }

        function navGal(targetType) {
            currentGallery.querySelectorAll(".imageSelector").forEach(function (image) {
                image.classList.remove("current");
            })
            targetType.classList.add("current");
            let featuredImage = currentGallery.querySelector(".featuredImage");
            let src = "./images/" + targetType.getAttribute('data-fileName');
            let str = 'url("' + src + '")';
            featuredImage.style.backgroundImage = str;
        }
    }

    // COMISSION INFO --------------------------------------------------------------------------

    $(".commissionInfoToggle").click(function(){ $(this).parent().parent().toggleClass("showCommissionInfo"); });
    $("#commissionInfoButton").click(function(){ $(this).parent().parent().removeClass("showCommissionInfo"); });

    function commissionReset() {
        $(".contactContent").removeClass("showCommissionInfo");
        // $(".commissionInfo").scrollTop = 0; //TODO: NOT WORKING
    }

})
