import { create } from "zustand";

export interface User {
  id: string;
  email: string;
  role: "client" | "mover" | "truckOwner" | "helper" | "agent";
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));







