import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/types';
import { Button } from '../Button';
import { Numbers } from '../Numbers';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../core/store/useCartStore';
import { getProductBySlug } from '../../utils/utils';

type Props = {
  product: Product | undefined;
};

export const ProductInfos: FC<Props> = ({ product }) => {
  const { cartItems } = useCartStore((state) => state);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product | undefined) => {
    if (!product) return;
    setCartItems(product, counter);
  };

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div
          className={`flex flex-col lg:flex-row lg:gap-[125px] justify-around items-center lg:w-3/4 `}
        >
          <div className="flex flex-col max-lg:items-center justify-center">
            <p
              className="max-lg:w-5/6 font-medium text-black/[.5] text-[15px] mb-6"
              onClick={() => navigate(-1)}
            >
              Go Back
            </p>
            <img
              src={'src/' + product?.image.mobile}
              alt={product?.slug}
              className="w-5/6 lg:w-[550px] rounded-[8px]"
            />
          </div>

          <div className="flex flex-col justify-center max-lg:w-5/6 ">
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
            <div className="flex gap-4 mt-7">
              <Numbers counter={counter} setCounter={setCounter} />
              <Button
                onClick={() => addToCart(getProductBySlug(product?.slug))}
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div className="md:flex md:flex-row md:gap-[125px] md:w-3/4">
          <div className="mt-20 flex justify-center">
            <div className="max-md:w-5/6">
              <p className="uppercase font-bold text-[24px] leading-[36px] tracking-[0.86px]">
                features
              </p>
              <p className="mt-6 font-medium text-black/[.5] text-[15px] leading-[25px]">
                {product?.features}
              </p>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <div className="w-5/6 md:w-[230px] flex flex-col sm:flex-row sm:gap-[168px] md:flex-col md:gap-0">
              <p className="uppercase font-bold text-[24px] leading-[36px] tracking-[.86px] mb-6">
                in the box
              </p>
              <div className="flex flex-col gap-2">
                {product?.includes.map((p) => (
                  <div
                    className="flex gap-[21px]"
                    key={p.item + p.quantity + product.name}
                  >
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
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-5/6 sm:w-3/4">
          <div className="flex flex-col gap-5">
            <img
              src={'src/' + product?.gallery.first.desktop}
              alt={product?.slug}
              className="rounded-[8px]"
            />
            <img
              src={'src/' + product?.gallery.second.desktop}
              alt={product?.slug}
              className="rounded-[8px]"
            />
          </div>
          <img
            src={'src/' + product?.gallery.third.desktop}
            alt={product?.slug}
            className="h-full w-auto rounded-[8px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-28">
        <p className="font-bold text-[24px] leading-[36px] tracking-[.86px] text-center uppercase mb-10">
          you may also like
        </p>
        <div className="flex flex-col md:flex-row md:justify-between w-5/6 md:w-3/4 max-md:gap-14">
          {product?.others.map((article) => (
            <div
              className="flex flex-col items-center gap-8"
              key={article.name + product.category}
            >
              <img
                src={'src/' + article.image.desktop}
                alt={article.name}
                className="w-5/6 rounded-[8px]"
              />
              <p className="font-bold text-[24px] tracking-[1.70px] uppercase">
                {article.name}
              </p>
              <NavLink to={`/${article.slug}`}>
                <Button>see product</Button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
