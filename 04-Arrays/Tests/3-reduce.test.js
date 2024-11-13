import items from '../arrays.js'
import reduce from "../Solutions/3-myReduce.js"

console.log("Printiing sum of items: ");
let sum = reduce(items, (sum, item) => sum + item, 0)
console.log(sum);


console.log("Printing sum of squares: ");
let res = reduce(items, (squareSum, item) => squareSum + (item * item), 0)
console.log(res);


console.log("Printing product of items:");
let pro = reduce(items, (prod, item) => prod * item, 1);
console.log(pro);


console.log("Printing max item:");
console.log(reduce(items, (maxi, item) => Math.max(maxi, item), Number.MIN_VALUE));


console.log("Printing min item:");
console.log(reduce(items, (mini, item) => Math.min(mini, item), Number.MAX_VALUE));
