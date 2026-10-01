import React, { useState } from 'react';

interface CostEstimatorProps {
  onPreFillConsultation: (details: { procedure: string; notes: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onPreFillConsultation }) => {
  const [procedureType, setProcedureType] = useState<'veneers' | 'dsd' | 'aligners' | 'laser'>('veneers');
  const [toothCount, setToothCount] = useState<number>(8); // typical aesthetic smile zone (upper 8)
  const [ceramicGrade, setCeramicGrade] = useState<'emax' | 'feldspathic'>('emax');

  // Pricing calculations
  const calculateTotal = () => {
    if (procedureType === 'aligners') {
      return 150000;
    }
    if (procedureType === 'laser') {
      return 18000 + toothCount * 2500;
    }
    const unitPrice = ceramicGrade === 'feldspathic' ? 42000 : 35000;
    const dsdFee = procedureType === 'dsd' ? 25000 : 0;
    return toothCount * unitPrice + dsdFee;
  };

  const calculateDays = () => {
    if (procedureType === 'aligners') return '6 - 9 Months';
    if (procedureType === 'laser') return '1 Sitting (Zero downtime)';
    if (procedureType === 'dsd') return '7 - 10 Business Days';
    return '5 - 7 Business Days';
  };

  const handleBookEstimate = () => {
    const procName =
      procedureType === 'veneers'
        ? `Porcelain Veneers (${toothCount} Teeth - ${ceramicGrade === 'emax' ? 'E-Max' : 'Feldspathic'})`
        : procedureType === 'dsd'
        ? `Full Smile Makeover (DSD + ${toothCount} Units)`
        : procedureType === 'aligners'
        ? 'Biomimetic Clear Aligners'
        : `Laser Gum Architecture (${toothCount} Teeth)`;

    const notes = `Online estimate generated: ₹${calculateTotal().toLocaleString(
      'en-IN'
    )} for ${procName} (Estimated timeline: ${calculateDays()}).`;

    onPreFillConsultation({ procedure: procName, notes });
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-20 lg:py-28 bg-surface-container-low border-b hairline"
      id="pricing-estimator"
      aria-labelledby="estimator-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Architectural Transparency */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
              Transparent Craftsmanship
            </span>
            <h2
              id="estimator-heading"
              className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight"
            >
              Smile Architecture Investment Calculator
            </h2>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed text-[15px]">
              We believe elite aesthetics must be paired with complete fee clarity. Use our clinical estimator
              to explore investment structures based on smile width, unit count, and ceramic layering techniques.
            </p>
            <div className="p-4 bg-surface-container-lowest border hairline space-y-2 text-body-sm text-on-surface-variant font-light text-[13px]">
              <div className="flex items-center gap-2 text-primary font-medium">
                <span className="material-symbols-outlined text-secondary text-base">verified</span>
                <span>Includes Comprehensive Pre-Op Diagnostics</span>
              </div>
              <p>
                Every proposal includes 3D dynamic scans, temporaries, shade matching session, and lifetime
                craftsmanship warranty documentation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Panel */}
          <div className="lg:col-span-7 bg-surface-container-lowest border hairline p-8 sm:p-10 shadow-lg">
            {/* Discipline Selection */}
            <div className="mb-6">
              <label className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-2 text-[11px]">
                1. Select Aesthetic Discipline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'veneers', label: 'Porcelain Veneers' },
                  { id: 'dsd', label: 'DSD Makeover' },
                  { id: 'aligners', label: 'Clear Aligners' },
                  { id: 'laser', label: 'Laser Gum Sculpt' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProcedureType(item.id as any)}
                    className={`py-2.5 px-2 text-center text-[11px] font-label-md uppercase tracking-[0.14em] border transition-colors ${
                      procedureType === item.id
                        ? 'bg-primary text-on-primary border-primary'
                        : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tooth Count Slider (if applicable) */}
            {procedureType !== 'aligners' && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="tooth-count-slider"
                    className="font-label-sm uppercase tracking-[0.18em] text-primary text-[11px]"
                  >
                    2. Teeth in Aesthetic Zone ({toothCount} Units)
                  </label>
                  <span className="font-label-sm uppercase tracking-[0.14em] text-secondary text-[11px]">
                    {toothCount === 6
                      ? 'Canine to Canine'
                      : toothCount === 8
                      ? 'Full Upper Smile Arc'
                      : toothCount >= 10
                      ? 'Maxillary Premolar Arc'
                      : 'Focused Incisors'}
                  </span>
                </div>
                <input
                  id="tooth-count-slider"
                  type="range"
                  min="2"
                  max="16"
                  step="2"
                  value={toothCount}
                  onChange={(e) => setToothCount(parseInt(e.target.value, 10))}
                  className="w-full accent-secondary cursor-pointer h-2 bg-surface-container-low rounded-none"
                  aria-label="Number of teeth in aesthetic zone"
                />
                <div className="flex justify-between text-[10px] font-label-sm uppercase text-on-surface-variant/70 mt-1">
                  <span>2 Units</span>
                  <span>6 Units</span>
                  <span>8 Units (Standard)</span>
                  <span>10 Units</span>
                  <span>16 Units (Full Arch)</span>
                </div>
              </div>
            )}

            {/* Ceramic Grade Selection (for veneers and DSD) */}
            {(procedureType === 'veneers' || procedureType === 'dsd') && (
              <div className="mb-6">
                <label className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-2 text-[11px]">
                  3. Master Ceramist Technique
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCeramicGrade('emax')}
                    className={`p-3 text-left border text-[12px] ${
                      ceramicGrade === 'emax'
                        ? 'border-secondary bg-surface-container-low'
                        : 'hairline hover:border-secondary/60'
                    }`}
                  >
                    <span className="font-medium text-primary block">Ivoclar Vivadent E-Max Press</span>
                    <span className="text-[11px] text-on-surface-variant font-light">
                      Monolithic pressed lithium disilicate • High durability
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCeramicGrade('feldspathic')}
                    className={`p-3 text-left border text-[12px] ${
                      ceramicGrade === 'feldspathic'
                        ? 'border-secondary bg-surface-container-low'
                        : 'hairline hover:border-secondary/60'
                    }`}
                  >
                    <span className="font-medium text-primary block">Swiss Hand-Layered Feldspathic</span>
                    <span className="text-[11px] text-on-surface-variant font-light">
                      Ultra-thin 0.2mm contact lens • Maximum incisal translucency
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Live Calculation Display Box */}
            <div className="pt-6 border-t hairline flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-surface-container-low p-6">
              <div>
                <span className="font-label-sm uppercase tracking-[0.18em] text-secondary block text-[10px]">
                  Estimated Investment
                </span>
                <span className="font-headline-lg text-3xl sm:text-4xl text-primary font-normal">
                  ₹{calculateTotal().toLocaleString('en-IN')}
                </span>
                <span className="block text-[11px] text-on-surface-variant mt-0.5">
                  Est. Duration: {calculateDays()}
                </span>
              </div>

              <button
                type="button"
                onClick={handleBookEstimate}
                className="px-6 py-3.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.18em] hover:bg-secondary transition-colors bronze-glow text-[11px]"
              >
                Inquire With This Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
