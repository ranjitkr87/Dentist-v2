import React from 'react';

export const AtelierPillars: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-32 bg-surface-container-low border-y hairline"
      id="pillars"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
              The Atelier Standard
            </span>
            <h2
              id="pillars-heading"
              className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight mt-2"
            >
              Architectural Serenity Meets Surgical Precision
            </h2>
            <p className="font-body-md text-on-surface-variant font-light mt-4 leading-relaxed text-[15px]">
              We eliminated the cold, clinical tension of conventional dentistry. Our Indiranagar sanctuary
              features bespoke acoustic isolation, floor-to-ceiling garden daylight, and hospital-grade air
              purification.
            </p>
          </div>

          <div className="lg:col-span-6">
            {/* Clinic Interior Image */}
            <div className="border hairline overflow-hidden shadow-xl bg-surface-container">
              <img
                alt="High-end luxury modern dental clinic interior in Bangalore with warm wood slats and serene daylight"
                className="w-full h-[360px] object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XvuRAzMxeckcVhfMDELDeHWKv_mCmCq9rUMqYapjpcqB15YMD2xkezyGxtuS0KIw775RQ5uT2MHGCHHe_DgAtjL4KWf1gSElbvVT8iohZrwwLnHQ5umdWmx4174q9a8MTFfctVUsCFja-q85uXB6JyhpBF8NIX_fasxOyCMVyCSJ1guc9IosNsuN3fXdSisOmv7UvwNRh3FZcNDHXM5lG-6pBpOpZ6PUumHjqSZUFyl3iIsVTqPOwvi7U"
                loading="lazy"
                width="600"
                height="360"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-container-lowest p-8 border hairline flex flex-col justify-between shadow-sm">
            <div>
              <div
                className="w-10 h-10 border hairline text-secondary flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">biotech</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-medium mb-2">
                3D Facial AI Simulation
              </h3>
              <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
                Optical intraoral topography merged with facial bone scans for sub-millimeter digital smile
                preview.
              </p>
            </div>
            <span className="pt-4 mt-6 border-t hairline font-label-sm uppercase tracking-[0.16em] text-secondary text-[10px]">
              Zero Guesswork
            </span>
          </div>

          <div className="bg-surface-container-lowest p-8 border hairline flex flex-col justify-between shadow-sm">
            <div>
              <div
                className="w-10 h-10 border hairline text-secondary flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-medium mb-2">
                Master Ceramist Lab
              </h3>
              <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
                Direct artistic partnership with Switzerland and Liechtenstein master dental technicians for
                hand-layering.
              </p>
            </div>
            <span className="pt-4 mt-6 border-t hairline font-label-sm uppercase tracking-[0.16em] text-secondary text-[10px]">
              Individual Stratification
            </span>
          </div>

          <div className="bg-surface-container-lowest p-8 border hairline flex flex-col justify-between shadow-sm">
            <div>
              <div
                className="w-10 h-10 border hairline text-secondary flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">spa</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-medium mb-2">
                Zero-Discomfort Protocol
              </h3>
              <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
                Computer-controlled STA local anesthesia without needle prick sensation or lingering
                collateral numbness.
              </p>
            </div>
            <span className="pt-4 mt-6 border-t hairline font-label-sm uppercase tracking-[0.16em] text-secondary text-[10px]">
              Calm Mind Environment
            </span>
          </div>

          <div className="bg-surface-container-lowest p-8 border hairline flex flex-col justify-between shadow-sm">
            <div>
              <div
                className="w-10 h-10 border hairline text-secondary flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-medium mb-2">
                Private VIP Operatory
              </h3>
              <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
                Dedicated soundproof suite with acoustic privacy, personalized streaming visual ceilings, and
                ambient daylight.
              </p>
            </div>
            <span className="pt-4 mt-6 border-t hairline font-label-sm uppercase tracking-[0.16em] text-secondary text-[10px]">
              Uncompromising Discretion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
