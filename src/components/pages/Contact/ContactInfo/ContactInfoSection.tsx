import { Mail } from "lucide-react";
import { useTranslation } from "../../../../data/translation"; // 1. Import

const ContactInfoSection = () => {
  const { t, currentLang } = useTranslation(); // 2. Panggil

  // Pesan WhatsApp otomatis menyesuaikan bahasa aktif
  const waMessage = encodeURIComponent(
    currentLang === "en"
      ? "Hello Mr. Budi, I would like to inquire about Hubei Luxiang asphalt additive products and services."
      : "Halo Pak Budi, saya ingin menanyakan informasi lebih lanjut mengenai produk dan layanan aditif aspal Hubei Luxiang."
  );

  return (
    <section
      id="informasi-kontak"
      aria-labelledby="contact-info-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text md:text-sm">
              {t.contactPage.eyebrow}
            </span>
          </div>

          <h2
            id="contact-info-heading"
            className="mb-4 text-3xl font-extrabold leading-tight text-header md:text-5xl"
          >
            {t.contactPage.title}
          </h2>

          <p className="text-base leading-relaxed text-text md:text-lg">
            {t.contactPage.subtitle}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 list-none p-0 max-w-4xl mx-auto">
          {/* Kartu 1: WhatsApp */}
          <li>
            <article className="group flex h-full flex-col items-center justify-between rounded-3xl border border-slate-200/90 bg-white p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col items-center w-full">
                <div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50/80 text-header shadow-inner transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-header"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-header md:text-2xl">
                  WhatsApp
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  {t.contactPage.waSub}
                </p>
              </div>

              <div className="w-full border-t border-slate-100 pt-6">
                <a
                  href={`https://wa.me/628175797344?text=${waMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-lg font-bold text-header hover:text-blue-600 transition-colors md:text-xl"
                >
                  +62 81 7579 7344
                </a>
              </div>
            </article>
          </li>

          {/* Kartu 2: Email */}
          <li>
            <article className="group flex h-full flex-col items-center justify-between rounded-3xl border border-slate-200/90 bg-white p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col items-center w-full">
                <div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50/80 text-header shadow-inner transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Mail className="h-10 w-10 text-header" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-header md:text-2xl">
                  Email
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  {t.contactPage.emailSub}
                </p>
              </div>

              <div className="w-full border-t border-slate-100 pt-6">
                <a
                  href="mailto:budi732001@gmail.com"
                  className="inline-block text-lg font-bold text-header hover:text-blue-600 transition-colors md:text-xl"
                >
                  budi732001@gmail.com
                </a>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfoSection;