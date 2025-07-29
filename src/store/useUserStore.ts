import { create } from "zustand";

interface User {
  role: "client" | "mover" | "truckOwner" | "helper" | "agent";
  // add other fields if needed
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));




