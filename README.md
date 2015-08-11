<h1>Computor_v1</h1>

Solve polynomial of maximum degree 2

<h2>Usage:</h2>
`$> node computor "[polynomial]"`
<h4>Syntax:</h4>
`[-+][a[*]]x[^n]`


<h2>Example</h2>

<h3>Reduced form and Polynomial degree:</h3>
`node computor "x^3 - 5x^2 + 12 = -2x^3 - 2*3x^2 + 3x^3 + 12x^0"`
  * <pre>
    Reduced form: 1 * X^2 = 0
    Polynomial degree: 2</pre>
    
<h3>Solutions</h3>
`node computor "3x = 2"`   
  * <pre>
The solution is:    
2 / 3
</pre>

`node computor "-2x^2 + x = -1"`   
  * <pre>
𝚫 = 9
Solutions are:
-1 / 2
1
</pre>

`node computor "x^3 + x = 0"`   
  * <pre>
The polynomial degree is stricly greater than 2, I can't solve.
</pre>

<h3>Signs of the polynomial:</h3>

`node computor "-2x^2 + x = -1"`
  * <pre>
+---+-----------------------------------------+
| X | -∞         -1/2            1         +∞ |
+---+-----------------------------------------+
| Y |       -       0    +       0    -       |
+---+-----------------------------------------+</pre>

<h3>Canonical form</h3>
`node computor "-2x^2 + x = -1"`
  * <pre>
    Canonical form: -2(X - 1)² - 9 / 8</pre>
