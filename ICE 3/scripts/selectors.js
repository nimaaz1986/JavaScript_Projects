// ICE 3 - Nima Azadikhah
// Date : 2/3/2023
console.log('selectors.js loaded')


function highlight(element){
    element.css('backgroud-color', "fcf30040" )
}

function cssSelectors(){

    $('p').css('backgroud-color','#2a9d8f');
    $('.red-box').css('backgroud-color','#2a9d8f');
    $('#list').css('font-size', '40px');


    // $(h1,h2).css('color', 'red');
    $('li:even').css('backgroud-color','#fcf30040');


}

function traversingTheDOM(){
    //$('#list').prev().css('backgroud-color','#fcf30040')
   // $('#list').next().css('backgroud-color','#fcf30040')
   //$('#list').prev().next().css('background-color', '#3a86ff');


   $('#list').find('li').css('backgroud-color','#3a86ff');
   // traverse the way up through all parent, grandparents, etc
   $('#list').parents('div').css('font-size','24px');
   // travrse up 1 level
   $('#list').parent('div').css('font-size','24px');
    // $('element').siblings('div > .className')
}

function filtering(){

    //$('#list'). find('li').fiter(':even').css('backgroud-color', '#3a56ff');

    $('#list').find('li').filter(function (index)
    {
        return index % 2 == 0;
    }).css("background-color", "red");
}

function addingReplacingRemoving(){

    //$("ul ul:first").css("color", "red");
     $("ul ul:first").append($("<li>I am going to be the last Item of the first sub-list!</li>"));

     $("<li>Now I am the last element of the first sub-list!!!</li>").appendTo($("ul ul:first"));
    
    // Prepend(), prependTo()
    $("ul ul:first").prepend($("<li>I am going to be the first Item of the first sub-list!</li>"));

    $('.red-box').after("<div class='red-box'>This is a new red box!</div>");

    let newText = 'Last night, Darth Vader came Down from planet Vulcan.';

    $('li').replaceWith(`<li>${newText}</li>`);

    $("<div class='green-box'>Created green box!</div>").replaceAll(".red-box");

    //  avoid
    //$('li').remove();

    // use detach instead
    let detachedLIs = $('li').detach();
    $('body').append(detachedLIs);
}

// cssSelectors();
//traversingTheDOM();
//filtering();
//addingReplacingRemoving();

