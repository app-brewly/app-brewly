import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import logoverticalbg from "../../assets/logoverticalbg.svg";
import Terms from "../../_ui/Terms/Terms";

import StatusBar from "../../_ui/StatusBar/StatusBar";

function LogIn() {
    const navigate = useNavigate();
    const handlelogIn = () => {
        navigate("/CodeVerification");
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
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p className={styles.explainer_info}>
                        Mauris suscipit nunc est, in venenatis ipsum vulputate
                        et.
                    </p>
                </div>

                <div className={styles.input_container}>
                    <InputBox
                        type='regular'
                        placeholder='Email'
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
                    linkDirectory={"/"}
                    suffix={
                        "and to the collection of your personal information."
                    }
                />
            </div>
        </div>
    );
}

export default LogIn;
