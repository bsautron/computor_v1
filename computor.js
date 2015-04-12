function cleanArray (array) {
	var n = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] != " ") n.push (array[i]);
		else if (i == 0) n.push (array[i])
	}	
	return (n);
}

var Polynom = require ("./polynom"),
	Parser = require ("./parser"),
	Solver = require ("./solver"),

	arg = (function () {
		var argv = process.argv;

		if (argv.length != 3) {
			console.log ("Error: Wrong number of arguments");
			process.exit(1);
		}
	
		var test = argv[2].split(/[\+\-=]/g),
			signs = argv[2].match(/[\+\-=]/g);

		var finale = [];
		for (var i = 0; i < test.length; i++) {
			if (isNaN(test[i])) finale.push (test[i]);
			else if (!isNaN(test[i]) && test[i].trim().length != 0) {
				finale.push (test[i] + " * X^0")
			}
			if (signs[i]) finale.push (signs[i]);
		}
		return finale.join(" ");
	})(),

	p = new Polynom(arg);
	
p.splitEqual();
Parser.reduce(p);
Parser.merge(p);
console.log("Reduced form:", p.str, "= 0");
console.log("Polynomial degree:", p.degree);
console.log ("solution:", Solver.solve(p));