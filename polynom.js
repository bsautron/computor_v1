function Polynom (str) {
	this.str = str;
	this.degree = 0;

	this.splitNoSpace = function () {
		
		this.str = this.str.replace(/\s/g, "");
		this.str = this.str.replace(/-/g, "+-");
		this.str = this.str.replace(/\*\+/g, "*");

		var array = this.str.split("+");
		return array;
	}
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
