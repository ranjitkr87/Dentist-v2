import React from 'react';

export const PatientJourney: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="journey-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
            The Method
          </span>
          <h2
            id="journey-heading"
            className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight mt-2"
          >
            The Bespoke Patient Journey
          </h2>
          <p className="font-body-md text-on-surface-variant mt-3 font-light leading-relaxed text-[15px]">
            A collaborative aesthetic process where you evaluate your new smile before any physical work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 border hairline bg-surface-container-lowest relative shadow-sm">
            <span
              className="font-headline-lg text-4xl text-secondary/30 block mb-4"
              aria-hidden="true"
            >
              01
            </span>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              Discovery
            </span>
            <h3 className="font-headline-sm text-xl text-primary font-medium mt-1 mb-2">
              Aesthetic Discovery &amp; DSD
            </h3>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              High-definition photographic studio session, 3D facial scan, and analysis of your phonetic
              contours and smile goals.
            </p>
          </div>

          <div className="p-8 border hairline bg-surface-container-lowest relative shadow-sm">
            <span
              className="font-headline-lg text-4xl text-secondary/30 block mb-4"
              aria-hidden="true"
            >
              02
            </span>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              Simulation
            </span>
            <h3 className="font-headline-sm text-xl text-primary font-medium mt-1 mb-2">
              3D Mockup Try-in
            </h3>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              We temporarily place an aesthetic physical composite mock-up over your existing teeth. You view
              your smile live in motion.
            </p>
          </div>

          <div className="p-8 border hairline bg-surface-container-lowest relative shadow-sm">
            <span
              className="font-headline-lg text-4xl text-secondary/30 block mb-4"
              aria-hidden="true"
            >
              03
            </span>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              Artisanship
            </span>
            <h3 className="font-headline-sm text-xl text-primary font-medium mt-1 mb-2">
              Master Ceramist Crafting
            </h3>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              Our Swiss ceramic laboratory hand-crafts each individual veneer layer by layer, building unique
              internal light dynamics.
            </p>
          </div>

          <div className="p-8 border hairline bg-surface-container-lowest relative shadow-sm">
            <span
              className="font-headline-lg text-4xl text-secondary/30 block mb-4"
              aria-hidden="true"
            >
              04
            </span>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              Transformation
            </span>
            <h3 className="font-headline-sm text-xl text-primary font-medium mt-1 mb-2">
              Final Bonding &amp; Warranty
            </h3>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              Permanent resin bonding under surgical magnification, followed by a personalized aesthetic
              maintenance warranty kit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
