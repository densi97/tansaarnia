---
---
$(document).ready(function(){
	const piecesEl = document.querySelector('.image-canvas');
    var options = {
        pieces: {rows: 12, columns: 20}
    };
    const piecesObj = new Pieces(piecesEl, options); 
    hideImage();
	// increase donations counter
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "{{ site.counter_hit }}");
    xhr.responseType = "json";
    xhr.onload = function() {
        var donations = this.response.value;
	    setTimeout(function(){
	    	showImage(donations - 1);
	    	$.each($('.piece'), function(index, value) {
		        value.style.width = (parseInt(value.style.width) - 1) + "px";
		        value.style.height -= (parseInt(value.style.height) - 1) + "px";
		        value.style.margin = "0.5px";
		    });	
	    }, 10);
	    setTimeout(function(){
			addPiece(donations);
	    }, 2000);
    }
    xhr.send();


    function hideImage() {
        piecesObj.animate({
            duration: 10,
            easing: 'linear',
            translateX: 0,
            translateY: 0,
            opacity: 0
        });
        console.log("image should be hidden");
    }

    function showImage(count) {
    	console.log(count);   
        var animatedPieces = piecesObj.pieces.slice(piecesObj.pieces.length - count, piecesObj.pieces.length);
        console.log(animatedPieces);
        piecesObj.animate({
            duration: 2000,
            easing: 'linear',
            targets: animatedPieces,
            translateX: 0,
            translateY: 0,
            opacity: 1
        });
    }

    function addPiece(count) {
    	var animatedPiece = piecesObj.pieces[(piecesObj.pieces.length - count)];
    	piecesObj.animate({
    		duration: 100,
    		easing: 'easeInQuint',
    		targets: animatedPiece,
    		translateX: (target, index) => {
                return target.dataset.column < piecesObj.getTotalColumns()/2 ? anime.random(50,100)+'px' : anime.random(-100,-50)+'px';
            },
            translateY: (target, index) => {
                return anime.random(-1000,-800)+'px';
            },
            opacity: 0
    	});
    	setTimeout(function(){
    		piecesObj.animate({
	    		duration: 5000,
	    		easing: 'easeInQuint',
	    		targets: animatedPiece,
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
    	}, 100)
    }
});