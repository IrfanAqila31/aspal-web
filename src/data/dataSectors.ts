import {
  Road,
  CarFront,
  Truck,
  Snowflake,
  CloudRain,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface Sector {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    icon: Road,
    title: "Highways, Bridges & Tunnels",
    description:
      "Penggunaan material aditif aspal untuk mendukung pembangunan dan pemeliharaan jalan raya, jembatan, serta terowongan.",
  },
  {
    icon: CarFront,
    title: "High-Traffic Areas",
    description:
      "Material untuk kebutuhan perkerasan jalan pada area dengan intensitas lalu lintas yang tinggi.",
  },
  {
    icon: Truck,
    title: "High-Load Areas",
    description:
      "Solusi material aditif aspal untuk area perkerasan yang menerima beban kendaraan berat.",
  },
  {
    icon: Snowflake,
    title: "Cold Regions",
    description:
      "Material aditif aspal untuk kebutuhan konstruksi dan pemeliharaan jalan di wilayah bersuhu dingin.",
  },
  {
    icon: CloudRain,
    title: "Wet Regions",
    description:
      "Solusi material untuk perkerasan jalan di wilayah dengan kondisi lingkungan basah.",
  },
  {
    icon: Layers,
    title: "Various Asphalt Pavements",
    description:
      "Berbagai material aditif aspal untuk mendukung kebutuhan pada beragam jenis perkerasan jalan.",
  },
];