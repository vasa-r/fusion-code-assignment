import { ProductType } from "../lib/types";

const ProductCard = ({ title, subHeading, img }: Partial<ProductType>) => {
  return (
    <div className="absolute flex flex-col items-center bottom-10">
      <img src={img} alt="product image" className="" />
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-bold cursor-pointer hover:underline">{title}</h2>
        <p className="font-light text-center text-text">{subHeading}</p>
      </div>
    </div>
  );
};

export default ProductCard;
