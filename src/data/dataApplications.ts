import { Route, Clock, Leaf, type LucideIcon } from "lucide-react";
import JalanJembatanTerowongan from "../assets/images/applications/jalan-jembatan-terowongan.webp";
import Terowongan from "../assets/images/applications/terowongan.webp";
import AreaLaluLintasTinggi from "../assets/images/applications/area-lalu-lintas-tinggi.webp";
import AreaBebanBerat from "../assets/images/applications/area-beban-berat.webp";
import AreaSuhuRendah from "../assets/images/applications/area-suhu-rendah.webp";
import AreaBasah from "../assets/images/applications/area-basah.webp";
import Proyek1 from "../assets/images/applications/beijing-daxing-airport-expressway.webp";
import Proyek2 from "../assets/images/applications/beijing-daxing-airport-expressway (mongolia).webp";
import Proyek3 from "../assets/images/applications/beijing-daxing-airport-expressway (3).webp";
import Proyek4 from "../assets/images/applications/beijing-daxing-airport-expressway (4).webp";

export interface ApplicationField {
  id: string;
  title: string;
  image: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
}

export const applicationFields: ApplicationField[] = [
  {
    id: "jalan-raya",
    title: "Jalan Raya & Jembatan",
    image: JalanJembatanTerowongan,
  },
  {
    id: "terowongan",
    title: "Terowongan",
    image: Terowongan,
  },

  {
    id: "area-lalu-lintas-tinggi",
    title: "Area Lalu Lintas Tinggi",
    image: AreaLaluLintasTinggi,
  },
  {
    id: "area-beban-berat",
    title: "Area dengan Beban Berat",
    image: AreaBebanBerat,
  },
  {
    id: "wilayah-suhu-rendah",
    title: "Wilayah Bersuhu Rendah",
    image: AreaSuhuRendah,
  },
  {
    id: "wilayah-basah",
    title: "Wilayah Basah",
    image: AreaBasah,
  },
];

export const benefits: Benefit[] = [
  {
    icon: Route,
    title: "Meningkatkan Performa Permukaan Jalan",
    description:
      "Membantu mengatasi alur roda, selip, dan pelepasan aspal dari agregat.",
  },
  {
    icon: Clock,
    title: "Memperpanjang Umur Layanan Jalan",
    description:
      "Membantu memperpanjang umur jalan dan mengurangi biaya pemeliharaan.",
  },
  {
    icon: Leaf,
    title: "Rendah Karbon dan Ramah Lingkungan",
    description:
      "Mendukung upaya rendah karbon, termasuk pengurangan suhu operasional.",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "daxing-airport",
    title: "Beijing Daxing International Airport Expressway",
    image: Proyek1,
  },
  {
    id: "beijing-lhasa",
    title: "Beijing–Lhasa Expressway (Inner Mongolia Section)",
    image: Proyek2,
  },
  {
    id: "beijing-hongkong-macao",
    title: "Beijing–Hong Kong–Macao Expressway (Henan Section)",
    image: Proyek3,
  },
  {
    id: "guangzhou-shenzen",
    title: "Guangzhou-Shenzhen Expressway",
    image: Proyek4,
  },
];
