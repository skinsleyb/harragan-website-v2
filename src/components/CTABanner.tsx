import { Phone, Mail } from "lucide-react";
import { trackEvent } from "@/analytics/track";

const CTABanner = () => (
  <section id="contact" data-section="cta_banner" className="relative z-10 pb-0 scroll-mt-24">
    <div className="container mx-auto px-4">
      <div className="w-full max-w-[75%] mx-auto bg-primary rounded-2xl shadow-2xl p-8 md:p-12 -mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: text */}
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-primary-foreground leading-tight">
              Where Quality Craftsmanship Meets
              <br className="hidden md:block" /> Personalised Service
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-lg text-sm leading-relaxed">
              Andy will personally visit your property to discuss your
              requirements. You will receive a free, no-obligation written
              quotation within 3–4 days.
            </p>
          </div>

          {/* Right: action buttons */}
          <div className="flex flex-col gap-3 md:min-w-[200px]">
            <a
              href="tel:+441245000000"
              onClick={() =>
                trackEvent('cta_interaction', {
                  cta_name: 'CTABanner Call Us',
                  cta_type: 'link_click',
                  cta_location: 'cta_banner',
                  cta_page: window.location.pathname,
                  cta_destination: 'tel:+441245000000',
                })
              }
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              <Phone size={16} />
              Call Us
            </a>
            <a
              href="mailto:info@andyharraganandsons.co.uk"
              onClick={() =>
                trackEvent('cta_interaction', {
                  cta_name: 'CTABanner Email Us',
                  cta_type: 'link_click',
                  cta_location: 'cta_banner',
                  cta_page: window.location.pathname,
                  cta_destination: 'mailto:info@andyharraganandsons.co.uk',
                })
              }
              className="flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
