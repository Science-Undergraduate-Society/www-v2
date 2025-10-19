import { grants, subsidies } from '@/data/grantsAndSubsidies'
import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import BannerSection from '@/components/ui/BannerSection/BannerSection'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import GlassButton from '@/components/ui/GlassButton/GlassButton'
import BlueButton from '@/components/ui/BlueButton/BlueButton'
import styles from './grantsAndSubsidies.module.css'

export default function GrantsAndSubsidies() {
    return (
        <div className={styles.grantsAndSubsidies}>
            <BannerHeader>
                <h1>Internal Grants & Subsidies</h1>
            </BannerHeader>
            <section className={styles.applicationInformation}>
                <FrostedCard className={styles.applicationInformationCard}>
                    <div className={styles.header}>
                        <h1>Application Information</h1>
                        <div className={styles.status}>OPENING SOON</div>
                    </div>
                    <div className={styles.description}>
                        <p>
                            <b>Applications for 25/26 Grant and Subsidies will open in <span className={styles.deadline}>Early September 2025!</span></b>
                            <br /><br />
                            Applications for Grants & Subsidies will open on <b>September 15, 2025</b> and will be reviewed on a first-submitted, first-reviewed basis.
                            SUS will be accepting applications until <b>April 10, 2026, or until funds run out. </b>
                            Please utilize the following resources and submission link to put forth your application.
                            <br /><br />
                            To read more about the 2025/2026 available grants and subsidies, as well as to view the application form, see below and click on the name of the grant/subsidy you are interested in.
                        </p>
                    </div>
                    <div className={styles.description}>
                        <h1>TO APPLY:</h1>
                        <p>
                            Please submit your application package by emailing <a href="mailto:vpfinance@sus.ubc.ca">vpfinance@sus.ubc.ca</a> and cc-ing <a href="mailto:">avp.finance@sus.ubc.ca</a>.
                            You will receive a confirmation email upon receipt of your application.
                        </p>
                    </div>
                    <div className={styles.description}>
                        <h1>NOTE:</h1>
                        <p>
                            All grant & subsidy applications have a checklist at the bottom of the document which details the required documentation that is necessary to be considered for a given grant/subsidy.
                            Best of luck to all applicants!
                            <br /><br />
                            Best of luck to all applicants!
                        </p>
                    </div>
                </FrostedCard>
            </section>
            <BannerSection className={styles.grants}>
                <h1>Grants</h1>
                <div className={styles.grantsButtons}>
                    <GlassButton
                        href="https://drive.google.com/open?id=10IOyK3iQT9NZMmGeMr5C6I6umKnYtuP7"
                        className={styles.button}
                    >
                        Grants Information 24/25
                    </GlassButton>
                    <GlassButton
                        href="https://drive.google.com/open?id=1qJldIJrrRcPXTXhdPitiryMFsFKS34Y6"
                        className={styles.button}
                    >
                        Grants Rubric 24/25
                    </GlassButton>
                </div>
                <div className={styles.grantsList}>
                    {grants.map((grant, index) => (
                        <FrostedCard key={index} className={styles.card}>
                            <h1>{grant.title}</h1>
                            <h2>For {grant.eligibleRecipient.join(' & ')}</h2>
                            <p>{grant.description}</p>
                            <h2><a href={grant.rubric} target="_blank">Adjudication Rubric</a></h2>
                        </FrostedCard>
                    ))}
                </div>
            </BannerSection>
            <section className={styles.subsidies}>
                <h1>Subsidies</h1>
                <div className={styles.subsidiesButtons}>
                    <BlueButton
                        href='https://drive.google.com/open?id=1Wh8PZTiKSlZcphLSQyc1oEbir2ag-JuB'
                        className={styles.button}
                    >
                        Subsidies Information 24/25
                    </BlueButton>
                </div>
                <div className={styles.subsidiesList}>
                    {subsidies.map((subsidy, index) => (
                        <FrostedCard key={index} className={styles.card}>
                            <h1>{subsidy.title}</h1>
                            <h2>For {subsidy.eligibleRecipient.join(' & ')}</h2>
                            <p>{subsidy.description}</p>
                        </FrostedCard>
                    ))}
                </div>
            </section>
        </div>
    )
}