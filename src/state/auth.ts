import { create } from "zustand";

export const isLoginRegister = create((set) => ({
  isLoggingIn: true,
  setState: (state: boolean) => set({ isLoggingIn: state }),
}));
