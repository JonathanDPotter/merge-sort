# Recursive functions

This is my demonstration of two different recursive functions. There is a Fibonacci Sequence generator and a random array sorter that uses a MergeSort algorithm. The app is live [here](https://jonathandpotter.github.io/merge-sort/)

---

## Technologie used

I built this web app using HTML, SASS, TypeScript and Webpack.

---

## Functionality

The user enters a number between 1 and 1000 into the Fibonacci Generator and a sequence with that many elements is displayed. The user enters a number between 1 and 1000 into the Random Array Sorter and an array with random integers between 1 and 100 is displayed, along with a sorted (low to high) version of that same array.

---

## The Functions

The recursive functions themselves are located in the src/utils directory and are copied below:

``` javascript
  const fibonacci = (i, sequence = []) =>
  i === 0
    ? sequence 
    : sequence.length === 0  
    ? fibonacci(i - 1, [0])
    : sequence.length === 1
    ? fibonacci(i - 1, [0, 1])
    : fibonacci(i - 1, [
        ...sequence,
        sequence[sequence.length - 1] + sequence[sequence.length - 2],
      ]);
```

The Fibonacci function has a lot of line breaks in it, but is really a single line arrow function (no curly braces). It first checks if the input number is 0. If it is the function returns [0]. It checks for a 2 and returns [0, 1]. It then specifies what happens if the number is not 0 or 1, which is that it adds another number to the array by adding the last two numbers of the array together.

```javascript
const sort = (arrayOne, arrayTwo) => {
  const collector = [];

  //limiting the while loop to run until one array is empty may leave a number in the other one
  while (arrayOne.length > 0 && arrayTwo.length > 0) {
    arrayOne[0] < arrayTwo[0]
      ? collector.push(arrayOne.shift())
      : collector.push(arrayTwo.shift());
  }

  //the concat merges any remaining numbers to the collector
  return collector.concat(arrayOne, arrayTwo);
};

const mergeSort = (array) => {
  const middle = Math.floor(array.length / 2);

  return array.length <= 1
    ? array
    : sort(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
};
```

The MergeSort function is really two functions. The sort function takes in two arrays of numbers and sorts them into one array from low to high. The mergeSort function is where the recursion occurs and splits the original array into two parts that get sorted by the sort function.  I have to say that this algorithm really took me some time to get right, and I had to look at many examples (and make many mistakes) to get to the solution that I did.

The two functions were originally written in TypeScript and can be seen that way in the repo, but I removed the typing for the README to make it a little more clear for those that aren't familiar with ts yet.
