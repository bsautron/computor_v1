function Polynom (str) {
	this.str = str;
	this.goodStr;
	this.degree = 0;
	this.solution = {
		"x0" : "",
		"x1" : "",
		"x2" : "",
	};
	this.coeff = {
		"a" : 0,
		"b" : 0,
		"c" : 0,
	}
}

Polynom.prototype.reduce = function () {
	var elem = this.str.split(/[\+\-=]/g),
		signe = this.str.match(/[\-\+=]/g);
	
	elem.shift();

	for (i = 0; elem[i]; i++) {
		var puiss = elem[i].match(/[\^][0-9]+/g),
			noPuiss = elem[i].replace(/[\^][0-9]+/g, "")
								.replace(/X/g, "")
								.replace(/\*$/, "")
								.split(/\*/g),
			nn = 1;
			
		for (j = 0; noPuiss[j]; j++) {
			nn *= noPuiss[j];
		}
		noPuiss = nn;
		

		if (puiss) {
			var pp = 0;
			for (j = 0; puiss[j]; j++) {
				puiss[j] = puiss[j].replace(/\^/, "");
				pp += parseFloat(puiss[j]);
			}
			puiss = pp.toString();
		}
		else
			puiss = "0";
		elem[i] = signe[i] + noPuiss + "X^"  + puiss;
	}

	this.str = elem.join("");
}


Polynom.prototype.merge = function () {
	var array = this.str.split(/[\+\-=]/g),
		signe = this.str.match(/[\+\-=]/g),
		maxDegree = 0,
		poly = [],
		realPoly= [];
	array.shift();
	
	for (i = 0; array[i]; i++) {
		if (array[i].split(/X\^/)[1] > maxDegree)
			maxDegree = array[i].split(/X\^/)[1];
	}

	for (i = 0; i <= maxDegree; i++) {
		poly.push(0);
		poly[i] = 0;
		for (j = 0; array[j]; j++) {
			if (array[j].split(/\^/g)[1] == i) {
				if (signe[j] == "-")
					poly[i] -= parseFloat(array[j].split(/X/g)[0]);
				else
					poly[i] += parseFloat(array[j].split(/X/g)[0]);
			}

		}
		if (parseFloat(poly[i]) != 0)
			realPoly.push(poly[i] + "X^" + i);
	}

	if (maxDegree == 0 && realPoly.length != 0) {
		console.log("I can't resolve that!")
		process.exit(1);
	}

	this.str = realPoly.join("+")
						.replace(/\+\-/g, "-") + "=0";
	this.goodStr = this.str.replace(/\-/g, " - ")
							.replace(/\+/g, " + ")
							.replace(/=/g, " = ")
							.replace(/X/g, " * X")
							.replace(/\ \*\ X\^0/g, "")
							.replace(/X\^1/g, "X");
	if (this.str[0] !== '-')
		this.str = "+" + this.str;
}

Polynom.prototype.degreeMax = function () {
	var array = this.str.split(/[\+\-=]/g);
	array.shift();

	this.degree = 0;

	for (i = 0; array[i]; i++) {
		if (array[i].split(/X\^/)[1] > this.degree)
			this.degree = array[i].split(/X\^/)[1];
	}
	if (this.degree == 0)
		this.goodStr = "I can't reduce that!";
}

module.exports = Polynom;
