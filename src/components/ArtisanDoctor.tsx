import React from 'react';

export const ArtisanDoctor: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-background" id="artisan" aria-labelledby="doctor-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-surface-container-lowest border hairline p-8 md:p-14 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="border hairline overflow-hidden bg-surface-container shadow-md">
                  <img
                    alt="Dr. Ananya Sharma, MDS smiling gracefully in high-end clinic atelier"
                    className="w-full h-[460px] lg:h-[500px] object-cover object-top filter contrast-[1.02]"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VZc006zIirjYCTVnULTyuBw6Boph9zaHl4w3CfkT7ikOagS2M4cIRXcKDDclJR06ip9nouKg4z1CyjbA9WD-1M8YZLmED6RBT_obuDj3MqOoaRXf-dDdZPyMWWcI1mhsIKak6jdRVFNEruUHYPLjjbLZNUiAlTvPWKwy6IpGVchZn1uMriCacGuaBTxP-thG3IS0flF-YmaNb8zFNWTCtFC-BRHFhbckkt5gBGIELSfQQI3rSM7Q1fD24"
                    loading="lazy"
                    width="460"
                    height="500"
                  />
                </div>
                <div className="mt-4 p-4 bg-surface-container-low border hairline flex items-center justify-between">
                  <div>
                    <span className="font-label-sm uppercase tracking-[0.2em] text-secondary text-[10px]">
                      Private Practice
                    </span>
                    <p className="font-headline-sm text-base text-primary">3 Consultations Open Weekly</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-[0.16em] text-[10px]">
                    Exclusive
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Artistic Credo */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="font-label-sm uppercase tracking-[0.28em] text-secondary font-medium">
                Master Aesthetic Prosthodontist
              </span>

              <div>
                <h2 id="doctor-heading" className="font-headline-lg text-3xl md:text-5xl text-primary font-normal">
                  Dr. Ananya Sharma, <span className="italic text-secondary">MDS</span>
                </h2>
                <p className="font-label-md uppercase tracking-[0.18em] text-on-surface-variant mt-2 text-[11px]">
                  Fellow of the American Academy of Cosmetic Dentistry (FAACD) • AIIMS Alumna
                </p>
              </div>

              {/* Credential Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                <div className="p-3.5 border hairline bg-surface font-body-sm font-light text-on-surface text-[13px]">
                  <span className="font-medium block text-primary font-label-md uppercase tracking-[0.16em] text-[11px]">
                    Gold Medalist Prosthodontics
                  </span>
                  Manipal College of Dental Sciences
                </div>
                <div className="p-3.5 border hairline bg-surface font-body-sm font-light text-on-surface text-[13px]">
                  <span className="font-medium block text-primary font-label-md uppercase tracking-[0.16em] text-[11px]">
                    Postgraduate Fellowship
                  </span>
                  AIIMS New Delhi &amp; Geneva Ceramic Lab
                </div>
              </div>

              {/* Philosophy Statement */}
              <blockquote className="border-l-2 border-secondary pl-5 italic font-headline-sm text-lg text-primary leading-relaxed font-normal">
                "Cosmetic dentistry should never shout. A truly masterful smile is understated, luminous,
                and biologically aligned so that society admires your radiance, never your dental work."
              </blockquote>

              <p className="font-body-md text-on-surface-variant font-light leading-relaxed text-[15px]">
                With over 15 years dedicated exclusively to aesthetic oral rehabilitation, Dr. Sharma combines
                microscopic precision with sculpturing artistry. Each smile is treated as an individual piece
                of architectural art, collaborating closely with European master ceramists.
              </p>

              {/* Booking Concierge */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  className="px-8 py-3.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] hover:bg-secondary transition-colors bronze-glow text-[11px]"
                  href="#consultation"
                >
                  Consult Dr. Sharma
                </a>
                <a
                  className="px-6 py-3.5 border hairline text-secondary font-label-md uppercase tracking-[0.18em] hover:bg-secondary-container/40 transition-colors inline-flex items-center gap-2 text-[11px]"
                  href="https://wa.me/918049204000?text=Hello%20Dr.%20Sharma%2C%20I%20would%20like%20a%20clinical%20second%20opinion%20on%20my%20aesthetic%20treatment%20plan."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    chat
                  </span>
                  <span>WhatsApp Second Opinion</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
