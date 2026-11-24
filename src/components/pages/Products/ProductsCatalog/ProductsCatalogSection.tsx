import { products } from "../../../../data/dataProducts";
import ProductCard from "../../../ui/ProductCard";
import { useTranslation } from "../../../../data/translation";

const ProductCatalogSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="products-catalog"
      aria-labelledby="catalog-heading"
      className="bg-white py-20 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-text">
            {t.products.catalog.eyebrow}
          </span>

          <h2
            id="catalog-heading"
            className="mb-6 text-3xl font-bold text-header md:text-5xl"
          >
            {t.products.catalog.title}
          </h2>

          <p className="text-base leading-relaxed text-text md:text-lg">
            {t.products.catalog.description}
          </p>
        </header>

        {/* Semantic List Rendering */}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {products.map((product) => (
            <li key={product.id} className="h-full">
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
