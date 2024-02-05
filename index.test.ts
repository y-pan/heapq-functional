import { heappop, heappush, heapify } from "./index";

describe("heapq on simple data", () => {
  it("heapifies an array into a min heap correctly", () => {
    const arr = [5, 7, 9, 1, 3];
    heapify(arr);
    expect(arr).toEqual([1, 3, 9, 7, 5]);
  });

  it("pops out a smallest item correctly", () => {
    const heap = [1, 3, 9, 7, 5];
    expect(heappop(heap)).toBe(1);
    expect(heappop(heap)).toBe(3);
    expect(heappop(heap)).toBe(5);
    expect(heappop(heap)).toBe(7);
    expect(heappop(heap)).toBe(9);
    expect(heap.length).toBe(0);
  });

  it("pushes an item and maintains the min heap properly", () => {
    const heap: number[] = [];
    heappush(heap, 3);
    heappush(heap, 1);
    heappush(heap, 4);
    heappush(heap, 1);
    heappush(heap, 5);
    heappush(heap, 9);
    heappush(heap, 2);
    heappush(heap, 6);

    expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);
  });

  it("pushes and pops correctly - case 1", () => {
    const heap: number[] = [];
    heappush(heap, 3);
    heappush(heap, 1);
    heappush(heap, 4);
    heappush(heap, 1);
    heappush(heap, 5);
    heappush(heap, 9);
    heappush(heap, 2);
    heappush(heap, 6);

    expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);

    expect(heappop(heap)).toBe(1);
    expect(heappop(heap)).toBe(1);
    expect(heappop(heap)).toBe(2);
    expect(heappop(heap)).toBe(3);
    expect(heappop(heap)).toBe(4);
    expect(heappop(heap)).toBe(5);
    expect(heappop(heap)).toBe(6);
    expect(heappop(heap)).toBe(9);
    expect(heap.length).toBe(0);
  });

  it("pushes correctly", () => {
    const src: number[] = [3, 4, 3, 1, 45, 7, 674, 6, 99, 0, 6, 5, 4];
    const heap: number[] = [];

    src.forEach((n) => heappush(heap, n));
    expect(heap.length).toBe(src.length);

    // if pushed correctly, then will be popped correctly.
    let prev: any = undefined;
    let i;
    for (i = 0; i < src.length; i++) {
      let item: any = heappop(heap);
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

describe("heapq on prioritized data", () => {
  it("heapifies an array into a min heap correctly", () => {
    const arr: [number, string][] = [
      [5, "cherry"],
      [7, "donut"],
      [9, "egg"],
      [1, "apple"],
      [3, "banana"],
    ];
    heapify(arr);
    expect(arr).toEqual([
      [1, "apple"],
      [3, "banana"],
      [9, "egg"],
      [7, "donut"],
      [5, "cherry"],
    ]);
  });

  it("pops out a smallest item correctly", () => {
    const heap: [number, string][] = [
      [1, "apple"],
      [3, "banana"],
      [9, "egg"],
      [7, "donut"],
      [5, "cherry"],
    ];

    expect(heappop(heap)).toEqual([1, "apple"]);
    expect(heappop(heap)).toEqual([3, "banana"]);
    expect(heappop(heap)).toEqual([5, "cherry"]);
    expect(heappop(heap)).toEqual([7, "donut"]);
    expect(heappop(heap)).toEqual([9, "egg"]);
    expect(heap.length).toBe(0);
  });

  it("pushes an item and maintains the min heap properly", () => {
    const heap: [number, string][] = [];
    heappush(heap, [3, "cherry"]);
    heappush(heap, [1, "apple"]);
    heappush(heap, [4, "donut"]);
    heappush(heap, [1, "apple"]);
    heappush(heap, [5, "egg"]);
    heappush(heap, [9, "apple-pie"]);
    heappush(heap, [2, "banana"]);
    heappush(heap, [6, "fries"]);

    expect(heap).toEqual([
      [1, "apple"],
      [1, "apple"],
      [2, "banana"],
      [3, "cherry"],
      [5, "egg"],
      [9, "apple-pie"],
      [4, "donut"],
      [6, "fries"],
    ]);
  });

  it("pushes and pops correctly - case 1", () => {
    const heap: [number, string][] = [];
    heappush(heap, [3, "cherry"]);
    heappush(heap, [1, "apple"]);
    heappush(heap, [4, "donut"]);
    heappush(heap, [1, "apple"]);
    heappush(heap, [5, "egg"]);
    heappush(heap, [9, "apple-pie"]);
    heappush(heap, [2, "banana"]);
    heappush(heap, [6, "fries"]);

    expect(heap).toEqual([
      [1, "apple"],
      [1, "apple"],
      [2, "banana"],
      [3, "cherry"],
      [5, "egg"],
      [9, "apple-pie"],
      [4, "donut"],
      [6, "fries"],
    ]);

    expect(heappop(heap)).toEqual([1, "apple"]);
    expect(heappop(heap)).toEqual([1, "apple"]);
    expect(heappop(heap)).toEqual([2, "banana"]);
    expect(heappop(heap)).toEqual([3, "cherry"]);
    expect(heappop(heap)).toEqual([4, "donut"]);
    expect(heappop(heap)).toEqual([5, "egg"]);
    expect(heappop(heap)).toEqual([6, "fries"]);
    expect(heappop(heap)).toEqual([9, "apple-pie"]);
    expect(heap.length).toBe(0);
  });

  it("pushes correctly", () => {
    const src: [number, number][] = [
      [3, 300],
      [4, 400],
      [3, -300],
      [1, 100],
      [45, 4500],
      [7, -700],
      [674, 67400],
      [6, 600],
      [99, 9900],
      [0, 0],
      [6, 600],
      [5, -500],
      [4, 400],
    ];
    const heap: [number, number][] = [];

    src.forEach((n) => heappush(heap, n));

    expect(heap.length).toBe(src.length);

    expect(heap).toEqual([
      [0, 0],
      [1, 100],
      [3, -300],
      [4, 400],
      [3, 300],
      [4, 400],
      [674, 67400],
      [6, 600],
      [99, 9900],
      [45, 4500],
      [6, 600],
      [7, -700],
      [5, -500],
    ]);

    // if pushed correctly, then will be popped correctly.
    let prev: [number, number] | undefined = undefined;
    let i;
    for (i = 0; i < src.length; i++) {
      let item: [number, number] = heappop(heap) as [number, number];
      if (prev !== undefined) {
        expect(item[0]).toBeGreaterThanOrEqual(prev[0]);
      }
      prev = item;
    }
    expect(i).toBe(src.length);
    expect((prev as [number, number])[1]).toBe(67400);
    expect(heap.length).toBe(0);
  });
});
