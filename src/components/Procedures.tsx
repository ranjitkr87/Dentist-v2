import React, { useState } from 'react';
import { PROCEDURES_DATA } from '../data/atelierData';
import { Procedure } from '../types';
import { ProcedureModal } from './ProcedureModal';

interface ProceduresProps {
  onSelectProcedure: (procedureName: string) => void;
}

export const Procedures: React.FC<ProceduresProps> = ({ onSelectProcedure }) => {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [filter, setFilter] = useState<'all' | 'veneers' | 'alignment' | 'biology'>('all');

  const filteredProcedures = PROCEDURES_DATA.filter((p) => {
    if (filter === 'veneers') return p.id === 'veneers' || p.id === 'dsd';
    if (filter === 'alignment') return p.id === 'aligners' || p.id === 'dsd';
    if (filter === 'biology') return p.id === 'laser-gum' || p.id === 'whitening' || p.id === 'zirconia';
    return true;
  });

  return (
    <section className="py-20 lg:py-32 bg-background" id="procedures" aria-labelledby="procedures-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b hairline">
          <div className="max-w-2xl">
            <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
              Bespoke Disciplines
            </span>
            <h2
              id="procedures-heading"
              className="font-headline-lg text-3xl md:text-5xl text-primary font-normal tracking-tight mt-2"
            >
              Curated Cosmetic &amp; Facial Aesthetics
            </h2>
            <p className="font-body-md text-on-surface-variant mt-3 font-light leading-relaxed">
              Every procedure is an intentional dialogue between biocompatible ceramics, optical
              crystallography, and facial harmony.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-label-md text-secondary uppercase tracking-[0.2em] text-[11px]">
            <span>Exclusively by Private Appointment</span>
          </div>
        </div>

        {/* Filter Discipline Tabs for Ease of Exploration */}
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 overflow-x-auto"
          role="tablist"
          aria-label="Filter procedures by clinical category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            onClick={() => setFilter('all')}
            className={`px-4 py-2 border text-[11px] font-label-md tracking-[0.16em] uppercase transition-colors ${
              filter === 'all'
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
            }`}
          >
            All Disciplines ({PROCEDURES_DATA.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'veneers'}
            onClick={() => setFilter('veneers')}
            className={`px-4 py-2 border text-[11px] font-label-md tracking-[0.16em] uppercase transition-colors ${
              filter === 'veneers'
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
            }`}
          >
            Porcelain Veneers &amp; DSD
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'alignment'}
            onClick={() => setFilter('alignment')}
            className={`px-4 py-2 border text-[11px] font-label-md tracking-[0.16em] uppercase transition-colors ${
              filter === 'alignment'
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
            }`}
          >
            Biomimetic Aligners
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'biology'}
            onClick={() => setFilter('biology')}
            className={`px-4 py-2 border text-[11px] font-label-md tracking-[0.16em] uppercase transition-colors ${
              filter === 'biology'
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-secondary'
            }`}
          >
            Laser, Whitening &amp; Zirconia
          </button>
        </div>

        {/* Editorial Procedure Grid (6 Luxury Showcases) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProcedures.map((proc) => (
            <article
              key={proc.id}
              className="group bg-surface-container-lowest border hairline p-8 flex flex-col justify-between hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-secondary mb-6 font-label-sm uppercase tracking-[0.2em] text-[10px]">
                  <span>{proc.number}</span>
                  <span className="text-xs text-primary font-medium">{proc.price}</span>
                </div>
                <h3 className="font-headline-sm text-2xl text-primary font-medium group-hover:text-secondary transition-colors mb-3">
                  {proc.name}
                </h3>
                <p className="font-body-md text-on-surface-variant font-light leading-relaxed mb-6 text-[14px]">
                  {proc.summary}
                </p>
              </div>

              <div className="pt-6 border-t hairline flex items-center justify-between">
                <span className="font-label-sm uppercase tracking-[0.16em] text-on-surface-variant text-[10px]">
                  {proc.timeline}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProcedure(proc)}
                  className="font-label-md uppercase tracking-[0.16em] text-secondary hover:text-primary inline-flex items-center gap-1 text-[11px] focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary p-1"
                  aria-label={`Explore clinical specifications for ${proc.name}`}
                >
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Procedure Deep Inspection Modal */}
      <ProcedureModal
        procedure={selectedProcedure}
        onClose={() => setSelectedProcedure(null)}
        onSelectForConsultation={onSelectProcedure}
      />
    </section>
  );
};
