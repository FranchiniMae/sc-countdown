//Symphony Commerce Coding Challenge 
//Franchini Mercado 

$(document).ready(function() {

	function countdown(time) {
		//calculate times
		var t = Date.parse(time) - Date.parse(new Date());
		var secs = Math.floor((t/1000) % 60);
		var mins = Math.floor((t/1000/60) % 60);
		var hrs = Math.floor((t/(1000 * 60 * 60)) % 24);
		var days = Math.floor(t/(1000 * 60 * 60 * 24));
		return {
			'days': days,
			'hours': hrs,
			'minutes': mins,
			'seconds': secs,
			'timeRemaining': t
		};
	}

	function startTimer(time) {
		var timer = $('#timer');
		var daysDiv = $('.days');
		var hrsDiv = $('.hours');
		var minsDiv = $('.minutes');
		var secsDiv = $('.seconds');

		function calcTime() {
			//set div text to appropriate time
			var t = countdown(time);
			daysDiv.html(t.days);
			hrsDiv.html(('0' + t.hours).slice(-2));
			minsDiv.html(('0' + t.minutes).slice(-2));
			secsDiv.html(('0' + t.seconds).slice(-2));

			//when 5 secs left, change text color to red
			if (t.timeRemaining == 5) {
				secsDiv.css("color", "red");
				$('.seclabels').css("color", "red");
			//when time is up, alert user
			} else if (t.timeRemaining <= 0) {
				clearInterval(timeinterval);
				alert('Happy New Year!');
			}
		}

		calcTime();
		var timeinterval = setInterval(calcTime, 1000);
	}

	//set date for end of year
	var targetDate = new Date(2017, 0, 1);
	startTimer(targetDate);
	
});