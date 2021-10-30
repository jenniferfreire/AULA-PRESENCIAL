var meuvideo = document.getElementById("video1");
function grande() {
    // request -> tela cheia
    meuvideo.requestFullscreen();
}

function volume_mais() {
    var volume_qtde = meuvideo.volume;
    if(volume_qtde == 1) {
        alert("Volume já está no máximo");
    } else {
        meuvideo.volume += 0.1;
    }
}

function volume_menos() {
    var volume_qtde = meuvideo.volume;
    if (volume_qtde <= 0.2) {
        alert("Volume já está no mínimo");
    } else {
        meuvideo.volume -= 0.1;
    }
}

function volume_mute() {
    var but = document.getElementById("som");
    if (meuvideo.muted) {
        meuvideo.muted = false;
        but.innerHTML = "&nbsp;Mudo&nbsp;";
    } else {
        but.innerHTML = "&nbsp;Som;&nbsp";
        meuvideo.muted = true;
    }
}

/*function play_pause = () => {
    var but = document.getElementById("play_pause");
    if(meuvideo.play_paused) {
        meuvideo.play();
        but.innerHTML = "class='btn btn-primary'"
        but.innerHTML = "&nbsp;PAUSE;&nbsp";
    } else {
        meuvideo.pause();
        but.innerHTML = "&nbsp;PLAY;&nbsp";
    }
}*/

var changesize = (w,h) => {
    meuvideo.width = w;
    meuvideo.height = h;
}

