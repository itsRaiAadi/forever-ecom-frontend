import react from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="p-3 rounded cursor-pointer">
      <img src={product.images[0]} alt={product.name} className="w-full h-60" />

      <p className="mt-2 text-[10px]">{product.name}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
