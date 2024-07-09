$(document).ready(function(){
    //JQuery code goes here
    // $("#currentYear").html(new Date().getFullYear());

    // $(".triplebar").click(function() {
    //     $(".mobileMenu").css({ 
    //         "transition": "all 0.5s cubic-bezier(0.5, 0, 0.5, 1)",
    //         "transition-timing-function":"cubic-bezier(0.5, 0, 0.5, 1)"
    //     });
    //     $(".mobileMenu").toggleClass("expanded");
    // });
    // $(".mobile .mobileMenu a").click(function() {
    //     $(".mobileMenu").removeClass("expanded");
    // });

    // $(".imgRotation").click(function(){ $(this).toggleClass("engaged"); }) // Zoom image when clicked

    setTimeout(function() { $('#landing').fadeOut('fast'); }, 1500); // splash page

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
    }

})
