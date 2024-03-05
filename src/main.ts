import { Calculations } from './Calculations';

import fs from 'fs';
import path from 'path';

const calculations = new Calculations();

const file = fs.readFileSync(path.resolve(__dirname, './10m.txt'));

const numbers = file
  .toString()
  .split('\n')
  .map((number) => Number(number));

console.log(calculations.FindAverage(numbers));

console.log(calculations.FindDescendingSequence(numbers));

console.log(calculations.FindIncreasingSequence(numbers));

console.log(calculations.FindMax(numbers));

console.log(calculations.FindMedian(numbers));

console.log(calculations.FindMin(numbers));
