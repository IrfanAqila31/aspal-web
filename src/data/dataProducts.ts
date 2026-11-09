export interface Product {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  dosage: string;
  packing: string;
  badge: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "lignin-fiber",
    name: "Lignin Fiber",
    type: "Fiber",
    tagline: "Serat alami penguat campuran aspal",
    description:
      "Mencegah segregasi aspal, meningkatkan stabilitas Marshall, dan mengurangi retak. Cocok untuk campuran SMA & Porous Asphalt.",
    dosage: "0.3% dari berat campuran aspal",
    packing: "Karung 20 kg",
    badge: "Natural Fiber",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "anti-rutting-agent",
    name: "Anti-Rutting Agent",
    type: "Pellet",
    tagline: "Mencegah alur roda akibat beban berat",
    description:
      "HDPE Polymer Pellet yang meningkatkan ketahanan deformasi permanen. Terbukti menurunkan kedalaman alur hingga 82% pada Wheel Tracking Test.",
    dosage: "3–5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "HDPE Pellet",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "warm-mix-agent",
    name: "Warm Mix Agent",
    type: "Additive",
    tagline: "Hemat energi produksi 30–40°C",
    description:
      "Menurunkan viskositas aspal sehingga pencampuran bisa dilakukan pada suhu lebih rendah, menghemat bahan bakar dan emisi karbon.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Drum 200 kg / Karung 25 kg",
    badge: "Energy Saving",
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "anti-stripping-agent",
    name: "Anti-Stripping Agent",
    type: "Liquid",
    tagline: "Mencegah pelepasan lapisan akibat air",
    description:
      "LX-6525 Liquid yang memperkuat ikatan antara agregat dan aspal, mencegah stripping akibat air & kelembaban tinggi.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Drum 200 kg / Jeriken 25 kg",
    badge: "Liquid",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    id: "high-viscosity-agent",
    name: "High-Viscosity Agent",
    type: "Additive",
    tagline: "Pengental aspal performa tinggi",
    description:
      "Meningkatkan viskositas dan titik lembek aspal untuk aplikasi di daerah bersuhu tinggi dan beban lalu lintas berat.",
    dosage: "3–5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "High Performance",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "polyacrylonitrile-fibre",
    name: "Polyacrylonitrile Fibre",
    type: "Fiber",
    tagline: "Serat PAN penguat tarik & retak",
    description:
      "Serat sintetis PAN yang mendistribusikan tegangan tarik secara merata, mencegah micro-cracking pada perkerasan aspal.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Synthetic Fiber",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "polyester-fibre",
    name: "Polyester Fibre",
    type: "Fiber",
    tagline: "Serat poliester tahan lelah & retak",
    description:
      "Meningkatkan ketahanan fatigue dan fleksibilitas campuran aspal, cocok untuk jalan dengan beban berulang tinggi.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Fatigue Resistant",
    color: "bg-teal-100 text-teal-800",
  },
  {
    id: "basalt-fibre",
    name: "Basalt Fibre",
    type: "Fiber",
    tagline: "Serat basalt alami tahan panas tinggi",
    description:
      "Dibuat dari batu basalt vulkanik, tahan suhu hingga 700°C. Ideal untuk perkerasan bandara dan pelabuhan.",
    dosage: "0.9–1.8 kg per ton campuran",
    packing: "Karung 20 kg",
    badge: "Heat Resistant",
    color: "bg-red-100 text-red-800",
  },
  {
    id: "asphalt-rejuvenator",
    name: "Asphalt Rejuvenator",
    type: "Liquid",
    tagline: "Peremaja aspal daur ulang (RAP)",
    description:
      "Memulihkan sifat reologi aspal tua dalam campuran RAP (Reclaimed Asphalt Pavement), mengurangi kebutuhan aspal baru hingga 30%.",
    dosage: "1.5–3% dari berat RAP",
    packing: "Drum 200 kg",
    badge: "Eco RAP",
    color: "bg-lime-100 text-lime-800",
  },
  {
    id: "luminescent-paint",
    name: "Energy Storage Luminescent Paint",
    type: "Paint",
    tagline: "Cat marka bercahaya di malam hari",
    description:
      "Menyerap energi cahaya siang hari dan memancarkannya di malam hari. Meningkatkan keselamatan marka jalan tanpa listrik.",
    dosage: "Sesuai spesifikasi aplikasi",
    packing: "Ember 20 kg / 25 kg",
    badge: "Road Safety",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "anti-freezing-agent",
    name: "Anti-Freezing Agent",
    type: "Additive",
    tagline: "Aditif anti-beku cuaca dingin",
    description:
      "Mencegah pembekuan dan keretakan perkerasan aspal di lingkungan bersuhu rendah, menjaga fleksibilitas campuran.",
    dosage: "0.3–0.5% dari berat aspal",
    packing: "Karung 25 kg",
    badge: "Cold Climate",
    color: "bg-sky-100 text-sky-800",
  },
  {
    id: "flame-retardant",
    name: "Composite Flame Retardant & Smoke Suppressant",
    type: "Additive",
    tagline: "Penahan api & asap untuk terowongan",
    description:
      "Campuran aditif penghambat api dan penekan asap untuk perkerasan di area terowongan dan infrastruktur tertutup.",
    dosage: "5–8% dari berat campuran",
    packing: "Karung 25 kg",
    badge: "Fire Safe",
    color: "bg-rose-100 text-rose-800",
  },
];
