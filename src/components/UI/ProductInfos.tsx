import { FC } from 'react';
import { Product } from '../../types/types';
import { Button } from '../Button';
import { Numbers } from '../Numbers';

type Props = {
  product: Product | undefined;
};

export const ProductInfos: FC<Props> = ({ product }) => {
  return (
    <section className="flex flex-col justify-center">
      <div
        className={`flex flex-col lg:flex-row lg:gap-[125px] justify-center items-center lg:w-3/4 `}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="max-lg:w-5/6 font-medium text-black/[.5] text-[15px] mb-6">
            Go Back
          </p>
          <img
            src={'src/' + product?.image.mobile}
            alt={product?.slug}
            className="max-lg:w-5/6 rounded-[8px]"
          />
        </div>

        <div className="flex flex-col justify-center max-md:w-5/6">
          {product?.new && (
            <p className="mt-8 sm:mt-12 uppercase text-[14px] tracking-[10px] text-primary">
              new product
            </p>
          )}
          <h4
            className={`font-bold text-[28px] tracking-[1px] sm:tracking-[1.43px] sm:leading-[44px] sm:text-[40px] uppercase w-3/4 lg:w-[400px] ${
              product?.new ? 'mt-6' : 'mt-8 sm:mt-12'
            }`}
          >
            {product?.name}
          </h4>
          <p className="w-3/4 lg:w-[450px] text-black/[.5] font-medium text-[15px] leading-[25px] mt-6 sm:mt-8">
            {product?.description}
          </p>
          <p className="mt-6 font-bold text-[18px] tracking-[1.29px]">
            {'$ ' + product?.price}
          </p>
          <div className="flex justify-between mt-7">
            <Numbers />
            <Button>add to cart</Button>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <div className="w-5/6">
          <p className="uppercase font-bold text-[24px] leading-[36px] tracking-[0.86px]">
            features
          </p>
          <p className="mt-6 font-medium text-black/[.5] text-[15px] leading-[25px]">
            {product?.features}
          </p>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <div className="w-5/6">
          <p className="uppercase font-bold text-[24px] leading-[36px] tracking-[.86px] mb-6">
            in the box
          </p>
          <div className="flex flex-col gap-2">
            {product?.includes.map((p) => (
              <div className="flex gap-[21px]">
                <p className="text-primary font-bold text-[15px] leading-[25px] ">
                  {p.quantity}x
                </p>
                <p className="text-black/[.5] font-medium text-[15px] leading-[25px]">
                  {p.item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mt-20">
        <img
          src={'src/' + product?.gallery.first.desktop}
          alt={product?.slug}
          className="w-5/6 rounded-[8px]"
        />
        <img
          src={'src/' + product?.gallery.second.desktop}
          alt={product?.slug}
          className="w-5/6 rounded-[8px]"
        />
        <img
          src={'src/' + product?.gallery.third.desktop}
          alt={product?.slug}
          className="w-5/6 rounded-[8px]"
        />
      </div>
      <div className="flex flex-col items-center my-28">
        <p className="font-bold text-[24px] leading-[36px] tracking-[.86px] text-center uppercase mb-10">
          you may also like
        </p>
        <div className="flex flex-col gap-14">
          {product?.others.map((article) => (
            <div className="flex flex-col items-center gap-8">
              <img
                src={'src/' + article.image.desktop}
                alt={article.name}
                className="w-5/6 rounded-[8px]"
              />
              <p className="font-bold text-[24px] tracking-[1.70px] uppercase">
                {article.name}
              </p>
              <Button>see procuct</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
