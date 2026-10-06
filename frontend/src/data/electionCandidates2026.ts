export interface ElectionCandidate {
    name: string
    position: string
    imagePath: string | null
    blurb: string | null
    instagram?: string
    email?: string
    website?: string
    imagePosition?: string
}

export interface ElectionPositionGroup {
    position: string
    candidates: ElectionCandidate[]
}

export const electionCandidates: ElectionPositionGroup[] = [
    {
        position: 'Microbiology and Immunology Department Representative',
        candidates: [
            {
                name: 'Chris Yan',
                position: 'Microbiology and Immunology Department Representative',
                imagePath: '/assets/elections-2026/candidate-images/chris-yan.jpg',
                blurb: `Hello UBC Science! I'm Chris Yan, running to be the Microbiology and Immunology departmental representative and would greatly appreciate your support in this election. I am passionate about advocacy and student support, and will help amplify your voices! Follow my campaigning page @votechrisyan on Instagram for more updates and information, such as my current experiences and goals for an upcoming year in this role. Also keep your eye out for some snazzy reels 😆.`,
                instagram: '@votechrisyan',
            },
        ],
    },
    {
        position: 'Earth, Ocean, and Atmospheric Sciences and Geographical Sciences Representative',
        candidates: [
            {
                name: 'Cory Law',
                position: 'Earth, Ocean, and Atmospheric Sciences and Geographical Sciences Representative',
                imagePath: '/assets/elections-2026/candidate-images/cory-law.jpeg',
                blurb: `Hi friends! My name’s Cory and I’m a 4th year student in Atmospheric Science. Having been involved in both the EOAS and Geography departments for a while now (through things like UBC Storm Club, the EOAS Undergraduate Clubs Council (UCC), research, and teaching assistance), I recognize the importance of our voice in the Science Undergraduate Society and the weight these decisions have on our undergraduate experience. I plan to advocate for a greater consideration of EOAS and Geographical Science students in SUS initiatives and opportunities, given that we’ve been without a representative for the past little while. Our input matters, and I hope to foster these positive relationships between EOAS, Geographical Sciences, and the wider UBC Science community :)`,
            },
        ],
    },
    {
        position: 'ISCI Rep',
        candidates: [
            {
                name: 'Renee Hui',
                position: 'ISCI Rep',
                imagePath: '/assets/elections-2026/candidate-images/renee-hui.png',
                blurb: `Heyyyy, I’m Renee and I’m in my 3rd year integrating neuroscience, physiology, and human health. \n ૮ ˶ᴖ ᴗ ᴖ˶ ა \n-Platform: RISE (Represent, Integrate, Support, Engage), learn more about it on my instagram! \n-Goal: I am running as the ISCI rep because I want to make your voice heard. There is this common saying that ISCI does not really have a community so I am here to change that.\n-Vision: Fun events, academic resources, networking opportunities… You name it, and I will try my best to make it happen!! \n-Qualities: Responsible, reliable, approachable, efficient.\n \nFeel free to check out my instagram @renee_for_isci_rep_2026 to learn more about me and my platform (shameless self promotion oops…). \nDon’t forget to check out other candidate’s profiles because ultimately, you want to vote for the person who you think would best represent us as ISCI students!\n\nThank you for taking the time to vote and please email me (reneehui22@gmail.com) if you would like to connect, I love talking to people hehe!`,
                instagram: '@renee_for_isci_rep_2026',
                email: 'reneehui22@gmail.com',
            },
        ],
    },
    {
        position: 'First Year Representative',
        candidates: [
            {
                name: 'Mirabelle Onovwiona',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/mirabelle-onovwiona.jpeg',
                blurb: `Hi UBC Science! My name is Mirabelle Onovwiona, but everyone calls me Mimi, and I’m running to be your SUS First-Year Representative. As a representative, my intention is to “Put First-Years FIRST.” (FIRST: Feedback, Inclusion, Representation, Support, Transparency).\n\nSome of my leadership experiences include being a Student Council Grade Representative throughout all of high school and acting as Graduation Council President, where I managed a budget of almost $200,000/year. Event planning, advocacy, leadership, and communication have defined a large part of my life, and I’m committed to serving the first year science students with these skills. \n\nI want first year science students to feel a sense of belonging so strong that they are confident that they made the right choice with UBC. The goal is to look back and realize that our worries were insignificant! Every student deserves to feel supported, especially as we navigate the novelty of university and the rigour of first year science classes. \n\nUltimately, I’ve learned what it means for people to trust me to steer their experiences. I am dedicated to earning that trust in this role. \n\nTogether, let’s make this year unforgettable. Put your experience FIRST and vote for Mirabelle.`,
            },
            {
                name: 'Stephanie Yoon',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/stephanie-yoon.jpg',
                blurb: `Hey everyone! My name is Stephanie, and just like you, I am a first year science student at UBC who is very enthusiastic about building a strengthened community within our faculty.\n\nAs a SUS First Year Representative, I hope to contribute in fostering a science cohort in which every first year can feel a personal belonging to. I will work to make all 2400+ of our voices heard!\n\nI have a fair amount of experience and a great passion for student committee work and advocacy, as I was a long standing member of my highschool’s Music Executive Committee–where I took part in planning major community-bonding events, facilitating inter-grade connections, and serving as a representative of the faculty.\n\nThrough being a part of this cohort for 5 years, I learned that the school environment becomes a lot more enjoyable once you get the chance to engage and connect with the people around you.\n\nThat’s why my goal as a First Year Representative is to offer every one of us the opportunity to settle in and develop our own connection to the science community here at UBC, through promoting festivities, collaboration, and discussion.\n\nLet’s work to turn this campus into a home!`,
            },
            {
                name: 'Jeslyn Wong',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/jeslyn-w.jpeg',
                blurb: `Hi UBC Science first-years! My name is Jeslyn, and I’m running for SUS First-Year Representative. \nThrough my past involvement in leadership, I’ve seen how much of a difference a supportive community can make. Those experiences taught me how important it is for students to feel heard and to know that their input matters.\nAs First-Year Rep, my goal is to make our first year feel less overwhelming by making useful resources and opportunities easier to find. I also hope to help students feel more confident taking part in the Science community and exploring what UBC has to offer. Most importantly, I want to be someone first-years can come to with ideas or concerns and trust to bring their voices forward within SUS.\nOutside of school, I love art, hiking, reading, and anything outdoorsy. I’m so excited to meet more of you and make the most of our first-year together!`,
            },
            {
                name: 'Joshua Low',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/joshua-low.png',
                blurb: `Hey there! My name is Josh, and after 13 years of school, the one thing I’ve learned is that everyone deserves to have a little fun! Whether that’s through the events we host, the community we build, or just the vibe we bring, one of my goals for this year as your First Year Rep will be to make sure there’s always a place for you to express your whimsy, cry about that one Chem midterm, or escape from the stress of school when things just get too overwhelming. But I don’t want to make these decisions alone. I want to hear your opinions, ideas, and even your most out-of-pocket event suggestions so we can make this first year a memorable experience for everyone!\n\nFrom leading youth events to coaching ultimate frisbee to even selling day-old donuts on the street, I’ve learned that the best communities are the ones where everyone feels comfortable being themselves. If you’re looking for a representative who can bring your ideas to SUS, someone who will understand every niche reference you make, or even a friend to film the weirdest TikTok audios with… consider voting for me as your SUS First Year Rep! :)`,
            },
            {
                name: 'Nicky Nguyen',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/nicky-nguyen.JPG',
                blurb: `Hey! I’m Nicky Nguyen, and I’m running to be YOUR SUS First-Year Representative!\nStarting UBC Science has been exciting, rewarding, but also a little overwhelming. From navigating a new academic environment to meeting hundreds of new people, first year definitely comes with many challenges. I’m here to help make this experience a little easier and more approachable for all of us!\nAs your First-Year Representative, I want to turn your ideas into action. I will put my best effort to actively engage with our first-year community, listen to your experiences, and bring your ideas, suggestions, and concerns to the foreground in SUS. Whether you’re looking for academic resources, professional opportunities, ways to get involved, or simply a chance to meet more people, I want SUS to reflect what YOU actually want and need.\nMy priorities are simple: build community, create opportunities, and amplify your voice. I hope to introduce new events while supporting existing initiatives that bring students together, encourage collaboration, and help us discover everything UBC Science has to offer both inside and outside the classroom.\nWe’re all figuring out our first year together – let’s make it a little less overwhelming and a lot more memorable. Your Voice, Your Community – Vote Nicky!`,
            },
            {
                name: 'Carson Kwok',
                position: 'First Year Representative',
                imagePath: '/assets/elections-2026/candidate-images/carson-kwok.jpg',
                imagePosition: 'top',
                blurb: `I will advocate for better food in the dining hall.`,
            },
        ],
    },
    {
        position: 'Chemistry Representative',
        candidates: [
            {
                name: 'Marijke Barr',
                position: 'Chemistry Representative',
                imagePath: '/assets/elections-2026/candidate-images/marijke-barr-eburne.jpeg',
                blurb: `Hi! I’m Marijke, a third-year Chemistry student and the current SUS Representative on the Undergraduate Chemistry Society (UCS). I’m running for the position of Chemistry Representative because I want chemistry students to have a strong voice within the larger Science Undergraduate Society and someone who will actually bring their perspectives into the conversation.\nI’m involved in chemistry research at UBC and have become increasingly involved in the chemistry community during my degree, so I care about representing the students and department I’m a part of. As your Chemistry Representative, I want to hear what matters to chemistry students, speak up for our interests, and make sure our community is represented in the decisions SUS makes.\nI’d love the opportunity to represent Chemistry on SUS this year, and I'd appreciate your vote!`,
            },
        ],
    },
    {
        position: 'CAPS Representative',
        candidates: [
            {
                name: 'Hunter Wyndham',
                position: 'CAPS Representative',
                imagePath: '/assets/elections-2026/candidate-images/hunter-wyndham.jpeg',
                imagePosition: 'top',
                blurb: `Hi, I’m Hunter, a 3rd year CAPS major! \n\nThrough my involvement both within SUS and CAPSSA, I’ve grown passionate about advocating for students in order to better their university experience. I’ve been part of SUS for 3 years, starting as a First Year Committee Coordinator, and rising to the rank of Associate Vice-President of the Student Life portfolio, overseeing four committees, eight chairs, and 50+ coordinators. In my two years in CAPSSA, I’ve been both an Academic Coordinator, where I designed 350+ flashcards for the CAPS 205 and 206 courses, and a Co-VP Events, where I will be organizing various events in order to support the professional and social development of CAPS students (YOU!).`,
            },
        ],
    },
    {
        position: 'Biology Department Representative',
        candidates: [
            {
                name: 'Ruby Beach',
                position: 'Biology Department Representative',
                imagePath: '/assets/elections-2026/candidate-images/ruby-beach.png',
                blurb: `My name is Ruby Beach, and I am a third-year Biology student eager to serve as your Departmental Representative on the Science Undergraduate Society (SUS). Passionate about translating our rigorous academic experiences into meaningful peer support, I want to bridge the gap between Biology and SUS leadership. My interests in molecular genetics, human physiology, and ecological systems have driven my involvement across campus and field opportunities, from intertidal ecological research on Galiano Island to clinical trial work here at UBC.\nAs a representative, my priority is fostering an inclusive, transparent, and collaborative environment for every Biology student. Having campaigned within BioSoc and engaged with mentorship programs across campus, I understand the importance of clear academic pathways, strong communication channels with the department, and accessible wellness resources tailored to students' workload. I am unafraid to bring forth any concerns from Biology to SUS as I want everyone to have a voice and be heard. \nBeyond labs and lectures, I bring a community-minded, balanced approach to leadership, whether collaborating on data-driven research, road biking around Vancouver, or organizing student initiatives. I am committed to making sure any collective concerns get voiced, students well-being is advocated for, and success is celebrated within SUS. I look forward to serving as an approachable, dedicated liaison on behalf of Biology!`,
            },
        ],
    },
    {
        position: 'Mathematics Department Representative',
        candidates: [
            {
                name: 'Aydin den Ouden',
                position: 'Mathematics Department Representative',
                imagePath: '/assets/elections-2026/candidate-images/aydin-den-ouden.JPG',
                blurb: `Hello! I’m Aydin, a second-year combined Math and Chem student looking to support mathematics undergraduates as this year’s SUS Math Department Representative. \n\nDuring my math courses in my first and second year thus far, I’ve received a lot of help from department resources like the Math Learning Center and Calculus Commons Room, but also from student-led resources such as Math exam packs from the Mathematics Undergraduate Society. While the SUS frequently advertises resources, review sessions, and tutoring services, I’ve found Math help to often be underrepresented there, which is something I wish to change, be that to better encourage new students to join the department, or for students in lower years like me to find the help that’s already around them.\n\nWhile I’m focusing on changes directed towards lower years, it’s because of a lack of experience, rather than willingness; so if you’re a math student, please reach out to me with any questions, feedback, or suggestions via Instagram @vc.aydin`,
                instagram: '@vc.aydin',
            },
        ],
    },
    {
        position: 'Pharmacology Representative',
        candidates: [
            {
                name: 'Ethan Tyau',
                position: 'Pharmacology Representative',
                imagePath: '/assets/elections-2026/candidate-images/ethan-tyau.jpeg',
                blurb: `I have come to appreciate how our relatively small program makes Pharmacology feel more interconnected. We have a unique opportunity to get to know people, build a strong community, and support one another throughout our degree. This allows for a strong sense of what matters to Pharmacology students. \n\nAs your representative, I hope to be someone you feel comfortable bringing your thoughts and concerns, to show what matters to you. I want to make sure that our program's unique perspectives are heard and represented in the broader science society. While pharmacology may be a small program, this does not mean our voice should be any smaller!`,
            },
        ],
    },
    {
        position: 'VP External',
        candidates: [
            {
                name: 'Zara Shaikh',
                position: 'VP External',
                imagePath: '/assets/elections-2026/candidate-images/zara-shaikh.jpeg',
                blurb: `Hello Science Students! My name is Zara, I’m a fourth-year Pharmacology student, and I’m so excited to be running to be your next SUS VP External!\n\nI’ve been part of the SUS External portfolio for the past two years, first as a Coordinator and second as Sponsorships Co-Chair, so I’ve had the chance to be involved across CAPD, SSRAN, and Sustainability working groups. From helping secure funds for Coffee Chats and Ignite (Science’s biggest career fair) to securing over $4,500 in sponsorships distributed to you (science students!) and expanding the Blue Card (your student discount card) by 13+ partners, I’ve loved creating opportunities that actually benefit Science students.\n \nAs VP External, I want to make the portfolio feel more relevant and accessible to all Science students. I hope to expand research opportunities, bring in diverse Coffee Chat speakers from various career pathways (including computer science, health sciences and much more), strengthen connections with industry and student groups, and make sure students across all science specializations feel represented.\n\nI’ve loved being part of External, and I’d be so excited to take everything I’ve learned and make the portfolio even better for students this year! Check out my campaign on Instagram: @zara4vpexternal`,
                instagram: '@zara4vpexternal',
            },
            {
                name: 'Kelly Park',
                position: 'VP External',
                imagePath: '/assets/elections-2026/candidate-images/kelly-park.jpeg',
                blurb: `Hello UBC Science students! My name is Kelly Park and I’m incredibly honoured to be your VP External candidate. I’ve held a variety of positions within SUS: First Year Committee Coordinator, Research Conference Coordinator, Elections Co-Chair, and I’m currently an Assistant to the President. The time I’ve spent working in different teams fulfilling unique purposes have taught me vital skills for achieving my goals.\n\nHere is how I will broaden support for all Science students and strengthen our community:\n\n- Be an approachable peer by listening to your voices and cater to your needs by combatting food insecurity, promoting volunteer/career opportunities, and advocating to our Faculty. 📞\n- Increase physical, computational, and environmental science focused initiatives while continuing to support life science students. 📈\n- Collaborate with more SUS clubs for sustainability efforts and build a network that better serves science students. 🌳\n- Expand the scope of the Science Student Celebration Awards Night by including Faculty recognized award recipients to celebrate more achievements! 🌟\n\nThank you for your attention and support, further details on my campaign initiatives can be found at @kelly4vpexternal! I would love to get in contact via DMs or email (kellypark0623@gmail.com) for any inquiries.`,
                instagram: '@kelly4vpexternal',
                email: 'kellypark0623@gmail.com',
            },
            {
                name: 'Bella Wang',
                position: 'VP External',
                imagePath: '/assets/elections-2026/candidate-images/bella-wang.jpeg',
                blurb: `Hi Science! My name is Bella Wang, and I’m a third-year Microbiology and Immunology student running for VP External. There’s no single image of a Science student, and I believe External should represent that. Science is full of students with different interests and futures. My goal is to broaden the fields and perspectives represented in the SUS External portfolio. This means creating more opportunities for Science students across all majors to connect with industry leaders and faculty, and to discover paths beyond their degree. I also want to bring External closer to the students it represents. Opportunities only matter if students know about them and feel welcomed. I want to make External more accessible and transparent to the Science community and create more ways for students to voice what they want to see from us. I’m not running to reinvent SUS. I’m running to make External feel more engaging, more open, and more representative of all the Science students it serves. Let’s Bring Science Together.`,
            },
        ],
    },
    {
        position: 'Phys/Astro/Biophys Department Representative',
        candidates: [
            {
                name: 'Rain Zhong',
                position: 'Phys/Astro/Biophys Department Representative',
                imagePath: '/assets/elections-2026/candidate-images/rain-zhong.jpg',
                blurb: `Weather forecast — Rain expected.\n\nHi physics students! My name is Rain and I am excited to be your potential Physics Department Representative.\n\nI am currently in 2nd year Biophysics. Over the past year, I have had the honour to serve on the SUS Council as the Science One Program Representative. This year, I would love to return to the Council to further impact executive decisions through the voices of the physics student body.\n\nI have had the experience of amplifying student voice as a First Year Committee Coordinator, strengthening the bonds of such a vast community through events such as the White Lie House Party and Year End Gala. This year, I am also an HR Coordinator for SUS, managing the internal newsletter and handling interpersonal relationships. \n\nThis universe was built on relationships (whether it be electrons orbiting the nucleus or planets orbiting stars), and I am no stranger to how these relationships form and develop. As the Physics Department Representative, I wish to strengthen our forces of attraction with the greater executive body.\n\nThe forecast this morning told me there was a 100% chance of rain; will there also be a 100% chance of YOU voting for Rain?`,
                instagram: '@rain4physrep',
            },
        ],
    },
    {
        position: 'Cognitive Systems Representative',
        candidates: [
            {
                name: 'Serafina Sunario',
                position: 'Cognitive Systems Representative',
                imagePath: '/assets/elections-2026/candidate-images/serafina-sunario.png',
                imagePosition: 'top',
                blurb: `I’m Serafina Sunario, a third-year Cognitive Systems student, and I’m thrilled to run as your Departmental Representative! COGS has connected me with some of the most passionate minds, and despite our diverse interests, we always come back to one community. The program has given me so much, and I want to give back by making sure my peers feel heard, supported, and empowered to succeed. As our program continues to grow, I want to strengthen our community, advocate for opportunities that reflect our unique passions, and help you make the most of your time in COGS. I’m keen to learn about your personal experience and bring your voice forward!`,
            },
        ],
    },
    {
        position: 'Neuroscience Departmental Representative',
        candidates: [
            {
                name: 'Maya Ong',
                position: 'Neuroscience Departmental Representative',
                imagePath: '/assets/elections-2026/candidate-images/maya-ong.jpg',
                blurb: `Hi UBC Science! I’m Maya, a second-year Neuroscience student, and I am excited to be running for your next Neuroscience Departmental Representative. Over the past year, I have had the opportunity to be a part of the SUS First Year Committee, gaining hands-on experience advocating for Science students and helping create a connected and welcoming Science community.Through my experience in SUS, I’ve learned how important it is for students to have representatives who listen to their concerns and bring their ideas forward. If elected, I aim to ensure that Neuroscience students have a strong voice within SUS, that their perspectives are heard, and that their experiences are valued. I also hope to offer a space where our community feels comfortable reaching out with their ideas or feedback, and are confident that they are represented at SUS Council meetings. I am passionate about advocating for our voices and would love the opportunity to help Neuroscience students feel seen and supported within SUS. I look forward to connecting with you and representing our department. If you have any questions, feel free to reach out @votemayaong!`,
                instagram: '@votemayaong',
                email: 'mayaong@student.ubc.ca',
            },
        ],
    },
]
