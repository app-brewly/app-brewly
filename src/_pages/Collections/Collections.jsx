import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Collections.module.css";
import BeerCard from "../../_ui/BeerCard/BeerCard";

function Collections() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collections'
                            collection_name='Artesanal'
                        />
                        <BeerCard
                            type='collections'
                            collection_name='IPA'
                        />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collections'
                            collection_name='Wishlist'
                        />
                        <BeerCard
                            type='collections'
                            collection_name='D3 Friends'
                        />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collections'
                            collection_name='Favourites'
                        />
                        <BeerCard
                            type='collections'
                            collection_name='Snowy Days'
                        />
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Collections;
