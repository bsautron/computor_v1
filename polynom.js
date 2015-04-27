function Polynom (str) {
	this.str = str;
	this.goodStr;
	this.degree = 0;
}

Polynom.prototype.reduce = function () {
	var elem = this.str.split(/[\+\-=]/g),
		signe = this.str.match(/[\-\+=]/g);

	elem = elem.filter(function (element) {
		if (element != '')
			return true;
		return false;
		});

	for (i = 0; elem[i]; i++) {
		var puiss = elem[i].match(/[\^][0-9]+/g),
			noPuiss = eval(elem[i].replace(/[\^][0-9]+/g, "")
								.replace(/X/g, "")
								.replace(/\*$/, ""));

		if (puiss) {
			for (j = 0; puiss[j]; j++) {
				puiss[j] = puiss[j].replace(/\^/, "");
			}
			puiss = eval(puiss.join("\+"));
		}
		else
			puiss = "0";
		elem[i] = signe[i] + noPuiss + "X^"  + puiss;
	}

	this.str = elem.join("");
	return (elem.join(""));
}


Polynom.prototype.merge = function () {
	var array = this.str.split(/[\+\-=]/g).filter(function (element) {
		if (element != '')
			return true;
		return false;
		}),
		signe = this.str.match(/[\+\-=]/g),
		maxDegree = 0,
		poly = [],
		realPoly= [];
		
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
	var array = this.str.split(/[\+\-=]/g).filter(function (element) {
		if (element != '')
			return true;
		return false;
		});

	this.degree = 0;

	for (i = 0; array[i]; i++) {
		if (array[i].split(/X\^/)[1] > this.degree)
			this.degree = array[i].split(/X\^/)[1];
	}
}

module.exports = Polynom;
