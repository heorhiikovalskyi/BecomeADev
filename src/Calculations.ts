export class Calculations {
  constructor() {}

  FindMax = (numbers: number[]) => {
    let max = -Infinity;

    numbers.forEach((number) => {
      if (max < number) max = number;
    });

    return max;
  };

  FindMin = (numbers: number[]) => {
    let min = Infinity;

    numbers.forEach((number) => {
      if (min > number) min = number;
    });

    return min;
  };

  FindMedian = (numbers: number[]) => {
    const arrayLen = numbers.length;
    const middleElement = Math.ceil(arrayLen / 2) - 1;

    return arrayLen % 2 === 1
      ? numbers[middleElement]
      : this.FindAverage([numbers[middleElement], numbers[middleElement + 1]]);
  };

  FindAverage = (numbers: number[]) => {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  };

  FindSequence = (numbers: number[], comparison: (a: number, b: number) => boolean) => {
    let outputSequence: number[] = [];
    let currentSequence: number[] = [];
    currentSequence.push(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
      if (comparison(numbers[i - 1], numbers[i])) currentSequence.push(numbers[i]);
      else {
        if (outputSequence.length < currentSequence.length) {
          outputSequence = currentSequence.splice(0, currentSequence.length);
        } else {
          currentSequence.splice(0, currentSequence.length);
        }
        currentSequence.push(numbers[i]);
      }
    }

    return outputSequence.length < currentSequence.length ? currentSequence : outputSequence;
  };

  FindIncreasingSequence = (numbers: number[]) => {
    return this.FindSequence(numbers, (a, b) => a <= b);
  };

  FindDescendingSequence = (numbers: number[]) => {
    return this.FindSequence(numbers, (a, b) => a >= b);
  };
}
