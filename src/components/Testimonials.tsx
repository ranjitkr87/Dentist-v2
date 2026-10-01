import React from 'react';
import { TESTIMONIALS } from '../data/atelierData';

export const Testimonials: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-32 bg-surface-container-low border-y hairline"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b hairline">
          <div>
            <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
              Patron Experiences
            </span>
            <h2
              id="testimonials-heading"
              className="font-headline-lg text-3xl md:text-5xl text-primary font-normal mt-2"
            >
              Words From Our Discerning Patrons
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-label-md uppercase tracking-[0.18em] text-secondary text-[11px]">
            <span>4.98 / 5 Verified Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-8 border hairline flex flex-col justify-between shadow-sm"
            >
              <div>
                <div
                  className="text-secondary mb-5 font-headline-sm text-base tracking-widest"
                  aria-label="5 out of 5 stars"
                >
                  ★ ★ ★ ★ ★
                </div>
                <blockquote className="font-headline-sm text-lg text-primary italic font-normal leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
              </div>
              <footer className="pt-4 border-t hairline flex items-center justify-between">
                <div>
                  <p className="font-headline-sm text-base text-primary">{t.author}</p>
                  <p className="font-label-sm uppercase tracking-[0.16em] text-on-surface-variant text-[10px]">
                    {t.title}
                  </p>
                </div>
                <span className="font-label-sm text-secondary uppercase tracking-[0.14em] text-[9px] bg-surface-container-low px-2 py-1">
                  {t.caseRef}
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
