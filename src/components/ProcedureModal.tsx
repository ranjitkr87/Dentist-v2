import React, { useEffect } from 'react';
import { Procedure } from '../types';

interface ProcedureModalProps {
  procedure: Procedure | null;
  onClose: () => void;
  onSelectForConsultation: (procedureName: string) => void;
}

export const ProcedureModal: React.FC<ProcedureModalProps> = ({
  procedure,
  onClose,
  onSelectForConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (procedure) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [procedure, onClose]);

  if (!procedure) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="procedure-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border hairline shadow-2xl p-6 sm:p-10 text-on-surface"
        role="document"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
          aria-label="Close procedure details"
        >
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            close
          </span>
        </button>

        {/* Header */}
        <div className="border-b hairline pb-6">
          <div className="flex items-center gap-3 text-secondary font-label-sm uppercase tracking-[0.2em] mb-2">
            <span>{procedure.number}</span>
            <span>•</span>
            <span className="text-primary font-medium">{procedure.price}</span>
          </div>
          <h2
            id="procedure-modal-title"
            className="font-headline-md text-2xl sm:text-3xl text-primary font-normal"
          >
            {procedure.name}
          </h2>
          <p className="font-body-md text-on-surface-variant font-light mt-3 leading-relaxed">
            {procedure.fullDescription}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b hairline text-body-sm">
          <div className="p-4 bg-surface-container-low border hairline">
            <span className="font-label-sm uppercase tracking-[0.18em] text-secondary block mb-1">
              Clinical Timeline
            </span>
            <p className="font-medium text-primary">{procedure.timeline}</p>
          </div>
          <div className="p-4 bg-surface-container-low border hairline">
            <span className="font-label-sm uppercase tracking-[0.18em] text-secondary block mb-1">
              Atelier Guarantee
            </span>
            <p className="font-medium text-primary">{procedure.warranty}</p>
          </div>
        </div>

        {/* Clinical Steps */}
        <div className="py-6 border-b hairline">
          <h3 className="font-label-md uppercase tracking-[0.2em] text-primary mb-4">
            Clinical Architecture Steps
          </h3>
          <ol className="space-y-3 font-body-sm text-on-surface-variant list-decimal list-inside font-light">
            {procedure.clinicalSteps.map((step, idx) => (
              <li key={idx} className="leading-relaxed pl-1">
                <span className="text-on-surface">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Materials & Bio-Integrity */}
        <div className="py-6 border-b hairline">
          <h3 className="font-label-md uppercase tracking-[0.2em] text-primary mb-3">
            Biomimetic Ceramic Systems
          </h3>
          <div className="flex flex-wrap gap-2">
            {procedure.materials.map((m, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-surface-container-low border hairline font-label-sm tracking-[0.14em] text-secondary"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 border hairline text-on-surface-variant font-label-md uppercase tracking-[0.18em] hover:bg-surface-container-low transition-colors text-[11px]"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectForConsultation(procedure.name);
              onClose();
              const el = document.getElementById('consultation');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] hover:bg-secondary transition-colors bronze-glow text-[11px]"
          >
            Inquire For This Discipline
          </button>
        </div>
      </div>
    </div>
  );
};
