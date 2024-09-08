import { FC } from 'react';
import { Button } from './Button';

export const HomeProducts: FC = () => {
  const categorys = [
    {
      path: 'src/assets/shared/desktop/image-category-thumbnail-headphones.png',
      category: 'headphones',
    },
    {
      path: 'src/assets/shared/desktop/image-category-thumbnail-speakers.png',
      category: 'speakers',
    },
    {
      path: 'src/assets/shared/desktop/image-category-thumbnail-earphones.png',
      category: 'earphones',
    },
  ];

  return (
    <section className="flex justify-center mt-52 mb-96">
      <ul className="w-3/4 flex justify-between">
        {categorys.map((category) => (
          <li
            className="relative"
            key={category.path + '-' + category.category}
          >
            <div className="w-[350px] h-[204px] bg-gray block flex flex-col items-center ">
              <h2 className="pt-[100px] uppercase font-bold text-lg">
                {category.category}
              </h2>
              <Button variant="ghost">shop</Button>
            </div>
            <img
              className="absolute bottom-20 left-[60px] w-[230px]"
              src={category.path}
              alt={`category ${category.category}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
