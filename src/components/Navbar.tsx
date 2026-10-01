import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  const navPortals = [
    {
      num: "01",
      title: "The Atelier",
      href: "#hero",
      desc: "Indiranagar Sanctuary & Philosophy",
    },
    {
      num: "02",
      title: "Aesthetic Procedures",
      href: "#procedures",
      desc: "Minimal-Prep Veneers & DSD",
    },
    {
      num: "03",
      title: "Smile Transformations",
      href: "#gallery",
      desc: "Clinical Proof & Case Studies",
    },
    {
      num: "04",
      title: "Swiss Ceramic Studio",
      href: "#ceramics",
      desc: "Optical Physics & Shade Swatches",
    },
    {
      num: "05",
      title: "Dr. Ananya Sharma",
      href: "#artisan",
      desc: "Master Aesthetic Prosthodontist, FAACD",
    },
    {
      num: "06",
      title: "Atelier Standards",
      href: "#pillars",
      desc: "Acoustic Isolation & Painless STA",
    },
    // {
    //   num: "07",
    //   title: "Treatment Estimator",
    //   href: "#pricing-estimator",
    //   desc: "Transparent Investment Calculator",
    // },
    {
      num: "07",
      title: "Inquiries & FAQ",
      href: "#faq",
      desc: "Longevity, Comfort & Privacy",
    },
    {
      num: "08",
      title: "Private Consultation",
      href: "#consultation",
      desc: "VIP Discovery Slot Reservation",
    },
  ];

  return (
    <>
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#fbf9f6]/95  shadow-sm" : "bg-[#fbf9f6]"
        } border-b hairline`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="flex flex-col group flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#725b38]"
            aria-label="Atelier Smile Architecture Home"
          >
            <span className="font-headline-md text-xl sm:text-2xl tracking-[0.05em] text-primary uppercase font-normal leading-none">
              Atelier{" "}
              <span className="italic font-light lowercase text-secondary font-headline-md tracking-normal">
                smile architecture
              </span>
            </span>
            <span className="font-label-sm uppercase text-[8.5px] tracking-[0.24em] text-secondary mt-1">
              Indiranagar • Bengaluru
            </span>
          </a>

          {/* Minimalist, Spacious Desktop Center Navigation (Only 3 essential links for true luxury breathing room) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-12 font-label-md tracking-[0.18em] uppercase text-on-surface-variant text-[11px]"
            aria-label="Primary Navigation"
          >
            <a
              href="#procedures"
              className="text-on-surface-variant hover:text-primary transition-colors py-1 relative group"
            >
              Procedures
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              className="text-on-surface-variant hover:text-primary transition-colors py-1 relative group"
            >
              Transformations
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#artisan"
              className="text-on-surface-variant hover:text-primary transition-colors py-1 relative group"
            >
              Doctor
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Trailing Luxury Actions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Primary Action Button */}
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 bg-primary text-on-primary font-label-md tracking-[0.18em] uppercase hover:bg-secondary transition-colors duration-200 text-[10.5px] sm:text-[11px] bronze-glow whitespace-nowrap"
              aria-label="Reserve Private Consultation"
            >
              <span>Private Consult</span>
            </a>

            {/* Architectural Full Directory Toggle (Universal for desktop, tablet & mobile) */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3 py-2 border hairline bg-surface hover:bg-surface-container-low transition-colors text-primary font-label-md tracking-[0.16em] uppercase text-[10.5px] sm:text-[11px] focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
              aria-label={
                drawerOpen
                  ? "Close Navigation Directory"
                  : "Open Navigation Directory"
              }
              aria-expanded={drawerOpen}
              aria-controls="architectural-drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                {drawerOpen ? "close" : "menu"}
              </span>
              <span className="hidden sm:inline font-medium">
                {drawerOpen ? "Close" : "Directory"}
              </span>
            </button>
          </div>
        </div>

        {/* High-Fashion Slide-Over Architectural Directory */}
        {drawerOpen && (
          <div
            id="architectural-drawer"
            className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity"
            role="dialog"
            aria-modal="true"
            aria-label="Atelier Navigation Directory"
            onClick={() => setDrawerOpen(false)}
          >
            <div
              className="w-full max-w-md sm:max-w-lg h-full bg-[#fbf9f6] border-l hairline shadow-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b hairline">
                  <div>
                    <span className="font-headline-md text-xl tracking-[0.04em] text-primary uppercase font-normal block">
                      Atelier{" "}
                      <span className="italic font-light lowercase text-secondary font-headline-md">
                        smile architecture
                      </span>
                    </span>
                    <span className="font-label-sm uppercase text-[8px] tracking-[0.24em] text-secondary">
                      Indiranagar Sanctuary Directory
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 text-primary hover:text-secondary focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                    aria-label="Close Navigation Directory"
                  >
                    <span
                      className="material-symbols-outlined text-2xl"
                      aria-hidden="true"
                    >
                      close
                    </span>
                  </button>
                </div>

                {/* Directory Links List */}
                <nav
                  className="py-6 space-y-1"
                  aria-label="Expanded Atelier Directory"
                >
                  {navPortals.map((portal) => (
                    <a
                      key={portal.href}
                      href={portal.href}
                      onClick={() => setDrawerOpen(false)}
                      className="group flex items-center justify-between py-2.5 px-3 -mx-3 hover:bg-surface-container-low transition-colors border-b hairline"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-headline-sm text-sm text-secondary/50 font-normal group-hover:text-secondary">
                          {portal.num}
                        </span>
                        <div>
                          <p className="font-headline-sm text-lg text-primary font-normal group-hover:text-secondary transition-colors">
                            {portal.title}
                          </p>
                          <p className="font-body-sm text-[11px] text-on-surface-variant font-light">
                            {portal.desc}
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity text-base">
                        arrow_forward
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer & Direct Concierge */}
              <div className="pt-6 border-t hairline space-y-4">
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+918049204000"
                    className="flex items-center gap-2 text-body-sm text-primary hover:text-secondary transition-colors font-medium text-[13px]"
                  >
                    <span className="material-symbols-outlined text-secondary text-base">
                      call
                    </span>
                    <span>Desk: +91 (080) 4920 4000</span>
                  </a>
                  <a
                    href="https://wa.me/918049204000?text=Hello%20Atelier%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20aesthetic%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-secondary hover:text-primary transition-colors font-medium text-[13px]"
                  >
                    <span className="material-symbols-outlined text-base">
                      chat
                    </span>
                    <span>WhatsApp VIP Concierge Desk</span>
                  </a>
                </div>

                <p className="font-label-sm text-[9px] uppercase tracking-[0.16em] text-on-surface-variant">
                  Plot 482, 100ft Road, Indiranagar, Bengaluru • Mon–Sat
                  10:00–20:00
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
