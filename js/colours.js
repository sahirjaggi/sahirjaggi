SC.initialize({
    client_id: '62151923af3f50e99c93da60cda3f99b'
});

$(document).ready(function () {
    
    $('.pause').css('display', 'none');
    $('.restart').css('display', 'none');
    
    SC.stream('/tracks/179746710', function (sound) {
        $('#red-play').click(function (e) {
            e.preventDefault();
            sound.play();
            $('#red-play').css('display', 'none');
            $('#red-pause').css('display', 'initial');
            $('#red-restart').css('display', 'initial');
        });
        $('#red-pause').click(function (e) {
            e.preventDefault();
            sound.pause();
            $('#red-pause').css('display', 'none');
            $('#red-restart').css('display', 'none');
            $('#red-play').css('display', 'initial');
        });
        $('#red-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });

    SC.stream('/tracks/179746792', function (sound) {

        $('#brown-play').click(function (e) {
            e.preventDefault();
            sound.play();
            $('#brown-play').css('display', 'none');
            $('#brown-pause').css('display', 'initial');
            $('#brown-restart').css('display', 'initial');
        });
        $('#brown-pause').click(function (e) {
            e.preventDefault();
            sound.pause();
            $('#brown-pause').css('display', 'none');
            $('#brown-restart').css('display', 'none');
            $('#brown-play').css('display', 'initial');
        });
        $('#brown-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });

    SC.stream('/tracks/179746842', function (sound) {
        $('#black-play').click(function (e) {
            e.preventDefault();
            sound.play();
            $('#black-play').css('display', 'none');
            $('#black-pause').css('display', 'initial');
            $('#black-restart').css('display', 'initial');
        });
        $('#black-pause').click(function (e) {
            e.preventDefault();
            sound.pause();
            $('#black-pause').css('display', 'none');
            $('#black-restart').css('display', 'none');
            $('#black-play').css('display', 'initial');
        });
        $('#black-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });

    SC.stream('/tracks/179746888', function (sound) {
        $('#blue-play').click(function (e) {
            e.preventDefault();
            sound.play();
            $('#blue-play').css('display', 'none');
            $('#blue-pause').css('display', 'initial');
            $('#blue-restart').css('display', 'initial');
        });
        $('#blue-pause').click(function (e) {
            e.preventDefault();
            sound.pause();
            $('#blue-pause').css('display', 'none');
            $('#blue-restart').css('display', 'none');
            $('#blue-play').css('display', 'initial');
        });
        $('#blue-restart').click(function (e) {
            e.preventDefault();
            sound.stop();
            sound.start();
        });
    });

});