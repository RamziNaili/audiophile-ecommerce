import { Product } from '../types/types';
import products from '../assets/data.json';

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};
