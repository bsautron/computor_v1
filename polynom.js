function Polynom (str) {
	this.str = str;
	this.degree = 0;

	// this.splitNoSpace = function () {
		
	// 	this.str = this.str.replace(/\s/g, "");
	// 	this.str = this.str.replace(/-/g, "+-");
	// 	this.str = this.str.replace(/\*\+/g, "*");

	// 	var array = this.str.split("+");
	// 	return array;
	// }
}

Polynom.prototype.reduce = function () {
	// console.log("ICI");
	// console.log(this.str);
	var elem = this.str.split(/[\+\-=]/g),
		signe = this.str.match(/[\-\+=]/g);
	elem = elem.filter(function (element) {
		if (element != '')
			return true;
		return false;
		});

	for (i = 0; elem[i]; i++) {
		var puiss = elem[i].match(/[\^][0-9]/g);
		if (puiss) {
			for (j = 0; puiss[j]; j++) {
				puiss[j] = puiss[j].replace(/\^/, "");
			}
			puiss = eval(puiss.join("\+"));
		} else {
			puiss = "0";
		}

		var	noPuiss = eval(elem[i].replace(/[\^][0-9]/g, "")
								.replace(/X/g, "")
								.replace(/\*$/, ""));
		elem[i] = signe[i] + noPuiss + "X^"  + puiss;
	}

	// console.log(elem.join(""));

	// console.log("Reduced form: " + elem.join("")
	// 									.replace(/\-/g, " - ")
	// 									.replace(/\+/g, " + ")
	// 									.replace(/=/g, " = ")
	// 									.replace(/X/g, " * X"));
	this.str = elem.join("");
	return (elem.join(""));
	// console.log(signe);
}


Polynom.prototype.merge = function () {
	console.log(this.str);
	var array = this.str.split(/[\+\-=]/g).filter(function (element) {
		if (element != '')
			return true;
		return false;
		}),
		signe = this.str.match(/[\+\-=]/g);

	var max = this.degree;
	for (i = 0; array[i]; i++) {
		if (array[i].split(/X\^/)[1] > this.degree)
			this.degree = array[i].split(/X\^/)[1];
	}
	console.log("Polynomial degree: " + this.degree);
	console.log(array);
	console.log(signe);
	var poly = [],
		realPoly= [];
	for (i = 0; i <= this.degree; i++) {
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
	// console.log(realPoly);
	this.str = realPoly.join("+")
						.replace(/\+\-/g, "-") + "=0";
	console.log("Reduced form: " + this.str.replace(/\-/g, " - ")
											.replace(/\+/g, " + ")
											.replace(/=/g, " = ")
											.replace(/X/g, " * X"));
	// console.log(array);
	// console.log(signe);
}

Polynom.prototype.splitEqual = function () {
		var array = this.str.split("=");
		if (array.length != 2) {
			console.log ("Wrong number of '='");
			process.exit(1);
		}

		array[1] = array[1].replace(/\s/g, "")
		array[1] = array[1].replace(/(?!^)-/g, "+-")
		array[1] = array[1].replace(/\*\+/g, "*");
		var split = array[1].split("+");
		for (var i = 0; i < split.length; i++) {
			if (split[i][0] == '-') split[i] = "+" + split[i].slice(1);
			else split[i] = "-" + split[i];
		}
		
		array[1] = split.join("");
		this.str = array[0] + array[1];
}

Polynom.prototype.write = function() {
	console.log (this.str);
};

Polynom.replaceMinus = function () {
	this.str = this.str.replace(/-/g, "+-");
}

module.exports = Polynom;
