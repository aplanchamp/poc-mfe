import { createStore } from 'zustand/vanilla';

export const storeBear = createStore((set) => ({
  bears: 1,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
