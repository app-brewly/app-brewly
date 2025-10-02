import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./CollectionItems.module.css";
import BeerCard from "../../_ui/BeerCard/BeerCard";

function CollectionItems() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard type='collection info' />
                        <BeerCard type='collection info' />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard type='collection info' />
                        <BeerCard type='collection info' />
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default CollectionItems;
