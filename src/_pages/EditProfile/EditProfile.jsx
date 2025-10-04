import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import SettingsOptions from "../../_ui/SettingsOptions/SettingsOptions";
import styles from "./EditProfile.module.css";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Button from "../../_ui/Button/Button";
import InputBox from "../../_ui/InputBox/InputBox";
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const navigate = useNavigate();
    const handleAccountInformationClick = () => {
        navigate("./EditProfile");
    };
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='arrow regular'
                    pageName='Profile Information'
                />
            </div>

            <div className={styles.page_content}>
                <ProfileCover
                    type='info'
                    img_src='./Image_Placeholder_.png'
                />
                <div className={styles.inputs_container}>
                    <InputBox
                        type='account'
                        inputName='Full Name'
                        placeholder='John Doe'
                    />
                    <InputBox
                        type='account'
                        inputName='Username'
                        placeholder='@MrBeerBelly'
                    />

                    <InputBox
                        type='account'
                        inputName='Location'
                        placeholder='Vancouver, Canada'
                    />
                    <InputBox
                        type='account'
                        inputName='Email'
                        placeholder='ilovebeerlolz@gmail.com'
                    />
                    <InputBox
                        type='number'
                        inputName='Phone Number'
                        placeholder='(778) 675 7653'
                    />
                </div>
                <div className={styles.button_row}>
                    <Button
                        value='Cancel'
                        type='secondary'
                    />
                    <Button value='Save' type="primary" />
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
