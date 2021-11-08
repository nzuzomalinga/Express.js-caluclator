
let express = require("express");
let app = express();
let PORT = 8080;

app.get('/:num_1/:math_operator/:num_2', function(req,res, next) {
	
	const math_operator = req.params.math_operator
	const num_1 = parseInt(req.params.num_1);
	const num_2 = parseInt(req.params.num_2);

	const answer = calculate(num_1, math_operator, num_2);
	res.json(answer);
});

app.get("/", function(req, res, next){
	res.send("Do your math in the url address bar please :)")
});


app.use((err, req, res, next) => {
	res.status(400).send(err);
})

//Port Listener
app.listen(PORT, function(){
	console.log("Listening on PORT:" + PORT);
});














function calculate(num_1, math_operator, num_2) {
	switch(math_operator){
		case "a":
			return add(num_1, num_2);
		case "s":
			return subtract(num_1, num_2);
		case "m":
			return multiply(num_1, num_2);
		case "d":
			return divide(num_1, num_2);

		default:
			throw "Hey Darren, please enter a valid operator name this time!"
	}

	return answer;
}

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