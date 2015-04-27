var Polynom = require ("./polynom"),
	Parser = require ("./parser"),
	Solver = require ("./solver"),
	arg = (function () {
		var argv = process.argv,
			noSpace = argv[2].replace(/[\s]+/g, ""),
			equal = noSpace.split(/=/);

		if (argv.length != 3) {
			console.log ("Error: Wrong number of arguments");
			process.exit(1);
		}

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

		return (noSpace);
	})(),

	p = new Polynom(arg);



p.reduce();
p.merge();
p.degreeMax();
console.log("Reduced form: " + p.goodStr);
console.log("Polynomial degree: " + p.degree);
// console.log(p.str);
// p.splitEqual();
// Parser.reduce(p);
// Parser.merge(p);
// console.log("Reduced form:", p.str, "= 0");
// console.log("Polynomial degree:", p.degree);
// console.log ("solution:", Solver.solve(p));*/
