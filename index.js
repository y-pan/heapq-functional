"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heapMerge = exports.heapPop = exports.heapPush = exports.heapify = void 0;
const heapify = (arr) => {
    if (!arr) {
        return;
    }
    for (let i = arr.length; i >= 0; i--) {
        _heapify(arr, i);
    }
};
exports.heapify = heapify;
const heapPush = (arr, item) => {
    arr.push(item);
    let i = arr.length - 1;
    let pi = Math.floor((i - 1) / 2);
    let temp;
    while (pi >= 0 && arr[pi] > arr[i]) {
        temp = arr[pi];
        arr[pi] = arr[i];
        arr[i] = temp;
        pi = Math.floor((i - 1) / 2);
    }
};
exports.heapPush = heapPush;
const heapPop = (arr) => {
    const x = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    _heapify(arr, 0);
    return x;
};
exports.heapPop = heapPop;
const heapMerge = (arr1, arr2) => {
    return [];
};
exports.heapMerge = heapMerge;
const _heapify = (arr, i) => {
    let smallest = i;
    let c1 = i * 2 + 1;
    let c2 = i * 2 + 2;
    let temp;
    if (c1 < arr.length && arr[c1] < arr[smallest]) {
        smallest = c1;
    }
    if (c2 < arr.length && arr[c2] < arr[smallest]) {
        smallest = c2;
    }
    if (smallest !== i) {
        temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
        _heapify(arr, smallest);
    }
};
