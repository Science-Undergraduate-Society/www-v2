import styles from './budget.module.css'
import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import GlassButton from '@/components/ui/GlassButton/GlassButton'
import BlueButton from '@/components/ui/BlueButton/BlueButton'

export default function Budget({

} : {

}) {
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
                            <BlueButton className = {styles.boldButton} href='https://docs.google.com/spreadsheets/d/1wG0j87hcq3qMozuOmajBFcDe5VX3q59m-PKoudzG2Gg/edit?gid=233773177#gid=233773177'>'24/'25 Budget</BlueButton>
                            <BlueButton className = {styles.boldButton} href='https://docs.google.com/spreadsheets/d/1mTV5qEMztb5FDoOYDqMI97Zs_CXli-7742ceRT7fyuI/edit?gid=974909021#gid=974909021'>Itemized Spending Spreadsheet '24/'25</BlueButton>
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

        </div>
        
    )
}