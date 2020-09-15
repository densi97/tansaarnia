$(document).ready(function(){
	const piecesEl = document.querySelector('.pieces');
	const piecesObj = new Pieces(piecesEl, { pieces: {rows: 56, columns: 48}, piecesSpacing: 1});

	const effect = () => piecesObj.animate({
		duration: 5000,
		delay: (t,i) => {
			const elBounds = piecesEl.getBoundingClientRect();
			const x1 = elBounds.left + elBounds.width/2;
			const y1 = elBounds.top + elBounds.height/2;
			const tBounds = t.getBoundingClientRect();
			const x2 = tBounds.left + tBounds.width/2;
			const y2 = tBounds.top + tBounds.height/2;
			const dist = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
			const maxDist = Math.sqrt(Math.pow(elBounds.left-x1,2) + Math.pow(elBounds.top-y1,2));
			const maxDelay = 300;

			t.dataset.centerx = x2;
			t.dataset.centery = y2;

			return -1*maxDelay/maxDist*dist + maxDelay;
		},
		easing: [0.1,1,0,1],
		translateX: (t,i) => { 
			return t.dataset.column < piecesObj.getTotalColumns()/2 ? anime.random(-400,0) : anime.random(0,400);
		},
		translateY: (t,i) => { 
			return t.dataset.row < piecesObj.getTotalRows()/2 ? anime.random(-400,0) : anime.random(0,400);
		},
		opacity: 0.2
	});
	effect();
});