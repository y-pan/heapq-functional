// Number is the priority, T is the actual data to be stored.
export type PrioritizedItem<T = any> = [number, T];

export type Item<T = any> = T | PrioritizedItem<T>;

// Convert the given array into min heap, where data with lower priority value will get popped out first.
export const heapify = <T>(arr: Item<T>[]): void => {
  if (!arr) {
    return;
  }
  for (let i = arr.length; i >= 0; i--) {
    _heapifyDown(arr, i);
  }
};

export const heappush = <T>(arr: Item<T>[], item: Item<T>): void => {
  arr.push(item);
  let i = arr.length - 1;
  let pi = Math.floor((i - 1) / 2);
  let temp;
  while (pi >= 0 && isSmaller(arr[i], arr[pi])) {
    // min heap, pop smaller to the top
    temp = arr[pi];
    arr[pi] = arr[i];
    arr[i] = temp;
    i = pi;
    pi = Math.floor((i - 1) / 2);
  }
};

export const heappop = <T>(arr: Item<T>[]): Item<T> => {
  const x = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();

  _heapifyDown(arr, 0);
  return x;
};

const _heapifyDown = <T>(arr: Item<T>[], i: number): void => {
  let smallest = i;
  let c1 = i * 2 + 1;
  let c2 = i * 2 + 2;
  let temp;

  if (c1 < arr.length && isSmaller(arr[c1], arr[smallest])) {
    smallest = c1;
  }
  if (c2 < arr.length && isSmaller(arr[c2], arr[smallest])) {
    smallest = c2;
  }
  if (smallest !== i) {
    temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;

    _heapifyDown(arr, smallest);
  }
};

const isSmaller = <T>(item1: Item<T>, item2: Item<T>): boolean => {
  if (Array.isArray(item1) !== Array.isArray(item2)) {
    throw new Error("Item type inconsistent");
  }

  if (Array.isArray(item1) && Array.isArray(item2)) {
    return item1[0] < item2[0]; // first element is the priority
  }

  return item1 < item2;
};
