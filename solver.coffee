class Solver
	constructor: (@option) ->

Solver::solveForOne = (polynom) ->
	split = polynom.str.split " "
	console.log split

Solver::solveForTwo = (polynom) ->

Solver::solve = (polynom) ->
	if polynom.degree > 2
		console.log "invalid degree"
		process.exit 1
	console.log polynom.dregree
	if polynom.degree is 1
		console.log "1"
		@solveForOne polynom
	else if polynom.degree is 2
		@solveForTwo polynom

module.exports = new Solver {}