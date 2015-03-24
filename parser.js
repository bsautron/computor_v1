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
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		var first = parseFloat(array[i]);
		var last = parseFloat(array[i].split("^")[1]);
		if (!poly[last])
			poly[last] = 0;
		poly[last] += first;
	}
	console.log(poly);
}

module.exports = {
	rediuceEachExpr: rediuceEachExpr,
	merge: merge
}
