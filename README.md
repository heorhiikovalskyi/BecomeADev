To start the project:

1. **You should copy 10m.txt into dist folder**

2. `node dist/main.js`

I created Calculations class with all the needed operations. To make code more flexible, I didn`t write two separate functions to find sequences but I created one function with comparison parameter indicating by which rule should we compare elements:

```typescript
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
```

code is pretty clean and immediately handles one million length arrays
