interface ProductCardProps {
  name: string;
  description: string;
}

const ProductCard = ({ name, description }: ProductCardProps) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white text-text shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-linear-to-r from-blue-500 to-blue-600 shadow-lg"></div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-header">{name}</h3>

        <p className="text-base text-text">{description}</p>
      </div>

      <div className="p-6 pt-0">
        <button
          type="button"
          className="rounded-lg bg-button px-6 py-3 text-xs font-bold text-white transition hover:bg-hover-button duration-300"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
