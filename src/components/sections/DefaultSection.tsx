const DefaultSection = () => {
  return (
    <section id="cta" className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Contact
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
            Fill in the form below and our team will get back to you as soon as
            possible. You can also contact us directly by phone or email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DefaultSection;
