import React, { useState, useEffect } from 'react';
import { ConsultationFormState } from '../types';

interface ConsultationSectionProps {
  initialProcedure?: string;
  initialNotes?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialProcedure = 'Porcelain Veneers & Lumineers',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormState>({
    fullName: '',
    phone: '',
    email: '',
    procedure: initialProcedure,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    conciergeChannel: 'whatsapp',
    notes: initialNotes,
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    timestamp: string;
    details: ConsultationFormState;
  } | null>(null);

  // Update form if initialProcedure or initialNotes change from parent
  useEffect(() => {
    if (initialProcedure) {
      setFormData((prev) => ({ ...prev, procedure: initialProcedure }));
    }
  }, [initialProcedure]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `AT-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    setSubmittedTicket({
      id: ticketId,
      timestamp: now,
      details: { ...formData },
    });
  };

  return (
    <section
      className="py-20 lg:py-32 bg-surface-container-lowest"
      id="consultation"
      aria-labelledby="consultation-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-primary-container text-on-primary p-8 md:p-14 lg:p-16 border border-secondary/30 relative overflow-hidden shadow-2xl">
          {/* Subtle champagne atmospheric gradient */}
          <div
            className="absolute -right-24 -bottom-24 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Sanctuary Privileges */}
            <div className="lg:col-span-7 space-y-5">
              <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
                Bespoke Consultations
              </span>
              <h2
                id="consultation-heading"
                className="font-headline-lg text-3xl md:text-5xl text-white font-normal leading-tight"
              >
                Reserve Your Private Aesthetic Discovery
              </h2>
              <p className="font-body-lg text-white/80 font-light max-w-lg leading-relaxed text-[16px]">
                Step into our Indiranagar sanctuary. Meet Dr. Ananya Sharma for a comprehensive 3D smile
                design evaluation and individualized treatment proposal.
              </p>

              <div className="pt-4 space-y-3 font-body-sm text-white/70 font-light text-[14px]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                    check
                  </span>
                  <span>Direct 60-minute 1-on-1 consultation with Dr. Sharma</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                    check
                  </span>
                  <span>Intraoral 3D digital photogrammetry &amp; aesthetic analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                    check
                  </span>
                  <span>Complimentary valet parking at Indiranagar entrance</span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white font-label-md uppercase tracking-[0.18em] hover:bg-white hover:text-primary transition-colors text-[11px]"
                  href="tel:+918049204000"
                  aria-label="Call Atelier Direct Desk"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    call
                  </span>
                  <span>Direct +91 (080) 4920 4000</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-label-md uppercase tracking-[0.18em] hover:bg-white/10 transition-colors text-[11px]"
                  href="https://wa.me/918049204000?text=Hello%20Atelier%20Concierge%2C%20I%20would%20like%20to%20reserve%20a%20private%20aesthetic%20discovery%20session."
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Open WhatsApp with Atelier Concierge"
                >
                  <span className="material-symbols-outlined text-secondary text-base" aria-hidden="true">
                    chat
                  </span>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Column: VIP Consultation Form */}
            <div className="lg:col-span-5">
              <div className="bg-background text-on-surface p-7 sm:p-9 border hairline shadow-xl">
                <h3 className="font-headline-sm text-2xl text-primary font-normal mb-1">
                  Private Consult Request
                </h3>
                <p className="font-body-sm text-on-surface-variant font-light mb-6 text-[13px]">
                  Our concierge confirms appointments within two business hours.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-1 text-[10px]"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tara Ramanathan"
                      className="w-full px-3.5 py-3 border hairline bg-surface-container-lowest text-primary text-body-md focus:border-secondary focus:ring-0 text-[14px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-1 text-[10px]"
                    >
                      Telephone / WhatsApp
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-3 border hairline bg-surface-container-lowest text-primary text-body-md focus:border-secondary focus:ring-0 text-[14px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-procedure"
                      className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-1 text-[10px]"
                    >
                      Procedure of Interest
                    </label>
                    <select
                      id="client-procedure"
                      value={formData.procedure}
                      onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                      className="w-full px-3.5 py-3 border hairline bg-surface-container-lowest text-primary text-body-md focus:border-secondary focus:ring-0 text-[14px]"
                    >
                      <option>Porcelain Veneers &amp; Lumineers</option>
                      <option>Full Smile Makeover (DSD)</option>
                      <option>Biomimetic Clear Aligners</option>
                      <option>Laser Tooth &amp; Gum Architecture</option>
                      <option>Enamel-Safe Clinical Whitening</option>
                      <option>CAD/CAM Zirconia Crowns &amp; Inlays</option>
                      <option>Other Cosmetic Consultation</option>
                    </select>
                  </div>

                  {/* Channel Preference */}
                  <div>
                    <span className="block font-label-sm uppercase tracking-[0.18em] text-primary mb-1 text-[10px]">
                      Preferred Concierge Channel
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp' },
                        { id: 'call', label: 'Phone Call' },
                        { id: 'email', label: 'Email' },
                      ].map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, conciergeChannel: c.id as any })}
                          className={`py-2 text-[10px] font-label-sm uppercase tracking-[0.14em] border transition-colors ${
                            formData.conciergeChannel === c.id
                              ? 'bg-primary text-on-primary border-primary'
                              : 'bg-surface-container-low text-on-surface-variant border-transparent'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Notes */}
                  {formData.notes && (
                    <div>
                      <label
                        htmlFor="client-notes"
                        className="block font-label-sm uppercase tracking-[0.18em] text-secondary mb-1 text-[10px]"
                      >
                        Attached Proposal Notes
                      </label>
                      <textarea
                        id="client-notes"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2 border hairline bg-surface-container-low text-on-surface text-[12px] focus:border-secondary focus:ring-0"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-200 bronze-glow mt-2 text-[11px]"
                  >
                    Request Priority Slot
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Slip Dialog */}
      {submittedTicket && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ticket-title"
        >
          <div className="bg-surface-container-lowest border hairline shadow-2xl p-8 max-w-lg w-full text-on-surface">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">check</span>
            </div>

            <span className="font-label-sm uppercase tracking-[0.24em] text-secondary text-[10px]">
              Priority Slot Reserved
            </span>
            <h3 id="ticket-title" className="font-headline-md text-2xl text-primary font-normal mt-1 mb-2">
              Appointment Request Confirmed
            </h3>
            <p className="font-body-sm text-on-surface-variant font-light mb-6 text-[13px]">
              Your dossier has been assigned to our Clinical Liaison. A concierge executive will contact
              you via <strong className="text-primary uppercase">{submittedTicket.details.conciergeChannel}</strong>{' '}
              within two business hours.
            </p>

            <div className="p-4 bg-surface-container-low border hairline space-y-2 text-body-sm mb-6 text-[13px]">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-light">Reference Ticket:</span>
                <span className="font-mono font-bold text-primary">{submittedTicket.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-light">Patron:</span>
                <span className="font-medium text-primary">{submittedTicket.details.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-light">Contact:</span>
                <span className="font-medium text-primary">{submittedTicket.details.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-light">Discipline:</span>
                <span className="font-medium text-primary">{submittedTicket.details.procedure}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setSubmittedTicket(null)}
                className="w-full py-3 bg-primary text-on-primary font-label-md uppercase tracking-[0.18em] text-[11px] hover:bg-secondary transition-colors"
              >
                Close &amp; Return to Atelier
              </button>
              <a
                href={`https://wa.me/918049204000?text=Hello%2C%20I%20have%20submitted%20consultation%20ticket%20${submittedTicket.id}%20for%20${submittedTicket.details.fullName}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border hairline text-secondary font-label-md uppercase tracking-[0.16em] text-[11px] text-center hover:bg-secondary-container/40 transition-colors"
              >
                Notify on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
