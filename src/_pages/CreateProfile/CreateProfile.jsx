import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import SettingsOptions from "../../_ui/SettingsOptions/SettingsOptions";
import styles from "./CreateProfile.module.css";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Button from "../../_ui/Button/Button";
import InputBox from "../../_ui/InputBox/InputBox";
import { useNavigate } from "react-router-dom";
import Menu from "../../_ui/Menu/Menu";
import { useState, useEffect, useRef } from "react";

const PROFILE_STORAGE_KEY = "brewly_user_profile";
const DOB_STORAGE_KEY = "brewly_user_dob";

function CreateProfile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [profileData, setProfileData] = useState({
        fullName: "",
        username: "",
        location: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        password: "",
        profileImage: "./Image_Placeholder_.png",
    });

    // Load profile data + DOB from localStorage
    useEffect(() => {
        const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        const savedDob = localStorage.getItem(DOB_STORAGE_KEY);

        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                setProfileData({
                    fullName: parsed.fullName || "",
                    username: parsed.username || "",
                    location: parsed.location || "",
                    email: parsed.email || "",
                    phoneNumber: parsed.phoneNumber || "",
                    dateOfBirth: parsed.dateOfBirth || savedDob || "",
                    password: parsed.password || "",
                    profileImage:
                        parsed.profileImage || "./Image_Placeholder_.png",
                });
                return;
            } catch (error) {
                console.error("Error loading profile data:", error);
            }
        }

        // if no saved profile, at least hydrate DOB if we have it
        setProfileData((prev) => ({
            ...prev,
            dateOfBirth: savedDob || "",
        }));
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
        // (optional) clear the temp DOB key once saved
        localStorage.removeItem(DOB_STORAGE_KEY);
        navigate("/LogIn");
    };

    const handleCancel = () => {
        navigate("/AgeVerification");
    };

    const handleDeleteAccountClick = () => {
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        navigate("/");
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <h1 className={styles.page_title}>Create Profile</h1>
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
                        placeholder='Enter your name..'
                        value={profileData.fullName}
                        onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Username'
                        placeholder='Enter your username..'
                        value={profileData.username}
                        onChange={(e) =>
                            handleInputChange("username", e.target.value)
                        }
                    />

                    <InputBox
                        type='account'
                        inputName='Location'
                        placeholder='Enter your location..'
                        value={profileData.location}
                        onChange={(e) =>
                            handleInputChange("location", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Email'
                        placeholder='Enter your email..'
                        value={profileData.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Password'
                        placeholder='Create a password..'
                        value={profileData.password}
                        onChange={(e) =>
                            handleInputChange("password", e.target.value)
                        }
                    />
                    <InputBox
                        type='account'
                        inputName='Date of Birth'
                        placeholder='DD/MM/YYYY'
                        value={profileData.dateOfBirth}
                        onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                        }
                    />
                    <InputBox
                        type='number'
                        inputName='Phone Number'
                        placeholder='(000) 000-0000'
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
            </div>
        </div>
    );
}

export default CreateProfile;
