import { Product } from '../types/types';
import products from '../assets/data.json';

export const getProductBySlug = (
  slug: string | undefined
): Product | undefined => {
  if (!slug) return;
  return products.find((product) => product.slug === slug);
};
