import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import SettingsOptions from "../../_ui/SettingsOptions/SettingsOptions";
import styles from "./EditProfile.module.css";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Button from "../../_ui/Button/Button";
import InputBox from "../../_ui/InputBox/InputBox";
import { useNavigate } from "react-router-dom";
import Menu from "../../_ui/Menu/Menu";
import { useState, useEffect, useRef } from "react";

const PROFILE_STORAGE_KEY = "brewly_user_profile";

function EditProfile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [profileData, setProfileData] = useState({
        fullName: "",
        username: "",
        location: "",
        email: "",
        phoneNumber: "",
        profileImage: "./Image_Placeholder_.png",
    });

    // Load profile data from localStorage
    useEffect(() => {
        const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                setProfileData({
                    fullName: parsed.fullName || "",
                    username: parsed.username || "",
                    location: parsed.location || "",
                    email: parsed.email || "",
                    phoneNumber: parsed.phoneNumber || "",
                    profileImage:
                        parsed.profileImage || "./Image_Placeholder_.png",
                });
            } catch (error) {
                console.error("Error loading profile data:", error);
            }
        }
    }, []);

    const handleInputChange = (field, value) => {
        setProfileData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData((prev) => ({
                    ...prev,
                    profileImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleSave = () => {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
        navigate("/Profile");
    };

    const handleCancel = () => {
        navigate("/Profile");
    };

    const handleDeleteAccountClick = () => {
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        navigate("/");
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
                <input
                    type='file'
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept='image/*'
                    style={{ display: "none" }}
                />
                <ProfileCover
                    type='info'
                    img_src={profileData.profileImage}
                    onImageClick={handleImageClick}
                />
                <div className={styles.inputs_container}>
                    <InputBox
                        type='account'
                        inputName='Full Name'
                        placeholder='John Doe'
                        value={profileData.fullName}
                        onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Username'
                        placeholder='@MrBeerBelly'
                        value={profileData.username}
                        onChange={(e) =>
                            handleInputChange("username", e.target.value)
                        }
                    />

                    <InputBox
                        type='account'
                        inputName='Location'
                        placeholder='Vancouver, Canada'
                        value={profileData.location}
                        onChange={(e) =>
                            handleInputChange("location", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Email'
                        placeholder='ilovebeerlolz@gmail.com'
                        value={profileData.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                    />
                    <InputBox
                        type='number'
                        inputName='Phone Number'
                        placeholder='(778) 675 7653'
                        value={profileData.phoneNumber}
                        onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                        }
                    />
                </div>
                <div className={styles.button_row}>
                    <Button
                        value='Cancel'
                        type='secondary'
                        onClick={handleCancel}
                    />
                    <Button
                        value='Save'
                        type='primary'
                        onClick={handleSave}
                    />
                </div>
                <div className={styles.delete_section}>
                    <SettingsOptions
                        setting_title='Delete Account'
                        type='direct_action'
                        onArrowClick={handleDeleteAccountClick}
                        icon_left={
                            <svg
                                width='19'
                                height='19'
                                viewBox='0 0 19 19'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10.3042 15.4448C11.0125 15.4448 11.6931 15.3372 12.3459 15.1219C12.9986 14.9066 13.6098 14.5976 14.1792 14.1948C13.6098 13.792 12.9986 13.483 12.3459 13.2677C11.6931 13.0525 11.0125 12.9448 10.3042 12.9448C9.59587 12.9448 8.91531 13.0525 8.26253 13.2677C7.60975 13.483 6.99864 13.792 6.4292 14.1948C6.99864 14.5976 7.60975 14.9066 8.26253 15.1219C8.91531 15.3372 9.59587 15.4448 10.3042 15.4448ZM12.5125 8.61149L11.325 7.42399C11.3945 7.31288 11.45 7.19482 11.4917 7.06982C11.5334 6.94482 11.5542 6.81982 11.5542 6.69482C11.5542 6.3476 11.4327 6.05246 11.1896 5.80941C10.9466 5.56635 10.6514 5.44482 10.3042 5.44482C10.1792 5.44482 10.0542 5.46566 9.9292 5.50732C9.8042 5.54899 9.68614 5.60455 9.57503 5.67399L8.38753 4.48649C8.65142 4.25038 8.94656 4.0733 9.27295 3.95524C9.59934 3.83719 9.94309 3.77816 10.3042 3.77816C11.1098 3.77816 11.7973 4.06288 12.3667 4.63232C12.9361 5.20177 13.2209 5.88927 13.2209 6.69482C13.2209 7.05594 13.1618 7.39969 13.0438 7.72608C12.9257 8.05246 12.7486 8.3476 12.5125 8.61149ZM17.2625 13.3615L16.0542 12.1532C16.3598 11.6393 16.5889 11.0976 16.7417 10.5282C16.8945 9.95871 16.9709 9.37538 16.9709 8.77816C16.9709 6.91705 16.325 5.34066 15.0334 4.04899C13.7417 2.75732 12.1653 2.11149 10.3042 2.11149C9.70698 2.11149 9.12364 2.18788 8.5542 2.34066C7.98475 2.49344 7.44309 2.7226 6.9292 3.02816L5.72087 1.81982C6.40142 1.37538 7.13059 1.0351 7.90837 0.798991C8.68614 0.56288 9.48475 0.444824 10.3042 0.444824C11.457 0.444824 12.5403 0.663574 13.5542 1.10107C14.5681 1.53857 15.45 2.13232 16.2 2.88232C16.95 3.63232 17.5438 4.51427 17.9813 5.52816C18.4188 6.54205 18.6375 7.62538 18.6375 8.77816C18.6375 9.5976 18.5195 10.3962 18.2834 11.174C18.0473 11.9518 17.707 12.6809 17.2625 13.3615ZM10.3042 17.1115C9.15142 17.1115 8.06809 16.8927 7.0542 16.4552C6.04031 16.0177 5.15837 15.424 4.40837 14.674C3.65837 13.924 3.06462 13.042 2.62712 12.0282C2.18962 11.0143 1.97087 9.93094 1.97087 8.77816C1.97087 7.95871 2.08545 7.1601 2.31462 6.38232C2.54378 5.60455 2.88059 4.86844 3.32503 4.17399L0.866699 1.69482L2.0542 0.507324L18.5542 17.0073L17.3667 18.1948L4.5542 5.40316C4.24864 5.91705 4.01948 6.45871 3.8667 7.02816C3.71392 7.5976 3.63753 8.18094 3.63753 8.77816C3.63753 9.56982 3.76948 10.3268 4.03337 11.049C4.29725 11.7712 4.6792 12.4309 5.1792 13.0282C5.9292 12.4587 6.73823 12.0247 7.60628 11.7261C8.47434 11.4275 9.37364 11.2782 10.3042 11.2782C10.832 11.2782 11.3598 11.3337 11.8875 11.4448C12.4153 11.5559 12.9292 11.7087 13.4292 11.9032L16.2 14.674C15.4084 15.4657 14.5056 16.0698 13.4917 16.4865C12.4778 16.9032 11.4153 17.1115 10.3042 17.1115Z'
                                    fill='#141414'
                                />
                            </svg>
                        }
                    />
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default EditProfile;
