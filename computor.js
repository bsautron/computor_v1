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

		var noSpace = argv[2].replace(/[\s]+/g, ""),
			equal = noSpace.split(/=/);


		if (equal[0][0] != "-" && equal[0][0] != "+")
			equal[0] = "+" + equal[0];
		if (equal[1][0] != "-" && equal[1][0] != "+")
			equal[1] = "+" + equal[1];

		equal[1] = equal[1].replace(/\+/g, "moin")
							.replace(/\-/g, "plus")
							.replace(/moin/g, "-")
							.replace(/plus/g, "+");

		noSpace = equal.join("") + "=0";
		noSpace = noSpace.replace(/\+X/g, "+1X")
							.replace(/\-X/g, "-1X")
							.replace(/X\^/g, "x^")
							.replace(/X/g, "x^1")
							.replace(/x/g, "X");
		// console.log(noSpace);
		
		// var test = noSpace.split(/[\+\-=]/g).filter(notNull),
		// 	signs = noSpace.match(/[\+\-=]/g);

		// console.log(test);
		// console.log(signs);

		// var finale = [];
		// for (var i = 0; i < test.length; i++) {
		// 	if (isNaN(test[i])) 
		// 		finale.push (test[i]);
		// 	else if (!isNaN(test[i]) && test[i].trim().length != 0) {
		// 		finale.push (test[i] + " * X^0")
		// 	}
		// 	if (signs[i])
		// 		finale.push(signs[i]);
		// }
		// return finale.join(" ");
		return (noSpace);
	})(),

	p = new Polynom(arg);

p.reduce();
p.merge();
// console.log(p.str);
// p.splitEqual();
// Parser.reduce(p);
// Parser.merge(p);
// console.log("Reduced form:", p.str, "= 0");
// console.log("Polynomial degree:", p.degree);
// console.log ("solution:", Solver.solve(p));*/