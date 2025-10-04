import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import ProfileCover from "../../_ui/ProfileCover/ProfileCover";
import Menu from "../../_ui/Menu/Menu";
import ScrollList from "../../_ui/ScrollList/ScrollList";
import Tag from "../../_ui/Tag/Tag";
import styles from "./Profile.module.css";

function Profile() {
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
                <div className={styles.tag_container}>
                    <Tag
                        title='lager'
                        type='tertiary'
                    />
                    <Tag
                        title='lager'
                        type='secondary'
                    />
                    <Tag
                        title='lager'
                        type='secondary'
                    />
                    <Tag
                        title='lager'
                        type='secondary'
                    />
                </div>

                <div className={styles.lists_container}>
                    <ScrollList
                        section_name='Collections'
                        type='collections'
                    />
                    <ScrollList
                        section_name='Wishlist'
                        type='wishlist'
                    />
                    <ScrollList
                        section_name='Reviews'
                        type='reviews'
                    />
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default Profile;
