import React from 'react';

export const LocationTimings: React.FC = () => {
  return (
    <section
      className="py-16 bg-surface-container-low border-t hairline"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 id="location-heading" className="sr-only">
          Atelier Location, Sanctuary Timings and Concierge Desk
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-on-surface">
          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-[0.24em] text-secondary text-[10px]">
              The Atelier Location
            </span>
            <p className="font-headline-sm text-lg text-primary font-medium">Indiranagar Center</p>
            <address className="font-body-sm text-on-surface-variant font-light leading-relaxed not-italic text-[13px]">
              Plot 482, 100 Feet Road, HAL 2nd Stage,
              <br />
              Opposite Domlur Flyover Park, Indiranagar,
              <br />
              Bengaluru, Karnataka 560038
            </address>
          </div>

          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-[0.24em] text-secondary text-[10px]">
              Sanctuary Timings
            </span>
            <p className="font-headline-sm text-lg text-primary font-medium">By Appointment Only</p>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              Monday – Saturday: 10:00 AM – 8:00 PM
              <br />
              Sunday: By Private Concierge Request
              <br />
              Valet parking provided at main foyer.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-[0.24em] text-secondary text-[10px]">
              Direct Inquiries
            </span>
            <p className="font-headline-sm text-lg text-primary font-medium">Concierge Desk</p>
            <p className="font-body-sm text-on-surface-variant font-light leading-relaxed text-[13px]">
              Desk: +91 (080) 4920 4000
              <br />
              Concierge: concierge@ateliersmile.in
              <br />
              Lab Liaison: Geneva &amp; Zürich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
