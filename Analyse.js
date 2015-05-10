function pgcd(n1, n2) {
  if (parseFloat(n1).toString() != parseInt(n1).toString()
  		|| parseFloat(n2).toString() != parseInt(n2).toString())
  	return (0);
  if (n1 < 0)
    n1 = -n1;
  if (n2 < 0)
    n2 = -n2;
  while (n1 * n2 != 0) {
    if (n1 > n2)
      n1 -= n2;
    else 
      n2 -= n1;
  }
  if (n1 == 0) return (n2);
  return (n1);
}

function max3(n1, n2, n3) {
	if (n3 >= n2 && n3 >= n1)
		return (n3);
	else if (n2 >= n1 && n2 >= n3)
		return (n2);
	else if (n1 >= n3 && n1 >= n2)
		return (n1);
}

function repeate(c, nb) {
	var d = "";
	
	for (i = 0; i < nb; i++)
		d += c;
	return d;	
}

function Analyse () {
	
	this.tableauSigne = function(polynom) {
		polynom.solution["x0"] = polynom.solution["x0"].toString().replace(/\s/g, "");
		polynom.solution["x1"] = polynom.solution["x1"].toString().replace(/\s/g, "");
		polynom.solution["x2"] = polynom.solution["x2"].toString().replace(/\s/g, "");
		
		var max = max3(polynom.solution["x0"].length, polynom.solution["x1"].length, polynom.solution["x2"].length);
		if (polynom.degree == 1 || (polynom.degree == 2 && (polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) >= 0) )
			console.log("\nSigns of the polynomial:");
		
		if (polynom.degree == 1) {
			var signe = polynom.str.match(/[\-\+]/g);
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
			console.log("| X | -∞"
							+ repeate(' ', 2 * max + 3)
							+ polynom.solution["x0"].replace(/\s/g, "")
							+ repeate(' ', 2 * max + 3)
							+ "+∞ |");
							
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
			
			console.log("| Y |   "
							+ repeate(' ', max)
							+ ((signe[1] == '+') ? " - " : " + ")
							+ repeate(' ', max)
							+ repeate(' ', max - 1)
							+ "0"
							+ repeate(' ', max)
							+ ((signe[1] == '+') ? " + " : " - ")
							+ repeate(' ', max)
							+ "   |");
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
		}
		else if (polynom.degree == 2 && polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"] == 0) {
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
			console.log("| X | -∞"
							+ repeate(' ', 2 * max + 3)
							+ polynom.solution["x0"].replace(/\s/g, "")
							+ repeate(' ', 2 * max + 3)
							+ "+∞ |");
							
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
			
			console.log("| Y |   "
							+ repeate(' ', max)
							+ ((polynom.coeff["a"] < 0) ? " - " : " + ")
							+ repeate(' ', max)
							+ repeate(' ', max - 1)
							+ "0"
							+ repeate(' ', max)
							+ ((polynom.coeff["a"] < 0) ? " - " : " + ")
							+ repeate(' ', max)
							+ "   |");
			console.log("+---+---" + repeate("-", 5 * max + 6)+ "---+");
		}
		else if (polynom.degree == 2) {
			if (polynom.coeff["a"] > 0 && (polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) > 0) {
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
				console.log("| X | -∞"
								+ repeate(' ', 2 * max + 1)
								+ repeate(' ', max - polynom.solution["x2"].replace(/\s/g, "").length)
								+ polynom.solution["x2"].replace(/\s/g, "")
								+ repeate(' ', 2 * max + 1)
								+ repeate(' ', max - polynom.solution["x1"].replace(/\s/g, "").length)
								+ polynom.solution["x1"].replace(/\s/g, "")
								+ repeate(' ', 2 * max + 1)
								+ "+∞ |");
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
				console.log("| Y |   "
								+ repeate(' ', max)
								+ "+"
								+ repeate(' ', 2 * max - 1)
								+ "0"
								+ repeate(' ', max)
								+ "-"
								+ repeate(' ', 2 * max - 1)
								+ "0"
								+ repeate(' ', max)
								+ "+"
								+ repeate(' ', max)								
								+ "   |");
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
			}
			else if (polynom.coeff["a"] < 0 && (polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) > 0) {
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
				console.log("| X | -∞"
								+ repeate(' ', max)
								+ " "
								+ repeate(' ', max)
								+ repeate(' ', max - polynom.solution["x1"].replace(/\s/g, "").length)
								+ polynom.solution["x1"].replace(/\s/g, "")
								+ repeate(' ', 2 * max + 1)
								+ repeate(' ', max - polynom.solution["x2"].replace(/\s/g, "").length)
								+ polynom.solution["x2"].replace(/\s/g, "")
								+ repeate(' ', 2 * max + 1)
								+ "+∞ |");
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
				console.log("| Y |   "
								+ repeate(' ', max)
								+ "-"
								+ repeate(' ', 2 * max - 1)
								+ "0"
								+ repeate(' ', max)
								+ "+"
								+ repeate(' ', 2 * max - 1)
								+ "0"
								+ repeate(' ', max)
								+ "-"
								+ repeate(' ', max)								
								+ "   |");
				console.log("+---+---" + repeate("-", 8 * max + 3) + "---+");
			}
		}
	}
	
	this.canonique = function(polynom) {
		
		if ((polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"]) >= 0) {
			
				var nume = polynom.coeff["b"] * polynom.coeff["b"] - 4 * polynom.coeff["a"] * polynom.coeff["c"],
					deno = (4 * polynom.coeff["a"]),
					q,
					pg,
					neg = false;
				
				if (pg = pgcd(nume, deno)) {
					nume /= pg;
					deno /= pg;
				}
				
				q = ((polynom.coeff["a"][0].toString() == '+') ? polynom.coeff["a"].substr(1) : polynom.coeff["a"])
							+ "(X "
							+ ((polynom.solution["x0"][0] == '-') ? "- " + polynom.solution["x0"].substr(1) : "+ " + polynom.solution["x0"])
							+ ")²";
				if (nume < 0) {
					nume = -nume;
					neg = !neg;
				}
				if (deno < 0) {
					deno = -deno;
					neg = !neg;
				}
				if (deno == 1)
					q += ((neg) ? " - " : " + ") + nume;
				else if (nume == 0)
					q += 0;
				else
					q += ((neg) ? " - " : " + ") + nume + " / " + deno;
				console.log("\nCanonical form: " + q);
		}
	}
	
	this.all = function(polynom) {
		if (polynom.degree == 1 || polynom.degree == 2)
			this.tableauSigne(polynom);
		if (polynom.degree == 2)
			this.canonique(polynom);
	}
	
}

module.exports = new Analyse();


