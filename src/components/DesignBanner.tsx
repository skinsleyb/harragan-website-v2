import designImg from "@/assets/3d-design.jpg";

const DesignBanner = () => (
  <section className="relative py-28">
    <img
      src={designImg}
      alt="3D driveway design visualization"
      loading="lazy"
      width={1920}
      height={800}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/60" />
    <div className="container relative z-10 mx-auto px-4 text-center">
      <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground uppercase">
        Perfect Designs in 3D
      </h2>
      <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
        We use cutting-edge 3D visualisation technology to bring your driveway design
        to life before a single stone is laid.
      </p>
    </div>
  </section>
);

export default DesignBanner;
