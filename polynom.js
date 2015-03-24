function Polynom (str) {
	this.str = str;
	this.degree = 0;

	this.write = function () {
		console.log (this.str + " = 0");
	}

	this.splitEqual = function () {
		var array = this.str.split("=");
		if (array.length != 2)
			throw new Error("Mauvais Formatage, trop de '='")
		array[1] = array[1].replace(/\s/g, "");
		array[1] = array[1].replace(/-/g, "+-");
		array[1] = array[1].replace(/\*\+/g, "*");
		var arrayPlus = array[1].split("+");
		var i;
		for (i = 0; i < arrayPlus.length; i++) {
			if (arrayPlus[i][0] == '-')
				arrayPlus[i] = "+" + arrayPlus[i].slice(1);
			else
				arrayPlus[i] = "-" + arrayPlus[i];
		}
		array[1] = arrayPlus.join("");
		this.str = array[0] + array[1];
	}

	this.splitNoSpace = function () {
		this.str = this.str.replace(/\s/g, "");
		this.str = this.str.replace(/-/g, "+-");
		this.str = this.str.replace(/\*\+/g, "*");

		var array = this.str.split("+");
		return array;
	}

	this.replaceMinus = function () {
		this.str = this.str.replace(/-/g, "+-");
	}

}

module.exports = Polynom;
