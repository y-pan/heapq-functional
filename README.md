# heapq

Heapq functional module, ported from heapq in Python

```ts
import { heappop, heappush, heapify } from "heapq-functional";

// Example 1:
const arr = [3, 4, 1, 2, 5];
heapify(arr);
console.log(heappop(arr)); // 1
console.log(heappop(arr)); // 2
console.log(heappop(arr)); // 3
console.log(heappop(arr)); // 4
console.log(heappop(arr)); // 5

// Example 2:
const arr2: [number, string][] = [];
heappush(arr2, [27.88, "wine"]);
heappush(arr2, [19.99, "beer"]);
heappush(arr2, [1.27, "apple"]);
heappush(arr2, [0.99, "banana"]);
heappush(arr2, [4.55, "cherry"]);

console.log(heappop(arr2)); //[ 0.99, 'banana' ]
console.log(heappop(arr2)); //[ 1.27, 'apple' ]
console.log(heappop(arr2)); //[ 4.55, 'cherry' ]
console.log(heappop(arr2)); //[ 19.99, 'beer' ]
console.log(heappop(arr2)); //[ 27.88, 'wine' ]
```
