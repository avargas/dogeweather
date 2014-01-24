//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

        var suchcolors = [ 
            "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", 
            "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1",
            "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }
        
        //  much array
        //var tings = $.extend(['doge', 'shibe', 'excite', 'impress', 'skill', 'warn'], tings);
        
        var r = function(arr) {
            if(!arr) arr = tings; return arr[Math.floor(Math.random() * arr.length)];
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

        console.log(suchicon);
        console.log(suchtemp + "temp");
        if (suchtemp <= -30)
        {
            var sofirst = "winter";
            var sosecond = "freeze";
            var sothird = "polar vortex";
            var sofourth = "ridiculous";
            var sofifth = "hibernate";
            var sosixth = "climate change";
        }
        else if (suchtemp > -30 && suchtemp <= -15)
        {
            var sofirst = "cold";
            var sosecond = "freeze";
            var sothird = "shiver";
            var sofourth = "ice";
            var sofifth = "yuck";
            var sosixth = "climate change";
        }
        else if (suchtemp > -15 && suchtemp <= -7)
        {
            var sofirst = "icy";
            var sosecond = "winter";
            var sothird = "chill";
            var sofourth = "crisp";
            var sofifth = "brrrrr";
            var sosixth = "cool"
        }
        else if (suchtemp > -7 && suchtemp <= 0)
        {
            var sofirst = "icy";
            var sosecond = "frost";
            var sothird = "numb";
            var sofourth = "shiver";
            var sofifth = "brrr";
            var sosixth = "chilly";
        }
        else if (suchtemp > 0 && suchtemp <= 10)
        {
            var sofirst = "chilly";
            var sosecond = "concern";
            var sothird = "coat";
            var sofourth = "frosty";
            var sofifth = "uh oh";
            var sosixth = "brrrr";
        }
        else if (suchtemp > 10 && suchtemp <= 20)
        {
            var sofirst = "moderate";
            var sosecond = "mild";
            var sothird = "okay";
            var sofourth = "medium";
            var sofifth = "cool";
            var sosixth = "whatever";
        }
        else if (suchtemp > 20 && suchtemp <= 30)
        {
            var sofirst = "heat";
            var sosecond = "warmth";
            var sothird = "climate";
            var sofourth = "sweating";
            var sofifth = "balmy";
            var sosixth = "nice day";
        }
        else if (suchtemp > 30)
        {
            var sofirst = "boiling";
            var sosecond = "bake";
            var sothird = "melt";
            var sofourth = "dying";
            var sofifth = "suffer";
            var sosixth = "global warming";
        }
        else
        {
            var sofirst = "concern";
            var sosecond = "climate";
            var sothird = "degrees";
            var sofourth = "shrug";
            var sofifth = "wow";
            var sosixth = "celcius";
        }
        

        console.log(suchtemp);

        //Clouds
        if(suchicon=="01d") {
            tings = $.extend(['clear', 'sky', 'lovely', 'amaze', 'wonderful','sun', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="01n") {
            tings = $.extend(['night', 'amaze', 'clear', 'lovely', 'wonderful', 'sky', 'stars', 'moon', 'dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="02d") {
            tings = $.extend(['cloud', 'okay', 'cumulus', 'amaze', 'sky', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="02n") {
            tings = $.extend(['dark', 'cumulus', 'amaze', 'cloud', 'star', 'space', 'after dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="03d") {
            tings = $.extend(['cloudy', 'scattered', 'overcast', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="03n") {
            tings = $.extend(['cloud', 'scattered', 'clear sky', 'night time', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="04d" || suchicon=="04n") {
            tings = $.extend(['gloomy', 'clouds', 'shady', 'boring', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="09d") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="09n") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="10d") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="10n") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'scary', 'dark cloud', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="11d") {
            tings = $.extend(['thunder', 'loud', 'scare', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="11n") {
            tings = $.extend(['scary night', 'thunder', 'loud', 'crash', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="13d") {
            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="13n") {
            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="50d") {
            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbility', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="50n") {
            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbility', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        else {
        var dogefix = [
            'wow', 'such weather', 'much doge'
        ];
        }
        var dogefix = [
            'so wow', 'such ' + r(),
            'very ' + r(), 'much ' + r(),
            'so ' + r(),
            'wow'
        ];
        
        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });
        
        $('img').each(function() {
            $(this).attr('src', 'https://images.encyclopediadramatica.es/3/3e/Doge_full_image.jpg');
        });
     
        setInterval(function() {
            
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *100 + '%;top: ' + Math.random()  *100 + '%;font-size: ' + Math.max(20, (Math.random() * 50 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(dogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 2500);
    };
})(jQuery);