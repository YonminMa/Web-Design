$(".txtb input").focus(function(){
    $(this).addClass("focus");
})
$(".txtb input").blur(function(){
    if($(this).val() == ''){ /* If there is a word, it will not fall */
        $(this).removeClass("focus");
    }
})