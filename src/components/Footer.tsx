import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-background border-t hairline py-16"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-headline-md text-2xl uppercase tracking-[0.06em] text-primary block">
              Atelier{" "}
              <span className="italic font-light lowercase text-secondary font-headline-md tracking-normal">
                smile architecture
              </span>
            </span>
            <p className="font-body-md text-on-surface-variant font-light max-w-sm leading-relaxed text-[14px]">
              Cosmetic dentistry, porcelain artistry, and biological facial
              harmony. Elevating the human smile through understated luxury and
              surgical excellence.
            </p>
            <div className="flex items-center gap-3 pt-2 font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              <span>AACD Accredited</span>
              <span aria-hidden="true">•</span>
              <span>Swiss Ceramist Certified</span>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="font-label-md uppercase tracking-[0.2em] text-primary mb-4 text-[11px]">
              Procedures
            </h4>
            <ul className="space-y-2.5 font-body-sm text-on-surface-variant font-light text-[13px]">
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#procedures"
                >
                  Porcelain Veneers
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#procedures"
                >
                  Digital Smile Design
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#procedures"
                >
                  Biomimetic Aligners
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#procedures"
                >
                  Laser Gum Architecture
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#procedures"
                >
                  Enamel Whitening
                </a>
              </li>
            </ul>
          </div>

          {/* The Atelier */}
          <div>
            <h4 className="font-label-md uppercase tracking-[0.2em] text-primary mb-4 text-[11px]">
              The Atelier
            </h4>
            <ul className="space-y-2.5 font-body-sm text-on-surface-variant font-light text-[13px]">
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#artisan"
                >
                  Dr. Ananya Sharma
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#gallery"
                >
                  Before &amp; After Cases
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#ceramics"
                >
                  Swiss Ceramic Lab
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#pillars"
                >
                  Architectural Tour
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#consultation"
                >
                  VIP Discretion Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="font-label-md uppercase tracking-[0.2em] text-primary mb-4 text-[11px]">
              Concierge
            </h4>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              Indiranagar Studio: 100ft Road, Bengaluru 560038
            </p>
            <div className="mt-3 space-y-1 font-body-sm text-on-surface-variant font-light text-[13px]">
              <p>
                <a
                  href="tel:+918049204000"
                  className="hover:text-secondary transition-colors"
                >
                  +91 (080) 4920 4000
                </a>
              </p>
              <p>
                <a
                  href="mailto:concierge@ateliersmile.in"
                  className="hover:text-secondary transition-colors"
                >
                  concierge@ateliersmile.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t hairline flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-on-surface-variant font-light text-[12px]">
          <p>
            © 2026 Atelier Smile Architecture. All rights reserved. Registered
            under Karnataka Private Medical Establishments Act.
          </p>
          <div className="hidden flex items-center space-x-6 font-label-sm uppercase tracking-[0.18em] text-[10px]">
            <a
              className="hover:text-primary transition-colors"
              href="#consultation"
            >
              Confidentiality
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="/sitemap.xml"
            >
              Sitemap.xml
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="/robots.txt"
            >
              Robots.txt
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="/llms.txt"
            >
              LLMs.txt
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="/humans.txt"
            >
              Humans.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
