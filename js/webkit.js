$(document).ready(function () {
    $('.piece').each(function () {
        if($(this).css("opacity") == 0){
            $(this).addClass("not-visible");
        }
    });
});

