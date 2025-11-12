import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import Menu from "../../_ui/Menu/Menu";
import styles from "./HelpSupport.module.css";

function HelpSupport() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='arrow regular'
                    pageName='Help & Support'
                />
            </div>

            <div className={styles.page_content}>
                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>
                        Frequently Asked Questions
                    </h2>

                    <div className={styles.faq_item}>
                        <h3 className={styles.faq_question}>
                            How do I create a collection?
                        </h3>
                        <p className={styles.faq_answer}>
                            To create a new collection, go to your Profile page
                            and click on "All Collections". Then tap the "+"
                            button to create a new collection. Give it a name
                            and start adding your favorite beers!
                        </p>
                    </div>

                    <div className={styles.faq_item}>
                        <h3 className={styles.faq_question}>
                            How can I add beers to my wishlist?
                        </h3>
                        <p className={styles.faq_answer}>
                            When browsing beers in the Feed, tap the heart icon
                            on any beer card to add it to your wishlist. You can
                            view all your wishlist items in the Profile section.
                        </p>
                    </div>

                    <div className={styles.faq_item}>
                        <h3 className={styles.faq_question}>
                            Can I edit my profile information?
                        </h3>
                        <p className={styles.faq_answer}>
                            Yes! Go to Settings and select "Profile Information"
                            to edit your name, username, location, email, and
                            phone number. Don't forget to save your changes!
                        </p>
                    </div>

                    <div className={styles.faq_item}>
                        <h3 className={styles.faq_question}>
                            How do I search for specific beers?
                        </h3>
                        <p className={styles.faq_answer}>
                            Use the search icon in the navigation bar to access
                            the search page. You can search by beer name,
                            brewery, or style. The search will show you matching
                            results instantly.
                        </p>
                    </div>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>Contact Us</h2>
                    <p className={styles.section_text}>
                        Need more help? We're here for you! Reach out to our
                        support team through any of the following methods:
                    </p>
                    <div className={styles.contact_info}>
                        <p className={styles.contact_item}>
                            <strong>Email:</strong> support@brewly.com
                        </p>
                        <p className={styles.contact_item}>
                            <strong>Response Time:</strong> We typically respond
                            within 24-48 hours
                        </p>
                        <p className={styles.contact_item}>
                            <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM
                            PST
                        </p>
                    </div>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>Report an Issue</h2>
                    <p className={styles.section_text}>
                        If you encounter any bugs, errors, or issues while using
                        Brewly, please report them to us. Include as much detail
                        as possible, including:
                    </p>
                    <ul className={styles.list}>
                        <li>What you were trying to do</li>
                        <li>What happened instead</li>
                        <li>Your device and app version</li>
                        <li>Screenshots if possible</li>
                    </ul>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>Feature Requests</h2>
                    <p className={styles.section_text}>
                        Have an idea for a new feature? We'd love to hear it!
                        Send us your suggestions at feedback@brewly.com. Our
                        team reviews all suggestions and considers them for
                        future updates.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>Account Help</h2>
                    <p className={styles.section_text}>
                        Having trouble with your account? You can reset your
                        password, update your email, or manage your account
                        settings from the Settings page. If you need to delete
                        your account, you can do so from the Edit Profile page.
                    </p>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default HelpSupport;
