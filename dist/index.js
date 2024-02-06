"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var heapq_functional_exports = {};
__export(heapq_functional_exports, {
  heapify: () => heapify,
  heappop: () => heappop,
  heappush: () => heappush
});
module.exports = __toCommonJS(heapq_functional_exports);
var heapify = (arr) => {
  if (!arr) {
    return;
  }
  for (let i = arr.length; i >= 0; i--) {
    _heapifyDown(arr, i);
  }
};
var heappush = (arr, item) => {
  arr.push(item);
  let i = arr.length - 1;
  let pi = Math.floor((i - 1) / 2);
  let temp;
  while (pi >= 0 && isSmaller(arr[i], arr[pi])) {
    temp = arr[pi];
    arr[pi] = arr[i];
    arr[i] = temp;
    i = pi;
    pi = Math.floor((i - 1) / 2);
  }
};
var heappop = (arr) => {
  const x = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  _heapifyDown(arr, 0);
  return x;
};
var _heapifyDown = (arr, i) => {
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
var isSmaller = (item1, item2) => {
  if (Array.isArray(item1) !== Array.isArray(item2)) {
    throw new Error("Item type inconsistent");
  }
  if (Array.isArray(item1) && Array.isArray(item2)) {
    return item1[0] < item2[0];
  }
  return item1 < item2;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  heapify,
  heappop,
  heappush
});
