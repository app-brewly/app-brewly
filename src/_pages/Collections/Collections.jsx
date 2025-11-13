import { useState, useEffect } from "react";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Collections.module.css";
import { useNavigate } from "react-router-dom";

function Collections() {
    const [collections, setCollections] = useState([]);
    const navigate = useNavigate();

    // ✅ Load collections when page opens
    useEffect(() => {
        const saved = localStorage.getItem("collections");
        if (saved) {
            setCollections(JSON.parse(saved));
        }
    }, []);

    const handleOpenInfo = (collectionName) => {
        navigate(`/CollectionItems/${encodeURIComponent(collectionName)}`);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar type='collections add' />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    {collections.length > 0 ? (
                        Array.from({
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
                                    {rowCollections.map((col, index) => (
                                        <BeerCard
                                            key={index}
                                            type='collections'
                                            collection_name={col.collectionName}
                                            onCollectionClick={() =>
                                                handleOpenInfo(
                                                    col.collectionName
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            );
                        })
                    ) : (
                        <p className={styles.text}>No collections yet.</p>
                    )}
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Collections;
