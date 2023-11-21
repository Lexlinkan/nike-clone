import { products } from "../constants";
import PopularProductCard from "./PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience unparalleled quality and sophistication with our highly
          coveted selections. Immerse yourself in a realm of comfort,
          cutting-edge design, and exceptional value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 grid-col-1 sm:gap-4 gap-14">
        {products.map((products) => (
          <PopularProductCard key={products.name} {...products}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
