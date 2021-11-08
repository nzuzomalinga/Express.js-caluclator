
let express = require("express");
let app = express();
let PORT = 8080;

app.get('/:math_operator/:num_1/:num_2', function(req,res){
	
	let math_operator = req.params.math_operator
	let num_1 = parseInt(req.params.num_1);
	let num_2 = parseInt(req.params.num_2);
	let answer;

    function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	switch(math_operator){
		case "+":
		answer = add(num_1, num_2);
		break;

		case "-":
		answer = subtract(num_1, num_2);
		break;

		case "x":
		answer = multiply(num_1, num_2);
		break;

		case "/":
		answer = divide(num_1, num_2);
		break;

		default:
		answer = "Hey Darren, please enter a valid operator name this time!"
	}
	res.json(answer);
});

app.get("/", function(req, res){
	res.send("Do your math in the url address bar please :)")
});

//Port Listener
app.listen(PORT, function(){
	console.log("Listening on PORT:" + PORT);
});