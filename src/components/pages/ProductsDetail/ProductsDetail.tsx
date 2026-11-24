import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { products } from "../../../data/dataProducts";

const ProductsDetail = () => {
  // useParams dari Modul 10: menangkap ID produk dari URL
  const { id } = useParams<{ id: string }>();

  // Cari data produk berdasarkan ID di URL
  const product = products.find((p) => p.id === id);

  const waMessage = encodeURIComponent(
    `Halo Pak Budi, saya ingin meminta informasi teknis dan penawaran untuk produk: ${
      product?.name || "Aditif Aspal Hubei Luxiang"
    }.`,
  );

  return (
    <main className="min-h-[80vh] bg-slate-50 py-24 md:py-32 flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-16 text-center shadow-sm">
          {/* Icon Informasi */}
          <div
            className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
            aria-hidden="true"
          >
            <AlertCircle size={44} strokeWidth={1.8} />
          </div>

          {/* Nama Produk yang Sedang Dilihat */}
          {product && (
            <span className="inline-block bg-slate-100 text-header text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              {product.name}
            </span>
          )}

          {/* Tulisan Besar Sesuai Permintaan */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-header mb-6 leading-tight">
            Belum Ada Detail Produk Saat Ini
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Spesifikasi teknis lengkap, lembar data laboratorium (TDS), dan
            panduan aplikasi untuk produk ini sedang dalam tahap pembaruan.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 text-header font-semibold text-sm hover:bg-slate-100 transition duration-300 active:scale-95"
            >
              <ArrowLeft size={18} />
              <span>Kembali ke Produk</span>
            </Link>

            <a
              href={`https://wa.me/628175797344?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition duration-300 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Tanya Detail via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsDetail;
