import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set((state) => ({ count: (state.count = 0) })),
}));
