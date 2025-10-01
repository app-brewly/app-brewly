import styles from "./SearchPage.module.css";
import Search from "../../_ui/Search/Search";
import Menu from "../../_ui/Menu/Menu";
import SearchCard from "../../_ui/SearchCard/SearchCard";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import ArrowBack from "../../_ui/ArrowBack/ArrowBack";

function SearchPage() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <div className={styles.page_nav}>
                    <ArrowBack /> <Search />
                </div>
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default SearchPage;
