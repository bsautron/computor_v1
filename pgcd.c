#include <stdio.h>

int	main(void)
{
	int	a = 4;
	int	b = 12;

	while (a * b != 0)
	{
		if (a > b)
			a -= b;
		else
			b -= a;
	}
	dprintf(1, "%s", "PGCD = ");
	if (a == 0)
		dprintf(1, "%d\n", b);
	else
		dprintf(1, "%d\n", a);
	return (0);
}
