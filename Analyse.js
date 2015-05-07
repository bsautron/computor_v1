function Analyse () {
	
	this.tableauSigne = function(polynom) {
		
		if (polynom.degree == 1 || polynom.degree == 2)
			console.log("\nSigns:")
		if (polynom.degree == 1) {
			var signe = polynom.str.match(/[\-\+]/g);
			console.log("+---+-----------------------------+");
			console.log("| X | -∞	" + polynom.solution["x0"].replace(/\s/g, "") + "	       +∞ |");
			console.log("+---+-----------------------------+");
			console.log("| Y |	  " + ((signe[1] == '+') ? "-" : "+") + "	 0	  " + ((signe[1] == '+') ? "+" : "-") + "	  |");
			console.log("+---+-----------------------------+");
		}
		if (polynom.degree == 2) {
			if (polynom.coeff["a"] > 0 && (polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) > 0) {
				console.log("+---+-------------------------------------+");
				console.log("| X | -∞	" + polynom.solution["x2"].replace(/\s/g, "") + "		" + polynom.solution["x1"].replace(/\s/g, "") + "	+∞|");
				console.log("+---+-------------------------------------+");
				console.log("| Y |	   +	0	-	0   +     |");
				console.log("+---+-------------------------------------+");
			}
			else if (polynom.coeff["a"] < 0 && (polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) > 0) {
				console.log("+---+-------------------------------------+");
				console.log("| X | -∞	" + polynom.solution["x1"].replace(/\s/g, "") + "		" + polynom.solution["x2"].replace(/\s/g, "") + "	+∞|");
				console.log("+---+-------------------------------------+");
				console.log("| Y |	   -	0	+	0   -     |");
				console.log("+---+-------------------------------------+");
			}
		}
	}
	
	this.canonique = function(polynom) {
		
	}
	
	this.all = function(polynom) {
		if (polynom.degree == 1 || polynom.degree == 2)
			this.tableauSigne(polynom);
//		if (polynom.degree == 2)
//			this.caninoque(polynom);
	}
	
}

module.exports = new Analyse();
