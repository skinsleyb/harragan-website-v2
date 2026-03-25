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
  <section id="projects" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center text-foreground mb-12">
        What We're Working On
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
              {p.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecentProjects;
