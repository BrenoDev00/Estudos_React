import { create } from "zustand";
import type { UseCount } from "../../models/use-count";

export const useCountStore = create<UseCount>((set) => ({
  count: 0,

  incrementCount: () => set((state) => ({ count: state.count + 1 })),

  decrementCount: () => set(() => ({ count: 0 })),
}));
