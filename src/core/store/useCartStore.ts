import { create } from 'zustand';
import { Product } from '../../types/types';

type initialState = {
  cartItems: Product[];
};

type Actions = {
  setCartItems: (item: Product) => void;
};

const initialState: initialState = {
  cartItems: [],
};

export const useCartStore = create<initialState & Actions>((set) => ({
  ...initialState,
  setCartItems: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));
