import {
  Microscope,
  ShieldCheck,
  Factory,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    icon: Microscope,
    title: "Latar Belakang Teknis",
    description:
      "Didukung oleh tenaga ahli dan staf berpengalaman, serta kerja sama penelitian dan pengembangan teknologi dengan berbagai institusi pendidikan.",
  },
  {
    icon: ShieldCheck,
    title: "Jaminan Kualitasi",
    description:
      "Kami menerapkan proses produksi dan pemeriksaan kualitas yang ketat. Setiap produk melalui pemeriksaan kualitas sebelum dikirim kepada pelanggan.",
  },
  {
    icon: Factory,
    title: "Penjualan Langsung dari Pabrik",
    description:
      "Mengintegrasikan proses produksi, pengolahan, penjualan, konsultasi teknis, dan layanan dalam satu perusahaan. Didukung harga kompetitif serta proses pengiriman yang cepat.",
  },
  {
    icon: Handshake,
    title: "Dukungan Purna Jual",
    description:
      "Kami menyediakan layanan purna jual dan dukungan teknis dari tenaga ahli untuk membantu pelanggan mendapatkan solusi yang sesuai dengan kebutuhan proyek.",
  },
];
