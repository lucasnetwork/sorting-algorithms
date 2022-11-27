# Sorting Algorithms

## Selection sorting
Find the smallest value of array and replaces with the current position.

- Complexity: O($n^2$)
- Unstable sorting algorithm

## Bubble sorting
get the current position and next position, check if the current position is greater than the next position,if so, the values of positions will be exchanged.

- Complexity: O($n^2$)
- Stable sorting algorithm

## Insertion sorting
Check if the value of the leftmost position is grater than the current position, if greater, it will be replaced.

- Complexity: O($n^2$)
- Stable sorting algorithm

## Merge sorting

Uses the conquer and divide strategy, it divides the array into smaller pieces as much as possible. ending this, the arrays are sorted and joined, starting from the smallest and ending at the original array size with the  sorted values.

- Complexity: O(n*log(n))
- Stable sorting algoritm