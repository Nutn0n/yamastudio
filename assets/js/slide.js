  $(".one").addClass("active");
  $(".").addClass("slide-hero-one");

var slideOne = function(){
  $(".").removeClass("slide-hero");
  $(".").addClass("slide-hero-one");
  $(".one").addClass("active");
  $(".two").removeClass("active");
  $(".three").removeClass("active");
  $(".four").removeClass("active");
}

var slideTwo = function(){
  $(".").addClass("slide-hero-two");
  $(".one").removeClass("active");
  $(".two").addClass("active");
  $(".three").removeClass("active");
  $(".four").removeClass("active");
}

var slideThree = function(){
  $(".").addClass("slide-hero-three");
  $(".one").removeClass("active");
  $(".two").removeClass("active");
  $(".three").addClass("active");
  $(".four").removeClass("active");
}

var slideFour = function(){
  $(".").addClass("slide-hero-four");
  $(".one").removeClass("active");
  $(".two").removeClass("active");
  $(".three").removeClass("active");
  $(".four").addClass("active");
}
