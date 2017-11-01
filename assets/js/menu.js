var menuTrigger = function() {
$( ".menu" ).toggleClass( "unactive" );
}

var removeMenu = function(){
  $(".menu").addClass("unactive");
}

$(window).scroll(function() {
        $(".menu").addClass("unactive");
});
