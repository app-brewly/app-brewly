import { useNavigate } from "react-router-dom";
import styles from "./AgeVerification.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import DropdownMenu from "../../_ui/DropdownMenu/DropdownMenu";
import illustration6 from "../../assets/illustration6.svg";
import Terms from "../../_ui/Terms/Terms";

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
                        placeholder='DD/MM/YYYY'
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

export default AgeVerification;
