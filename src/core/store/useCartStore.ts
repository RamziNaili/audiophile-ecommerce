import { create } from 'zustand';
import { Product } from '../../types/types';

type CartItem = {
  product: Product;
  quantity: number;
};

type initialState = {
  cartItems: CartItem[];
};

type Actions = {
  setCartItems: (item: Product) => void;
};

const initialState: initialState = {
  cartItems: [],
};

export const useCartStore = create<initialState & Actions>((set) => ({
  ...initialState,
  setCartItems: (newProduct) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === newProduct.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.product.id === newProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { product: newProduct, quantity: 1 }],
        };
      }
    }),
}));
