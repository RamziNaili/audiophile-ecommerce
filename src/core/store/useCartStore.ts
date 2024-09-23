import { create } from 'zustand';
import { CartItem, Product } from '../../types/types';

type initialState = {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
};

type Actions = {
  setCartItems: (item: Product) => void;
  incrementQuantity: (slug: string) => void;
  decrementQuantity: (slug: string) => void;
  removeAll: () => void;
};

const initialState: initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<initialState & Actions>((set) => ({
  ...initialState,

  setCartItems: (newProduct) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === newProduct.id
      );

      let updatedCartItems;

      if (existingItem) {
        updatedCartItems = state.cartItems.map((item) =>
          item.product.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { product: newProduct, quantity: 1 },
        ];
      }

      const totalItems = updatedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      // Recalculer le prix total
      const totalPrice = updatedCartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      return {
        cartItems: updatedCartItems,
        totalItems,
        totalPrice,
      };
    }),
  incrementQuantity: (slug: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.product.slug === slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const totalItems = updatedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedCartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      return {
        cartItems: updatedCartItems,
        totalItems,
        totalPrice,
      };
    }),
  decrementQuantity: (slug: string) =>
    set((state) => {
      let updatedCartItems = state.cartItems.map((item) =>
        item.product.slug === slug
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Supprimer les articles dont la quantité est 0
      updatedCartItems = updatedCartItems.filter((item) => item.quantity > 0);

      const totalItems = updatedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedCartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      return {
        cartItems: updatedCartItems,
        totalItems,
        totalPrice,
      };
    }),
  removeAll: () =>
    set({
      cartItems: [],
      totalItems: 0,
      totalPrice: 0,
    }),
}));
