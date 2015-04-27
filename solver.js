
function sqrt (number) {
  return Math.sqrt(number);
}

function format (split) {
  for (var i = 0; i < split.length; i++) {
    if (split[i] == "-") split[i + 1] = "-" + split[i + 1];
  }
  return (split);
}

function Solver (options) {

  this.solveForZero = function(polynom) {
    console.log("Solutions are:");
    console.log("X ∈ R")
  }

  this.solveForOne = function(polynom) {
    var array = polynom.str.split(/[\+\-=]/g),
        signe = polynom.str.match(/[\-\+=]/g),
        neg = false,
        q = "";
    array.shift();

    if (array.length == 3) {
      if (signe[0] === '+')
        neg = !neg;
      if (signe[1] === '-')
        neg = !neg;

      q = parseFloat(array[0]) + " / " + parseFloat(array[1]);
      if (neg)
        q = "- " + q;    
    }
    else
      q = "0";

    console.log("The solution is:");
    console.log(q);
    console.log(eval(q.replace(/\s/g, "")));
  }


  this.solveForTwo = function (polynom) {
    var split = polynom.str.split(" ");

    var a = (function () {
      var ret = "";
      for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf("X^2") > -1)
          ret = format(split)[i];
      }
      return parseInt(ret.replace("X^2", ""));
    })();

    var b = (function () {
      var ret = "";
      for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf("X^1") > -1)
          ret = format(split)[i];
      }
      return parseFloat(ret.replace("X^1", ""));
    })();

    var c = (function () {
      var ret = "";
      for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf("X^0") > -1)
          ret = format(split)[i];
      }
      return parseFloat(ret.replace("X^0", "").replace(/-+/g, "-"));
    })();

    var delta = (function () {
      return b * b - 4 * a * c;
    })();

    if (delta < 0)
      return "aucune solution";
    else if (delta == 0)
      return -b / 2 * a;

    console.log ("delta " + delta);

    var x1 = (-b - sqrt(delta)) / 2 * a;
    var x2 = (-b + sqrt(delta)) / 2 * a;

    return x1 + " et " + x2;

  }

  this.solve = function (polynom) {
    if (polynom.degree == 0) return this.solveForZero(polynom)
    if (polynom.degree == 1) return this.solveForOne(polynom)   
    if (polynom.degree == 2) return this.solveForTwo(polynom)   
  }
}

module.exports = new Solver ({});