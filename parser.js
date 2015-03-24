function rediuceEachExpr(p) {
	var array = p.splitNoSpace();
	var	dest = [];
	for (var i = 0; i < array.length; i++) {
		var arrayMult = array[i].split("*");
		var exp = [1];
		for (var j = 0; j < arrayMult.length; j++) {
			if (!isNaN(arrayMult[j]))
				exp[0] *= parseFloat(arrayMult[j]);
			else
				exp.push(arrayMult[j]);
		}
		arrayMult[i] = exp.join("*");
		dest.push(arrayMult[i]);
	}
	p.str = dest.join("+");
}

function merge(p) {
	var poly = {};
	var	array = p.str.split("+");
	for (var i = 0; i < array.length; i++) {
		var first = parseFloat(array[i]);
		var last = parseFloat(array[i].split("^")[1]);
		if (!poly[last])
			poly[last] = 0;
		poly[last] += first;
	}
	var dest = [];
	for (key in poly) {
		dest.push(poly[key] + "X^" + key);
		p.degree = key;
	}
	p.str = dest.join("+").replace(/\+\-/g, "-").replace(/\+/g, " + ").replace(/\-/g, " - ");
}

module.exports = {
	rediuceEachExpr: rediuceEachExpr,
	merge: merge
}
