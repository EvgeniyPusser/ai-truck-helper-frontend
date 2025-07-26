import { create } from "zustand";

interface MoveState {
  formData: {
    from: string;
    to: string;
    date: string;
    volume: number;
    needHelpers: boolean;
  };
  setFormData: (newData: Partial<MoveState["formData"]>) => void;

  result: any;
  setResult: (result: any) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  reset: () => void;
}

export const useMoveStore = create<MoveState>((set) => ({
  formData: {
    from: "",
    to: "",
    date: "",
    volume: 0,
    needHelpers: false,
  },
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  result: null,
  setResult: (result) => set({ result }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  reset: () =>
    set({
      formData: {
        from: "",
        to: "",
        date: "",
        volume: 0,
        needHelpers: false,
      },
      result: null,
      loading: false,
    }),
}));
