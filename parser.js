module.exports.reduce = function (p) {
	
	var array = p.splitNoSpace(),
		res = [];
	for (var i = 0; i < array.length; i++) {
		
		var split = array[i].split("*"),
			exp = [1];

		for (var j = 0; j < split.length; j++) {
			if (!isNaN(split[j]))
				exp[0] *= parseFloat(split[j]);
			else
				exp.push(split[j]);
		}

		split[i] = exp.join("*");
		res.push(split[i]);
	}
	p.str = res.join("+").replace("NaN+", "");
}

module.exports.merge = function (p) {
	
	var poly = {},
		array = p.str.split("+");
	
	for (var i = 0; i < array.length; i++) {
		var first = parseFloat(array[i]),
			last = parseFloat(array[i].split("^")[1]);

		if (!poly[last])
			poly[last] = 0;
		poly[last] += first;
	}
	
	var res = [];
	for (key in poly) {
		res.push(poly[key] + "X^" + key);
		p.degree = key;
	}
	
	p.str = res.join("+").replace(/\+\-/g, "-").replace(/\+/g, " + ").replace(/\-/g, " - ");
}
