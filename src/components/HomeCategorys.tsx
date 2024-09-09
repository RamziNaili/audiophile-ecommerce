import { FC } from "react";
import { Button } from "./Button";

export const HomeCategorys: FC = () => {
  const categorys = [
    {
      path: "src/assets/shared/desktop/image-category-thumbnail-headphones.png",
      category: "headphones",
    },
    {
      path: "src/assets/shared/desktop/image-category-thumbnail-speakers.png",
      category: "speakers",
    },
    {
      path: "src/assets/shared/desktop/image-category-thumbnail-earphones.png",
      category: "earphones",
    },
  ];

  return (
    <section className="flex justify-center mt-52 mb-96">
      <ul className="flex flex-col md:flex-row gap-20 md:gap-2.5 lg:gap-7 items-center">
        {categorys.map((category) => (
          <li
            className="relative"
            key={category.path + "-" + category.category}
          >
            <div className="bg-gray flex flex-col items-center justify-center w-[330px] md:w-[225px] xl:w-[350px]">
              <h2 className="pt-[88px] uppercase font-bold text-lg">
                {category.category}
              </h2>
              <Button className="pb-6" variant="ghost">
                shop
              </Button>
            </div>
            <img
              className="absolute bottom-20 left-[80px] md:left-[25px] xl:left-[60px] w-[160px] md:w-[180px] xl:w-[230px]"
              src={category.path}
              alt={`category ${category.category}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
