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

Algorithm design techniques

- Brute force: Simple and exhaustive technique that evaluates every possible outcome to find the best solution. Ex: Linear search
- Greedy: Choose the best option at the current time, without any consideration for the future. Ex: Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm
- Divide and conquer: Dive the problem into smaller sub-problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution. Ex: Binary search, Quick Sort, Merge Sort and Tower of Hanoi
- Dynamic programming: Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub problems. Store the result and reuse it for the same sub-problems.This is called memoization and is a optimization technique that improves the time complexity of your algorithm. Ex: Fibonacci numbers and climbing staircase
- Backtracking: Generate all possible solutions. Check if the solutions satisfies all the given constrains and only then you proceed with generating subsequent solutions. If the constrains are not satisfied, backtrack a go on a different path to find the solution. Ex: N-Queens problem

Exercises:
- Finding the GCD using the Euclidian algorithm
- Finding permutations and combinations of a list of numbers
- Finding the longest common substring in a given string
- Knapsack problem