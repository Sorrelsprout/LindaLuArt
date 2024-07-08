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

    $("#about").click(function(){ alert("🛠️ In progress! 🛠️"); });
    $("#contact").click(function(){ 
        $(".contactPopup").toggleClass("engaged");
    });
})
