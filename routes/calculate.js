
	var number1,number2,output;


var add = function(req,res)
{
	number1 = req.param("number1");
	number2 = req.param("number2");
	output = (number1-0)+(number2-0);
	res.render("index",{output:output});
};

var sub = function(req,res)
{
	number1 = req.param("number1");
	number2 = req.param("number2");
	output = (number1-0)-(number2-0);
	res.render("index",{output:output});
};

var mult = function(req,res)
{
	number1 = req.param("number1");
	number2 = req.param("number2");
	output = (number1-0)*(number2-0);
	res.render("index",{output:output});
};

var div = function(req,res)
{
	number1 = req.param("number1");
	number2 = req.param("number2");
	if(number2==='0')
		{
		output = "Cannot divide by 0";
		res.render("index",{output:output});

		}
	else
		{
	output = (number1-0)/(number2-0);
	res.render("index",{output:output});
		}
};



exports.calculate = function(req,res)
{
	var operation = req.param("calculate");
	if(operation === "Addition")
		{
		add(req,res);
		}

	else if(operation === "Multiplication")
	{
	mult(req,res);
	}
	else if(operation === "Subtraction")
	{
		sub(req,res);
	}
	else if(operation === "Division")
	{
	div(req,res);
	}
	else
	{
		res.render("index",{output:"Invalid selection!"});
	}


};


exports.addition = add;
exports.subtract = sub;
exports.multiply = mult;
exports.divide = div;
