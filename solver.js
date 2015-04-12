
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

  this.solveForOne = function (polynom) {
    var split = polynom.str.split(" ");

    var right = (function () {
      var ret = "";
      for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf("X^0") > -1) {
          ret = split[i][0] == "-" ? split[i].slice(1) : "-" + split[i];
          split.splice(i, 1);
        }
      }
      return (ret);
    })().replace("X^0", "");

    var left = (function () {
      var ret = "";
      for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf("X^1") > -1)
          ret = format(split)[i];
      }
      return (ret);
    })().replace("X^1", "");

    if (right[0] == '-' && left[0] == '-') {
      left = left.slice(1);
      right = right.slice(1);
    }
    return right + "/" + left;
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
    if (polynom.degree == 1) return this.solveForOne (polynom)   
    if (polynom.degree == 2) return this.solveForTwo (polynom)   
  }
}

module.exports = new Solver ({});