import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/analytics/track";

const PageCTA = () => (
  <section data-section="page_cta" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-[85%] mx-auto bg-primary rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary-foreground leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-lg text-sm leading-relaxed font-body">
              Get in touch for a free, no-obligation quotation. Andy will
              personally visit your property to discuss your requirements.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:min-w-[200px]">
            <a
              href="tel:+441245000000"
              onClick={() =>
                trackEvent('cta_interaction', {
                  cta_name: 'PageCTA Call Us',
                  cta_type: 'link_click',
                  cta_location: 'page_cta',
                  cta_page: window.location.pathname,
                  cta_destination: 'tel:+441245000000',
                })
              }
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              <Phone size={16} /> Call Us
            </a>
            <Link
              to="/contact"
              onClick={() =>
                trackEvent('cta_interaction', {
                  cta_name: 'PageCTA Contact Us',
                  cta_type: 'link_click',
                  cta_location: 'page_cta',
                  cta_page: window.location.pathname,
                  cta_destination: '/contact',
                })
              }
              className="flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              <Mail size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageCTA;
