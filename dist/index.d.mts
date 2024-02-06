type PrioritizedItem<T = any> = [number, T];
type Item<T = any> = T | PrioritizedItem<T>;
declare const heapify: <T>(arr: Item<T>[]) => void;
declare const heappush: <T>(arr: Item<T>[], item: Item<T>) => void;
declare const heappop: <T>(arr: Item<T>[]) => Item<T>;

export { type Item, type PrioritizedItem, heapify, heappop, heappush };
