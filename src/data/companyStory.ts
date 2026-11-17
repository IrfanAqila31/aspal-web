
import {
  CalendarDays,
  ChartNoAxesCombined,
  Globe,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface CompanyHistory {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const companyHistory: CompanyHistory[] = [
  {
    year: "2015",
    title: "Pendirian Perusahaan",
    description:
      "Hubei Luxiang Chemical Technology Co., Ltd. didirikan dengan dukungan tim teknis R&D yang berpengalaman di industri.",
    icon: CalendarDays,
  },
  {
    year: "2018",
    title: "Pengembangan Kapasitas Produksi",
    description:
      "Perusahaan meningkatkan lini produksi serta memperluas skala dan kapasitas pabrik. Perusahaan juga mulai menjalin kerja sama dengan sejumlah perusahaan milik negara.",
    icon: ChartNoAxesCombined,
  },
  {
    year: "2022–2024",
    title: "Ekspansi Pasar Internasional",
    description:
      "Perusahaan memperluas bisnis dan pasar luar negeri. Pada tahun 2024, volume ekspor aditif aspal mencapai lebih dari 500 ton.",
    icon: Globe,
  },
  {
    year: "2025",
    title: "Rencana Pengembangan Pabrik Kedua",
    description:
      "Perusahaan mencantumkan pembangunan pabrik kedua sebagai bagian dari rencana pengembangan kapasitas dan bisnis ke depan.",
    icon: Building2,
  },
];
