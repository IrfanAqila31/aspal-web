import type { Product } from "../../../data/dataProducts";
import { Link } from "react-router-dom";
import { useTranslation } from "../../../data/translation";

type ProductCardProps = Pick<Product, "id" | "name" | "image" | "description">;

const ProductCard = ({ id, name, image, description }: ProductCardProps) => {
  const { t } = useTranslation();

  const localizedItem = (
    t.products.items as Record<string, { name: string; description: string }>
  )[id];
  const displayName = localizedItem?.name || name;
  const displayDesc = localizedItem?.description || description;

  return (
    <article className="relative flex h-full flex-col rounded-xl bg-white text-text shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shrink-0">
        <img
          src={image}
          alt={displayName}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-header">{displayName}</h3>
        <p className="text-sm leading-relaxed text-text md:text-base">
          {displayDesc}
        </p>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Link
          to={`/products/${id}`}
          className="rounded-lg bg-button px-6 py-3 text-xs font-bold text-white transition hover:bg-hover-button duration-300 w-full md:w-auto cursor-pointer inline-block text-center"
        >
          {t.buttons.viewDetail}
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
