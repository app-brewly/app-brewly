import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import logoverticalbg from "../../assets/logoverticalbg.svg";
import Terms from "../../_ui/Terms/Terms";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import Modal from "../../_ui/Modal/Modal";

const PROFILE_STORAGE_KEY = "brewly_user_profile";

function LogIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginErrorModalOpen, setIsLoginErrorModalOpen] = useState(false);

    const handlelogIn = () => {
        const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

        if (!savedProfile) {
            // no account saved at all
            setIsLoginErrorModalOpen(true);
            return;
        }

        try {
            const parsed = JSON.parse(savedProfile);
            const storedEmail = (parsed.email || "").trim().toLowerCase();
            const storedPassword = parsed.password || "";

            const inputEmail = email.trim().toLowerCase();
            const inputPassword = password;

            if (
                storedEmail &&
                storedPassword &&
                storedEmail === inputEmail &&
                storedPassword === inputPassword
            ) {
                // credentials match – go to main app feed (or your Home route)
                navigate("/Feed");
            } else {
                setIsLoginErrorModalOpen(true);
            }
        } catch (err) {
            console.error("Error reading stored profile:", err);
            setIsLoginErrorModalOpen(true);
        }
    };

    const handleTermsofUse = () => {
        navigate("/TermsOfUse");
    };

    const handleCloseLoginErrorModal = () => {
        setIsLoginErrorModalOpen(false);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
            </div>
            <img
                src={logoverticalbg}
                alt='Brewly vertical logo with dark green background'
            />

            <div className={styles.info_container}>
                <div className={styles.explainer_text_container}>
                    <h1 className={styles.title}>Sign Up or Log In</h1>
                    <p className={styles.explainer_header}>
                        Create an account or sign in to continue. It only takes
                        a moment.
                    </p>
                </div>

                <div className={styles.input_container}>
                    <InputBox
                        type='regular'
                        placeholder='Enter email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox
                        type='regular'
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button
                    value='Login'
                    type='primary'
                    onClick={handlelogIn}
                />
            </div>
            <div className={styles.terms}>
                <Terms
                    prefix={"By signing up to Brewly, you agree to our "}
                    linkText={"terms of use"}
                    onClick={handleTermsofUse}
                    suffix={
                        "and to the collection of your personal information."
                    }
                />
            </div>

            {isLoginErrorModalOpen && (
                <Modal
                    header='Login error'
                    onClose={handleCloseLoginErrorModal}
                >
                    <p>email or password was not found</p>
                    <Button
                        value='Okay'
                        type='primary'
                        onClick={handleCloseLoginErrorModal}
                    />
                </Modal>
            )}
        </div>
    );
}

export default LogIn;
