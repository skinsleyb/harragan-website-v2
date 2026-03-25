import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Block Paving" },
  { img: project2, title: "Resin Driveway" },
  { img: project3, title: "Natural Stone" },
  { img: project4, title: "Porcelain Patio" },
];

const RecentProjects = () => (
  <section id="projects" className="bg-[#f6f5f5] py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
          Projects
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center text-black mt-3">
          What We're Working On
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
          A glimpse at some of the recent driveways, patios, and landscaping
          projects completed by our team.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-black/70">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecentProjects;
