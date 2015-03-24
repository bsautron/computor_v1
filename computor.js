var Polynom = require ("./polynom"),
	Parser = require ("./parser");

var p = new Polynom(process.argv[2]);
p.splitEqual();
Parser.rediuceEachExpr(p);
Parser.merge(p);
console.log("Reduced form:", p.str, "= 0");
console.log("Polynomial degree:", p.degree);
