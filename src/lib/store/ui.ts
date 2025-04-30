import { create } from 'zustand';
import { type BusinessCase, businessCases } from '../consts/businessCases';

interface UiStore {
  aboutPageBgPath: BusinessCase['bgPath'];
  setAboutPageBgPath: ({ path }: { path: BusinessCase['bgPath'] }) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  aboutPageBgPath: businessCases[0].bgPath,

  setAboutPageBgPath: ({ path }) => set((state) => ({ aboutPageBgPath: path })),
}));
