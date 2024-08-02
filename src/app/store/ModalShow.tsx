import create from "zustand";
import { UserData } from "../types";

type ModalShowState = {
  data: UserData[];
  isEditVisible: boolean;
  activeBannerId: number | null;
  AllclipPath: Array<string>;
  setData: (data: UserData[]) => void;
  showEdit: (id: number) => void;
  hideEdit: () => void;
};

export const useEditStore = create<ModalShowState>((set) => ({
  data: [],
  isEditVisible: false,
  activeBannerId: null,
  AllclipPath: [
    "circle(30% at 50% 50%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ],
  setData: (data: UserData[]) => set({ data }),
  showEdit: (id: number) => set({ isEditVisible: true, activeBannerId: id }),
  hideEdit: () => set({ isEditVisible: false, activeBannerId: null }),
}));
