import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Menu from "../../_ui/Menu/Menu";
import ScrollList from "../../_ui/ScrollList/ScrollList";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PROFILE_STORAGE_KEY = "brewly_user_profile";

function Profile() {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        fullName: "",
        username: "",
        location: "",
        profileImage: "./Image_Placeholder_.png",
    });

    useEffect(() => {
        const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                setProfileData({
                    fullName: parsed.fullName || "",
                    username: parsed.username || "",
                    location: parsed.location || "",
                    profileImage:
                        parsed.profileImage || "./Image_Placeholder_.png",
                });
            } catch (error) {
                console.error("Error loading profile data:", error);
            }
        }
    }, []);

    const handleCollectionClick = () => {
        navigate("/collections");
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar type='profile settings' />
            </div>

            <div className={styles.page_content}>
                <ProfileCover
                    type='regular'
                    img_src={profileData.profileImage}
                    fullName={profileData.fullName}
                    username={profileData.username}
                    location={profileData.location}
                />

                <ScrollList
                    section_name='All Collections'
                    type='collections'
                    onItemClick={handleCollectionClick}
                />
                <ScrollList
                    section_name='Wishlist'
                    type='wishlist'
                    onItemClick={handleCollectionClick}
                />
                <ScrollList
                    section_name='Reviews'
                    type='reviews'
                    onItemClick={handleCollectionClick}
                />
            </div>

            <Menu />
        </div>
    );
}

export default Profile;
