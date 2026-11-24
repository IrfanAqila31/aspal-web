import { products } from "../../../../data/dataProducts";
import ProductCard from "../../../ui/ProductCard";
import { useTranslation } from "../../../../data/translation";

const ProductSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-25 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-text">
            {t.home.products.eyebrow}
          </span>

          <h2 className="mb-6 text-3xl font-bold text-header md:text-5xl">
            {t.home.products.title}
          </h2>

          <p className="text-lg leading-relaxed text-text">
            {t.home.products.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
