import { grants, subsidies } from '@/data/grantsAndSubsidies'
import styles from './grantsAndSubsidies.module.css'

export default function GrantsAndSubsidies() {
    return (
        <div className={styles.grantsAndSubsidies}>
            <section className={styles.header}>
                <h1>Grants & Subsidies</h1>
                <h2>$48,250 for individuals and clubs</h2>
            </section>
            <section className={styles.applicationInformation}>
                <div className={`${styles.card} ${styles.applicationInformationCard}`}>
                    <div>
                        <h1>Application Information</h1>
                        <div className={styles.closed}>CLOSED</div>
                    </div>
                    <p>
                        <b>Applications for 25/26 Grant and Subsidies will open in <span className={styles.deadline}>Early October 2025!</span></b>
                        <br /><br />
                        Applications for Grants & Subsidies will open on October 7, 2024 and will be reviewed on a first-submitted, first-reviewed basis.
                        SUS will be accepting applications until March 10, 2025, or until funds run out.
                        Please utilize the following resources and submission link to put forth your application.
                        <br /><br />
                        To read more about the 2024/2025 available grants and subsidies, as well as to view the application form, see below and click on the name of the grant/subsidy you are interested in.
                        <br /><br /><br />
                        <span className={styles.callout}>TO APPLY:</span>
                        <br /><br />
                        Please submit your application package by emailing <a href="mailto:vpfinance@sus.ubc.ca">vpfinance@sus.ubc.ca</a> and cc-ing <a href="mailto:">avp.finance@sus.ubc.ca</a>.
                        You will receive a confirmation email upon receipt of your application.
                        <br /><br /><br />
                        <span className={styles.callout}>NOTE:</span>
                        <br /><br />
                        All grant & subsidy applications have a checklist at the bottom of the document which details the required documentation that is necessary to be considered for a given grant/subsidy.
                        Best of luck to all applicants!
                        <br /><br />
                        *Applications MUST be submitted to the Qualtrics form above to be considered
                    </p>
                </div>
            </section>
            <section className={styles.grants}>
                <h1>Grants</h1>
                <div className={styles.grantsButtons}>
                    <a href="https://drive.google.com/open?id=10IOyK3iQT9NZMmGeMr5C6I6umKnYtuP7" className={styles.glassButton}>Grants Information 24/25</a>
                    <a href="https://drive.google.com/open?id=1qJldIJrrRcPXTXhdPitiryMFsFKS34Y6" className={styles.glassButton}>Grants Rubric 24/25</a>
                </div>
                <div className={styles.grantsList}>
                    {grants.map((grant, index) => (
                        <div key={index} className={styles.card}>
                            <h1>{grant.title}</h1>
                            <h2>For {grant.eligibleRecipient.join(' & ')}</h2>
                            <p>{grant.description}</p>
                            <h2><a href={grant.rubric} target="_blank">Adjudication Rubric</a></h2>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.subsidies}>
                <h1>Subsidies</h1>
                <div className={styles.subsidiesButtons}>
                    <a href="https://drive.google.com/open?id=1Wh8PZTiKSlZcphLSQyc1oEbir2ag-JuB" className={styles.blueButton}>Subsidies Information 24/25</a>
                </div>
                <div className={styles.subsidiesList}>
                    {subsidies.map((subsidy, index) => (
                        <div key={index} className={styles.card}>
                            <h1>{subsidy.title}</h1>
                            <h2>For {subsidy.eligibleRecipient.join(' & ')}</h2>
                            <p>{subsidy.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}