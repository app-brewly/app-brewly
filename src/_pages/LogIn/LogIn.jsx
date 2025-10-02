import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";

import StatusBar from "../../_ui/StatusBar/StatusBar";

function LogIn() {
    const navigate = useNavigate();
    const handlelogIn = () => {
        navigate("/LogIn");
    };
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
            </div>
            <img src='/Image_Placeholder_.png'></img>
            <div className={styles.info_container}>
                <h1 className={styles.title}>Sign Up or Log In</h1>
                <div className={styles.explainer_text_container}>
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
                        placeholder='Birthday'
                        value='email'
                    />
                </div>
                <Button
                    value='Login'
                    onClick={handlelogIn}
                />
            </div>
        </div>
    );
}

export default LogIn;
