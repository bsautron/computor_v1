# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    computerv1.py                                      :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: emtermea <emtermea@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2015/06/24 15:56:59 by emtermea          #+#    #+#              #
#    Updated: 2015/07/08 04:59:49 by emtermea         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Je t'aime ma Cherie d'amoure <3

import sys
import re
from functionCalcul import *
	
equ_init = sys.argv[1]
equ_init = equ_init.replace(' ','')
tab = equ_init.split('=');
tab[0] = "+" + tab[0]
tab[1] = "+" + tab[1]


A = []
while re.search("(\-|\+)?([0-9]+\.[0-9]+|[0-9]+)(\*)?[xX]\^[0-9]+", tab[0]):
	a = re.search("(\-|\+)?([0-9]+\.[0-9]+|[0-9]+)(\*)?[xX]\^[0-9]+", tab[0]).group(0)
	A.append(a)
	tab[0] = tab[0][len(a):]

B = []
while re.search("(\-|\+)?([0-9]+\.[0-9]+|[0-9]+)(\*)?[xX]\^[0-9]+", tab[1]):
	b = re.search("(\-|\+)?([0-9]+\.[0-9]+|[0-9]+)(\*)?[xX]\^[0-9]+", tab[1]).group(0)
	B.append(b)
	tab[1] = tab[1][len(b):]
i = 0


while i < len(B):
	if B[i][0] == '-':
		B[i] = "+" + B[i][1:]
	elif B[i][0] == '+':
		B[i] = "-" + B[i][1:]
	A.append(B[i])
	i += 1

degre_max = 0
i = 0
while i < len(A):
	if int(re.search("[0-9]+$", A[i]).group(0)) > degre_max:
		degre_max = int(re.search("[0-9]+$", A[i]).group(0))
	i += 1
# si degre_max > 2 => ne pas resoudre
print degre_max
print "a =", A
while len(A):
	i = 0
	valeur = 0
	puissance = int(re.search("[0-9]+$", A[0]).group(0))
	while i < len(A):
		if int(re.search("[0-9]+$", A[i]).group(0)) == puissance:
			valeur += float(re.search("^(\-|\+)([0-9]+\.[0-9]+|[0-9]+)", A[i]).group(0))
			A.pop(i)
		i += 1
	print puissance, " -> ", valeur


