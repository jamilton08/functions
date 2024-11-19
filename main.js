// main.js

import { add, subtract, multiply, divide } from './functions.js';

const num1 = 10;
const num2 = 5;

console.log(`Adding ${num1} and ${num2}:`, add(num1, num2));
console.log(`Subtracting ${num2} from ${num1}:`, subtract(num1, num2));
console.log(`Multiplying ${num1} and ${num2}:`, multiply(num1, num2));
console.log(`Dividing ${num1} by ${num2}:`, divide(num1, num2));
