import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden"
      id="hero"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Avant-Garde Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* Bronze accent badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border hairline bg-surface-container-low text-secondary font-label-md uppercase tracking-[0.25em] text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true"></span>
              <span>Aesthetic Dental Sanctuary • Indiranagar</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-title"
              className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-primary font-normal leading-[1.08] tracking-[-0.02em]"
            >
              A Bespoke Smile, Sculpted to Your{' '}
              <span className="italic font-normal text-secondary">Natural Facial Geometry.</span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="font-body-lg text-[16px] sm:text-[17px] text-on-surface-variant max-w-xl font-light leading-relaxed">
              We reject artificial uniformity. At Atelier, our master prosthodontists and Swiss ceramic
              artisans curate minimal-prep porcelain veneers, biological translucency, and bespoke harmony
              tailored to your lip contours and unique personality.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-300 bronze-glow text-center text-[11px]"
                href="#consultation"
              >
                <span>Reserve Private Consultation</span>
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  arrow_forward
                </span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border hairline bg-surface text-primary font-label-md uppercase tracking-[0.18em] hover:bg-secondary-container/40 transition-colors duration-200 text-center text-[11px]"
                href="https://wa.me/918049204000?text=Hello%20Atelier%20Concierge%2C%20I%20would%20like%20to%20discuss%20a%20private%20smile%20evaluation."
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Connect with Atelier WhatsApp Concierge"
              >
                <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true"></span>
                <span>WhatsApp Concierge</span>
              </a>
            </div>

            {/* Discretion & Certification Proof */}
            <div className="pt-6 border-t hairline w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-on-surface-variant font-label-md uppercase tracking-[0.16em] text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-secondary font-medium">★ 4.98 Rating</span>
                <span className="text-on-surface-variant/70">(2,400+ Smiles Designed)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base" aria-hidden="true">
                  verified
                </span>
                <span>American Academy of Cosmetic Dentistry Protocol</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Frame container */}
              <div className="relative overflow-hidden bg-surface-container border hairline shadow-xl">
                <img
                  alt="Aspirational luxury dental smile aesthetics closeup, naturally radiant and healthy teeth"
                  className="w-full h-[480px] sm:h-[540px] lg:h-[620px] object-cover object-center filter contrast-[1.03]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4OPNw-rTbmsSlwDaHOn2vUeHywdKBw7FqRyi9Ysy9522ouiHJkRCE1LoJuUSRKQZFjBaGiH5aQ82QMq9nPJUltj5T9tLXD1_OSnc9u83rLxDdhyEuDnyvoeQI7ltqiWTAPzFc5IRT7XtaxNFIhxC6u51AJLU6-mFIvz0y0iyFxaLtCS_ULppZAVv-dtIvLfJSokjubRzS1GfgO9q8v9gLpUFqkwdrbcpYiv3sYnDSOTqLIcykHsW9"
                  width="600"
                  height="700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle luxury vignette overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                ></div>

                {/* Floating Bottom Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                  <p className="font-headline-sm text-xl italic font-normal tracking-wide">
                    Handcrafted Translucency
                  </p>
                  <p className="font-label-sm uppercase tracking-[0.2em] text-white/80 mt-1 text-[10px]">
                    E-Max Artisan Porcelain &amp; Layered Enamel
                  </p>
                </div>
              </div>

              {/* Floating Bronze Precision Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 border hairline shadow-lg flex items-center gap-3.5 max-w-[250px]">
                <div
                  className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-lg">auto_awesome</span>
                </div>
                <div>
                  <p className="font-headline-sm text-sm text-primary font-medium tracking-tight">
                    99.8% Match
                  </p>
                  <p className="font-label-sm text-[9px] uppercase tracking-[0.15em] text-on-surface-variant">
                    Natural Shade Precision
                  </p>
                </div>
              </div>

              {/* Floating Atelier Reassurance Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-primary text-on-primary p-4 border border-secondary/40 shadow-xl flex items-center gap-3 max-w-[240px]">
                <span className="material-symbols-outlined text-secondary text-2xl" aria-hidden="true">
                  diamond
                </span>
                <div>
                  <p className="font-label-md text-xs uppercase tracking-[0.16em] text-secondary font-medium">
                    Swiss Certified
                  </p>
                  <p className="font-body-sm text-[12px] text-white/70">
                    Biomimetic Ceramic Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
