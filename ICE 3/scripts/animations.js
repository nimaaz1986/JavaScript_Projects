
console.log("animations.js loaded")

function fadeInOutTo(){

    $('.red-box').fadeOut(2000);
    $('.red-box').fadeIn().fadeTo(1000, .25);

    // $('.red-box').fadeIn(1000);

    // $('.red-box').fadeTo(1000, .3);
    // $('.red-box').fadeToggle(2100);
    // $('.red-box').fadeToggle(2100);

}

function hideElement(){
    // toggle display
    $('.green-box').hide(1500);
    $('.green-box').show(1500);


     // sides up and down
    $('.green-box').slideUp(1500);
    $('.green-box').slideDown(1500);


    // toggles slide state
    $('.green-box').slideToggle(1500);
    $('.green-box').slideToggle(1500);
    
}


 function chainAnimations(){

    // $('.blue-box').fadeTo();
    // $('.green-box').delay(1000).fadeTo(1000, 0.5);
    // $('.red-box').delay(2000).fadeTo(1000,0.5).delay(1000).fadeTo(1000, 1.0).delay(1000).fadeOut();
    $('.red-box').fadeTo(1000, .25, function(){
        $('.green-box').fadeTo(1000, .25, function(){
            $('.blue-box').fadeTo(1000, .25);
        });
    });

 }
//hideElement();
//fadeInOutTo();

chainAnimations();

