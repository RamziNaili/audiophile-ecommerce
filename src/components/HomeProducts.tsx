import { FC } from 'react';

export const HomeProducts: FC = () => {
  return (
    <section className="flex justify-center mt-28 mb-96">
      <ul className="w-3/4 flex justify-between">
        <li className="w-[350px] h-[204px] bg-gray">
          <img src="src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" />
        </li>
        <li className="w-[350px] h-[204px] bg-gray"></li>
        <li className="w-[350px] h-[204px] bg-gray"></li>
      </ul>
    </section>
  );
};
