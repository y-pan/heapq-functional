import { heapPop, heapPush, heapify } from "./index";

describe("heapify", () => {
  it("heapifies an array into a min heap correctly", () => {
    const arr = [5, 7, 9, 1, 3];
    heapify(arr);
    expect(arr).toEqual([1, 3, 9, 7, 5]);
  });

  it("pops out a smallest item correctly", () => {
    const heap = [1, 3, 9, 7, 5];
    expect(heapPop(heap)).toBe(1);
    expect(heapPop(heap)).toBe(3);
    expect(heapPop(heap)).toBe(5);
    expect(heapPop(heap)).toBe(7);
    expect(heapPop(heap)).toBe(9);
    expect(heap.length).toBe(0);
  });

  it("pushes an item and maintains the min heap properly", () => {
    const heap: number[] = [];
    heapPush(heap, 3);
    heapPush(heap, 1);
    heapPush(heap, 4);
    heapPush(heap, 1);
    heapPush(heap, 5);
    heapPush(heap, 9);
    heapPush(heap, 2);
    heapPush(heap, 6);

    expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);
  });

  it("pushes and pops correctly - case 1", () => {
    const heap: number[] = [];
    heapPush(heap, 3);
    heapPush(heap, 1);
    heapPush(heap, 4);
    heapPush(heap, 1);
    heapPush(heap, 5);
    heapPush(heap, 9);
    heapPush(heap, 2);
    heapPush(heap, 6);

    expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);

    expect(heapPop(heap)).toBe(1);
    expect(heapPop(heap)).toBe(1);
    expect(heapPop(heap)).toBe(2);
    expect(heapPop(heap)).toBe(3);
    expect(heapPop(heap)).toBe(4);
    expect(heapPop(heap)).toBe(5);
    expect(heapPop(heap)).toBe(6);
    expect(heapPop(heap)).toBe(9);
    expect(heap.length).toBe(0);
  });

  it("pushes correctly", () => {
    const src: number[] = [3, 4, 3, 1, 45, 7, 674, 6, 99, 0, 6, 5, 4];
    const heap: number[] = [];

    src.forEach((n) => heapPush(heap, n));
    expect(heap.length).toBe(src.length);

    // if pushed correctly, then will be popped correctly.
    let prev = undefined;
    let i;
    for (i = 0; i < src.length; i++) {
      let item = heapPop(heap);
      if (prev !== undefined) {
        expect(item).toBeGreaterThanOrEqual(prev);
      }
      prev = item;
    }
    expect(i).toBe(src.length);
    expect(prev).toBe(674);
    expect(heap.length).toBe(0);
  });
});
