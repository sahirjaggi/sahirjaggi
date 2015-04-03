SC.initialize({
    client_id: '62151923af3f50e99c93da60cda3f99b'
});

$(document).ready(function () {
    SC.stream('/tracks/179746710', function (sound) {
        $('#red').mouseenter(function (e) {
            e.preventDefault();
            sound.play();
        });
        $('#red').mouseleave(function (e) {
            e.preventDefault();
            sound.pause();
        });
        $('#red-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });
    
    SC.stream('/tracks/179746792', function (sound) {
        $('#brown').mouseenter(function (e) {
            e.preventDefault();
            sound.play();
        });
        $('#brown').mouseleave(function (e) {
            e.preventDefault();
            sound.pause();
        });
        $('#brown-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });
    
    SC.stream('/tracks/179746842', function (sound) {
        $('#black').mouseenter(function (e) {
            e.preventDefault();
            sound.play();
        });
        $('#black').mouseleave(function (e) {
            e.preventDefault();
            sound.pause();
        });
        $('#black-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });
    
    SC.stream('/tracks/179746888', function (sound) {
        $('#blue').mouseenter(function (e) {
            e.preventDefault();
            sound.play();
        });
        $('#blue').mouseleave(function (e) {
            e.preventDefault();
            sound.pause();
        });
        $('#blue-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });

});