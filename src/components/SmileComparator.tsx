import React, { useState, useRef, useCallback } from 'react';
import { CASE_STUDIES } from '../data/atelierData';
import { CaseStudy } from '../types';

interface SmileComparatorProps {
  onSelectForConsult: (caseTitle: string) => void;
}

export const SmileComparator: React.FC<SmileComparatorProps> = ({ onSelectForConsult }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASE_STUDIES[0]);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      className="py-20 lg:py-32 bg-surface-container-low border-y hairline"
      id="gallery"
      aria-labelledby="transformations-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
            Visual Proof of Artistry
          </span>
          <h2
            id="transformations-title"
            className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight mt-2"
          >
            The Atelier Smile Transformations
          </h2>
          <p className="font-body-md text-on-surface-variant mt-3 font-light leading-relaxed">
            Every case represents a bespoke clinical solution, respecting individual facial harmony and
            phonetics. Drag the champagne divider to inspect the architectural transformation.
          </p>
        </div>

        {/* Featured Case Study with Interactive Dual-Layer Hairline Split Slider */}
        <div className="bg-surface-container-lowest border hairline shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-12">
          {/* Interactive Comparison Slider Container */}
          <div
            ref={containerRef}
            className="lg:col-span-7 relative bg-primary-container min-h-[380px] lg:min-h-[520px] select-none cursor-ew-resize overflow-hidden"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
              if (e.touches.length > 0) handleMove(e.touches[0].clientX);
            }}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-label="Before and after smile comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPos)}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {/* Base Image (AFTER: Final Ceramic Reveal) */}
            <img
              src={activeCase.imageAfter}
              alt={`${activeCase.title} - After smile transformation`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Clipped Overlay Image (BEFORE: Initial Clinical Condition) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.imageBefore}
                alt={`${activeCase.title} - Initial clinical presentation`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none filter sepia-[0.15] contrast-[0.95]"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
                loading="lazy"
              />
              {/* Subtle Before Tag */}
              <div className="absolute bottom-4 left-4 bg-primary/90 text-on-primary px-3 py-1 font-label-sm uppercase tracking-[0.2em] text-[10px] backdrop-blur-sm border hairline pointer-events-none">
                Initial Condition
              </div>
            </div>

            {/* Champagne Bronze Hairline Divider with Minimalist Drag Node */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-secondary pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-surface border border-secondary shadow-lg flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-sm font-bold select-none">
                  code
                </span>
              </div>
            </div>

            {/* Case Study Badge */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 font-label-sm uppercase tracking-[0.2em] text-secondary border hairline pointer-events-none text-[10px]">
              {activeCase.caseNumber}
            </div>

            {/* Final Ceramic Reveal Tag */}
            <div className="absolute bottom-4 right-4 bg-primary/85 backdrop-blur-md px-4 py-1.5 text-on-primary font-label-md tracking-[0.18em] uppercase text-[11px] pointer-events-none">
              Final Ceramic Reveal
            </div>
          </div>

          {/* Clinical Case Details */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm uppercase tracking-[0.24em] text-secondary text-[10px]">
                  Aesthetic Rejuvenation
                </span>
                <span className="font-label-sm uppercase tracking-[0.16em] text-on-surface-variant text-[10px]">
                  {activeCase.materials}
                </span>
              </div>

              <h3 className="font-headline-md text-2xl lg:text-3xl text-primary font-normal mt-1 mb-4">
                {activeCase.title}
              </h3>

              <div className="space-y-4 font-body-sm text-on-surface-variant leading-relaxed mb-6 font-light text-[13px]">
                <p>
                  <strong className="text-primary font-medium">Chief Complaint: </strong>
                  {activeCase.chiefComplaint}
                </p>
                <p>
                  <strong className="text-primary font-medium">Artisan Approach: </strong>
                  {activeCase.artisanApproach}
                </p>

                <blockquote className="p-4 bg-surface-container-low border hairline">
                  <p className="italic text-primary font-headline-sm text-sm">
                    "{activeCase.quote}"
                  </p>
                  <footer className="mt-2 font-label-sm uppercase tracking-[0.18em] text-secondary text-[10px]">
                    — {activeCase.patient}, {activeCase.role}
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="pt-6 border-t hairline flex items-center justify-between gap-4">
              <div>
                <span className="font-label-sm uppercase tracking-[0.16em] text-on-surface-variant block text-[10px]">
                  Treatment Span
                </span>
                <span className="font-headline-sm text-lg text-primary">{activeCase.timeline}</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectForConsult(activeCase.title)}
                className="px-5 py-2.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.18em] hover:bg-secondary transition-colors text-[11px]"
              >
                Book Similar Smile Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Transformation Case Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => {
            const isCurrent = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCase(c)}
                className={`text-left bg-surface-container-lowest border p-6 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary ${
                  isCurrent ? 'border-secondary shadow-md' : 'hairline hover:border-secondary/60'
                }`}
                aria-pressed={isCurrent}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-label-sm text-secondary uppercase tracking-[0.2em] text-[10px]">
                    {c.caseNumber}
                  </span>
                  {isCurrent && (
                    <span className="text-[9px] font-label-sm text-secondary uppercase tracking-[0.14em] bg-secondary-container/50 px-2 py-0.5">
                      Active
                    </span>
                  )}
                </div>
                <h4 className="font-headline-sm text-xl text-primary font-normal mt-1 mb-2">
                  {c.title}
                </h4>
                <p className="font-body-sm text-on-surface-variant font-light mb-4 line-clamp-2 text-[13px]">
                  {c.chiefComplaint}
                </p>
                <div className="flex items-center justify-between pt-2 border-t hairline">
                  <span className="font-label-sm uppercase tracking-[0.16em] text-primary text-[10px]">
                    {c.toothCount} Veneers • {c.timeline}
                  </span>
                  <span className="font-label-sm uppercase tracking-[0.14em] text-secondary text-[10px]">
                    Inspect &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
