import { create } from "zustand";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
};

export const useThemeStore = create((set) => ({
    isDark: getInitialTheme(),
    setIsDark: (value) => {
        set((state) => ({ isDark: value !== undefined ? value : !state.isDark }))
    },
}));

export const useStore = create((set) => ({
    isHamIconClicked: false,
    setisHamIconClicked: () => set((state) => ({
        isHamIconClicked: !state.isHamIconClicked
    })),
}));