# How to represent complexity?

Asymptotic notations

Mathematical tools to represent time an space complexity

1. Big-O Notation (O-notation) - Worst case complexity
2. Omega Notation (ø-notation) - Best case complexity
3. Theta Notation (Θ-notation) - Average case complexity

## Big-O Notation

Time Complexity

O(1) - Constant
O(n) - Linear
O(nˆ2) - Quadratic
O(nˆ3) - Cubic
O(logn) - Logarithmic

Space Complexity

O(1) - Constant
O(n) - Linear
O(logn) - Logarithmic

## Objects - Big-O

An object is a collection of key value pairs

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)

## Arrays - Big-O

An array is an ordered collection of values

Insert / Remove at end - O(1)
Insert / Remove at beginning - O(n)
Access - O(1)
Search - O(n)
push / pop - O(1)
shift / unshift / concat / slice / splice - O(n)
forEach / map / filter / reduce - O(n)

Big-O Guide

Calculation not dependent on input size - O(1)

1. Loop - O(n)
2. Nested loops - O(nˆ2)
3. Input size reduced by half - O(logn)
