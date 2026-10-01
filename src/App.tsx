/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MetricsBar } from "./components/MetricsBar";
import { Procedures } from "./components/Procedures";
import { SmileComparator } from "./components/SmileComparator";
import { CeramicSwatches } from "./components/CeramicSwatches";
import { CostEstimator } from "./components/CostEstimator";
import { ArtisanDoctor } from "./components/ArtisanDoctor";
import { AtelierPillars } from "./components/AtelierPillars";
import { PatientJourney } from "./components/PatientJourney";
import { Testimonials } from "./components/Testimonials";
import { FaqSection } from "./components/FaqSection";
import { ConsultationSection } from "./components/ConsultationSection";
import { LocationTimings } from "./components/LocationTimings";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedProcedureForConsult, setSelectedProcedureForConsult] =
    useState<string>("Porcelain Veneers & Lumineers");
  const [consultationNotes, setConsultationNotes] = useState<string>("");

  const handleSelectProcedure = (procedureName: string) => {
    setSelectedProcedureForConsult(procedureName);
    setConsultationNotes(`Inquiring specifically regarding: ${procedureName}.`);
  };

  const handleSelectCaseStudy = (caseTitle: string) => {
    setSelectedProcedureForConsult("Full Smile Makeover (DSD)");
    setConsultationNotes(
      `Referenced Case Study: ${caseTitle}. Requesting similar aesthetic evaluation.`,
    );
    const el = document.getElementById("consultation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreFillConsultation = ({
    procedure,
    notes,
  }: {
    procedure: string;
    notes: string;
  }) => {
    setSelectedProcedureForConsult(procedure);
    setConsultationNotes(notes);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 focus:outline-none"
      >
        <Hero />
        <MetricsBar />
        <Procedures onSelectProcedure={handleSelectProcedure} />
        <SmileComparator onSelectForConsult={handleSelectCaseStudy} />
        <CeramicSwatches />
        {/* <CostEstimator onPreFillConsultation={handlePreFillConsultation} /> */}
        <ArtisanDoctor />
        <AtelierPillars />
        <PatientJourney />
        <Testimonials />
        <FaqSection />
        <ConsultationSection
          initialProcedure={selectedProcedureForConsult}
          initialNotes={consultationNotes}
        />
        {/* <LocationTimings /> */}
      </main>

      <Footer />
    </div>
  );
}
