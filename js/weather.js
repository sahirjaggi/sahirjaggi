SC.initialize({
    client_id: '62151923af3f50e99c93da60cda3f99b'
});

$(document).ready(function () {

    setTime();
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&cnt=10", function (result) {
            var main = result.weather[0].main;
            var rise = result.sys.sunrise;
            var set = result.sys.sunset;
            setbg(main, rise, set);
            var city = result.name;
            var temp = result.main.temp;
            var tempF = Math.round(temp * (9 / 5) - 459.67);
            var tempC = Math.round(temp - 273.15);
            var des = result.weather[0].description;
            $("#city").html(city);
            $("#tempF").html(tempF);
            $("#tempC").html(tempC);
            $("#des").html(des);
        });
    });

    SC.stream('/tracks/137979079', function (sound) {
        sound.play();
    });

    function setbg(weather, rise, set) {
        if (weather == "Clouds" || weather == "clouds") {
            $('body').css('background-image', 'url(../imgs/drake/clouds.jpg)');
        }
        if (weather == "Rain" || weather == "rain") {
            $('body').css('background-image', 'url(../imgs/drake/rain.jpg)');
        }
        if (weather == "Snow" || weather == "snow") {
            $('body').css('background-image', 'url(../imgs/drake/snow.jpg)');
        }
        if (weather == "Storm" || weather == "storm") {
            $('body').css('background-image', 'url(../imgs/drake/storm.jpg)');
        } else {
            if (time > rise && time < set) {
            $('body').css('background-image', 'url(../imgs/drake/clear.jpg)');
            }
            else {
            $('body').css('background-image', 'url(../imgs/drake/night.jpg)');
            }
        }
    }

    function setTime() {
        var date = new Date();
        var time = date.getTime();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        document.getElementById('time').innerHTML = strTime;
    }

});