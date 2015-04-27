
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

    console.log("a: " + a + " b: " + b + " c: " + c)
    delta = (b * b - 4 * a * c).toString();

    if (delta > 0) {
      console.log(delta);
      var racineDelta = sqrt(delta),
          n1 = -b + racineDelta,
          n2 = -b - racineDelta,
          d = 2 * a,
          x1 = n1 + " / " + d,
          x2 = n2 + " / " + d;
      console.log("Solutions are: ");
      console.log(x1);
      console.log(x2);
    }
    else if (delta == 0) {
      var x0 = -b + " / " + (2 * a);
      console.log("Solution is: ");
      console.log(x0);
      // console.log(eval(x0));
    }
    else {
      racineDelta = delta.replace(/\-/g, "i√(") + ')';
      var x1 = "( " + -b + " + " + racineDelta + " ) / " + (2 * a),
          x2 = "( " + -b + " - " + racineDelta + " ) / " + (2 * a);
      console.log("Solutions complexe are: ");
      console.log(x1);
      console.log(x2);
    }
    // var a = (function () {
    //   var ret = "";
    //   for (var i = 0; i < array.length; i++) {
    //     if (array[i].indexOf("X^2") > -1)
    //       ret = format(array)[i];
    //   }
    //   return parseInt(ret.replace("X^2", ""));
    // })();

    // var b = (function () {
    //   var ret = "";
    //   for (var i = 0; i < array.length; i++) {
    //     if (array[i].indexOf("X^1") > -1)
    //       ret = format(array)[i];
    //   }
    //   return parseFloat(ret.replace("X^1", ""));
    // })();

    // var c = (function () {
    //   var ret = "";
    //   for (var i = 0; i < array.length; i++) {
    //     if (array[i].indexOf("X^0") > -1)
    //       ret = format(array)[i];
    //   }
    //   return parseFloat(ret.replace("X^0", "").replace(/-+/g, "-"));
    // })();

    // var delta = (function () {
    //   return b * b - 4 * a * c;
    // })();

    // if (delta < 0)
    //   return "aucune solution";
    // else if (delta == 0)
    //   return -b / 2 * a;

    // console.log ("delta " + delta);

    // var x1 = (-b - sqrt(delta)) / 2 * a;
    // var x2 = (-b + sqrt(delta)) / 2 * a;

    // return x1 + " et " + x2;

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

module.exports = new Solver ({});


