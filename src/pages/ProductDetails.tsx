import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { HomeCategorys } from '../components/HomeCategorys';
import { HomeBenefits } from '../components/HomeBenefits';
import { ProductInfos } from '../components/UI/ProductInfos';
import { getProductBySlug } from '../utils/utils';

export const ProductDetails: FC = () => {
  const { productSlug } = useParams();

  console.log(productSlug);

  if (!productSlug) return null;

  return (
    <main>
      <div className="bg-black mb-16 sm:mb-32">
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-5/6 lg:w-3/4">
            <Header />
          </div>
        </div>
      </div>
      <ProductInfos product={getProductBySlug(productSlug)} />
      <HomeCategorys />
      <HomeBenefits />
    </main>
  );
};
