$(document).ready(function() {
    var progressBar1 = new ProgressBar.Circle('#progress-container-1', {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#389116',
        duration: 1400,
        trailWidth: 2,
        step: (state, bar) => {
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value + "%");
            }
        }
    });
    progressBar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar1.text.style.fontSize = '4rem';
    progressBar1.text.style.color = "#FFF";
    progressBar1.animate(parseFloat(window.donations / 31000).toFixed(2));
    $('#phase1').text("Stand: " + window.donations + "€ / 31000€");

    var progressBar2 = new ProgressBar.Circle('#progress-container-2', {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#389116',
        duration: 1400,
        trailWidth: 2,
        step: (state, bar) => {
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value + "%");
            }
        }
    });
    progressBar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar2.text.style.fontSize = '4rem';
    progressBar2.text.style.color = "#FFF";
    progressBar2.animate(0);

    var progressBar3 = new ProgressBar.Circle('#progress-container-3', {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#389116',
        duration: 1400,
        trailWidth: 2,
        step: (state, bar) => {
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value + "%");
            }
        }
    });
    progressBar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar3.text.style.fontSize = '4rem';
    progressBar3.text.style.color = "#FFF";
    progressBar3.animate(0);

    var progressBar4 = new ProgressBar.Circle('#progress-container-4', {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#389116',
        duration: 1400,
        trailWidth: 2,
        step: (state, bar) => {
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value + "%");
            }
        }
    });
    progressBar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar4.text.style.fontSize = '4rem';
    progressBar4.text.style.color = "#FFF";
    progressBar4.animate(0);

    var progressBar5 = new ProgressBar.Circle('#progress-container-5', {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#389116',
        duration: 1400,
        trailWidth: 2,
        step: (state, bar) => {
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value + "%");
            }
        }
    });
    progressBar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar5.text.style.fontSize = '4rem';
    progressBar5.text.style.color = "#FFF";
    progressBar5.animate(0);
});