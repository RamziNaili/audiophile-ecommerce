import { FC } from "react";
import { Product } from "../../types/types";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

type Props = {
  product: Product;
  index: number;
};

export const ProductDescription: FC<Props> = ({ product, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col lg:flex-row lg:gap-[125px] justify-center mb-32 lg:w-3/4 ${!isEvenIndex && "lg:flex-row-reverse"}`}
      >
        <div className="flex items-center justify-center">
          <img
            src={"src/" + product.image.mobile}
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
              product.new ? "mt-6" : "mt-8 sm:mt-12"
            }`}
          >
            {product.name}
          </h4>
          <p className="w-3/4 lg:w-[450px] max-lg:text-center text-black/[.5] font-medium text-[15px] leading-[25px] mt-6 sm:mt-8">
            {product.description}
          </p>
          <NavLink to={`/${product.slug}`}>
            <Button className="mt-6">see product</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
