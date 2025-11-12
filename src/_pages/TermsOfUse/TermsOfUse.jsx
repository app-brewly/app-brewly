import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import Menu from "../../_ui/Menu/Menu";
import styles from "./TermsOfUse.module.css";

function TermsOfUse() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='arrow regular'
                    pageName='Terms of Use'
                />
            </div>

            <div className={styles.page_content}>
                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>
                        1. Acceptance of Terms
                    </h2>
                    <p className={styles.section_text}>
                        By accessing and using Brewly, you accept and agree to
                        be bound by the terms and provision of this agreement.
                        If you do not agree to abide by the above, please do not
                        use this service.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>2. Use License</h2>
                    <p className={styles.section_text}>
                        Permission is granted to temporarily download one copy
                        of the materials on Brewly's website for personal,
                        non-commercial transitory viewing only. This is the
                        grant of a license, not a transfer of title, and under
                        this license you may not:
                    </p>
                    <ul className={styles.list}>
                        <li>Modify or copy the materials</li>
                        <li>
                            Use the materials for any commercial purpose or for
                            any public display
                        </li>
                        <li>
                            Attempt to decompile or reverse engineer any
                            software contained on Brewly's website
                        </li>
                        <li>
                            Remove any copyright or other proprietary notations
                            from the materials
                        </li>
                    </ul>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>3. User Accounts</h2>
                    <p className={styles.section_text}>
                        You are responsible for maintaining the confidentiality
                        of your account and password. You agree to accept
                        responsibility for all activities that occur under your
                        account or password. You must be at least 21 years of
                        age to use this service.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>
                        4. Content and Conduct
                    </h2>
                    <p className={styles.section_text}>
                        Users are responsible for the content they post on
                        Brewly. You agree not to post any content that is
                        illegal, harmful, threatening, abusive, or violates any
                        third party's rights. Brewly reserves the right to
                        remove any content that violates these terms.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>5. Privacy Policy</h2>
                    <p className={styles.section_text}>
                        Your use of Brewly is also governed by our Privacy
                        Policy. Please review our Privacy Policy to understand
                        our practices regarding the collection and use of your
                        personal information.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>6. Disclaimer</h2>
                    <p className={styles.section_text}>
                        The materials on Brewly's website are provided on an 'as
                        is' basis. Brewly makes no warranties, expressed or
                        implied, and hereby disclaims and negates all other
                        warranties including without limitation, implied
                        warranties or conditions of merchantability, fitness for
                        a particular purpose, or non-infringement of
                        intellectual property or other violation of rights.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>7. Limitations</h2>
                    <p className={styles.section_text}>
                        In no event shall Brewly or its suppliers be liable for
                        any damages (including, without limitation, damages for
                        loss of data or profit, or due to business interruption)
                        arising out of the use or inability to use the materials
                        on Brewly's website.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>8. Revisions</h2>
                    <p className={styles.section_text}>
                        Brewly may revise these terms of service at any time
                        without notice. By using this website you are agreeing
                        to be bound by the then current version of these terms
                        of service.
                    </p>
                </div>

                <div className={styles.content_section}>
                    <h2 className={styles.section_title}>
                        9. Contact Information
                    </h2>
                    <p className={styles.section_text}>
                        If you have any questions about these Terms of Use,
                        please contact us at support@brewly.com or through our
                        Help & Support page.
                    </p>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default TermsOfUse;
