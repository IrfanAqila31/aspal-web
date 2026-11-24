import { useLanguageStore } from "../store/useLanguageStore";

export const translations = {
  id: {
    // Navigasi
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      applications: "Aplikasi",
      contact: "Kontak",
    },

    // Bagian Footer
    footer: {
      tagline: "Asphalt Additives & Road Materials",
      description:
        "Hubei Luxiang Chemical Technology Co., Ltd. merupakan produsen terdepan yang bergerak di bidang bahan aditif aspal dan material pemeliharaan jalan serta jembatan.",
      navTitle: "Navigasi",
      productsTitle: "Produk Unggulan",
      contactTitle: "Kontak Kami",
      rights: "Seluruh hak cipta dilindungi.",
    },

    // Tombol Umum
    buttons: {
      exploreProducts: "Jelajahi Produk",
      consultNow: "Konsultasikan Kebutuhan Anda",
      learnMore: "Pelajari Lebih Lanjut",
      viewDetail: "Lihat Detail",
      seeAllApplications: "Lihat Semua Aplikasi",
      contactUs: "Hubungi Kami",
      backToProducts: "Kembali ke Produk",
      chatWa: "Tanya via WhatsApp",
    },

    // Banner Ajakan (CtaBanner)
    ctaBanner: {
      eyebrow: "Konsultasi Produk",
      title: "Butuh informasi lebih lanjut mengenai produk kami?",
      description:
        "Tim kami siap membantu Anda dengan informasi produk, spesifikasi teknis, dan solusi terbaik untuk kebutuhan proyek Anda.",
      featureQuality: "Produk Berkualitas",
      featureSupport: "Dukungan Teknis Profesional",
      featureDelivery: "Pengiriman Tepat Waktu",
    },

    // Halaman Home
    home: {
      hero: {
        titlePart1: "Solusi Aditif Aspal Berkualitas untuk Infrastruktur yang",
        titleHighlight: "Lebih Baik",
        description:
          "Hubei Luxiang menyediakan berbagai bahan aditif aspal dan material pemeliharaan jalan berkualitas untuk mendukung pembangunan infrastruktur yang lebih kuat, tahan lama, dan berkelanjutan.",
        cta: "Hubungi Kami",
      },
      about: {
        eyebrow: "Tentang Kami",
        title: "HUBEI LUXIANG CHEMICAL TECHNOLOGY CO., LTD.",
        description:
          "Hubei Luxiang Chemical Technology Co., Ltd. merupakan perusahaan manufaktur yang bergerak di bidang produksi, pengolahan, dan penjualan bahan aditif aspal serta material pemeliharaan jalan dan jembatan. Berdiri sejak 2015, perusahaan berkomitmen mengembangkan produk berkualitas untuk mendukung pembangunan infrastruktur yang lebih baik.",
        points: [
          "Didukung tim teknis dan R&D berpengalaman",
          "Penjualan langsung dari produsen",
          "Proses produksi dan pemeriksaan kualitas ketat",
          "Dukungan teknis dan layanan purna jual",
        ],
        cta: "Pelajari Lebih Lanjut",
      },
      products: {
        eyebrow: "Produk Kami",
        title: "Solusi Aditif Aspal Berkualitas",
        description:
          "Temukan berbagai produk aditif aspal dan material pemeliharaan jalan berkualitas tinggi yang dirancang untuk meningkatkan performa, ketahanan, dan kualitas infrastruktur jalan.",
      },
      applications: {
        eyebrow: "Sektor Aplikasi",
        title: "Solusi untuk Berbagai Kebutuhan Infrastruktur",
        description:
          "Produk kami dirancang untuk mendukung berbagai kebutuhan konstruksi dan pemeliharaan infrastruktur jalan dengan kondisi serta karakteristik yang berbeda.",
      },
    },

    // Halaman Tentang Kami (About Us)
    about: {
      hero: {
        eyebrow: "Tentang Kami",
        titlePart1: "Hubei Luxiang Chemical",
        titleHighlight: "Technology Co., Ltd.",
        description:
          "Kami berkomitmen untuk menyediakan solusi aditif aspal berkualitas tinggi guna mendukung pembangunan infrastruktur yang lebih baik.",
        cta: "Pelajari Lebih Lanjut",
      },
      profile: {
        eyebrow: "Profil Perusahaan",
        title: "Tentang Hubei Luxiang Chemical Technology Co., Ltd.",
        paragraph1:
          "Hubei Luxiang Chemical Technology Co., Ltd. adalah perusahaan yang bergerak di bidang produksi, pengolahan, penjualan, konsultasi teknis, dan layanan material konstruksi, khususnya aditif aspal dan material pemeliharaan jalan dan jembatan.",
        paragraph2:
          "Didirikan pada tahun 2015, perusahaan kami terus berinovasi untuk menghadirkan produk berkualitas tinggi dan solusi infrastruktur yang andal.",
      },
      history: {
        eyebrow: "Sejarah Perusahaan",
        title: "Perjalanan Kami Menuju Masa Depan",
        description:
          "Sejak didirikan pada tahun 2015, Hubei Luxiang terus mengembangkan kapasitas produksi dan memperluas jangkauan bisnis untuk mendukung kebutuhan industri infrastruktur.",
        items: [
          {
            year: "2015",
            title: "Pendirian Perusahaan",
            description:
              "Hubei Luxiang Chemical Technology Co., Ltd. didirikan dengan dukungan tim teknis R&D yang berpengalaman di industri material jalan.",
          },
          {
            year: "2018",
            title: "Pengembangan Kapasitas Produksi",
            description:
              "Perusahaan meningkatkan lini produksi serta memperluas skala pabrik dan menjalin kerja sama dengan sejumlah perusahaan milik negara.",
          },
          {
            year: "2022–2024",
            title: "Ekspansi Pasar Internasional",
            description:
              "Perusahaan memperluas jangkauan ke pasar luar negeri. Pada tahun 2024, volume ekspor aditif aspal mencapai lebih dari 500 ton.",
          },
          {
            year: "2025",
            title: "Rencana Pengembangan Pabrik Kedua",
            description:
              "Pembangunan pabrik pintar kedua dicanangkan sebagai bagian dari ekspansi kapasitas dan penyediaan produk secara global.",
          },
        ],
      },
      advantages: {
        eyebrow: "Mengapa Hubei Luxiang",
        title: "Bukan sekadar pemasok — kami mitra teknis Anda",
        description:
          "Ada banyak pilihan produk aditif aspal di pasaran. Ini alasan kontraktor dan konsultan memilih bekerja dengan kami.",
        items: [
          {
            title: "Latar Belakang Teknis",
            description:
              "Didukung oleh tenaga ahli dan staf berpengalaman, serta kerja sama penelitian dan pengembangan teknologi dengan berbagai institusi pendidikan.",
          },
          {
            title: "Jaminan Kualitas",
            description:
              "Kami menerapkan proses produksi dan pemeriksaan kualitas yang ketat. Setiap produk melalui pemeriksaan kualitas sebelum dikirim kepada pelanggan.",
          },
          {
            title: "Penjualan Langsung dari Pabrik",
            description:
              "Mengintegrasikan proses produksi, pengolahan, penjualan, konsultasi teknis, dan layanan dalam satu perusahaan. Didukung harga kompetitif serta proses pengiriman yang cepat.",
          },
          {
            title: "Dukungan Purna Jual",
            description:
              "Kami menyediakan layanan purna jual dan dukungan teknis dari tenaga ahli untuk membantu pelanggan mendapatkan solusi yang sesuai dengan kebutuhan proyek.",
          },
        ],
      },
    },

    // Halaman Produk
    products: {
      hero: {
        eyebrow: "Produk Kami",
        title: "Produk Aditif Aspal dan Material Infrastruktur",
        description:
          "Hubei Luxiang menyediakan berbagai produk aditif aspal berkualitas tinggi yang dirancang untuk meningkatkan performa dan daya tahan infrastruktur jalan.",
        cta: "Jelajahi Produk",
      },
      catalog: {
        eyebrow: "Katalog Lengkap",
        title: "Daftar Produk Aditif Aspal",
        description:
          "Temukan 12 formulasi aditif aspal dan material pemeliharaan jalan berkualitas tinggi sesuai standar spesifikasi PUPR untuk kebutuhan proyek Anda.",
      },
      items: {
        "lignin-fiber": {
          name: "Lignin Fiber",
          description:
            "Meningkatkan stabilitas dan ketahanan terhadap retak pada campuran aspal.",
        },
        "anti-rutting-agent": {
          name: "Anti-Rutting Agent",
          description:
            "Meningkatkan ketahanan campuran aspal terhadap deformasi permanen akibat beban berat.",
        },
        "warm-mix-agent": {
          name: "Warm Mix Agent",
          description:
            "Mengurangi suhu pencampuran dan pemadatan aspal sehingga dapat menghemat energi.",
        },
        "anti-stripping-agent": {
          name: "Anti-Stripping Agent",
          description:
            "Memperkuat daya lekat antara agregat dan aspal untuk mencegah kerusakan akibat kelembapan.",
        },
        "high-viscosity-agent": {
          name: "High-Viscosity Agent",
          description:
            "Meningkatkan viskositas bahan pengikat aspal untuk menghasilkan perkerasan yang tahan lama dan berkinerja tinggi.",
        },
        "polyacrylonitrile-fibre": {
          name: "Polyacrylonitrile Fibre",
          description:
            "Meningkatkan kekuatan tarik dan membantu mengendalikan retak pada lapisan aspal.",
        },
        "polyester-fibre": {
          name: "Polyester Fibre",
          description:
            "Meningkatkan daya tahan dan ketahanan terhadap kelelahan material untuk menghasilkan jalan yang lebih tahan lama.",
        },
        "basalt-fibre": {
          name: "Basalt Fibre",
          description:
            "Serat alami berkekuatan tinggi untuk penguatan material dan stabilitas termal.",
        },
        "asphalt-rejuvenator": {
          name: "Asphalt Rejuvenator",
          description:
            "Mengembalikan karakteristik aspal yang telah mengalami penuaan untuk memperpanjang umur layanan perkerasan.",
        },
        "luminescent-paint": {
          name: "Energy Storage Luminescent Paint",
          description:
            "Cat fotoluminesen yang menyerap dan menyimpan energi cahaya untuk meningkatkan visibilitas pada malam hari.",
        },
        "anti-freezing-agent": {
          name: "Anti-Freezing Agent",
          description:
            "Mencegah pembentukan es dan meningkatkan kinerja material pada suhu rendah.",
        },
        "flame-retardant": {
          name: "Composite Flame Retardant & Smoke Suppressant",
          description:
            "Mengurangi sifat mudah terbakar dan pembentukan asap untuk menghasilkan material jalan yang lebih aman.",
        },
      },
    },

    // Sektor Home
    sectors: [
      {
        title: "Highways, Bridges & Tunnels",
        description:
          "Penggunaan material aditif aspal untuk mendukung pembangunan dan pemeliharaan jalan raya, jembatan, serta terowongan.",
      },
      {
        title: "High-Traffic Areas",
        description:
          "Material untuk kebutuhan perkerasan jalan pada area dengan intensitas lalu lintas yang tinggi.",
      },
      {
        title: "High-Load Areas",
        description:
          "Solusi material aditif aspal untuk area perkerasan yang menerima beban kendaraan berat.",
      },
      {
        title: "Cold Regions",
        description:
          "Material aditif aspal untuk kebutuhan konstruksi dan pemeliharaan jalan di wilayah bersuhu dingin.",
      },
      {
        title: "Wet Regions",
        description:
          "Solusi material untuk perkerasan jalan di wilayah dengan kondisi lingkungan basah.",
      },
      {
        title: "Various Asphalt Pavements",
        description:
          "Berbagai material aditif aspal untuk mendukung kebutuhan pada beragam jenis perkerasan jalan.",
      },
    ],

    // Halaman Aplikasi
    applications: {
      hero: {
        eyebrow: "Aplikasi Kami",
        title: "Solusi Aditif Aspal untuk Berbagai Kebutuhan Infrastruktur",
        description:
          "Material konstruksi dan pemeliharaan jalan untuk mendukung performa berbagai jenis perkerasan aspal.",
        cta: "Konsultasikan Kebutuhan Anda",
      },
      whereUsed: {
        eyebrow: "Bidang Aplikasi",
        title: "Di Mana Aditif Aspal Dibutuhkan?",
        description:
          "Aditif yang berbeda digunakan pada berbagai kondisi jalan untuk memenuhi kebutuhan proyek dan meningkatkan performa perkerasan.",
        items: {
          "jalan-raya": "Jalan Raya & Jembatan",
          terowongan: "Terowongan",
          "area-lalu-lintas-tinggi": "Area Lalu Lintas Tinggi",
          "area-beban-berat": "Area dengan Beban Berat",
          "wilayah-suhu-rendah": "Wilayah Bersuhu Rendah",
          "wilayah-basah": "Wilayah Basah",
        },
      },
      whyUse: {
        eyebrow: "Manfaat Aditif Aspal",
        title: "Mengapa Menggunakan Aditif Aspal?",
        items: [
          {
            title: "Meningkatkan Performa Permukaan Jalan",
            description:
              "Membantu mengatasi alur roda, selip, dan pelepasan aspal dari agregat.",
          },
          {
            title: "Memperpanjang Umur Layanan Jalan",
            description:
              "Membantu memperpanjang umur jalan dan mengurangi biaya pemeliharaan.",
          },
          {
            title: "Rendah Karbon dan Ramah Lingkungan",
            description:
              "Mendukung upaya rendah karbon, termasuk pengurangan suhu operasional.",
          },
        ],
      },
      projects: {
        eyebrow: "Proyek Jalan & Jembatan",
        title:
          "Hubei Luxiang telah berpartisipasi dalam ratusan proyek jalan dan jembatan di Tiongkok.",
      },
    },

    // Halaman Kontak
    contactPage: {
      hero: {
        eyebrow: "Hubungi Kami",
        title: "Mari Diskusikan Kebutuhan Proyek Anda",
        description:
          "Hubungi tim Hubei Luxiang untuk mendapatkan informasi mengenai produk aditif aspal dan material pemeliharaan jalan.",
      },
      eyebrow: "Informasi Kontak",
      title: "Hubungi Kami",
      subtitle:
        "Kami siap membantu Anda dengan informasi lebih lanjut mengenai produk dan layanan kami.",
      waSub: "Hubungi kami melalui WhatsApp",
      emailSub: "Kirim pertanyaan melalui email",
    },

    // Halaman Detail Produk
    detailPage: {
      notAvailableTitle: "Belum Ada Detail Produk Saat Ini",
      notAvailableDesc:
        "Spesifikasi teknis lengkap, lembar data laboratorium (TDS), dan panduan aplikasi untuk produk ini sedang dalam tahap pembaruan.",
      waInquiryPrefix: "Halo Pak Budi, saya ingin meminta informasi teknis dan penawaran untuk produk:",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      applications: "Applications",
      contact: "Contact Us",
    },

    // Footer
    footer: {
      tagline: "Asphalt Additives & Road Materials",
      description:
        "Hubei Luxiang Chemical Technology Co., Ltd. is a leading manufacturer specializing in asphalt additives and road & bridge maintenance materials.",
      navTitle: "Navigation",
      productsTitle: "Featured Products",
      contactTitle: "Contact Us",
      rights: "All rights reserved.",
    },

    // Common Buttons
    buttons: {
      exploreProducts: "Explore Products",
      consultNow: "Consult Your Project Needs",
      learnMore: "Learn More",
      viewDetail: "View Details",
      seeAllApplications: "See All Applications",
      contactUs: "Contact Us",
      backToProducts: "Back to Products",
      chatWa: "Chat via WhatsApp",
    },

    // CTA Banner
    ctaBanner: {
      eyebrow: "Product Consultation",
      title: "Need more information regarding our products?",
      description:
        "Our team is ready to assist you with product details, technical specifications, and the best solutions for your project needs.",
      featureQuality: "Premium Quality",
      featureSupport: "Professional Technical Support",
      featureDelivery: "On-Time Delivery",
    },

    // Home Page
    home: {
      hero: {
        titlePart1: "Premium Asphalt Additives for Better",
        titleHighlight: "Infrastructure",
        description:
          "Hubei Luxiang supplies high-performance asphalt additives and road maintenance materials to engineer stronger, safer, and more sustainable pavements.",
        cta: "Contact Us",
      },
      about: {
        eyebrow: "About Us",
        title: "HUBEI LUXIANG CHEMICAL TECHNOLOGY CO., LTD.",
        description:
          "Hubei Luxiang Chemical Technology Co., Ltd. is a specialized manufacturer dedicated to the production, processing, and distribution of asphalt additives and road maintenance materials. Established in 2015, the company is committed to continuous innovation and delivering premium products for infrastructure advancement.",
        points: [
          "Backed by experienced technical and R&D specialists",
          "Direct sales and supply directly from the factory",
          "Rigorous production standards and quality control",
          "Comprehensive technical support and after-sales service",
        ],
        cta: "Learn More",
      },
      products: {
        eyebrow: "Our Products",
        title: "High-Performance Asphalt Additives",
        description:
          "Explore our specialized range of asphalt additives and maintenance materials formulated to elevate roadway durability, rutting resistance, and service life.",
      },
      applications: {
        eyebrow: "Application Sectors",
        title: "Engineered for Diverse Infrastructure Needs",
        description:
          "Our advanced materials are formulated to withstand challenging environmental conditions, high axle loads, and varied asphalt pavement designs.",
      },
    },

    // About Us Page
    about: {
      hero: {
        eyebrow: "About Us",
        titlePart1: "Hubei Luxiang Chemical",
        titleHighlight: "Technology Co., Ltd.",
        description:
          "Committed to delivering world-class asphalt additive solutions to build stronger, long-lasting transportation infrastructure.",
        cta: "Learn More",
      },
      profile: {
        eyebrow: "Company Profile",
        title: "About Hubei Luxiang Chemical Technology Co., Ltd.",
        paragraph1:
          "Hubei Luxiang Chemical Technology Co., Ltd. is an enterprise engaged in the manufacturing, processing, global sales, technical consulting, and specialized engineering services of pavement materials, specifically asphalt modifiers and highway maintenance solutions.",
        paragraph2:
          "Established in 2015, our enterprise continuously drives technical breakthroughs to supply dependable, high-durability infrastructure products.",
      },
      history: {
        eyebrow: "Company History",
        title: "Our Journey Towards the Future",
        description:
          "Since our founding in 2015, Hubei Luxiang has continually scaled manufacturing capacity and expanded global partnerships to support modern infrastructure.",
        items: [
          {
            year: "2015",
            title: "Company Founding",
            description:
              "Hubei Luxiang Chemical Technology Co., Ltd. was established, driven by an experienced team of road materials R&D specialists.",
          },
          {
            year: "2018",
            title: "Production Capacity Expansion",
            description:
              "Upgraded automated manufacturing lines, expanded factory capacity, and initiated strategic cooperation with major state-owned enterprises.",
          },
          {
            year: "2022–2024",
            title: "International Market Expansion",
            description:
              "Expanded global export presence. By 2024, our annual export volume of asphalt additives exceeded 500 metric tons.",
          },
          {
            year: "2025",
            title: "Second Factory Expansion Plan",
            description:
              "Launched plans for our second modern manufacturing facility to enhance production capacity and meet growing global demand.",
          },
        ],
      },
      advantages: {
        eyebrow: "Why Hubei Luxiang",
        title: "More Than a Supplier — We Are Your Technical Partner",
        description:
          "Among numerous additive suppliers in the market, here is why leading contractors and engineering consultants choose to partner with us.",
        items: [
          {
            title: "Technical Expertise & R&D",
            description:
              "Supported by seasoned chemical engineers and collaborative research initiatives with prominent academic and research institutions.",
          },
          {
            title: "Strict Quality Assurance",
            description:
              "We maintain rigorous manufacturing protocols and testing standards. Every single batch is verified in our labs before dispatch.",
          },
          {
            title: "Direct Factory Supply",
            description:
              "Seamlessly integrating R&D, manufacturing, quality control, and logistics under one roof, ensuring competitive direct pricing and rapid fulfillment.",
          },
          {
            title: "Dedicated Technical Support",
            description:
              "Our engineering specialists provide responsive technical guidance, mix design recommendations, and tailored project assistance.",
          },
        ],
      },
    },

    // Products Page
    products: {
      hero: {
        eyebrow: "Our Products",
        title: "Asphalt Additives & Road Materials",
        description:
          "Hubei Luxiang provides high-performance asphalt additives and maintenance materials designed to extend roadway service life and durability.",
        cta: "Explore Products",
      },
      catalog: {
        eyebrow: "Complete Catalog",
        title: "Asphalt Additive Product Portfolio",
        description:
          "Discover 12 high-grade asphalt additive formulations and pavement maintenance products meeting international standards and project specifications.",
      },
      items: {
        "lignin-fiber": {
          name: "Lignin Fiber",
          description:
            "Natural cellulose fiber that reinforces asphalt mastic and prevents cracking.",
        },
        "anti-rutting-agent": {
          name: "Anti-Rutting Agent",
          description:
            "High-modulus polymer pellets that prevent permanent deformation and rutting under heavy axle loads.",
        },
        "warm-mix-agent": {
          name: "Warm Mix Agent",
          description:
            "Reduces asphalt mixing and compaction temperatures by 30–40°C, significantly cutting fuel costs and emissions.",
        },
        "anti-stripping-agent": {
          name: "Anti-Stripping Agent",
          description:
            "Enhances chemical bonding between asphalt binder and aggregates to prevent moisture-induced stripping.",
        },
        "high-viscosity-agent": {
          name: "High-Viscosity Agent",
          description:
            "Substantially increases binder viscosity and toughness for high-performance porous and resilient pavements.",
        },
        "polyacrylonitrile-fibre": {
          name: "Polyacrylonitrile Fibre",
          description:
            "Synthetic PAN fiber that increases tensile strength and bridges micro-cracks in asphalt layers.",
        },
        "polyester-fibre": {
          name: "Polyester Fibre",
          description:
            "High-tensile polyester fiber that improves toughness and material fatigue resistance for longer roadway life.",
        },
        "basalt-fibre": {
          name: "Basalt Fibre",
          description:
            "Natural volcanic basalt fiber providing high tensile modulus and superior high-temperature stability.",
        },
        "asphalt-rejuvenator": {
          name: "Asphalt Rejuvenator",
          description:
            "Restores chemical balance and ductility of aged binder for high-percentage Reclaimed Asphalt Pavement (RAP) recycling.",
        },
        "luminescent-paint": {
          name: "Energy Storage Luminescent Paint",
          description:
            "Photoluminescent road marking coating that absorbs sunlight and glows brightly at night to enhance road safety.",
        },
        "anti-freezing-agent": {
          name: "Anti-Freezing Agent",
          description:
            "Inhibits ice crystal formation and maintains pavement flexibility in sub-zero freezing weather conditions.",
        },
        "flame-retardant": {
          name: "Composite Flame Retardant & Smoke Suppressant",
          description:
            "Suppresses flame spread and reduces toxic smoke emissions for safer tunnel and enclosed asphalt paving.",
        },
      },
    },

    // Sectors Home
    sectors: [
      {
        title: "Highways, Bridges & Tunnels",
        description:
          "Specialized asphalt additives engineered for high-speed expressways, long-span bridges, and enclosed tunnels.",
      },
      {
        title: "High-Traffic Areas",
        description:
          "Durable pavement solutions designed to resist heavy wear and frequent braking in high-traffic urban corridors.",
      },
      {
        title: "High-Load Areas",
        description:
          "Heavy-duty asphalt reinforcement for ports, logistics hubs, and industrial zones subjected to extreme wheel loads.",
      },
      {
        title: "Cold Regions",
        description:
          "Low-temperature crack-resistant and anti-freezing additives formulated for harsh freezing climates.",
      },
      {
        title: "Wet Regions",
        description:
          "Superior anti-stripping additives to prevent moisture damage and pothole formation in high-rainfall zones.",
      },
      {
        title: "Various Asphalt Pavements",
        description:
          "Versatile additive solutions adaptable to SMA, OGFC, Superpave, and standard hot-mix asphalt designs.",
      },
    ],

    // Applications Page
    applications: {
      hero: {
        eyebrow: "Our Applications",
        title: "Asphalt Additive Solutions for Diverse Infrastructure Needs",
        description:
          "Specialized materials engineered to optimize the longevity, safety, and performance of varied roadway surfaces.",
        cta: "Consult Your Project Needs",
      },
      whereUsed: {
        eyebrow: "Application Fields",
        title: "Where Are Asphalt Additives Needed?",
        description:
          "Different additives are formulated for specific environmental conditions and traffic demands to ensure peak performance.",
        items: {
          "jalan-raya": "Highways & Bridges",
          terowongan: "Tunnels",
          "area-lalu-lintas-tinggi": "High-Traffic Corridors",
          "area-beban-berat": "Heavy-Load Industrial Areas",
          "wilayah-suhu-rendah": "Low-Temperature Regions",
          "wilayah-basah": "High-Rainfall & Wet Regions",
        },
      },
      whyUse: {
        eyebrow: "Benefits of Asphalt Additives",
        title: "Why Use Asphalt Additives?",
        items: [
          {
            title: "Enhance Road Surface Performance",
            description:
              "Effectively mitigates rutting, moisture stripping, and surface skidding for safer vehicle travel.",
          },
          {
            title: "Extend Pavement Service Life",
            description:
              "Significantly prolongs pavement structural life and lowers recurring maintenance expenditures.",
          },
          {
            title: "Low-Carbon and Eco-Friendly",
            description:
              "Enables warm-mix paving, reduces carbon emissions, and facilitates sustainable asphalt recycling.",
          },
        ],
      },
      projects: {
        eyebrow: "Road & Bridge Projects",
        title:
          "Hubei Luxiang has contributed to hundreds of major highway and bridge projects across China.",
      },
    },

    // Contact Page
    contactPage: {
      hero: {
        eyebrow: "Contact Us",
        title: "Let's Discuss Your Project Requirements",
        description:
          "Get in touch with the Hubei Luxiang technical team for product specifications, pricing, and pavement engineering support.",
      },
      eyebrow: "Contact Information",
      title: "Contact Us",
      subtitle:
        "We are ready to assist you with further information regarding our products and technical services.",
      waSub: "Contact us directly via WhatsApp",
      emailSub: "Send inquiries via email",
    },

    // Product Detail Page
    detailPage: {
      notAvailableTitle: "No Product Details Available Currently",
      notAvailableDesc:
        "Complete technical specifications, laboratory data sheets (TDS), and application guides for this product are currently being updated.",
      waInquiryPrefix: "Hello Mr. Budi, I would like to request technical specifications and a quotation for:",
    },
  },
};

// Custom Hook untuk memudahkan pemanggilan di komponen manapun
export const useTranslation = () => {
  const { currentLang, setLanguage, toggleLanguage } = useLanguageStore();
  const t = translations[currentLang];

  return { t, currentLang, setLanguage, toggleLanguage };
};
