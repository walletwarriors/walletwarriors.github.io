$(".weeklyClock").countdown("2018/01/07", function(event) {
$(this).text(
  event.strftime('%D days %H:%M:%S')
);
});

$("#biweeklyClock").countdown("2018/01/14", function(event) {
$(this).text(
  event.strftime('%D days %H:%M:%S')
);
});

$("#monthlyClock").countdown("2018/01/28", function(event) {
$(this).text(
  event.strftime('%D days %H:%M:%S')
);
});

	function clanCheck5(input) {
		if (input.value === "walmart") {
			document.getElementById('submit5').disabled = false;
			document.getElementById('invalid5').innerHTML = "";
		} else {
			document.getElementById('submit5').disabled = true;
			document.getElementById('invalid5').innerHTML = "<font color=red>&nbsp&nbspInvalid clan code.";
		}
	};

	function clanCheck10(input) {
		if (input.value === "walmart") {
			document.getElementById('submit10').disabled = false;
			document.getElementById('invalid10').innerHTML = "";
		} else {
			document.getElementById('submit10').disabled = true;
			document.getElementById('invalid10').innerHTML = "<font color=red>&nbsp&nbspInvalid clan code.";
		}
	};

	function clanCheck25(input) {
		if (input.value === "walmart") {
			document.getElementById('submit25').disabled = false;
			document.getElementById('invalid25').innerHTML = "";
		} else {
			document.getElementById('submit25').disabled = true;
			document.getElementById('invalid25').innerHTML = "<font color=red>&nbsp&nbspInvalid clan code.";
		}
	};