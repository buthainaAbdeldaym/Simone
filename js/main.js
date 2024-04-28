let aboutOffset = $('.about').offset().top;
let navHeight = $('nav').outerHeight();
$(window).scroll(function(){
    if($(window).scrollTop()>(aboutOffset-navHeight)){
        $('nav').css("backgroundColor","black");
        $('.back-to-top').fadeIn(500).css("display","flex");
    }
    else
    {
        $('nav').css("backgroundColor","transparent");
        $('.back-to-top').fadeOut(500);
    }
})
$('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0},1000)
})
var typed = new Typed('#element', {
    strings: ['Designer', 'Developer', 'Frelancer','Photographer'],
    typeSpeed: 50,
    backSpeed:50,
    loop:true
  });

