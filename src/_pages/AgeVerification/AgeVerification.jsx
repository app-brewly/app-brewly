import { useNavigate } from "react-router-dom";
import styles from "./AgeVerification.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import DropdownMenu from "../../_ui/DropdownMenu/DropDownMenu";
import illustration6 from "../../assets/illustration6.svg";

import StatusBar from "../../_ui/StatusBar/StatusBar";

function AgeVerification() {
    const navigate = useNavigate();
    const handleAgeVerify = () => {
        navigate("/LogIn");
    };
    const countries = [
        { value: "ca", label: "Canada ", flag: "🇨🇦" },
        { value: "br", label: "Brazil ", flag: "🇧🇷" },
        { value: "uk", label: "United Kingdom ", flag: "🇬🇧" },
        { value: "de", label: "Germany ", flag: "🇩🇪" },
        { value: "mx", label: "Mexico ", flag: "🇲🇽" },
        { value: "pt", label: "Portugal ", flag: "🇵🇹" },
        { value: "es", label: "Spain ", flag: "🇪🇸" },
    ];
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
            </div>
            <img
                src={illustration6}
                alt='Beer and opener'
            />
            <div className={styles.info_container}>
                <h1 className={styles.title}>
                    Lets make sure
                    <br /> that you can <br /> drink legally
                </h1>
                <div className={styles.input_container}>
                    <InputBox
                        type='label'
                        placeholder='Birthday'
                        value='DD/MM/YYYY'
                    />
                    <DropdownMenu
                        title='Country'
                        list={countries}
                        placeholder='Select a country'
                    />
                </div>
                <Button
                    value='Verify'
                    type='primary'
                    onClick={handleAgeVerify}
                />
            </div>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Mauris suscipit nunc est, in venenatis ipsum vulputate et.
            </p>
        </div>
    );
}

export default AgeVerification;
