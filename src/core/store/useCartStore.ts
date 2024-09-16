import { create } from 'zustand';
import { Product } from '../../types/types';

type CartItem = {
  product: Product;
  quantity: number;
};

type initialState = {
  cartItems: CartItem[];
  totalItems: number; // Ajout de la propriété pour le nombre total d'items
};

type Actions = {
  setCartItems: (item: Product) => void;
};

const initialState: initialState = {
  cartItems: [],
  totalItems: 0, // Initialisation du compteur à 0
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

      return {
        cartItems: updatedCartItems,
        totalItems, // Mise à jour du nombre total d'items
      };
    }),
}));
