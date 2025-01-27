import { catalog } from "../../utils";
import { ProductCard } from "./ProductCard";

export const ProductsContainer = () => {
  return (
    <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
      {catalog.map((product) => {
        return <ProductCard key={`product-key-${product.id}`} {...product} />;
      })}
    </section>
  );
};
