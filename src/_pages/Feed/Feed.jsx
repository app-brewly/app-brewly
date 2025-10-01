import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Feed.module.css";

function Feed() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard />
                        <BeerCard />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard />
                        <BeerCard />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard />
                        <BeerCard />
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Feed;
