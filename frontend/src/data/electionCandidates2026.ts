export interface ElectionCandidate {
    name: string
    position: string
    imagePath: string | null
    blurb: string | null
    instagram?: string
    email?: string
    website?: string
}

export interface ElectionPositionGroup {
    position: string
    candidates: ElectionCandidate[]
}

export const electionCandidates: ElectionPositionGroup[] = [
    {
        position: 'President',
        candidates: [
            {
                name: 'Jenevieve Lee',
                position: 'President',
                imagePath: '/assets/elections-2026/candidate-images/jenevieve-lee.png',
                blurb: `Hello, my name is Jenevieve Lee, and I am running to be your next SUS President! As your current VP Student Life, previous AVP Internal and FYC chair, I have the experience and insight into what it takes to run our society effectively. Over the past three years, I have built a proven track record of turning ideas into impactful events and initiatives that enhance the Science student experience.\n\nADVOCACY: Strengthen Science student representation by consolidating clear advocacy priorities, expanding lecture recording accessibility, and gathering direct student feedback through a Science Student Advocacy Inbox and President's Council.\n\nIMPACT: Deliver high-impact, high-turnout events through intentional programming, stronger collaboration across portfolios, and better support for SUS clubs while building new annual traditions that increase Science spirit.\n\nTRANSPARENCY: Be clearer about how SUS operates through initiatives like a SUS Events Brochure, student council and executive work, and restructuring council processes to keep councillors and students better informed.\n\nINTERNAL SUPPORT: Build a stronger internal foundation through initiatives like a SUS-wide retreat, improved onboarding for VPs, chairs and coordinators, and embedding EDI considerations across all portfolios.`,
                instagram: '@votejenevievelee',
                website: 'https://votejenevievelee.my.canva.site/',
            },
            {
                name: 'Katherine Cai',
                position: 'President',
                imagePath: '/assets/elections-2026/candidate-images/katherine-cai.jpg',
                blurb: `Hey UBC Science! I'm Katherine, and I'm running to be your SUS President. This year as Assistant to the President, I worked closely with UBC faculty to advocate for improved mental health supports and partnered with the Dean's Office to secure $90,000 to expand lab accessibility. As Academic Experience Co-Chair, I gathered feedback from 1,500+ students through the Back2School Survey to guide SUS initiatives. With 3 years of SUS experience, I'm committed to strengthening SUS through three key priorities: community, wellbeing, and opportunity.\n\nCOMMUNITY & BELONGING: Strengthen the Science community by collaborating with Science Clubs to align advocacy goals and maximize event impact. Increase SUS participation in inter-constituency events via President's Council to build stronger campus connections.\n\nWELLBEING & ACCESSIBILITY: Create a Mental Health and Accessibility Working Group to strengthen mental health advocacy and collaborate with the Science Embedded Counsellor. Introduce a SUS Accessibility Checklist to make events more inclusive and increase participation across the Science community.\n\nSTUDENT OPPORTUNITIES: Expand career development opportunities through research workshops, industry panels, and programming highlighting underrepresented fields. Grow volunteer opportunities through the SUS Community Engagement Fair and improve SUS training for clubs and student leaders.`,
                instagram: '@votekatherinecai',
                website: 'https://votekatherinecai.com',
            },
        ],
    },
    {
        position: 'VP Administration',
        candidates: [
            {
                name: 'Dilnoor Cheema',
                position: 'VP Administration',
                imagePath: '/assets/elections-2026/candidate-images/dilnoor-cheema.jpg',
                blurb: `Hi UBC Science! I'm Dilnoor, a Neuroscience student, and I'm running to be your next VP Administration. With extensive experience in science community engagement, serving as the past President of the UBC Blood for Life Club and working as an administrative assistant and mentor for SUS, I am committed to building a more connected, efficient, and student-centred Science community. My platform will work on making science students feel supported through CONNECTION, ACCESSIBILITY, and SUPPORT.\n\nCONNECTED SCIENCE COMMUNITY: I will strengthen collaboration across clubs and portfolios by creating structured opportunities to connect. Through frequent inter-club socials, networking coffee chats, expanded club fairs, and consistent promotion opportunities, I aim to make collaboration easier and more intentional within the Science community.\n\nACCESSIBILITY: Administrative systems should be clear and easy to navigate. I will work toward centralized access to booking information, uploading documents swiftly, simplified governance communication, and accessible, well-structured election processes.\n\nSTUDENT-CENTRED SPACES: Ladha and SUS spaces should feel welcoming and supportive, especially during high-stress academic periods. I will continue extended exam-season accessibility and prioritize exam-relief initiatives to make SUS spaces a reliable student hub.`,
                instagram: '@vote.dilnoorcheema',
            },
            {
                name: 'Gloria Zhuo',
                position: 'VP Administration',
                imagePath: '/assets/elections-2026/candidate-images/gloria-zhuo.jpg',
                blurb: `Hi! I'm Gloria Zhuo, a third-year neuroscience student, and I'm excited to be running for your next SUS Vice President, Administration. As the current AVP Administration with 2 years of experience supporting the Society, I've seen how strong administrative systems shape student life behind the scenes, from club support to building management and council operations.\n\nI've learned that good administration is about making SUS more accessible, organized, and responsive to science students. If elected, I hope to improve building management by advocating for clearer, more accessible ways of letting students know when the space is being used, rework of booking systems including better prioritization for SUS working groups & clubs, and stronger safety planning for students using the space. I also hope to continue simplifying key resources, such as club guides and code and policy documents, making easier and more comprehensive guides for councillors, clubs, and general science students. In addition, I hope to strengthen student engagement in elections so more students feel informed, represented, and motivated to vote.`,
                instagram: '@gloriazhuo4vpadmin',
                email: 'gloriazhuo0928@gmail.com',
            },
        ],
    },
    {
        position: 'VP Academic',
        candidates: [
            {
                name: 'Annie Wang',
                position: 'VP Academic',
                imagePath: '/assets/elections-2026/candidate-images/annie-wang.jpg',
                blurb: `Hi UBC Science! My name is Annie Wang, and I'm excited to be running for Vice President Academic of the Science Undergraduate Society! Through four years of involvement in SUS, and most recently serving as your AVP Academic, I've gained firsthand experience advocating for Science students and collaborating with faculty to strengthen the academic experience.\n\nMy platform is centered on advocacy, engagement, accessibility, and opportunity. I hope to strengthen student representation in faculty decision-making, build a more connected academic community through impactful events, make academic supports like tutoring and degree planning tools easier to access, and expand pathways for students to explore research and professional development beyond the classroom.\n\nSome of my leadership experiences outside of SUS include serving as Co-President of the CAPS Student Association and supporting students as a Science Peer Academic Coach and BIOL 112 Peer Tutor. These roles have strengthened my commitment to creating inclusive, supportive environments where students can learn, grow, and succeed.`,
                instagram: '@voteanniewang',
                email: 'anniew0901@gmail.com',
            },
            {
                name: 'Megan Chao',
                position: 'VP Academic',
                imagePath: '/assets/elections-2026/candidate-images/megan-chao.jpg',
                blurb: `Hi everyone! My name is Megan, I'm in my 3rd year of the Cellular, Anatomical, and Physiological Sciences (CAPS) program, and I'm running to be your Vice President Academic in this year's SUS Elections! I have spent the past 2 years working in SUS's Academic Experience Committee. I am incredibly passionate about improving the academic experience of Science Students!\n\nOne of my major goals for next year is to increase student engagement with SUS and student input in advocacy efforts by creating open space for you to share concerns and ideas surrounding your experience with SUS and UBC Science! Working with the Faculty of Science, I will advocate for availability of recorded lectures, a more user-friendly Workday, a more lenient Exam Hardship Policy, and increasing diversity and representation within UBC Science.\n\nMy future projects include implementing a SUS Opportunities portal for science-related job opportunities, awards, and scholarships, expansion of the SUS Study Sphere to include more student- and SUS-made academic resources, and SUS Resource Fairs for students to learn about our initiatives.`,
                instagram: '@votemegansusvpacademic',
            },
        ],
    },
    {
        position: 'VP Communications',
        candidates: [
            {
                name: 'Eesha Rathod',
                position: 'VP Communications',
                imagePath: '/assets/elections-2026/candidate-images/eesha-rathod.jpg',
                blurb: `Hi UBC Science! My name is Eesha, and I'm excited to be running for your next VP Communications. With three years of experience in the Science Undergraduate Society, I want to strengthen how SUS connects with science students and showcases the diverse opportunities within our faculty.\n\nSome initiatives I hope to focus on include:\n• Make merchandise more affordable and accessible by using the Communications budget to help subsidize costs\n• Showcase science students through regular social media spotlights highlighting research, clubs, and student experiences\n• Expand outreach across multiple social media platforms to better reach and engage science students\n• Broaden the Hackathon to encourage participation from students across different science disciplines\n• Highlight science clubs and opportunities through stronger collaborations and promotional initiatives`,
                instagram: '@vote.eesha.vpcomms',
                email: 'erathod@student.ubc.ca',
            },
        ],
    },
    {
        position: 'VP External',
        candidates: [
            {
                name: 'Kiana Bagherpour',
                position: 'VP External',
                imagePath: '/assets/elections-2026/candidate-images/kiana-bagherpour.jpg',
                blurb: `Hi everyone! My name is Kiana Bagherpour, and I'm a second-year Integrated Sciences student running for VP External of the Science Undergraduate Society. Over the past year, I've had the opportunity to serve as a Careers & Professional Development (CAPD) Coordinator with SUS, where I helped organize and promote initiatives such as Coffee Chats, IGNITE, and Science Fair.\n\nThrough this role, I've worked on connecting Science students with career resources, industry professionals, and networking opportunities beyond the classroom. Being part of the External portfolio has shown me how valuable these connections can be in helping students explore different career paths and develop skills for the future.\n\nI'm excited about the opportunity to expand these initiatives and create more ways for students to engage with career and professional development opportunities. If elected, I hope to strengthen partnerships with external organizations, continue growing career development initiatives, highlight student achievements through Science Student Recognition, and expand sustainability initiatives within the Science community.`,
                instagram: '@kiana4_vpexternal',
            },
            {
                name: 'Maria Shevyakova',
                position: 'VP External',
                imagePath: '/assets/elections-2026/candidate-images/maria-shevyakova.png',
                blurb: `Hello fellow Science students! My name is Maria Shevyakova, and I am a first-year BS student running to be your next SUS VP External. I am passionate about connecting science students with opportunities beyond the classroom while fostering connections between our science community here at UBC and the broader scientific and professional world.\n\nAs a first-year student, I bring a perspective that reflects the experiences of students who are just beginning their time at UBC. Many students early in their degrees are exploring research opportunities, career paths, and ways to connect with the scientific community. Because I am navigating this stage myself, I understand how important accessible networking, mentorship, and professional exposure can be.\n\nAs VP External, I aim to strengthen partnerships with researchers, healthcare organizations, and industry partners to create meaningful opportunities for science students. Whether through networking events, speaker panels, or collaborations with research and healthcare institutions, my goal is to expand the connections that help students explore careers in science, research, and medicine.`,
                instagram: '@vote4maria.susvp',
                email: 'marias07@student.ubc.ca',
            },
        ],
    },
    {
        position: 'VP Finance',
        candidates: [
            {
                name: 'Harleen Randhawa',
                position: 'VP Finance',
                imagePath: '/assets/elections-2026/candidate-images/harleen-randhawa.jpg',
                blurb: `Harleen Randhawa is a third-year Integrated Sciences student and current Associate Vice President of Finance for the Science Undergraduate Society. She supports student initiatives and raises awareness of financial resources for science students through her work with the SUS finance portfolio.\n\nIf elected VP Finance, Harleen aims to make financial resources more accessible, practical, and transparent for science students. Her platform focuses on four main areas. She plans to support food security and everyday budgeting through affordable meal planning and grocery-budgeting workshops. She will expand and launch a monthly financial literacy series covering topics such as taxes and students' guide to building credit. Harleen also aims to improve transparency in the Science Undergraduate Society's finances. She will increase awareness of grants and funding opportunities by creating centralized resources and offering grant-writing workshops.`,
                instagram: '@vote.harleenrandhawa',
            },
        ],
    },
    {
        position: 'VP Student Life',
        candidates: [
            {
                name: 'Issac Chen',
                position: 'VP Student Life',
                imagePath: '/assets/elections-2026/candidate-images/issac-chen.jpg',
                blurb: `Hi UBC Science! My name is Issac Chen, and I am running to be your next Vice President Student Life! I am currently in my fourth year studying Pharmacology and completing my Co-op placement as a Clinical Research Assistant at BC Children's Hospital.\n\nOver the past three years, the Student Life portfolio has been a defining part of my undergraduate experience. I started as a Sports coordinator, then as the Sports Chair, and I am currently one of the AVP Student Life. Through these roles, I have gained firsthand experience and knowledge on what truly brings our Science community together! Having witnessed the impact that Student Life can create, I am confident in working towards an even stronger year for SUS Student Life.\n\nMy goal is to build on the strong momentum from past years and continue to elevate the portfolio with student-centered initiatives. I want to create an environment where we can bring out the FUN in every Science student and introduce new initiatives that deliver consistent, tangible changes year-round! I am beyond excited to step into this role and turn some of my visions and goals into life for the next academic year!`,
                instagram: '@vote.issacchen',
            },
        ],
    },
    {
        position: 'VP Engagement',
        candidates: [
            {
                name: 'Moya Ku',
                position: 'VP Engagement',
                imagePath: '/assets/elections-2026/candidate-images/moya-ku.jpg',
                blurb: `Hi UBC Science! I'm Moya Ku, a third-year Biology student running for VP Engagement. Over the past three years, I've been actively involved with the Science Undergraduate Society in several event-planning roles that have allowed me to help build community within the Faculty of Science. I began as a First Year Committee Coordinator, planning events designed to welcome new science students and help them make connections early in their university experience. I later served as a Science RXN Coordinator, where I organized events for incoming first-year students to meet one another, and as a Social Committee Coordinator, helping plan large-scale events open to the entire science student body. This past year, I'm proud to have served as Flagship Experience Co-Chair, leading a team that planned major SUS events like Science RXN and Science Week, while collaborating with other faculties and Science faculty staff.\n\nAs VP Engagement, my goal is to strengthen connection, inclusivity, and collaboration within the Science community. I want to continue growing flagship events so they create meaningful opportunities for students to meet and engage with one another. I also hope to prioritize accessible and welcoming events for all science students, while expanding cross-faculty collaborations that bring different communities on campus together.`,
                instagram: '@vote.moya.ku',
            },
        ],
    },
    {
        position: 'AMS Representative',
        candidates: [
            {
                name: 'Alyssa Wong',
                position: 'AMS Representative',
                imagePath: '/assets/elections-2026/candidate-images/alyssa-wong.jpg',
                blurb: `Hi everyone! My name is Alyssa, and I am running to be your AMS Representative to ensure Science students have a strong voice in the decisions that shape our university experience.\n\nOver the past two years in SUS, as Internal Committee Coordinator and now AVP Administration, I have worked closely with student leaders to support initiatives that benefit science students. These roles have strengthened my skills in collaboration, organization, and student advocacy, and have shown me how effective representation can turn student concerns into real action.\n\nMy priorities are: (1) increasing transparency and strengthening funding for science initiatives, including advocating for more support for science programs and spaces like the Abdul Ladha Science Student Centre (ALSSC); (2) improving communication between the AMS and science students through regular updates to SUS Council and better awareness of available resources; and (3) expanding opportunities for involvement by supporting clubs, promoting undergraduate research, and encouraging professional development.`,
                instagram: '@vote.alyssa4amsrep',
            },
            {
                name: 'Angela Qian',
                position: 'AMS Representative',
                imagePath: '/assets/elections-2026/candidate-images/angela-qian.png',
                blurb: `Hi UBC Science! My name is Angela, and I'm a fourth-year Biology student running to be one of your next SUS AMS Representatives. Over the past three years as AVP Communications with SUS, I've had the opportunity to connect with science students and hear firsthand about the challenges we face on campus.\n\nI want to bring those perspectives forward and advocate for meaningful, practical improvements at the AMS level. Some initiatives I hope to focus on include:\n• Improving academic support by advocating for expanded study spaces, extended hours in science buildings and the AMS Nest, and stronger support for student-run review sessions\n• Supporting student-run academic resources through improved room booking access, small funding opportunities, and shared repositories of practice materials and question banks\n• Promoting financial transparency by advocating for clearer summaries of AMS budgets, student fees, and Council decisions so students understand where their money goes\n• Addressing affordability and food insecurity by increasing awareness of resources like the AMS Food Bank, Sprouts, and other low-cost food initiatives on campus\n• Strengthening student voice and accountability through student consultation, open office hours, and regular updates on AMS decisions that impact science students`,
                instagram: '@vote.angela.amsrep',
                email: 'aqian01@student.ubc.ca',
            },
            {
                name: 'Elisa Nasimi',
                position: 'AMS Representative',
                imagePath: null,
                blurb: null,
            },
        ],
    },
]
