import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Menu from "../../_ui/Menu/Menu";
import ScrollList from "../../_ui/ScrollList/ScrollList";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

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
                    img_src='./Image_Placeholder_.png'
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
