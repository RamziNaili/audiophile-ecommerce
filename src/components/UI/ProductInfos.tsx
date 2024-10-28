import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/types';
import { Button } from '../Button';
import { Numbers } from '../Numbers';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../core/store/useCartStore';
import { getProductBySlug } from '../../utils/utils';

import yx1EarphonesMobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg';
import xx59HeadphonesMobile from '../../assets/product-xx59-headphones/mobile/image-product.jpg';
import xx99MarkOneHeadphonesMobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import xx99MarkTwoHeadphonesMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import zx7SpeakerMobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg';
import zx9SpeakerMobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg';

import yx1EarphonesGallery1 from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import yx1EarphonesGallery2 from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import yx1EarphonesGallery3 from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

import xx59HeadphonesGallery1 from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import xx59HeadphonesGallery2 from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import xx59HeadphonesGallery3 from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

import xx99MarkOneHeadphonesGallery1 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import xx99MarkOneHeadphonesGallery2 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import xx99MarkOneHeadphonesGallery3 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

import xx99MarkTwoHeadphonesGallery1 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import xx99MarkTwoHeadphonesGallery2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import xx99MarkTwoHeadphonesGallery3 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

import zx7SpeakerGallery1 from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import zx7SpeakerGallery2 from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import zx7SpeakerGallery3 from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

import zx9SpeakerGallery1 from '../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import zx9SpeakerGallery2 from '../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import zx9SpeakerGallery3 from '../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

import xx99MarkOneHeadphones from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import xx59Headphones from '../../assets/shared/desktop/image-xx59-headphones.jpg';
import zx9Speaker from '../../assets/shared/desktop/image-zx9-speaker.jpg';
import xx99MarkTwoHeadphones from '../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import zx7Speaker from '../../assets/shared/desktop/image-zx7-speaker.jpg';

type Props = {
  product: Product | undefined;
};

export const ProductInfos: FC<Props> = ({ product }) => {
  const { cartItems } = useCartStore((state) => state);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const desktopImages: {
    [key: string]: string;
  } = {
    'xx99-mark-one-headphones': xx99MarkOneHeadphones,
    'xx59-headphones': xx59Headphones,
    'zx9-speaker': zx9Speaker,
    'xx99-mark-two-headphones': xx99MarkTwoHeadphones,
    'zx7-speaker': zx7Speaker,
  };

  const firstGalleryImages = [
    yx1EarphonesGallery1,
    xx59HeadphonesGallery1,
    xx99MarkOneHeadphonesGallery1,
    xx99MarkTwoHeadphonesGallery1,
    zx7SpeakerGallery1,
    zx9SpeakerGallery1,
  ];

  const secondGalleryImages = [
    yx1EarphonesGallery2,
    xx59HeadphonesGallery2,
    xx99MarkOneHeadphonesGallery2,
    xx99MarkTwoHeadphonesGallery2,
    zx7SpeakerGallery2,
    zx9SpeakerGallery2,
  ];

  const thirdGalleryImages = [
    yx1EarphonesGallery3,
    xx59HeadphonesGallery3,
    xx99MarkOneHeadphonesGallery3,
    xx99MarkTwoHeadphonesGallery3,
    zx7SpeakerGallery3,
    zx9SpeakerGallery3,
  ];

  const images = [
    yx1EarphonesMobile,
    xx59HeadphonesMobile,
    xx99MarkOneHeadphonesMobile,
    xx99MarkTwoHeadphonesMobile,
    zx7SpeakerMobile,
    zx9SpeakerMobile,
  ];

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product | undefined) => {
    if (!product) return;
    setCartItems(product, counter);
  };

  if (!product) return null;

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
              src={images[product.id - 1]}
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
            <div className="flex items-center gap-4 mt-7">
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
              src={firstGalleryImages[product.id - 1]}
              alt={product?.slug}
              className="rounded-[8px]"
            />
            <img
              src={secondGalleryImages[product.id - 1]}
              alt={product?.slug}
              className="rounded-[8px]"
            />
          </div>
          <img
            src={thirdGalleryImages[product.id - 1]}
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
                src={desktopImages[article.slug]}
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
