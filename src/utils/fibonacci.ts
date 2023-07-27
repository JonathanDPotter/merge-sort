const fibonacci = (i: number, sequence: number[] = []): number[] =>
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

export default fibonacci;
