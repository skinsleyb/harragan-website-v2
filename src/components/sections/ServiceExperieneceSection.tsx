import { CheckCircle2 } from "lucide-react";

const ServiceExperienceSection = ({
  label = "Service",
  title,
  intro,
  outro,
  serviceTitle = "Our Services Include",
  services = [],
  experienceTitle = "30+ Years Of Expertise",
  experienceText,
  qualityTitle = "Built To Last",
  qualityText,
  serviceBlockTitle = "Honest & Professional",
  serviceBlockText,
}) => {
  return (
    <section id="service-experience" className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/75 p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                {label}
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
                {title}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-black/65 md:text-lg">
                {intro}
              </p>

              {outro && (
                <p className="mt-5 text-base leading-relaxed text-black/65 md:text-lg">
                  {outro}
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-white/75 p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                What We Offer
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
                {serviceTitle}
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#f6f5f5] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    <p className="text-sm leading-relaxed text-black/75 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/75 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Experience
                </p>
                <h4 className="mt-2 text-xl font-black uppercase text-black">
                  {experienceTitle}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-base">
                  {experienceText}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Quality
                </p>
                <h4 className="mt-2 text-xl font-black uppercase text-black">
                  {qualityTitle}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-base">
                  {qualityText}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Service
                </p>
                <h4 className="mt-2 text-xl font-black uppercase text-black">
                  {serviceBlockTitle}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-base">
                  {serviceBlockText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExperienceSection;
