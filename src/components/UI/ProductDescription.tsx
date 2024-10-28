import { FC } from 'react';
import { Product } from '../../types/types';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

import yx1EarphonesMobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg';
import xx59HeadphonesMobile from '../../assets/product-xx59-headphones/mobile/image-product.jpg';
import xx99MarkOneHeadphonesMobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import xx99MarkTwoHeadphonesMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import zx7SpeakerMobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg';
import zx9SpeakerMobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg';

type Props = {
  product: Product;
  index: number;
};

export const ProductDescription: FC<Props> = ({ product, index }) => {
  const isEvenIndex = index % 2 === 0;

  const images = [
    yx1EarphonesMobile,
    xx59HeadphonesMobile,
    xx99MarkOneHeadphonesMobile,
    xx99MarkTwoHeadphonesMobile,
    zx7SpeakerMobile,
    zx9SpeakerMobile,
  ];

  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col lg:flex-row lg:gap-[125px] justify-center mb-32 lg:w-3/4 ${!isEvenIndex && 'lg:flex-row-reverse'}`}
      >
        <div className="flex items-center justify-center">
          <img
            src={images[product.id - 1]}
            alt={product.slug}
            className="max-lg:w-5/6 rounded-[8px]"
          />
        </div>

        <div className="flex flex-col max-lg:items-center justify-center">
          {product.new && (
            <p className="mt-8 sm:mt-12 uppercase text-[14px] tracking-[10px] text-primary">
              new product
            </p>
          )}
          <h4
            className={`font-bold text-[28px] tracking-[1px] sm:tracking-[1.43px] sm:leading-[44px] max-lg:text-center sm:text-[40px] uppercase w-3/5 lg:w-[400px] ${
              product.new ? 'mt-6' : 'mt-8 sm:mt-12'
            }`}
          >
            {product.name}
          </h4>
          <p className="w-3/4 lg:w-[450px] max-lg:text-center text-black/[.5] font-medium text-[15px] leading-[25px] mt-6 sm:mt-8">
            {product.description}
          </p>
          <NavLink to={`/${product.slug}`} className="mt-6">
            <Button>see product</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
