import BannerHeader from '@/components/ui/BannerHeader/BannerHeader'
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import CollapsibleBox from '@/components/ui/CollapsibleBox/CollapsibleBox'
import styles from './eventBookings.module.css'
import Image from 'next/image'

export default function EventBookings() {
    return (
        <div className={styles.container}>
            <BannerHeader>
                <div className={styles["hero-left"]}>
                    <div className={styles["hero-heading"]}>
                        <h1 className={styles["hero-title"]}>Event Bookings</h1>
                        <div className={styles["location-row"]}>
                            <Image
                                src="/assets/icons/location.png"
                                alt=""
                                width={32}
                                height={32}
                                className={styles["location-icon"]}
                                priority
                            />
                            <span className={styles["location-name"]}>Abdul Ladha Science Student Centre (ALSSC)</span>
                        </div>
                    </div>
                </div>
            </BannerHeader>

            {/* Introduction Section */}
            <section className={styles.intro}>
                <FrostedCard className={styles.introCard}>
                    <p>
                        The Abdul Ladha Science Student Centre (ALSSC) acts as a social space to encourage both
                        informal and formal academic, club, and student discussions. It is available to all students at UBC.
                        Frequently Asked Questions: search for answers to the most common questions about event
                        bookings at the ALSSC.
                    </p>
                    <p>
                        For any outstanding questions, please contact <a href="mailto:bmanager.bookings@ubcsus.ca">bmanager.bookings@ubcsus.ca</a>
                    </p>
                </FrostedCard>
            </section>

            {/* Building Availability Calendar */}
            <section className={styles.calendar}>
                <h2>Building Availability Calendar</h2>
                <div className={styles.calendarPlaceholder}>
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?src=bmanager.bookings%40sus.ubc.ca&ctz=America%2FVancouver"
                        width="100%"
                        height="800"
                    ></iframe>
                </div>
            </section>

            {/* The Booking Process */}
            <section className={styles.bookingProcess}>
                <h2>The Booking Process</h2>

                <div className={styles.processSection}>
                    <h3>Before Submitting a Booking Request</h3>
                    <ul>
                        <li>Determine if the ALSSC is a suitable venue for your event. Visit the <a href="/science-student-centre/info">About the ALSSC page</a> for room building amenities and floor plans.</li>
                        <li>Check building availability calendar above to ensure the date and time you would like to book is available.</li>
                        <li>Carefully read the <strong>Booking Policies and Deadlines</strong>, including booking categories and fees associated with booking.</li>
                    </ul>
                </div>

                <div className={styles.processSection}>
                    <h3>Submitting a Booking Request:</h3>
                    <ul>
                        <li>Fill out the <a href="#">booking request Jotform</a> below.</li>
                        <li>Ensure your request is being submitted within the applicable deadlines (see below).</li>
                        <li>Be sure to provide as much detail for your event as possible and ensure any information is managed or relevant to your organization. Ensure you are requesting enough time to properly set up and take down the materials needed for your event.</li>
                    </ul>
                </div>

                <div className={styles.processSection}>
                    <h3>Confirming a Booking Request:</h3>
                    <ul>
                        <li>The Building Manager of Bookings will review your booking request within 2-3 business days.</li>
                        <li>If your booking request is accepted, forms will be provided via email to be filled out an INVOICE for the rental fees (refer to Booking Fees section below) and a RENTAL AGREEMENT outlining responsibilities as the renter of the space.</li>
                        <li>Sign and return all forms by the indicated deadlines to confirm your booking</li>
                    </ul>
                </div>

                <p className={styles.note}>
                    <strong>Note:</strong> Please check the Building Availability Calendar and Booking Deadlines before submitting the booking request to ensure your booking request is successful.
                </p>

                <p className={styles.warningNote}>
                    Due to the high volume of booking requests that we receive, you may not receive a response if you request a date that is unavailable or if the booking request is submitted after the stated deadlines.
                </p>
            </section>

            {/* Booking Information */}
            <section className={styles.bookingInfo}>
                <h2>Booking Information</h2>

                <div className={styles.collapsibles}>
                    <CollapsibleBox titleElement={<h3>Booking Policy & Terms</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p><strong>Setup/Takedown:</strong> The booked time slot includes setup and takedown time. Setup/takedown are the responsibility of the booking organization.</p>
                            <p><strong>Printing Services:</strong> SUS does not offer printing services for any events in the ALSSC. If printing is required, booking groups can use the UBC PayForPrint system – the printer in the ALSSC is attached to the system.</p>
                            <p><strong>Equipment Rentals:</strong> Equipment will not be rented out to events outside of the ALSSC. All building furniture or equipment are to remain within the building unless given permission from the Building Manager.</p>
                            <p><strong>Charity Events:</strong> Events hosted to fundraise for a charity will have relevant booking fees waived.</p>
                            <p><strong>Payments:</strong> Payments can be made in cash, cheque, or via AMS Journal Voucher. SUS does not accept credit/debit card or e-transfer payments.</p>
                            <p><strong>Damage Deposit:</strong> The Balance Due (i.e. booking fees) is exclusive of the Damage Deposit. The Damage Deposit (paid separate) must be received by the Building Manager at least two weeks prior to the event, unless stated otherwise by the Building Manager. This Deposit includes, but is not limited to cancellation, damages, and other penalty charges. The Deposit is refunded only when all conditions are met.</p>
                            <p><strong>Payment Due Dates:</strong> Payment is due by the deadlines as indicated in the invoice, unless stated otherwise by the Building Manager. In the case that the Balance Due is not paid on time, the Damage Deposit will not be returned and will be considered a portion of the payment of the fees. No additional bookings can be made if fees are still outstanding. The Building Management Commission (BMC) reserves the right to cancel future events if outstanding fees are unpaid.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Deadlines</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Deadline information will be added here.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Booking Group Categories</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p><strong>SUS Groups:</strong> internal groups in SUS, such as the Health & Wellness Working Group or the First Year Council.</p>
                            <p><strong>SUS Clubs:</strong> departmental and non-departmental clubs supported by SUS. For a complete list of SUS Clubs, see here.</p>
                            <p><strong>Science Organizations and Science Clubs:</strong> groups which are not supported directly by SUS, but are of interest to students in the Faculty of Science (including, but not limited to SCI Team, Science Peer Academic Coaches, UBC Cancer Association). At least 60% of students contributing to the planning and execution of the event must be in the Faculty of Science in order to qualify for this rate.</p>
                            <p><strong>UBC Organizations:</strong> groups who either have an address on the University Endowment Lands, or are affiliated in some way with UBC (including, but not limited to Regent College, UBC VP Students&apos; Office, groups from other UBC campuses).</p>
                            <p><strong>External Organizations:</strong> organizations that are unaffiliated with UBC.</p>
                            <p>The Building Management Commission (BMC) reserves the right to verification from the respective parties.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Information for Events with Alcohol</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>
                                If you are considering hosting an event at the ALSSC that serves alcohol, here are a few important details you should consider. This list is not definitive – it is just a few key details that will help you decide whether alcohol is appropriate for your event:
                            </p>
                            <ul>
                                <li>Booking Requests for Events with Alcohol must be submitted at least 60 days before the event.</li>
                                <li>The maximum capacity of ALSSC is 133 people, including event organizers.</li>
                                <li>You must use a ticket system with tickets sold before the event. Tickets cannot be available at the event, and non-ticketholders cannot enter the event venue.</li>
                                <li>Minors cannot be present at Events With Alcohol.</li>
                                <li>The Building Manager may require clubs to hire professional security for the duration of the event, if deemed necessary.</li>
                                <li>You cannot advertise the availability of alcohol at an event, so terms like &quot;Beer Garden&quot; or &quot;Wine and Cheese&quot; are prohibited.</li>
                                <li>There are multiple deliverables required for approval of alcohol service. You should plan to put in consistent effort towards planning the event starting as soon as your Booking Request is submitted.</li>
                                <li>At least one event organizer must complete the Wellness Centre & SVPRO&apos;s &quot;Safer Partying Workshop,&quot; which is offered in-person. You should make sure the course is being offered before your event.</li>
                                <li>The maximum price you can charge for alcohol is mandated by the provincial government – you should not expect to make a profit on alcohol sales.</li>
                                <li>The Faculty of Science requires that a system is in place to ensure drinks are provided at a rate not exceeding one standard drink per person per hour.</li>
                                <li>Multiple costs are associated with approval of alcohol service. You will need to cover these costs as part of your event budget. Some of the costs include:
                                    <ul>
                                        <li>Venue booking fees</li>
                                        <li>Special Event Server exam fee (required for each event organizer)</li>
                                        <li>Special Event Permit application fee</li>
                                        <li>Purchasing alcohol</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Equipment for Events</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>In addition to the equipment already located in the ALSSC, booking groups can request access to the following items for event bookings:</p>
                            <ul>
                                <li>AV System</li>
                                <li>Portable Speakers – best used for parties or bookings on the Front Porch. The AV system includes its own speakers.</li>
                                <li>Additional Tables (4) + Chairs (80+)</li>
                                <li>Coat Racks</li>
                                <li>Utility Cart</li>
                                <li>Canopy Tents</li>
                                <li>Crowd Control Ropes</li>
                                <li>Digital Signage – displayed on TV in the ALSSC foyer before/during an event</li>
                                <li>SUS Photographer present at the event</li>
                            </ul>
                        </div>
                    </CollapsibleBox>
                </div>
            </section>

            {/* Fees */}
            <section className={styles.fees}>
                <h2>Fees</h2>

                <div className={styles.feeSection}>
                    <h3>Booking Fees & Damage Deposit</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.feeTable}>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Main Floor (2F)</th>
                                    <th>Mezzanine (3F)</th>
                                    <th>Main Floor & Mezzanine (2F/3F)</th>
                                    <th>Full Building (1F/2F/3F)</th>
                                    <th>Front Porch (Area outside of the ALSSC)</th>
                                    <th>Damage Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SUS Internal</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free (2)</td>
                                </tr>
                                <tr>
                                    <td>SUS Clubs</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free (2)</td>
                                </tr>
                                <tr>
                                    <td>Science Clubs/Organizations</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <td>UBC Organizations</td>
                                    <td>$50/hr</td>
                                    <td>$30/hr</td>
                                    <td>$70/hr</td>
                                    <td>$80/hr</td>
                                    <td>$30/hr</td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <td>External Organizations</td>
                                    <td>$60/hr</td>
                                    <td>$40/hr</td>
                                    <td>$90/hr</td>
                                    <td>$100/hr</td>
                                    <td>$40/hr</td>
                                    <td>$200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.footnote}>(1): All front porch (Area outside of the ALSSC) bookings include access to tables and a tent.</p>
                    <p className={styles.footnote}>(2): Any repairs for damages caused during bookings by these groups will be funded through a budget deduction from the offending group</p>
                    <p className={styles.note}>If you are unsure which Category is applicable for your club/organization, see the booking group categories above for full descriptions.</p>
                </div>

                <div className={styles.feeSection}>
                    <h3>Ancillary Fees</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.feeTable}>
                            <thead>
                                <tr>
                                    <th>Applicable Categories</th>
                                    <th>Description</th>
                                    <th>Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>UBC Organizations, External Organizations</td>
                                    <td>Hours After 8pm on Weekdays</td>
                                    <td>$25/hr</td>
                                </tr>
                                <tr>
                                    <td>UBC Organizations, External Organizations</td>
                                    <td>Weekend Hours</td>
                                    <td>$35/hr</td>
                                </tr>
                                <tr>
                                    <td>UBC Organizations, External Organizations</td>
                                    <td>Overtime Hours (3)</td>
                                    <td>$25/hr</td>
                                </tr>
                                <tr>
                                    <td>UBC Organizations, External Organizations</td>
                                    <td>Use of Audio-Visual (AV) System</td>
                                    <td>$30/event</td>
                                </tr>
                                <tr>
                                    <td>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</td>
                                    <td>Cleaning Fee for Dances/Parties/Large Events (4)</td>
                                    <td>$100/hr</td>
                                </tr>
                                <tr>
                                    <td>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</td>
                                    <td>Security Fee for Dances/Parties/Large Events (4)</td>
                                    <td>$100/hr</td>
                                </tr>
                                <tr>
                                    <td>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</td>
                                    <td>Service Fee for Events with Alcohol</td>
                                    <td>$200/event</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.footnote}>(3) Overtime eligibility is at the discretion of the Building Supervisor for the event. Payment is applied at the beginning of each hour that a booking group occupies the ALSSC after the designated end time of their booking.</p>
                    <p className={styles.footnote}>(4): The Cleaning Fee and Security Fee are applied at the discretion of the Building Manager of Bookings. These fees are not applicable for Events with Alcohol – the Service Fee for Events with Alcohol is automatically applied to such events.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faq}>
                <h2>Frequently Asked Questions</h2>

                <div className={styles.collapsibles}>
                    <CollapsibleBox titleElement={<h3>What is the maximum capacity for events?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Events can have no more than 133 attendees, including event organizers.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>How do I know if the date I want is available?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Please refer to the Building Availability Calendar above.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Do you have to be a UBC student to book the building?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>The ALSSC is available for booking by anyone. However, the building is financed by all science students at UBC, so science organizations will receive a discount. See the Fees above for details.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Is food allowed in the building?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Yes, but please make sure to clean up after the event.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Is external catering allowed?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Yes, but please make sure to clean up after the event. You will need to provide the contact information of your caterer in the booking request form.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Is alcohol allowed in the building?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>Yes, but further approval is required. Events that serve alcohol must submit a booking request by the deadlines indicated above.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Is security required?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>For any Events With Alcohol, SUS will provide 2+ security guards. At the discretion of the Building Manager of Bookings, security may also be required for dances/parties. In such cases, a Security Fee may apply. See the Fees above for more details.</p>
                        </div>
                    </CollapsibleBox>

                    <CollapsibleBox titleElement={<h3>Will there be someone to help us with setup/takedown?</h3>}>
                        <div className={styles.collapsibleContent}>
                            <p>There will be a Building Supervisor present during the duration of your booking should you have any questions, concerns, or technical issues during your event. They will help set up the AV system, additional seating, and any other equipment provided by SUS. All other setup/takedown (including rearranging furniture, adding decorations, and sweeping up after the event) are the responsibility of the booking group.</p>
                        </div>
                    </CollapsibleBox>
                </div>
            </section>

            {/* Submit Booking Request */}
            <section className={styles.submitBooking}>
                <h2>Submit a Booking Request</h2>
                <p>
                    For term rentals, see <a href="#">Booking Information Page</a> and <a href="#">Frequently Asked Questions</a>.
                </p>
                <div className={styles.jotformPlaceholder}>
                    <iframe 
                        id="JotFormIFrame-231152118073041"
                        title="Abdul Ladha Event Bookings"
                        src="https://form.jotform.com/231152118073041"
                        className={styles.jotformIframe}
                    ></iframe>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
                <h2>Contact our ALSSC Team</h2>
                <p>For Booking Inquiries: <a href="mailto:lmanager.bookings@ubcsus.ca">lmanager.bookings@ubcsus.ca</a></p>
                <p>For Operations & Maintenance: <a href="mailto:lmanager.operations@ubcsus.ca">lmanager.operations@ubcsus.ca</a></p>
            </section>
        </div>
    )
}