import { featuredProjects } from "../../../../data/dataApplications";
import { useTranslation } from "../../../../data/translation";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="proyek-kami"
      aria-labelledby="projects-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text md:text-sm">
              {t.applications.projects.eyebrow}
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-2xl font-bold leading-tight text-header md:text-3xl lg:text-4xl"
          >
            {t.applications.projects.title}
          </h2>
        </header>

        {/* Grid 4 Kartu Proyek */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 list-none p-0">
          {featuredProjects.map((project) => (
            <li key={project.id}>
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
                {/* Gambar Proyek */}
                <figure className="relative h-44 w-full overflow-hidden bg-slate-100 m-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                {/* Nama Proyek */}
                <div className="flex flex-1 items-center justify-center p-5 text-center">
                  <h3 className="text-sm font-bold leading-snug text-header md:text-base">
                    {project.title}
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
