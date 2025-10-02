import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./CollectionInfo.module.css";
import CollectionInfoBox from "../../_ui/CollectionInfoBox/CollectionInfoBox";

function CollectionInfo() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar />
            </div>

            <div className={styles.page_content}>
                <CollectionInfoBox
                    name='Artesanal'
                    dateCreated='12/10/2024'
                    dateEdited='12/10/2025'
                    itemNumbers='8'
                />
            </div>

            <Menu />
        </div>
    );
}

export default CollectionInfo;
