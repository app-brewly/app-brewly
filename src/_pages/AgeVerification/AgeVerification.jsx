import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./AgeVerification.module.css";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import DropdownMenu from "../../_ui/DropdownMenu/DropdownMenu";
import illustration6 from "../../assets/illustration6.svg";
import Terms from "../../_ui/Terms/Terms";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import Modal from "../../_ui/Modal/Modal";

const PROFILE_STORAGE_KEY = "brewly_user_profile";
const DOB_STORAGE_KEY = "brewly_user_dob";

function AgeVerification() {
    const navigate = useNavigate();

    const [dob, setDob] = useState("");
    const [isUnderageModalOpen, setIsUnderageModalOpen] = useState(false);

    const handleTermsofUse = () => {
        navigate("/TermsOfUse");
    };

    const handleLogIn = () => {
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

    const calculateAge = (dobString) => {
        if (!dobString) return null;

        const parts = dobString.split("/");
        if (parts.length !== 3) return null;

        const [dayStr, monthStr, yearStr] = parts;
        const day = parseInt(dayStr, 10);
        const month = parseInt(monthStr, 10) - 1; // JS months 0–11
        const year = parseInt(yearStr, 10);

        if (
            Number.isNaN(day) ||
            Number.isNaN(month) ||
            Number.isNaN(year) ||
            yearStr.length !== 4
        ) {
            return null;
        }

        const dobDate = new Date(year, month, day);
        if (Number.isNaN(dobDate.getTime())) return null;

        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const m = today.getMonth() - dobDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }

        return age;
    };

    const handleAgeVerify = () => {
        const age = calculateAge(dob);

        if (age === null) {
            // optionally you could show validation in the future
            return;
        }

        if (age >= 19) {
            // store DOB so CreateProfile can include it
            localStorage.setItem(DOB_STORAGE_KEY, dob);

            // optional: if a profile already exists, merge DOB into it
            const existingProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
            if (existingProfile) {
                try {
                    const parsed = JSON.parse(existingProfile);
                    const updated = { ...parsed, dateOfBirth: dob };
                    localStorage.setItem(
                        PROFILE_STORAGE_KEY,
                        JSON.stringify(updated)
                    );
                } catch (err) {
                    console.error("Error merging DOB into profile:", err);
                }
            }

            navigate("/CreateProfile");
        } else {
            setIsUnderageModalOpen(true);
        }
    };

    const handleCloseUnderageModal = () => {
        setIsUnderageModalOpen(false);
    };

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
                        type='regular' // important: real input, not just a label
                        placeholder='DD/MM/YYYY'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <DropdownMenu
                        title='Country'
                        list={countries}
                        placeholder='Select a country'
                    />
                </div>
                <Button
                    value='Verify and sign up'
                    type='primary'
                    onClick={handleAgeVerify}
                />
                <Button
                    value='Verify and Log in'
                    type='primary'
                    onClick={handleLogIn}
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

            {isUnderageModalOpen && (
                <Modal
                    header='Sorry, you are underage.'
                    onClose={handleCloseUnderageModal}
                >
                    <p>sorry, you are underage.</p>
                    <Button
                        value='Okay'
                        type='primary'
                        onClick={handleCloseUnderageModal}
                    />
                </Modal>
            )}
        </div>
    );
}

export default AgeVerification;
