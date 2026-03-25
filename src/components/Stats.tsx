import { Award, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Years of Experience" },
  { icon: CheckCircle, value: "1,000s", label: "Projects Completed" },
  { icon: Users, value: "BSc", label: "Qualified Team" },
  { icon: Award, value: "100%", label: "Family Owned" },
];

const Stats = () => (
  <section className="relative overflow-hidden py-10 bg-white/75">
    {/* Soft overlay for readability */}
    <div className="absolute inset-0 bg-white/5" />

    <div className="relative container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-1.5 text-center"
        >
          <span className="font-display text-4xl font-bold text-black md:text-5xl">
            {s.value}
          </span>

          <div className="flex items-center gap-1.5">
            <s.icon className="text-primary-black/80" size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-black/70">
              {s.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
