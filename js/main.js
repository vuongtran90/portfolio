$( document ).ready(function() {
    $("#mobile-nav-button").click(function() {
        if($('body').hasClass('nav-shown')){
            $("body").removeClass("nav-shown");
            $(".mobile-nav").css("opacity","0")
            $(".mobile-nav").css("z-index","-1")
            $("body").css("overflow-y","visible")
        }
        else {
            $("body").addClass("nav-shown");
            $(".mobile-nav").css("opacity","1")
            $(".mobile-nav").css("z-index","5")
            $("body").css("overflow-y","hidden")
        }
    });
});