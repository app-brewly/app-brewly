import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Menu from "../../_ui/Menu/Menu";
import ScrollList from "../../_ui/ScrollList/ScrollList";
import BeerCard from "../../_ui/BeerCard/BeerCard";
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
    const [collections, setCollections] = useState([]);

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
                // Silently fail
            }
        }
    }, []);

    // Load collections
    useEffect(() => {
        const loadCollections = () => {
            const saved = localStorage.getItem("collections");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setCollections(parsed || []);
                } catch (error) {
                    setCollections([]);
                }
            } else {
                setCollections([]);
            }
        };

        loadCollections();

        // Listen for storage changes
        const handleStorageChange = () => {
            loadCollections();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("customStorageChange", handleStorageChange);
        document.addEventListener("visibilitychange", () => {
            if (!document.hidden) {
                loadCollections();
            }
        });

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener(
                "customStorageChange",
                handleStorageChange
            );
        };
    }, []);

    const handleCollectionClick = () => {
        navigate("/collections");
    };

    const handleCollectionItemClick = (collectionName) => {
        navigate(`/CollectionItems/${encodeURIComponent(collectionName)}`);
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

                {/* Collection Cards Grid */}
                {collections.length > 0 && (
                    <div className={styles.collections_section}>
                        <h2 className={styles.section_title}>My Collections</h2>
                        <div className={styles.page_column}>
                            {Array.from({
                                length: Math.ceil(collections.length / 2),
                            }).map((_, rowIndex) => {
                                const startIndex = rowIndex * 2;
                                const rowCollections = collections.slice(
                                    startIndex,
                                    startIndex + 2
                                );

                                return (
                                    <div
                                        key={rowIndex}
                                        className={styles.page_row}>
                                        {rowCollections.map((col, index) => {
                                            // Get image from first beer in collection
                                            const firstBeerImage =
                                                col.beers &&
                                                col.beers.length > 0
                                                    ? col.beers[0].image
                                                    : null;

                                            return (
                                                <BeerCard
                                                    key={index}
                                                    type='collections'
                                                    collection_name={
                                                        col.collectionName
                                                    }
                                                    image={firstBeerImage}
                                                    onCollectionClick={() =>
                                                        handleCollectionItemClick(
                                                            col.collectionName
                                                        )
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <Menu />
        </div>
    );
}

export default Profile;
