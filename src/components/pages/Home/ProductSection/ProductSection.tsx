import { products } from "../../../../data/dataProducts";
import ProductCard from "../../../ui/ProductCard";

const ProductSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-25 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-text">
            Produk Kami
          </span>

          <h2 className="mb-6 text-3xl font-bold text-header md:text-5xl">
            Solusi Aditif Aspal Berkualitas
          </h2>

          <p className="text-lg leading-relaxed text-text">
            Temukan berbagai produk aditif aspal dan material pemeliharaan jalan
            berkualitas tinggi yang dirancang untuk meningkatkan performa,
            ketahanan, dan kualitas infrastruktur jalan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
