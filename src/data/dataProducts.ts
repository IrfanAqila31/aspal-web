import LigninFiber from "../assets/images/products/lignin-fiber.webp";
import AntiRuttingAgent from "../assets/images/products/anti-rutting-agent.webp";
import WarmMixAgent from "../assets/images/products/warm-mix-agent.webp";
import AntiStrippingAgent from "../assets/images/products/anti-stripping-agent.webp";
import HighViscosityAgent from "../assets/images/products/high-viscosity-agent.webp";
import PolyacrylonitrileFibre from "../assets/images/products/polyacrylonitrile-fibre.webp";
import PolyesterFibre from "../assets/images/products/polyester-fibre.webp";
import BasaltFibre from "../assets/images/products/basalt-fibre.webp";
import AsphaltRejuvenator from "../assets/images/products/asphalt-rejuvenator.webp";
import EnergyStorageLuminescentPaint from "../assets/images/products/energy-storage-luminescent-paint.webp";
import AntiFreezingAgent from "../assets/images/products/anti-freezing-agent.webp";
import CompositeFlameRetardant from "../assets/images/products/composite-flame-retardant-smoke-suppressant.webp";

export interface Product {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  dosage: string;
  packing: string;
  badge: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "lignin-fiber",
    name: "Lignin Fiber",
    type: "Fiber",
    tagline: "Serat alami penguat campuran aspal",
    description:
      "Meningkatkan stabilitas dan ketahanan terhadap retak pada campuran aspal.",
    dosage: "0.3% dari berat campuran aspal",
    packing: "Karung 20 kg",
    badge: "Natural Fiber",
    image: LigninFiber,
  },
  {
    id: "anti-rutting-agent",
    name: "Anti-Rutting Agent",
    type: "Pellet",
    tagline: "Mencegah alur roda akibat beban berat",
    description:
      "Meningkatkan ketahanan campuran aspal terhadap deformasi permanen akibat beban berat.",
    dosage: "3–5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "HDPE Pellet",
    image: AntiRuttingAgent,
  },
  {
    id: "warm-mix-agent",
    name: "Warm Mix Agent",
    type: "Additive",
    tagline: "Hemat energi produksi 30–40°C",
    description:
      "Mengurangi suhu pencampuran dan pemadatan aspal sehingga dapat menghemat energi.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Drum 200 kg / Karung 25 kg",
    badge: "Energy Saving",
    image: WarmMixAgent,
  },
  {
    id: "anti-stripping-agent",
    name: "Anti-Stripping Agent",
    type: "Liquid",
    tagline: "Mencegah pelepasan lapisan akibat air",
    description:
      "Memperkuat daya lekat antara agregat dan aspal untuk mencegah kerusakan akibat kelembapan.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Drum 200 kg / Jeriken 25 kg",
    badge: "Liquid",
    image: AntiStrippingAgent,
  },
  {
    id: "high-viscosity-agent",
    name: "High-Viscosity Agent",
    type: "Additive",
    tagline: "Pengental aspal performa tinggi",
    description:
      "Meningkatkan viskositas bahan pengikat aspal untuk menghasilkan perkerasan yang tahan lama dan berkinerja tinggi.",
    dosage: "3–5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "High Performance",
    image: HighViscosityAgent,
  },
  {
    id: "polyacrylonitrile-fibre",
    name: "Polyacrylonitrile Fibre",
    type: "Fiber",
    tagline: "Serat PAN penguat tarik & retak",
    description:
      "Meningkatkan kekuatan tarik dan membantu mengendalikan retak pada lapisan aspal.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Synthetic Fiber",
    image: PolyacrylonitrileFibre,
  },
  {
    id: "polyester-fibre",
    name: "Polyester Fibre",
    type: "Fiber",
    tagline: "Serat poliester tahan lelah & retak",
    description:
      "Meningkatkan daya tahan dan ketahanan terhadap kelelahan material untuk menghasilkan jalan yang lebih tahan lama.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Fatigue Resistant",
    image: PolyesterFibre,
  },
  {
    id: "basalt-fibre",
    name: "Basalt Fibre",
    type: "Fiber",
    tagline: "Serat basalt alami tahan panas tinggi",
    description:
      "Serat alami berkekuatan tinggi untuk penguatan material dan stabilitas termal.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Heat Resistant",
    image: BasaltFibre,
  },
  {
    id: "asphalt-rejuvenator",
    name: "Asphalt Rejuvenator",
    type: "Liquid",
    tagline: "Peremaja aspal daur ulang (RAP)",
    description:
      "Mengembalikan karakteristik aspal yang telah mengalami penuaan untuk memperpanjang umur layanan perkerasan.",
    dosage: "1.5–3% dari berat RAP",
    packing: "Drum 200 kg",
    badge: "Eco RAP",
    image: AsphaltRejuvenator,
  },
  {
    id: "luminescent-paint",
    name: "Energy Storage Luminescent Paint",
    type: "Paint",
    tagline: "Cat marka bercahaya di malam hari",
    description:
      "Cat fotoluminesen yang menyerap dan menyimpan energi cahaya untuk meningkatkan visibilitas pada malam hari.",
    dosage: "Sesuai spesifikasi aplikasi",
    packing: "Ember 20 kg / 25 kg",
    badge: "Road Safety",
    image: EnergyStorageLuminescentPaint,
  },
  {
    id: "anti-freezing-agent",
    name: "Anti-Freezing Agent",
    type: "Additive",
    tagline: "Aditif anti-beku cuaca dingin",
    description:
      "Mencegah pembentukan es dan meningkatkan kinerja material pada suhu rendah.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "Cold Climate",
    image: AntiFreezingAgent,
  },
  {
    id: "flame-retardant",
    name: "Composite Flame Retardant & Smoke Suppressant",
    type: "Additive",
    tagline: "Penahan api & asap untuk terowongan",
    description:
      "Mengurangi sifat mudah terbakar dan pembentukan asap untuk menghasilkan material jalan yang lebih aman.",
    dosage: "5–8% dari berat campuran",
    packing: "Karung 25 kg",
    badge: "Fire Safe",
    image: CompositeFlameRetardant,
  },
];
