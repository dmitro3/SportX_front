import { create } from "zustand";

export const useProfileModal = create<{
  isOpenModal: boolean;
  openProfileModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpenModal: false,
  isProfileWidgetOpen: false,
  openProfileModal: () =>
    set((state) => {
      return { ...state, isOpenModal: true,};
    }),
  closeModal: () =>
    set((state) => {
      return { ...state, isOpenModal: false };
    }),
}));
