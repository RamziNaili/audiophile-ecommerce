import { create } from 'zustand';
import { CartItem, Product } from '../../types/types';

type initialState = {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
};

type Actions = {
  setCartItems: (item: Product, quantity: number) => void;
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

  setCartItems: (newProduct, quantity) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === newProduct.id
      );

      let updatedCartItems;

      // Si l'article existe déjà dans le panier, ajouter la quantité
      if (existingItem) {
        updatedCartItems = state.cartItems.map((item) =>
          item.product.id === newProduct.id
            ? { ...item, quantity: item.quantity + quantity } // Ajouter la quantité
            : item
        );
      } else {
        // Sinon, ajouter l'article avec la quantité spécifiée
        updatedCartItems = [
          ...state.cartItems,
          { product: newProduct, quantity }, // Utiliser la quantité fournie
        ];
      }

      // Calculer le nombre total d'articles et le prix total
      const { totalItems, totalPrice } = updatedCartItems.reduce(
        (totals, item) => {
          const { quantity } = item;
          const { price } = item.product;
          return {
            totalItems: totals.totalItems + quantity,
            totalPrice: totals.totalPrice + price * quantity,
          };
        },
        { totalItems: 0, totalPrice: 0 } // Valeurs initiales
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
