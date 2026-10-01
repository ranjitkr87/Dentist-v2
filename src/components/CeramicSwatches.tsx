import React, { useState } from 'react';
import { CERAMIC_SWATCHES } from '../data/atelierData';
import { CeramicSwatch } from '../types';

export const CeramicSwatches: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<CeramicSwatch>(CERAMIC_SWATCHES[0]);

  return (
    <section
      className="py-20 lg:py-28 bg-background border-b hairline"
      id="ceramics"
      aria-labelledby="ceramics-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b hairline">
          <div className="max-w-2xl">
            <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
              Swiss Optical Physics
            </span>
            <h2
              id="ceramics-heading"
              className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight mt-2"
            >
              Artisan Shade &amp; Ceramic Studio
            </h2>
            <p className="font-body-md text-on-surface-variant mt-3 font-light leading-relaxed">
              We never utilize monolithic opaque porcelain. Each tooth is stratified with 4 to 6 micro-layers
              of feldspathic enamel powder fired at 910°C, recreating natural dentin opal luminescence.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-label-md text-secondary uppercase tracking-[0.2em] text-[11px]">
            <span>Calibrated to 5500K Daylight Spectrum</span>
          </div>
        </div>

        {/* Swatch Selector Chips Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
          role="radiogroup"
          aria-label="Select porcelain shade swatch"
        >
          {CERAMIC_SWATCHES.map((swatch) => {
            const isSelected = swatch.code === selectedSwatch.code;
            return (
              <button
                key={swatch.code}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedSwatch(swatch)}
                className={`p-5 text-left border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary relative ${
                  isSelected
                    ? 'border-secondary bg-surface-container-lowest shadow-md'
                    : 'border-outline-variant/30 bg-surface-container-low hover:border-secondary/60'
                }`}
              >
                {/* Visual Porcelain Chip Preview */}
                <div
                  className="w-full h-16 border mb-3 flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundColor: swatch.hex,
                    borderColor: swatch.borderHex,
                  }}
                >
                  <span className="font-headline-md text-lg text-primary/70 tracking-widest font-medium">
                    {swatch.code}
                  </span>
                  {/* Subtle opalescent sheen reflection line */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-60 pointer-events-none"></div>
                </div>

                <span className="font-label-md text-primary font-bold block mb-1 text-[11px]">
                  {swatch.code} • {swatch.name.split(' ')[0]}
                </span>
                <span className="font-body-sm text-secondary text-[11px] block">
                  {swatch.translucency.split('/')[1] || swatch.translucency}
                </span>

                {isSelected && (
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-secondary"
                    aria-hidden="true"
                  ></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Swatch Anatomy Panel */}
        <div className="bg-surface-container-lowest border hairline p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Ceramic Specimen Visual */}
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-surface-container-low border hairline">
            <div
              className="w-32 h-44 shadow-inner border relative mb-4 flex flex-col justify-between p-3"
              style={{
                backgroundColor: selectedSwatch.hex,
                borderColor: selectedSwatch.borderHex,
              }}
            >
              <span className="font-label-sm uppercase text-primary/60 tracking-[0.2em] text-[9px]">
                Swiss Lab Sample
              </span>
              <div className="space-y-1">
                <span className="font-headline-sm text-2xl text-primary font-bold block">
                  {selectedSwatch.code}
                </span>
                <span className="font-label-sm text-[8px] uppercase tracking-[0.14em] text-on-surface-variant">
                  E-Max Press Ceram
                </span>
              </div>
            </div>
            <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
              {selectedSwatch.lightTransmission}
            </span>
          </div>

          {/* Description & Optical Physics */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-[0.18em] text-[10px]">
                {selectedSwatch.translucency}
              </span>
              <span className="text-on-surface-variant text-body-sm font-light text-[13px]">
                Spectrophotometer Calibrated ΔE &lt; 0.6
              </span>
            </div>

            <h3 className="font-headline-md text-2xl sm:text-3xl text-primary font-normal">
              {selectedSwatch.name}
            </h3>

            <p className="font-body-md text-on-surface-variant font-light leading-relaxed text-[15px]">
              {selectedSwatch.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t hairline text-body-sm">
              <div>
                <span className="font-label-sm uppercase tracking-[0.16em] text-secondary block mb-1 text-[10px]">
                  Recommended For
                </span>
                <p className="font-medium text-primary text-[13px]">{selectedSwatch.recommendedFor}</p>
              </div>
              <div>
                <span className="font-label-sm uppercase tracking-[0.16em] text-secondary block mb-1 text-[10px]">
                  Incisal Edge Character
                </span>
                <p className="font-medium text-primary text-[13px]">{selectedSwatch.lightTransmission}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
