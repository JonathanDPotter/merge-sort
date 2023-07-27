const sort = (arrayOne: number[], arrayTwo: number[]): number[] => {
  const collector: number[] = [];

  //limiting the while loop to run until one array is empty may leave a number in the other one
  while (arrayOne.length > 0 && arrayTwo.length > 0) {
    arrayOne[0] < arrayTwo[0]
      ? collector.push(arrayOne.shift() as number)
      : collector.push(arrayTwo.shift() as number);
  }

  //the concat merges any remaining numbers to the collector
  return collector.concat(arrayOne, arrayTwo);
};

const mergeSort = (array: number[]): number[] => {
  const middle = Math.floor(array.length / 2);

  return array.length <= 1
    ? array
    : sort(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
};

export default mergeSort;
