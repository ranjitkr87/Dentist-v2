import React from 'react';

export const MetricsBar: React.FC = () => {
  return (
    <section
      className="border-y hairline bg-surface-container-low/70 py-8"
      aria-label="Atelier Clinical Credentials and Metrics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y-2 md:divide-y-0 md:divide-x hairline">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 pt-3 md:pt-0">
            <span className="font-headline-lg text-4xl lg:text-5xl font-light text-primary tracking-tight">
              2,400+
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-secondary mt-1 text-[11px]">
              Custom Smile Designs
            </span>
            <span className="font-body-sm text-on-surface-variant font-light mt-0.5 text-[13px]">
              Bespoke Facial Integration
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-8 pt-3 md:pt-0">
            <span className="font-headline-lg text-4xl lg:text-5xl font-light text-primary tracking-tight">
              15+
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-secondary mt-1 text-[11px]">
              Years Clinical Mastery
            </span>
            <span className="font-body-sm text-on-surface-variant font-light mt-0.5 text-[13px]">
              AIIMS &amp; AACD Trained
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-8 pt-3 md:pt-0">
            <span className="font-headline-lg text-4xl lg:text-5xl font-light text-primary tracking-tight">
              100%
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-secondary mt-1 text-[11px]">
              Swiss Ceramics
            </span>
            <span className="font-body-sm text-on-surface-variant font-light mt-0.5 text-[13px]">
              Ivoclar Vivadent E-Max
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-8 pt-3 md:pt-0">
            <span className="font-headline-lg text-4xl lg:text-5xl font-light text-primary tracking-tight">
              4.98★
            </span>
            <span className="font-label-md uppercase tracking-[0.2em] text-secondary mt-1 text-[11px]">
              Google Verified
            </span>
            <span className="font-body-sm text-on-surface-variant font-light mt-0.5 text-[13px]">
              Discreet Discerning Clientele
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
