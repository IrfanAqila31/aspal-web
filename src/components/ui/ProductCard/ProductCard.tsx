import type { Product } from "../../../data/dataProducts";
import { Link } from "react-router-dom";
type ProductCardProps = Pick<Product, "id" | "name" | "image" | "description">;

const ProductCard = ({ id, name, image, description }: ProductCardProps) => {
  return (
    <article className="relative flex h-full flex-col rounded-xl bg-white text-text shadow-md">
      {/* Gambar dengan tinggi konsisten */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shrink-0">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* flex-1 agar teks mengambil sisa ruang yang ada */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-header">{name}</h3>
        <p className="text-sm leading-relaxed text-text md:text-base">
          {description}
        </p>
      </div>

      {/* mt-auto membuat tombol selalu nempel di bagian paling bawah kartu */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          to={`/products/${id}`}
          className="rounded-lg bg-button px-6 py-3 text-xs font-bold text-white transition hover:bg-hover-button duration-300 w-full md:w-auto cursor-pointer"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
