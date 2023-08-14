import { BsFillBoxFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <div className="bg-white p-8 mb-3 rounded-2xl flex flex-col md:flex-row border-2 border-white hover:border-blue-800 shadow-lg">
      <div className="w-full md:w-[10%] mb-10 md:mb-0 flex justify-center items-center rounded-xl">
        <img
          className="rounded-xl md:w-[80%]"
          src={product.image}
          alt="image"
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-2 mb-10 md:mb-0">
        <div className="flex flex-col md:flex-row gap-2">
          <h2 className="">{product.name}</h2>
          <div className="flex justify-between gap-2">
            <span className="px-2 py-1 bg-blue-800 text-white text-xs rounded-2xl">
              {product.category.title}
            </span>
            <span className="px-2 py-1 bg-green-700 text-white text-xs rounded-2xl">
              {product.status}
            </span>
            <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-2xl">
              {product.cookingTime} min
            </span>
          </div>
        </div>
        <p className="text-gray-400">{product.description}</p>
      </div>
      <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center">
        <span className="text-2xl font-light">${product.currentPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
