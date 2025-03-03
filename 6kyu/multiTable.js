// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = size =>
    Array.from({ length: size }, (_, i) =>
      Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
    );
  