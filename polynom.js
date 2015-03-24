function Polynom (str) {
	this.str = str;

	this.write = function () {
		console.log (this.str);
	}
}

module.exports = Polynom;