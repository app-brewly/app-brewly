import { useNavigate } from "react-router-dom";
import Modal from "../../_ui/Modal/Modal";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import styles from "./CodeVerification.module.css";
import CodeBox from "../../_ui/CodeBox/CodeBox";
import Button from "../../_ui/Button/Button";

function CodeVerification() {
    const navigate = useNavigate();
    const handleVerificationCode = () => {
        navigate("/Feed");
    };
    return (
        <div className={styles.page_container}>
            <div className={styles.content}>
                <div className={styles.page_header}>
                    <StatusBar />
                </div>
                <h1 className={styles.title}>
                    Enter the <br />
                    verification code
                </h1>
                <p className={styles.explainer_header}>
                    Please insert the code sent to your email.
                </p>
                <CodeBox />
                <Button
                    value='Enter'
                    type='primary'
                    onClick={handleVerificationCode}
                />
                <p className={styles.explainer_info}>Resend</p>
                <p className={styles.explainer_info}>Change Email</p>
            </div>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Mauris suscipit nunc est, in venenatis ipsum vulputate et.
            </p>
        </div>
    );
}

export default CodeVerification;
