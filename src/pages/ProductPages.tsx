import { FC } from 'react';
import { Header } from '../components/Header';
import { HomeBenefits } from '../components/HomeBenefits';
import products from '../assets/data.json';
import { Product } from '../types/types';
import { ProductDescription } from '../components/UI/ProductDescription';
import { HomeCategorys } from '../components/HomeCategorys';

type Props = {
  product: 'headphones' | 'speakers' | 'earphones';
  productsToDisplaySlug: string[];
};

const getProductBySlug = (
  slug: string,
  productList: Product[]
): Product | undefined => {
  return productList.find((product) => product.slug === slug);
};

export const ProductPages: FC<Props> = ({ product, productsToDisplaySlug }) => {
  const foundProducts = productsToDisplaySlug
    .map((slug) => getProductBySlug(slug, products))
    .filter(Boolean) as Product[];

  return (
    <section>
      <div className="bg-black mb-16 sm:mb-32">
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-5/6 lg:w-3/4">
            <Header />
          </div>
        </div>
        <h1 className="flex items-center justify-center bg-black text-white py-8 uppercase font-bold text-[28px] tracking-[2px] h-24 md:h-60">
          {product}
        </h1>
      </div>
      {foundProducts.map((product, index) => (
        <ProductDescription product={product} index={index} />
      ))}
      <HomeCategorys />
      <HomeBenefits />
    </section>
  );
};
