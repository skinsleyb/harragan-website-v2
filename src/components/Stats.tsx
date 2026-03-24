import { Award, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Years of Experience" },
  { icon: CheckCircle, value: "1,000s", label: "Projects Completed" },
  { icon: Users, value: "BSc", label: "Qualified Team" },
  { icon: Award, value: "100%", label: "Family Owned" },
];

const Stats = () => (
  <section className="bg-primary py-10">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
          <span className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{s.value}</span>
          <div className="flex items-center gap-1.5">
            <s.icon className="text-accent" size={16} />
            <span className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
