import styles from './budget.module.css'
import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import GlassButton from '@/components/ui/GlassButton/GlassButton'
import BlueButton from '@/components/ui/BlueButton/BlueButton'
import CollapsibleBox from '@/components/ui/CollapsibleBox/CollapsibleBox'

export default function Budget () {
    const glassButtonLinks = [
        {
            name: "Budget Overview '24/'25",
            link: "https://drive.google.com/file/d/1qGn0VRMykNaHZi2ISfwJfx_bftQr3OXN/view"
        }, 
        {
            name: "Semi-annual Budget Changes '24/'25",
            link: "https://drive.google.com/file/d/1m9kDYcPFfXetmu2rkol_H2BWtLix0PcY/view"
        }, 
        {
            name: "Budget Presentation '24/'25",
            link: "https://drive.google.com/drive/folders/1SJYSaMw0CyQRvq2aU-vOFAesdk3cdaW8"
        },
        {
            name: "Operational Surplus Request '24/'25",
            link: "https://drive.google.com/file/d/1gL7NNiNntsW-ks-ul1FB9QNSRknCPuhC/view"
        }, 
        {
            name: "Semi-annual Spending Summary '24/'25",
            link: "https://drive.google.com/file/d/1qGn0VRMykNaHZi2ISfwJfx_bftQr3OXN/view"
        }, 
        {
            name: "AGM Budget Updates '24/'25",
            link: "https://drive.google.com/file/d/1XYdHZ77qgEBapMH3RTNnyPMc75X-TVE_/view"
        }, 
    ]

    const faqSections = [
        {
            title: 'General Application Questions',
            questions: [
                {
                    question: 'Can I apply for more than one grant or subsidy?',
                    answer: (
                        <>
                            <p>Yes, you can apply for multiple different grants and/or subsidies, as long as you meet the eligibility criteria for each and it is for the same academic year.</p>
                            <p><strong>Note:</strong> You cannot apply to the same grant twice in an academic year.</p>
                        </>
                    )
                },
                {
                    question: 'Can I apply multiple times for the same subsidy?',
                    answer: <p>No, only one application will be adjudicated for each grant and subsidy.</p>
                },
                {
                    question: 'Can non-science clubs apply?',
                    answer: <p>No, funding is intended for Science students and SUS affiliated clubs only.</p>
                },
                {
                    question: 'Does funding we get need to all be used within the same academic year?',
                    answer: <p>No. Although applications are evaluated based on initiatives that take place within the academic year they are submitted, you are welcome to use leftover funds in the next academic year.</p>
                },
                {
                    question: 'What is the difference between an invoice and a receipt?',
                    answer: (
                        <>
                            <p>An invoice is a document issued by a vendor before payment that lists the balance due, whereas a receipt is issued after payment to confirm the transaction is complete.</p>
                            <p>While an invoice alone is typically insufficient for reimbursement, you can provide an invoice paired with a bank statement to prove that the funds were actually transferred. Otherwise, receipts are preferred for all subsidy applications.</p>
                            <p>
                                Here is an example of an invoice:{' '}
                                <a href='https://www.sage.com/en-ca/blog/wp-content/uploads/sites/12/2025/02/Example-of-an-invoice-2.jpg' target='_blank' rel='noopener noreferrer'>
                                    View invoice example
                                </a>
                            </p>
                        </>
                    )
                },
                {
                    question: 'Will my application get automatically rejected if I did not provide all the required documents?',
                    answer: <p>No, but your application will be put on hold while our team contacts you for clarification. This will delay your decision and funding timeline, so we highly recommend double-checking that all documents are attached before submitting.</p>
                }
            ]
        },
        {
            title: 'Administrative',
            questions: [
                {
                    question: 'Where can I find my club’s account code?',
                    answer: <p>You can find it through your club’s AMS treasurer account.</p>
                },
                {
                    question: 'What is the expected timeline for my application?',
                    answer: (
                        <>
                            <p><strong>Subsidies:</strong> It may take up to 6 weeks to receive your funding decision. Please also note that AMS processing time can take up to 2 weeks for you to receive an e-transfer email.</p>
                            <p><strong>Grants:</strong> It may take up to 6 weeks to receive your funding decision.</p>
                        </>
                    )
                },
                {
                    question: 'Where can I find my enrollment letter?',
                    answer: <p>You can find your enrollment letter in the Workday Academic section. From there, navigate to the UBC Official Documents section to download a Confirmation of Enrolment Letter.</p>
                },
                {
                    question: 'Who can I contact if I have questions about the application process or e-transfer password?',
                    answer: (
                        <p>
                            You can contact us at{' '}
                            <a href='mailto:avp.finance@sus.ubc.ca'>avp.finance@sus.ubc.ca</a>{' '}
                            and{' '}
                            <a href='mailto:vpfinance@sus.ubc.ca'>vpfinance@sus.ubc.ca</a>.
                        </p>
                    )
                }
            ]
        },
        {
            title: 'Grants and Subsidies Related Questions',
            questions: [
                {
                    question: 'Can I apply for a course material subsidy for non-science courses?',
                    answer: <p>Yes, you can apply for the course material subsidy for non-science courses as long as you meet the eligibility criteria outlined in the subsidy package.</p>
                }
            ]
        },
        {
            title: 'Specific Grant Questions',
            questions: [
                {
                    question: 'Club Operations Grant: Are only Science clubs eligible for the grant?',
                    answer: <p>Yes, funding is restricted to SUS affiliated clubs.</p>
                },
                {
                    question: 'Club Operations Grant: Can the club apply for both Club Operations Grant and Special Projects Grant?',
                    answer: <p>Yes. The club can apply for both grants once each per academic year. The Special Projects Grant is intended to facilitate new events/projects or new additions to annual or existing activities that benefit a sizable portion of the science student body.</p>
                },
                {
                    question: 'Student Initiative Grant: Can I apply if my project is already part of a SUS club?',
                    answer: <p>No. This grant is designed for projects, activities, and events that are not affiliated with existing SUS clubs. Its goal is to support independent student initiatives or help launch new clubs that address unmet needs in the science student community.</p>
                },
                {
                    question: 'Student Initiative Grant: How much funding can I receive for a personal research project?',
                    answer: <p>The grant can cover a maximum of 50% of relevant project fees, with a total cap of $250. For example, if your research materials cost $600, you would be eligible for the full $250. If your materials cost $400, you would be eligible for $200.</p>
                },
                {
                    question: 'Student Initiative Grant: What does demonstrable service mean in my application?',
                    answer: <p>Your project should clearly show how it benefits current science students, such as by providing a new resource, hosting a specialized workshop, or creating a networking event. Be prepared to explain how your initiative fills a gap not currently addressed by other campus organizations.</p>
                },
                {
                    question: 'EDI Grant: What types of initiatives are eligible?',
                    answer: <p>The EDI Grant supports initiatives that promote equity, diversity, and inclusion within the science student community. This can include workshops, speaker events, community-building activities, or projects that reduce barriers and improve accessibility for underrepresented groups.</p>
                },
                {
                    question: 'EDI Grant: Do I need to collaborate with specific groups or communities to apply?',
                    answer: <p>Collaboration is not strictly required, but it is strongly encouraged. Partnering with relevant student groups or communities can strengthen your application by demonstrating meaningful engagement and helping ensure your initiative is inclusive, respectful, and impactful.</p>
                },
                {
                    question: 'EDI Grant: How will my application be evaluated?',
                    answer: <p>Applications are assessed based on potential impact, alignment with EDI principles, feasibility, and clarity of goals. Strong applications clearly outline how the initiative supports underrepresented groups, addresses specific needs, and contributes to a more inclusive science community.</p>
                },
                {
                    question: 'Special Projects Grant: How can we demonstrate that our project benefits a sizable portion of science students?',
                    answer: <p>You can estimate project reach/attendance and explain accessibility and outreach efforts. Refer to the rubric for more detailed scoring criteria.</p>
                },
                {
                    question: 'Special Projects Grant: Can collaborative projects between clubs apply?',
                    answer: <p>Yes. Successful applications should describe project reach and impact, with clear roles and budget responsibilities for the applying SUS club. You may not apply to the same grant twice in an academic year.</p>
                },
                {
                    question: 'Special Projects Grant: Can we apply for a repeated project that is not our annual flagship event?',
                    answer: <p>Repeated events must demonstrate clear added value compared to previous iterations. Meaningful changes can include expanding project scale/reach, introducing new components, incorporating feedback from past projects, or improving accessibility and engagement for the science student body.</p>
                },
                {
                    question: 'Professional Development Grant: What type of events are eligible?',
                    answer: <p>Events that support and advance professional development, including relevant conferences, seminars, networking opportunities, and associated costs.</p>
                },
                {
                    question: 'Professional Development Grant: Can we apply for career-path exam fees (MCAT, CFA, etc.)?',
                    answer: <p>No. This grant cannot be used to cover certification exam fees such as MCAT or CFA. It is intended for professional development events like conferences, seminars, and networking opportunities.</p>
                },
                {
                    question: 'Professional Development Grant: What is the most important thing to include to improve approval chances?',
                    answer: <p>Clearly explain how the event directly supports your career goals and professional development. Applications are scored on demonstrated relevance and impact, so specific connections to your future plans can significantly improve your chances.</p>
                }
            ]
        }
    ]

    return (
        <div className = {styles.budgetPage}>
            <BannerHeader className={styles.headerBanner}>
                <h1>Budget</h1>
            </BannerHeader>

            <section className={styles.body}>
                <div className={styles.textContainer}>
                    <div className={styles.spacer}></div>
                    <h1>Budget Spreadsheets</h1>
                    <p>The Science Undergraduate Society operates a $275k+ budget and is governed by policies evoked by the AMS and the Science Student body. 
                        The following document outline how the student fees are used.</p>
                        <div className= {styles.buttonsContainer}>
                            <BlueButton className = {styles.boldButton} href='https://docs.google.com/spreadsheets/d/1wG0j87hcq3qMozuOmajBFcDe5VX3q59m-PKoudzG2Gg/edit?gid=233773177#gid=233773177'>&apos;24/&apos;25 Budget</BlueButton>
                            <BlueButton className = {styles.boldButton} href='https://docs.google.com/spreadsheets/d/1mTV5qEMztb5FDoOYDqMI97Zs_CXli-7742ceRT7fyuI/edit?gid=974909021#gid=974909021'>Itemized Spending Spreadsheet &apos;24/&apos;25</BlueButton>
                        </div>
                </div>
                
                
            </section>

            <BannerSection className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1>Budget Presentations</h1>
                    <p>Below are links to all SUS Budget presentations made during council throughout the year.</p>
                    <div className={styles.buttonsContainer}>
                        {glassButtonLinks.map((l) => (
                            <GlassButton key={l.name} className={styles.boldButton} href={l.link}>
                                {l.name}
                            </GlassButton>
                        ))}
                    </div>
                </div>
                
            </BannerSection>

            <section className={styles.bottomSection}>
                <div className={styles.textContainer}>
                    <h1>SUS Budget Feedback Form</h1>
                    <p>Do you have any feedback or suggestions to the SUS budget? Please let us know using this form.</p>
                    <BlueButton className = {styles.emphasizedButton} href='https://docs.google.com/forms/d/e/1FAIpQLSdLZpV7tTbXW0JcSv09VkLwIb6xmUTmUwn75gfPUdnYg5w4Ig/viewform'>
                        Budget Feedback Form
                    </BlueButton>
                </div>      

            </section>

            <section className={styles.faqSection}>
                <div className={styles.textContainer}>
                    <h1>FAQ</h1>

                    <div className={styles.faqGroups}>
                        {faqSections.map((section) => (
                            <div key={section.title} className={styles.faqGroup}>
                                <h2>{section.title}</h2>
                                <div className={styles.faqItems}>
                                    {section.questions.map((item) => (
                                        <CollapsibleBox key={item.question} className={styles.faqItem} titleElement={<h3>{item.question}</h3>}>
                                            <div className={styles.faqAnswer}>
                                                {item.answer}
                                            </div>
                                        </CollapsibleBox>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
        
    )
}