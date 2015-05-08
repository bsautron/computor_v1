function sqrt(number) {
  return Math.sqrt(number);
}

function ftSqrt(a) {
  for (i = 0; i < a / 2; i++) {
    if (i * i == a)
      return (i.toString());
  }
  return ("√" + a.toString());
}

function pgcd(n1, n2) {
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

function format(split) {
  for (var i = 0; i < split.length; i++) {
    if (split[i] == "-") split[i + 1] = "-" + split[i + 1];
  }
  return (split);
}

function Solver() {

  this.solveForZero = function(polynom) {
    console.log("Solutions are:");
    console.log("X ∈ R");
  }

  this.solveForOne = function(polynom) {
    var array = polynom.str.split(/[\+\-=]/g),
        signe = polynom.str.match(/[\-\+=]/g),
        neg = false,
        pg,
        nume,
        denom,
        q = "";
    array.shift();
  
    nume = parseFloat(array[0]);
    denom = parseFloat(array[1]);
    if (array.length == 3) {
      if (signe[0] === '+')
        neg = !neg;
      if (signe[1] === '-')
        neg = !neg;
  	if (nume == parseInt(array[0])
          && denom == parseInt(array[1])
        	&& ( pg = pgcd(nume, denom) )) {
      nume /= pg;
      denom /= pg;
      q = nume + ((denom != 1) ? " / " + denom : "");
      if (neg)
        q = "-" + q;  
    }
    else {
      q = (nume / denom).toString();
    }
  
    }
    else
      q = "0";

    console.log("The solution is:");
    console.log(q);
    polynom.solution["x0"] = q; 
  }


  this.solveForTwo = function (polynom) {
    var array = polynom.str.split(/[\-\+=]/g),
        signe = polynom.str.match(/[\-\+=]/g),
        sp = [],
        a = "0",
        b = "0",
        c = "0",
        delta;

    array.shift();
  
    for (var i = 0; array[i]; i++) {
      sp = array[i].split("X^");
      if (sp[1] == 2) a = signe[i] + sp[0];
      if (sp[1] == 1) b = signe[i] + sp[0];
      if (sp[1] == 0) c = signe[i] + sp[0];
    }
    
    polynom.coeff["a"] = a;
    polynom.coeff["b"] = b;
    polynom.coeff["c"] = c;

    delta = (b * b - 4 * a * c).toString();
    console.log("𝚫 = " + delta);
    
    if (delta > 0) {
      var racineDelta = ftSqrt(delta),
          n1 = -b + ((racineDelta[0] == '√') ? " + " + racineDelta : parseInt(racineDelta)),
          n2 = -b + ((racineDelta[0] == '√') ? " - " + racineDelta : parseInt("-" + racineDelta)),
          d1 = 2 * a,
          d2 = 2 * a,
          x1,
          x2,
          pg,
          neg = false;
          
      if (parseFloat(racineDelta) == parseInt(racineDelta)) {
        if (pg = pgcd(n1, d1)) {
          n1 /= pg;
          d1 /= pg;
        }
        if (n1 < 0)
          neg = !neg;
        if (d1 < 0)
          neg = !neg;
        x1 = (neg ? "-" : "") + ((n1 < 0) ? -n1 : n1);
        if (d1 != 1 && d1 != -1)
          x1 += " / " + ((d1 < 0) ? -d1 : d1);
        
        neg = false;
        if (pg = pgcd(n2, d2)) {
          n2 /= pg;
          d2 /= pg;
        }
        if (n2 < 0)
          neg = !neg;
        if (d2 < 0)
          neg = !neg;
        x2 = (neg ? "-" : "") + ((n2 < 0) ? -n2 : n2)
        if (d2 != 1 && d2 != -1)
          x2 += " / " + ((d2 < 0) ? -d2 : d2);
      }
      else {
        x1 = ((racineDelta[0] == '√') ? "(" + n1 + ") / " : n1 + " / ") + d1;
        x2 = ((racineDelta[0] == '√') ? "(" + n2 + ") / " : n2 + " / ") + d2;
      }
      x0 = (b / 2 * a);
      console.log("Solutions are: ");
      console.log(x1);
      console.log(x2);
      polynom.solution["x0"] = x0;
      polynom.solution["x1"] = x1;
      polynom.solution["x2"] = x2;
    }
    else if (delta == 0) {
      var x0,
          n0 = -b,
          d0 = 2 * a,
          pg,
          neg = false;
          
      if (n0 < 0) {
        n0 = -n0;
        neg = !neg;
      }
      if (d0 < 0) {
        d0 = -d0;
        neg = !neg;
      }
      if (pg = pgcd(n0, d0))
      {
        n0 /= pg;
        d0 /= pg;
      }
      x0 = ((neg) ? "- " : "") + n0 + " / " + d0;
      console.log("Solution is: ");
      console.log(x0);
      polynom.solution["x0"] = x0;
      
    }
    else {
      racineDelta = delta.replace(/\-/g, "i√");
      var x1 = ((-b) ? "( " + -b + " + " : "") + racineDelta + ((-b) ? " )" : "") + " / " + (2 * a),
          x2 = ((-b) ? "( " + -b : "") + " - " + racineDelta + ((-b) ? " )" : "") + " / " + (2 * a);
      console.log("Solutions complexe are: ");
      console.log(x1);
      console.log(x2);
      polynom.solution["x1"] = x1;
      polynom.solution["x2"] = x2;
    }

  }

  this.solveForOver = function(polynom) {
    console.log("The polynomial degree is stricly greater than 2, I can't solve.");
  }

  this.solve = function (polynom) {
    if (polynom.degree == 0) this.solveForZero(polynom);
    if (polynom.degree == 1) this.solveForOne(polynom);  
    if (polynom.degree == 2) this.solveForTwo(polynom);
    if (polynom.degree >= 3) this.solveForOver(polynom);
  }
}

module.exports = new Solver();


