export interface Procedure {
  id: string;
  number: string;
  name: string;
  price: string;
  summary: string;
  fullDescription: string;
  timeline: string;
  warranty: string;
  indication: string;
  materials: string[];
  clinicalSteps: string[];
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  chiefComplaint: string;
  artisanApproach: string;
  quote: string;
  patient: string;
  role: string;
  timeline: string;
  imageAfter: string;
  imageBefore: string;
  toothCount: number;
  materials: string;
}

export interface CeramicSwatch {
  code: string;
  name: string;
  description: string;
  hex: string;
  borderHex: string;
  translucency: string;
  lightTransmission: string;
  recommendedFor: string;
}

export interface FaqItem {
  id: string;
  category: 'veneers' | 'mockup' | 'comfort' | 'privacy';
  question: string;
  answer: string;
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  procedure: string;
  preferredDate: string;
  preferredTime: string;
  conciergeChannel: 'whatsapp' | 'call' | 'email';
  notes: string;
}
