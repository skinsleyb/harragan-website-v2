import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const serviceAreas = [
  "Chelmsford",
  "Brentwood",
  "Colchester",
  "Basildon",
  "Southend-on-Sea",
  "Braintree",
  "Witham",
  "Maldon",
  "Billericay",
  "Rayleigh",
  "South East England",
  "Nationwide (commercial)",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  return (
    <>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quotation. Andy will personally visit your property to discuss your requirements."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/30">
              <h2 className="font-display text-xl md:text-2xl font-bold uppercase text-foreground mb-6">
                Request a Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Select a service...</option>
                      <option>Resin Driveway</option>
                      <option>Resin Patio / Path</option>
                      <option>Block Paving</option>
                      <option>Tarmac</option>
                      <option>Shingle / Gravel</option>
                      <option>Hard Landscaping</option>
                      <option>Groundworks</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                    Property Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2 font-body">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors w-full sm:w-auto"
                >
                  <Send size={14} /> Send Enquiry
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-display text-lg font-bold uppercase mb-6">
                  Get In Touch
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/50 font-body mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+441245000000"
                        className="text-sm font-semibold font-body hover:text-accent transition-colors"
                      >
                        01245 XXX XXX
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/50 font-body mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@andyharraganandsons.co.uk"
                        className="text-sm font-semibold font-body hover:text-accent transition-colors"
                      >
                        info@andyharraganandsons.co.uk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/50 font-body mb-1">
                        Location
                      </p>
                      <p className="text-sm font-body">Chelmsford, Essex</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/50 font-body mb-1">
                        Hours
                      </p>
                      <p className="text-sm font-body">Mon–Fri: 8am – 5pm</p>
                      <p className="text-sm font-body">Sat: 9am – 2pm</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-2xl h-48 flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-body">
                  Map placeholder
                </p>
              </div>

              {/* Service areas */}
              <div className="bg-card rounded-2xl p-6 border border-border/30">
                <h4 className="font-display text-sm font-bold uppercase mb-4 text-foreground">
                  Service Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((a) => (
                    <span
                      key={a}
                      className="bg-accent/10 text-foreground text-xs px-3 py-1.5 rounded-full font-body"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
