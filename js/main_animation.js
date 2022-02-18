window.donations = "11.134";
$(document).ready(function() {
    $('#donation-counter').text(window.donations + " €");
});
/*
$(document).ready(function(){
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    function setCounter() {
        $('#donation-counter').text(window.donations + " €");
    }

    function hideImage() {
        piecesObj.animate({
            duration: 1,
            translateX: (target, index) => {
                return target.dataset.column < piecesObj.getTotalColumns()/2 ? anime.random(50,100)+'px' : anime.random(-100,-50)+'px';
            },
            translateY: (target, index) => {
                return anime.random(-1000,-800)+'px';
            },
            opacity: 0
        });
    }

    function showImage(count) {   
        var animatedPieces = piecesObj.pieces.slice(piecesObj.pieces.length - count, piecesObj.pieces.length);
        piecesObj.animate({
            duration: 5000,
            easing: 'easeInQuint',
            targets: animatedPieces,
            delay: (target, length, index) => {
                return (length-index-1)*40 + 150;
            },
            translateX: 0,
            translateY: 0,
            rotateZ: () => {
                return [anime.random(-45,45),0];
            },
            opacity: 1
        });
        setTimeout(function () {var c = 0;
            $('.piece').each(function () {
                if($(this).css("opacity") == 0) {
                    $(this).addClass("not-visible");
                }
            });
        }, 5000);
    }
    
    setCounter();
    const piecesEl = document.querySelector('.image-canvas');
    var options = {
        pieces: {rows: 12, columns: 20}
    };
    const piecesObj = new Pieces(piecesEl, options); 
    hideImage();
    
    setTimeout(function(){
        showImage(Math.floor(window.donations / 500));
        $.each($('.piece'), function(index, value) {
        value.style.width = (parseInt(value.style.width) - 1) + "px";
        value.style.height -= (parseInt(value.style.height) - 1) + "px";
        value.style.margin = "0.5px";
        });
    }, 500);
});
*/
