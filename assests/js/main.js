
//  STICKY HEADER MENU  
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//  Smooth Scroll --  By Click on Menu Items
  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 700,
});
// var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});



//  ANIMATION ON SCROLL --- For Product Section
  AOS.init({
    //offset: 400,
    //duraction: 2000
  });


// TYPEING SECTION
var typed = new Typed('.type', {
    strings: [
        'FOCUS. FAST FORWARD. FUTURE.',
        'WE ARE CREATIVE', 
        'WE LOVE DESIGN'
        ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});


//  READ MORE AND READ LESS BUTTON EVENT
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});


// OWL CAROUSEL 
$('.owl-carousel').owlCarousel({
  items: 5,
  loop:false,
  center: true,
  //stagePadding: 50,
  //margin: 10,
  smartSpeed:1000,
  responsive:{
      0: {
        items: 1,
        center: false,
      },
      400: {
          items: 1.08,
      },
      480: {
          items: 2,
      },
      767: {
          items: 2.9,
      },
      1262: {
          items: 4,
      }
    }
});


// TECH KITCHEN COLLAPSE

$("#menu").hide();

  $("#toggle").click(function(){

    $("#menu").slideToggle(500);

});

