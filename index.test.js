"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("heapify", () => {
    it("heapify array into a min heap correctly", () => {
        const arr = [5, 7, 9, 1, 3];
        (0, index_1.heapify)(arr);
        expect(arr).toEqual([1, 3, 9, 7, 5]);
    });
    it("heapPop pops out a smallest item correctly", () => {
        const heap = [1, 3, 9, 7, 5];
        expect((0, index_1.heapPop)(heap)).toBe(1);
        expect((0, index_1.heapPop)(heap)).toBe(3);
        expect((0, index_1.heapPop)(heap)).toBe(5);
        expect((0, index_1.heapPop)(heap)).toBe(7);
        expect((0, index_1.heapPop)(heap)).toBe(9);
        expect(heap.length).toBe(0);
    });
    it("heapPush pushes an item and maintains the min heap properly", () => {
        const heap = [];
        (0, index_1.heapPush)(heap, 3);
        (0, index_1.heapPush)(heap, 1);
        (0, index_1.heapPush)(heap, 4);
        (0, index_1.heapPush)(heap, 1);
        (0, index_1.heapPush)(heap, 5);
        (0, index_1.heapPush)(heap, 9);
        (0, index_1.heapPush)(heap, 2);
        (0, index_1.heapPush)(heap, 6);
        expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);
    });
    it("heapPush and pop works", () => {
        const heap = [];
        (0, index_1.heapPush)(heap, 3);
        (0, index_1.heapPush)(heap, 1);
        (0, index_1.heapPush)(heap, 4);
        (0, index_1.heapPush)(heap, 1);
        (0, index_1.heapPush)(heap, 5);
        (0, index_1.heapPush)(heap, 9);
        (0, index_1.heapPush)(heap, 2);
        (0, index_1.heapPush)(heap, 6);
        expect(heap).toEqual([1, 1, 2, 3, 5, 9, 4, 6]);
        expect((0, index_1.heapPop)(heap)).toBe(1);
        expect((0, index_1.heapPop)(heap)).toBe(1);
        expect((0, index_1.heapPop)(heap)).toBe(2);
        expect((0, index_1.heapPop)(heap)).toBe(3);
        expect((0, index_1.heapPop)(heap)).toBe(4);
        expect((0, index_1.heapPop)(heap)).toBe(5);
        expect((0, index_1.heapPop)(heap)).toBe(6);
        expect((0, index_1.heapPop)(heap)).toBe(9);
        expect(heap.length).toBe(0);
    });
});
