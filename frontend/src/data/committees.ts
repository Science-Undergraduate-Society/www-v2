export interface Committee {
  id: string;
  name: string;
  description: string;
  category: 'Presidential' | 'Council' | 'Academic' | 'Administration' | 'Communications' | 'External' | 'Finance' | 'Student Life';
  adHoc?: boolean;
}

export const committees: Committee[] = [
  // Presidential
  {
    id: 'edi',
    name: 'Equity, Diversity & Inclusion',
    description: 'The Equity, Diversity, and Inclusion (EDI) Committee is responsible for promoting inclusivity at UBC Science students and represented on Faculty and university-wide EDI initiatives. They create events and programming to promote community and belonging among EDI-seeking students and alumni in the Science community.',
    category: 'Presidential'
  },
  {
    id: 'elections',
    name: 'Elections*',
    description: 'The Elections Committee is responsible for organizing and overseeing fair and efficient SUS elections, in accordance with current bylaws. The committee also creates promotional materials for the elections to promote transparency, accessibility, and student engagement in electing SUS leaders.',
    category: 'Presidential',
    adHoc: true
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'The Human Resources Committee is responsible for the recruitment and onboarding of the Executive Team and volunteers. It manages the performance of volunteers and assists the organization with fostering positive work culture. The HR committee facilitates the annual distribution of the SUS Volunteer Leader Award and other related programs.',
    category: 'Presidential'
  },
  {
    id: 'advocacy',
    name: 'Advocacy',
    description: 'The Advocacy Committee is responsible for ensuring that the diverse student voice and concerns of UBC Science students are communicated across the university. The committee advocates on relevant educational issues across campus and across BC at large.',
    category: 'Presidential'
  },
  
  // Council
  {
    id: 'pac',
    name: "President's Advisory Committee",
    description: "The President's Advisory Committee serves as a strategic advisory body to the SUS President on issues pertaining to the Presidential Portfolio and key university-level advocacy.",
    category: 'Council'
  },
  {
    id: 'jpac',
    name: 'Joint Policy and Advocacy',
    description: 'The Joint Policy and Advocacy Committee advises the Science Executive team on key policy recommendations and priorities for university-level and AMS Council and AMS Council meetings.',
    category: 'Council'
  },
  {
    id: 'sle',
    name: 'Student Life and Events',
    description: 'The Student Life and Events Committee is responsible for supporting the Student Life portfolio.',
    category: 'Council'
  },
  {
    id: 'academic-affairs',
    name: 'Academic Affairs',
    description: 'The Academic Affairs Committee is responsible for supporting the Academic portfolio.',
    category: 'Council'
  },
  {
    id: 'external-relations',
    name: 'External Relations',
    description: 'The External Relations Committee is responsible for supporting the External portfolio in its work pertaining at the faculty and university level.',
    category: 'Council'
  },
  
  // Academic
  {
    id: 'academic-experience',
    name: 'Academic Experience',
    description: 'The Academic Portfolio is committed to addressing the diverse academic needs and concerns of SUS members and fostering an engaging and rewarding educational experience.',
    category: 'Academic'
  },
  {
    id: 'research-conference',
    name: 'Research Conference*',
    description: 'The Research Conference Committee is responsible for organizing UBC\'s first research conference. This one-day conference highlights undergraduate science research of UBC Science students and researchers.',
    category: 'Academic',
    adHoc: true
  },
  {
    id: 'mentorship',
    name: 'Mentorship',
    description: 'Mentorship supports the academic success of students by cultivating a diverse pool of upper-year students and graduate students willing to serve as mentors to first- and second-year students through the SUS mentorship program and in-person events at the reference.',
    category: 'Academic'
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'The Wellness Committee supports the mental well-being for students through relevant health resources and programs during exam periods.',
    category: 'Academic'
  },
  {
    id: 'tutoring',
    name: 'Tutoring*',
    description: 'Tutoring supports the academic success of students by cultivating a diverse pool of upper-year and graduate students willing to serve as paid tutors at the reference.',
    category: 'Academic',
    adHoc: true
  },
  
  // Administration
  {
    id: 'clubs-commission',
    name: 'Clubs Commission',
    description: 'The Clubs Commission (CC) supports and oversees the vibrant and diverse community of SUS Clubs. Through regular check-ins and support over 40 Science Engaged with budgeting requests, event advice, and space bookings for SUS Clubs.',
    category: 'Administration'
  },
  {
    id: 'code-policy',
    name: 'Code & Policy',
    description: 'The Code and Policy Committee reviews the constitution and bylaws of the SUS. It also reviews and promotes that any suggestions to the Executive Committee is compliant for approval by Council.',
    category: 'Administration'
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description: 'Sustainability supports environmental sustainability efforts within the Science community, managing initiatives like composting, recycling, and waste reduction. The committee also supports events that educate students about environmental science, promotes sustainable practices in the ALSSC, and advocates for increased campus-wide sustainability support.',
    category: 'Administration'
  },
  {
    id: 'building-management',
    name: 'Building Management',
    description: 'The Building Management Committee manages all operations of the ALSSC, including event bookings, room bookings, meeting bookings, supervision and coordination of front desk and cleaning staff, overseeing cleaning equipment and supplies, IT implementation and maintenance, and volunteer maintenance to ensure ALSSC remains a safe space.',
    category: 'Administration'
  },
  
  // Communications
  {
    id: 'first-week',
    name: 'First Week*',
    description: 'The First Week Committee hosts events and disseminates information to help students acclimatize to community in September, with 5 weeks of fun and engaging events that connect students to each other.',
    category: 'Communications',
    adHoc: true
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'The Marketing Committee is responsible for designing, branding, and promoting the SUS through various social media platforms and channels, and provides annual marketing support for SUS-affiliated events and initiatives.',
    category: 'Communications'
  },
  {
    id: 'productions',
    name: 'Productions',
    description: 'The Productions Team focuses on photo and video content to capture the essence and behind-the-scenes of SUS for the digital sphere. It supports the marketing team with video content and assets.',
    category: 'Communications'
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'The Sales Team designs and sells the merch (outfits like hoodies, sweatpants, and various accessories). It provides students with opportunities for brand engagement.',
    category: 'Communications'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'The Web Development Committee maintains and updates the SUS website. It works closely with Marketing team to ensure the website is up-to-date and user-friendly. They also work to improve back end and user experience of the website and support other projects.',
    category: 'Communications'
  },
  {
    id: 'hackathon',
    name: 'Hackathon*',
    description: 'The Hackathon Team oversees and runs the annual SUS Hackathon that addresses social and ecological issues in an interdisciplinary environment.',
    category: 'Communications',
    adHoc: true
  },
  
  // External
  {
    id: 'cpd',
    name: 'Careers & Professional Development',
    description: 'The Careers & Professional Development team supports students in their career journeys by organizing a wide range of events and programs. Through workshops, networking with faculty, industry professionals, graduate students, and Alumni, and programs offering internships to accelerate personal and professional growth.',
    category: 'External'
  },
  {
    id: 'community-engagement',
    name: 'Community Engagement',
    description: 'The Community Engagement team connects students to volunteer opportunities that expand their community outreach and civic engagement. Events such as the annual Community Engagement Week and The Food Recovery Program strengthen connections between the UBC Science community and the Greater Metro Vancouver Community.',
    category: 'External'
  },
  {
    id: 'sponsorships',
    name: 'Sponsorships',
    description: 'The Sponsorships Committee seeks to leverage sponsorship opportunities and strengthen the financial support. The committee provides year-long financial support through sponsorship programs \'Blue Card\' in addition to coordinating and securing additional sponsorships for events and SUS-led events.',
    category: 'External'
  },
  {
    id: 'ssran',
    name: 'Science Student Recognition Awards Night*',
    description: 'The Science Student Recognition Awards Night Committee (SSRAN) is responsible for organizing the annual presentation of Science Student Awards. These awards recognize outstanding achievement across recognition levels from departments to faculty-wide.',
    category: 'External',
    adHoc: true
  },
  
  // Finance
  {
    id: 'budgets-grants',
    name: 'Budgets & Grants',
    description: 'The Budgets & Grants Committee is responsible for overseeing all financial matters pertaining to SUS, including the management of budgets submitted for approval at Council, and awarding financial grants to clubs throughout the year. The committee aims to ensure that the spending is done on an as-budgeted and fiscally responsible.',
    category: 'Finance'
  },
  
  // Student Life
  {
    id: 'fyc',
    name: 'First Year Committee',
    description: 'The First Year Committee hosts events and activities and provides opportunities for all first year science students to connect with each other and succeed at UBC.',
    category: 'Student Life'
  },
  {
    id: 'flagship',
    name: 'Flagship Experience*',
    description: 'The Flagship Experience Committee provides unique opportunities for science students to explore the city of Vancouver and build lasting connections among new and returning students through collaborative event planning.',
    category: 'Student Life',
    adHoc: true
  },
  {
    id: 'social',
    name: 'Social Committee',
    description: 'The Social Committee hosts various events that bring Science students together, creating a welcoming environment where students build community, social connections, and support their wellbeing.',
    category: 'Student Life'
  },
  {
    id: 'sports',
    name: 'Sports Committee',
    description: 'The Sports Committee strives to serve and give students access to a wide variety of engaging sports and recreational opportunities across all skill levels.',
    category: 'Student Life'
  },
  {
    id: 'science-celebration',
    name: 'Science Celebration*',
    description: 'The Science Celebration Committee hosts the marquee experience to highlight yearly, including an exciting gala event and annual Formal event.',
    category: 'Student Life',
    adHoc: true
  }
];
