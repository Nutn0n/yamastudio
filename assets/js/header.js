$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 700) {
        $("header").addClass("black");
    } else {
        $("header").removeClass("black");
    }
});
