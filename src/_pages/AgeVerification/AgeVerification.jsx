import { useNavigate } from "react-router-dom";
import styles from "./AgeVerification.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";

import StatusBar from "../../_ui/StatusBar/StatusBar";

function AgeVerification() {
    const navigate = useNavigate();
    const handleAgeVerify = () => {
        navigate("/LogIn");
    };
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
            </div>
            <img src='/Image_Placeholder_.png'></img>
            <div className={styles.info_container}>
                <h1 className={styles.title}>
                    Lets make sure
                    <br /> that you can <br /> drink legally
                </h1>
                <div className={styles.input_container}>
                    <InputBox
                        type='label'
                        placeholder='Birthday'
                        value='name'
                    />
                    <InputBox
                        type='label'
                        placeholder='Country'
                        value='Select your country'
                    />
                </div>
                <Button
                    value='Verify'
                    onClick={handleAgeVerify}
                />
            </div>
        </div>
    );
}

export default AgeVerification;
