import { create } from "zustand";

export const useModal = create<{
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}>((set) => ({
    isOpenModal: false,
    isProfileWidgetOpen: false,
    openModal: () =>
        set((state) => {
            return { ...state, isOpenModal: true,};
        }),
    closeModal: () =>
        set((state) => {
            return { ...state, isOpenModal: false };
        }),
}));
