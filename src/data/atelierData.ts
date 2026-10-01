import { Procedure, CaseStudy, CeramicSwatch, FaqItem } from '../types';

export const PROCEDURES_DATA: Procedure[] = [
  {
    id: 'veneers',
    number: 'Procedure 01',
    name: 'Porcelain Veneers & Lumineers',
    price: 'From ₹35,000 / tooth',
    summary: 'Ultra-thin 0.2mm contact-lens feldspathic & E-max ceramics requiring minimal enamel reduction. Custom stratified to recreate incisal translucency and light refraction.',
    fullDescription: 'Our flagship discipline combines Swiss biomimetic ceramic science with sub-millimeter microscopic tooth preparation. Each shell is individualized with micro-textures, incisal halos, and mamelon structures that mimic organic human enamel.',
    timeline: '2 Sessions (7-10 Days)',
    warranty: 'Lifetime Clinical Craftsmanship Warranty',
    indication: 'Deep tetracycline discoloration, incisal edge chipping, diastema gaps, enamel hypoplasia.',
    materials: ['Ivoclar Vivadent E-Max Press', 'Feldspathic Creation CC Porcelain', 'Variolink Esthetic Resin'],
    clinicalSteps: [
      '3D Intraoral photogrammetry & smile design digital map',
      'Minimal 0.2mm micro-preparation under dental loupes (2.5x - 4.5x)',
      'Hand stratification by master ceramists in Geneva & Zurich',
      'Acoustic isolation & adhesive bonding with dual-cure luting resin'
    ]
  },
  {
    id: 'dsd',
    number: 'Procedure 02',
    name: 'Digital Smile Design (DSD)',
    price: 'Bespoke Protocol (From ₹45,000)',
    summary: 'Complete dynamic facial scan analysis factoring in eye pupil line, lip curvature, phonetics, and golden facial proportions before touching a single tooth.',
    fullDescription: 'DSD is the architectural blueprint of our philosophy. By mathematically aligning your smile arc with your inter-pupillary line and facial midline, we ensure the new teeth enhance your overall facial poise and speech aesthetics.',
    timeline: '3D Physical Mock-up Try-in (3 Days)',
    warranty: '100% Aesthetic Confirmation Guarantee',
    indication: 'Smile asymmetry, reverse smile curves, narrow buccal corridors, holistic facial rejuvenation.',
    materials: ['RayFace 3D Facial Scanner', 'Trios 5 Wireless Scanner', 'Luxatemp Bis-Acryl Composite'],
    clinicalSteps: [
      'Studio dynamic video photography & phonetic voice recording',
      'Digital skeletal and soft tissue algorithmic alignment',
      '3D resin diagnostic mock-up placed intraorally without tooth alteration',
      'Patron evaluation in motion, mirror photography, and video validation'
    ]
  },
  {
    id: 'aligners',
    number: 'Procedure 03',
    name: 'Biomimetic Clear Aligners',
    price: 'From ₹1,20,000',
    summary: 'Zero visible metal or unsightly attachments. Laser-trimmed multi-layer polymers designed with AI staging for discreet, frictionless orthodontic realignment.',
    fullDescription: 'Engineered for discerning professionals who require orthodontic correction without visual aesthetic compromise. Custom scalloped gingival margins offer invisible day-to-day wear during boardroom and editorial appearances.',
    timeline: '6 to 12 Months Average',
    warranty: 'Refinement Guarantee Included',
    indication: 'Dental crowding, rotation, spacing, minor bite discrepancies.',
    materials: ['SmartTrack Multi-Layer Polymer', 'Acoustic AI Force Vector Staging'],
    clinicalSteps: [
      'High-speed digital intraoral optical impression',
      'AI biomechanical staging overseen directly by Dr. Sharma',
      'Precision laser-trimmed aligner fabrication',
      'Virtual concierge tracking with monthly progress scans'
    ]
  },
  {
    id: 'laser-gum',
    number: 'Procedure 04',
    name: 'Laser Tooth & Gum Architecture',
    price: 'From ₹18,000',
    summary: 'Biolase diode laser sculpting for excessive gingival display (\'gummy smile\') or asymmetrical gumlines. Immediate biological healing with zero scalpel sutures.',
    fullDescription: 'The golden ratio of cosmetic dentistry requires that tooth length and gingival architecture exist in absolute symmetry. Our water-cooled laser vaporizes excess tissue with microscopic precision, instantly sealing blood vessels.',
    timeline: 'Single Sitting (45 Mins) • Zero Downtime',
    warranty: 'Stable Biological Contour Guarantee',
    indication: 'Gummy smile, altered passive eruption, uneven zeniths.',
    materials: ['Biolase Waterlase iPlus 2780nm Erbium Laser', 'Diode Soft Tissue System'],
    clinicalSteps: [
      'Digital periodontal probing and biological width mapping',
      'Topical profound computerized STA anesthesia',
      'Painless laser recontouring of gingival zeniths',
      'Immediate return to daily commitments with zero bleeding'
    ]
  },
  {
    id: 'whitening',
    number: 'Procedure 05',
    name: 'Enamel-Safe Clinical Whitening',
    price: 'From ₹22,000',
    summary: 'Medical-grade pH-neutral light-activated bleaching infused with potassium nitrate and fluoride. Lifts chronic pigmentation without micro-etching enamel prisms.',
    fullDescription: 'Conventional high-acid bleaching creates porous micro-cracks in tooth enamel, causing hypersensitivity. Our proprietary Swiss and American protocol maintains neutral oral pH while targeting deep intrinsic dentin stains.',
    timeline: 'Single Sitting (60 Mins)',
    warranty: 'Includes Home Maintenance Booster Kit',
    indication: 'Coffee, tea, and red wine stains, age-related dentin yellowing, nicotine staining.',
    materials: ['Opalescence Boost 40% Hydrogen Peroxide', 'UltraEZ Desensitizing Gel'],
    clinicalSteps: [
      'Gingival barrier protection application',
      'Triple 20-minute pH-neutral photo-activation cycles',
      'Remineralizing micro-crystalline hydroxyapatite polish',
      'Custom vacuum-formed maintenance trays for home refinement'
    ]
  },
  {
    id: 'zirconia',
    number: 'Procedure 06',
    name: 'CAD/CAM Zirconia Crowns & Inlays',
    price: 'From ₹28,000 / unit',
    summary: 'Milled monolithic zirconia with hand-stained ceramic gradients. Completely metal-free with high fracture resistance for natural molar restorations.',
    fullDescription: 'For posterior teeth under intense masticatory forces, monolithic multi-layered zirconia provides unbreakable strength with optical translucency that harmonizes seamlessly with adjacent natural tooth structure.',
    timeline: 'Same-Day 3D Optical Scan (5-7 Days Delivery)',
    warranty: '15-Year Structural Replacement Warranty',
    indication: 'Fractured molars, failed amalgam fillings, heavy bruxism restorations.',
    materials: ['Katana Multi-Layered Monolithic Zirconia', 'IPS e.max CAD Blocks'],
    clinicalSteps: [
      'Biomimetic cavity debridement and 3D optical scan',
      'Computer-aided sub-micron margin design',
      '5-Axis robotic precision dry milling and thermal sintering',
      'Individual glaze baking and adhesive resin cementation'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-418',
    caseNumber: 'Case Study No. 418',
    title: 'Diastema Closure & 8 Hand-Layered E-Max Veneers',
    chiefComplaint: 'Uneven central gap, incisal wear from nocturnal bruxism, and tetracycline enamel discoloration refractory to chemical bleaching.',
    artisanApproach: '3D Facial aesthetic mapping, digital mock-up preview, followed by 0.3mm micro-preparation and 8 bespoke layered feldspathic ceramic veneers matching the patient\'s warm skin undertones.',
    quote: 'I used to unconsciously cover my mouth when laughing in boardroom presentations. Dr. Sharma gave me a smile that looks breathtaking yet completely mine.',
    patient: 'Meera K.',
    role: 'Managing Director, Indiranagar',
    timeline: '10 Business Days',
    imageAfter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4OPNw-rTbmsSlwDaHOn2vUeHywdKBw7FqRyi9Ysy9522ouiHJkRCE1LoJuUSRKQZFjBaGiH5aQ82QMq9nPJUltj5T9tLXD1_OSnc9u83rLxDdhyEuDnyvoeQI7ltqiWTAPzFc5IRT7XtaxNFIhxC6u51AJLU6-mFIvz0y0iyFxaLtCS_ULppZAVv-dtIvLfJSokjubRzS1GfgO9q8v9gLpUFqkwdrbcpYiv3sYnDSOTqLIcykHsW9',
    imageBefore: 'https://lh3.googleusercontent.com/aida/AEtjO1VZc006zIirjYCTVnULTyuBw6Boph9zaHl4w3CfkT7ikOagS2M4cIRXcKDDclJR06ip9nouKg4z1CyjbA9WD-1M8YZLmED6RBT_obuDj3MqOoaRXf-dDdZPyMWWcI1mhsIKak6jdRVFNEruUHYPLjjbLZNUiAlTvPWKwy6IpGVchZn1uMriCacGuaBTxP-thG3IS0flF-YmaNb8zFNWTCtFC-BRHFhbckkt5gBGIELSfQQI3rSM7Q1fD24',
    toothCount: 8,
    materials: 'E-Max Press layered with Feldspathic Enamel'
  },
  {
    id: 'case-392',
    caseNumber: 'Case Study No. 392',
    title: 'Severe Tetracycline Masking & Enamel Realignment',
    chiefComplaint: 'Deep band-like grey tetracycline staining throughout maxillary anterior teeth, coupled with slight lingual tipping of the lateral incisors.',
    artisanApproach: 'Dual opacity zirconia-backed porcelain veneers with optical dentin replication. High-value ceramic core prevents grey show-through while retaining incisal vitality.',
    quote: 'For 20 years I thought nothing could hide tetracycline stains without looking like chalk. The optical depth here is uncanny.',
    patient: 'Vikramaditya S.',
    role: 'Managing Partner, Bangalore & Singapore',
    timeline: '12 Business Days',
    imageAfter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4OPNw-rTbmsSlwDaHOn2vUeHywdKBw7FqRyi9Ysy9522ouiHJkRCE1LoJuUSRKQZFjBaGiH5aQ82QMq9nPJUltj5T9tLXD1_OSnc9u83rLxDdhyEuDnyvoeQI7ltqiWTAPzFc5IRT7XtaxNFIhxC6u51AJLU6-mFIvz0y0iyFxaLtCS_ULppZAVv-dtIvLfJSokjubRzS1GfgO9q8v9gLpUFqkwdrbcpYiv3sYnDSOTqLIcykHsW9',
    imageBefore: 'https://lh3.googleusercontent.com/aida/AEtjO1XvuRAzMxeckcVhfMDELDeHWKv_mCmCq9rUMqYapjpcqB15YMD2xkezyGxtuS0KIw775RQ5uT2MHGCHHe_DgAtjL4KWf1gSElbvVT8iohZrwwLnHQ5umdWmx4174q9a8MTFfctVUsCFja-q85uXB6JyhpBF8NIX_fasxOyCMVyCSJ1guc9IosNsuN3fXdSisOmv7UvwNRh3FZcNDHXM5lG-6pBpOpZ6PUumHjqSZUFyl3iIsVTqPOwvi7U',
    toothCount: 10,
    materials: 'Dual Opacity Swiss Feldspathic Ceramic'
  },
  {
    id: 'case-405',
    caseNumber: 'Case Study No. 405',
    title: 'Gummy Smile Laser Recontouring & 6 Contact-Lens Veneers',
    chiefComplaint: 'Excessive gingival show of over 4.5mm when smiling broadly, creating short, squat central incisors.',
    artisanApproach: 'Waterlase diode laser gingivectomy to lengthen clinical crowns by 2.2mm, followed by 6 minimal-prep veneers restoring classical 78% width-to-length proportion.',
    quote: 'My gummy smile made me look perpetually timid in photos. Now my smile fills the frame with balance and elegance.',
    patient: 'Ananya P.',
    role: 'Creative Director, Mumbai',
    timeline: '8 Business Days',
    imageAfter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4OPNw-rTbmsSlwDaHOn2vUeHywdKBw7FqRyi9Ysy9522ouiHJkRCE1LoJuUSRKQZFjBaGiH5aQ82QMq9nPJUltj5T9tLXD1_OSnc9u83rLxDdhyEuDnyvoeQI7ltqiWTAPzFc5IRT7XtaxNFIhxC6u51AJLU6-mFIvz0y0iyFxaLtCS_ULppZAVv-dtIvLfJSokjubRzS1GfgO9q8v9gLpUFqkwdrbcpYiv3sYnDSOTqLIcykHsW9',
    imageBefore: 'https://lh3.googleusercontent.com/aida/AEtjO1VZc006zIirjYCTVnULTyuBw6Boph9zaHl4w3CfkT7ikOagS2M4cIRXcKDDclJR06ip9nouKg4z1CyjbA9WD-1M8YZLmED6RBT_obuDj3MqOoaRXf-dDdZPyMWWcI1mhsIKak6jdRVFNEruUHYPLjjbLZNUiAlTvPWKwy6IpGVchZn1uMriCacGuaBTxP-thG3IS0flF-YmaNb8zFNWTCtFC-BRHFhbckkt5gBGIELSfQQI3rSM7Q1fD24',
    toothCount: 6,
    materials: 'Biolase Laser + IPS e.max Thin Veneers'
  }
];

export const CERAMIC_SWATCHES: CeramicSwatch[] = [
  {
    code: 'BL1',
    name: 'High Couture Bleach White',
    description: 'Maximum brightness with deliberate natural opal iridescence. Never chalky; light bounces with diamond luster.',
    hex: '#F9F8F6',
    borderHex: '#E5E3DF',
    translucency: 'High Value / 42% Translucency',
    lightTransmission: 'Natural Opalescence',
    recommendedFor: 'Editorial, Television, Full-Mouth Rejuvenation'
  },
  {
    code: 'BL2',
    name: 'Natural Luminous Radiance',
    description: 'Subtle warm undertone that illuminates facial warmth without giving away dental intervention.',
    hex: '#F4F2EC',
    borderHex: '#DDD9D0',
    translucency: 'Medium Value / 48% Translucency',
    lightTransmission: 'Warm Diffused Prism',
    recommendedFor: 'Warm Undertones, Discerning Executives'
  },
  {
    code: 'A1',
    name: 'Alabaster Pearl',
    description: 'The global benchmark for organic youthful enamel. Soft cream undertone with transparent incisal edge halo.',
    hex: '#EFECE3',
    borderHex: '#D5D0C4',
    translucency: 'Biomimetic / 52% Translucency',
    lightTransmission: 'Halo Effect Incisal',
    recommendedFor: 'Partial Smile Makeovers, Single Veneer Matches'
  },
  {
    code: 'A2',
    name: 'Warm Ivory Harmony',
    description: 'Rich, natural dentin replication for mature, dignified smiles requiring seamless integration with canines.',
    hex: '#E9E4D6',
    borderHex: '#CDC6B4',
    translucency: 'Dentin Core / 45% Translucency',
    lightTransmission: 'Deep Organic Depth',
    recommendedFor: 'Posterior Restorations, Natural Blend'
  },
  {
    code: 'B1',
    name: 'Silk Champagne Glow',
    description: 'Slightly golden-hued high-fashion tone matching olive and warm Indian complexions impeccably.',
    hex: '#F5EFE1',
    borderHex: '#DFCFAF',
    translucency: 'High Chroma / 49% Translucency',
    lightTransmission: 'Champagne Reflection',
    recommendedFor: 'Indian & Middle Eastern Facial Tones'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'veneers',
    question: 'How long do handcrafted porcelain veneers last?',
    answer: 'When bonded with medical-grade resin to natural enamel, high-grade Swiss E-Max and feldspathic porcelain veneers routinely last 15 to 25 years. They are impervious to coffee, tea, and red wine stains, resisting wear far better than natural enamel.'
  },
  {
    id: 'f2',
    category: 'comfort',
    question: 'Will my teeth need to be shaved down aggressively?',
    answer: 'Never at Atelier. We specialize in biomimetic micro-preparation (often 0.2mm to 0.4mm, akin to a contact lens). In many cases, non-prep Lumineers require zero enamel reduction whatsoever, preserving maximum biological tooth integrity.'
  },
  {
    id: 'f3',
    category: 'mockup',
    question: 'Can I see and test my new smile before proceeding?',
    answer: 'Yes, absolutely. Our 4-stage process includes a physical "Mock-up Try-in". We create a prototype from our 3D digital scan and place it over your teeth. You can walk, talk, smile in mirrors, and evaluate phonetics with Dr. Sharma before permanent ceramics are ordered.'
  },
  {
    id: 'f4',
    category: 'privacy',
    question: 'How is patient confidentiality handled?',
    answer: 'We adhere to strict non-disclosure agreements for high-profile patrons, artists, and executives. Private operatory scheduling ensures no overlap in the sanctuary lounge, with rear-access discreet exit facilities upon request.'
  },
  {
    id: 'f5',
    category: 'comfort',
    question: 'Is the procedure painful? How does the anesthesia work?',
    answer: 'Atelier uses the Milestone Scientific STA (Single Tooth Anesthesia) computer-controlled delivery system. Anesthesia is micro-infused without needle prick sensation or collateral numbness of your lips or face. You will feel calm and fully comfortable throughout.'
  },
  {
    id: 'f6',
    category: 'veneers',
    question: 'Can I choose my tooth shade and degree of white?',
    answer: 'Yes. In our Swiss Ceramic Studio session, you examine physical master shade tabs under calibrated 5500K daylight simulation. Dr. Sharma guides you on harmonious translucency, texture, and incisal halo effects to match your eye sclera and skin undertone.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'As an architect, symmetry and material authenticity dictate my world. Dr. Sharma\'s approach to porcelain veneers treated dental aesthetics with the exact same rigor. The mock-up stage gave me 100% confidence.',
    author: 'Arjun Nair',
    title: 'Principal Architect • Indiranagar',
    stars: 5,
    caseRef: 'Case 418'
  },
  {
    quote: 'I flew in from Dubai specifically for Atelier\'s digital smile transformation. They delivered 10 handcrafted porcelain veneers within 8 days. Not a single person noticed "new teeth"; they simply thought I looked ten years younger.',
    author: 'Sunita Singhania',
    title: 'Fashion Entrepreneur • Dubai & BLR',
    stars: 5,
    caseRef: 'Case 392'
  },
  {
    quote: 'The painless STA computer anesthesia alone makes Atelier unmatched. The clinic feels like an art gallery with daylight operatory suites. Complete professional warmth and discretion.',
    author: 'Devika Menon',
    title: 'Venture Partner • Lavelle Road',
    stars: 5,
    caseRef: 'Case 405'
  }
];
