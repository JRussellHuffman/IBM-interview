function clickReward() {
	$("div.reward").click(function(){
		var title = $(this).html();
		$("div.reward").css({
			"border-right" : "1px solid black"
		})
		$(this).css({
			"border-right" : "none"
		})
		$("span.earn").html(title)

	var money = $("input.money").val()
	var moneyDouble = $("input.moneyDouble").val()

	var standardOutput = calcMiles(money, title, 1);
	var doubleOutput = calcMiles(moneyDouble, title, 2);

	$('span.standard-result').text(Math.floor(standardOutput) + " miles");

	$('span.double-result').text(Math.floor(doubleOutput) + " miles");


	})
}

function getKey() {
	$('input.money').keyup(function () {
		var type = $("span.earn").html()
		var output = calcMiles($(this).val(), type, 1);		
	  	$('span.standard-result').text(Math.floor(output) + " miles");
	});
}

function calcMiles (input, type, multiplier) {
	//var input = $(this).val();
	var parsedInput = parseInt(input)
	var output = 0;

	if (type == "flights") {
		output = parsedInput * 2;
	} else if (type == "travel") {
		output = parsedInput / 2;
	} else if (type == "shopping") {
		output = parsedInput / 4;
	} else if (type == "dining") {
		output = parsedInput / 4;
	} else if (type == "credit") {
		output = parsedInput / 3;
	} else if (type == "other stuff") {
		output = parsedInput / 2;
	}

	output = output || 0;

	return output * multiplier;
}

function getKeyDouble() {
	$('input.moneyDouble').keyup(function () {
		var type = $("span.earn").html()
		var output = calcMiles($(this).val(), type, 2);	
	  	$('span.double-result').text(Math.floor(output) + " miles");
	});
}

function clickRedeem() {
	$("div.redeem").click(function(){
		var title = $(this).html();
		$("div.redeem").css({
			"border-right" : "1px solid black"
		})
		$(this).css({
			"border-right" : "none"
		})
		$("span.use").html(title)
	})
}

getKeyDouble();
getKey();
clickReward();
clickRedeem();