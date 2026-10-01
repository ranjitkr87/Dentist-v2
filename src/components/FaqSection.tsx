import React, { useState } from 'react';
import { FAQS } from '../data/atelierData';

export const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-20 lg:py-32 bg-background" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-10">
          <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
            Inquiries &amp; Protocols
          </span>
          <h2
            id="faq-heading"
            className="font-headline-lg text-3xl md:text-4xl text-primary font-normal tracking-tight mt-2"
          >
            Frequently Explored Questions
          </h2>
          <p className="font-body-md text-on-surface-variant font-light mt-3 text-[14px]">
            Clinical facts regarding micro-prep porcelain, biocompatibility, and patient discretion.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. shaving, pain, longevity, confidentiality)..."
              className="w-full px-4 py-3 pl-11 border hairline bg-surface-container-lowest text-primary text-body-md focus:border-secondary focus:ring-0 placeholder:text-on-surface-variant/50 text-[14px]"
              aria-label="Filter frequently explored questions"
            />
            <span
              className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant/60 text-lg"
              aria-hidden="true"
            >
              search
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-on-surface-variant/60 hover:text-primary text-sm uppercase font-label-sm"
              >
                Clear
              </button>
            )}
          </div>

          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter FAQ by category"
          >
            {[
              { id: 'all', label: 'All Inquiries' },
              { id: 'veneers', label: 'Porcelain Veneers' },
              { id: 'comfort', label: 'Comfort & Anesthesia' },
              { id: 'mockup', label: '3D Mockup Trial' },
              { id: 'privacy', label: 'VIP Discretion' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-[10px] font-label-sm tracking-[0.14em] uppercase border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-surface-container-lowest border hairline text-on-surface-variant font-light text-body-md">
              No questions matched your query. Contact our concierge directly for immediate assistance.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <details
                key={faq.id}
                className="group bg-surface-container-lowest p-6 border hairline [&_summary::-webkit-details-marker]:hidden shadow-sm"
                open={idx === 0 && !searchTerm}
              >
                <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-xl text-primary font-normal focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary">
                  <span>{faq.question}</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-secondary flex-shrink-0 ml-4"
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </summary>
                <p className="font-body-md text-on-surface-variant font-light mt-4 leading-relaxed text-[15px] border-t hairline pt-4">
                  {faq.answer}
                </p>
              </details>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
