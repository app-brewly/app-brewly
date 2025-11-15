import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import Menu from "../../_ui/Menu/Menu";
import Modal from "../../_ui/Modal/Modal";
import Button from "../../_ui/Button/Button";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import CollectionsMenu from "../../_ui/CollectionsMenu/CollectionsMenu";
import { fetchBeers, transformBeerData } from "../../services/beerApi";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./CollectionItems.module.css";

function CollectionItems() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isDeleteBeersModalOpen, setIsDeleteBeersModalOpen] = useState(false);
    const [selectedBeers, setSelectedBeers] = useState([]);
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const { collectionName } = useParams();
    const [beers, setBeers] = useState([]);
    const [collection, setCollection] = useState(null);
    const navigate = useNavigate();

    const handleKnowMore = (beerId) => {
        navigate(`/BeerInfo/${encodeURIComponent(beerId)}`);
    };

    const handleOptionsOpen = () => setIsOptionsOpen(true);

    const handleEditCollection = () => {
        setIsOptionsOpen(false);
        setIsSelectionMode(true);
    };

    const handleDeleteCollection = () => {
        setIsOptionsOpen(false);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDeleteCollection = () => {
        if (!collectionName) return;

        const saved = localStorage.getItem("collections");
        if (saved) {
            const allCollections = JSON.parse(saved);
            const updatedCollections = allCollections.filter(
                (c) => c.collectionName !== collectionName
            );
            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );

            // Delete metadata
            const metadataKey = `collection_metadata_${collectionName}`;
            localStorage.removeItem(metadataKey);

            navigate("/collections");
        }
    };

    const handleToggleBeerSelection = (beerId) => {
        setSelectedBeers((prev) => {
            if (prev.includes(beerId)) {
                return prev.filter((id) => id !== beerId);
            } else {
                return [...prev, beerId];
            }
        });
    };

    const handleDeleteSelectedBeers = () => {
        setIsDeleteBeersModalOpen(true);
    };

    const handleConfirmDeleteBeers = () => {
        if (!collectionName || selectedBeers.length === 0) return;

        const saved = localStorage.getItem("collections");
        if (saved) {
            const allCollections = JSON.parse(saved);
            const updatedCollections = allCollections.map((col) => {
                if (col.collectionName === collectionName) {
                    return {
                        ...col,
                        beers: col.beers.filter(
                            (beer) => !selectedBeers.includes(beer.id)
                        ),
                    };
                }
                return col;
            });
            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );

            // Update metadata dateEdited
            const metadataKey = `collection_metadata_${collectionName}`;
            const metadata = localStorage.getItem(metadataKey);
            if (metadata) {
                const parsed = JSON.parse(metadata);
                localStorage.setItem(
                    metadataKey,
                    JSON.stringify({
                        ...parsed,
                        dateEdited: new Date().toLocaleDateString(),
                    })
                );
            }

            // Reload collection
            const found = updatedCollections.find(
                (c) => c.collectionName === collectionName
            );
            setCollection(found || null);
            setSelectedBeers([]);
            setIsSelectionMode(false);
            setIsDeleteBeersModalOpen(false);
        }
    };

    useEffect(() => {
        const loadBeers = async () => {
            try {
                const data = await fetchBeers({
                    per_page: 50,
                    page: 1,
                });
                const transformedBeers = data.map(transformBeerData);
                setBeers(transformedBeers);
            } catch (err) {
                // Silently fail - beers will remain empty
            }
        };

        loadBeers();
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("collections");
        if (saved) {
            const allCollections = JSON.parse(saved);
            const found = allCollections.find(
                (c) => c.collectionName === collectionName
            );
            setCollection(found || null);
        }
    }, [collectionName]);

    useEffect(() => {
        const loadCollection = () => {
            const saved = localStorage.getItem("collections");
            if (saved) {
                try {
                    const allCollections = JSON.parse(saved);
                    const found = allCollections.find(
                        (c) => c.collectionName === collectionName
                    );
                    setCollection(found || null);
                } catch (err) {
                    // Silently fail
                }
            }
        };

        const handleStorageChange = () => {
            loadCollection();
        };

        loadCollection();
        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("customStorageChange", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener(
                "customStorageChange",
                handleStorageChange
            );
        };
    }, [collectionName]);

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections menu'
                    collection_name={collectionName}
                    onOptionsClick={handleOptionsOpen}
                />
            </div>

            {/* OPTIONS MENU */}
            {isOptionsOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOptionsOpen(false)}>
                    <div
                        className={styles.collections_menu}
                        onClick={(e) => e.stopPropagation()}>
                        <CollectionsMenu
                            onInfoClick={() => {
                                setIsOptionsOpen(false);
                                navigate(
                                    `/CollectionInfo/${encodeURIComponent(
                                        collectionName
                                    )}`
                                );
                            }}
                            onEditClick={() => {
                                setIsOptionsOpen(false);
                                handleEditCollection();
                            }}
                            onDeleteSelectedClick={() => {
                                setIsOptionsOpen(false);
                                if (selectedBeers.length > 0) {
                                    handleDeleteSelectedBeers();
                                }
                            }}
                            showDeleteSelected={selectedBeers.length > 0}
                        />
                    </div>
                </div>
            )}

            {/* DELETE COLLECTION MODAL */}
            {isDeleteModalOpen && (
                <Modal
                    header='Are you sure you want to delete the entire collection?'
                    onClose={() => setIsDeleteModalOpen(false)}>
                    <div className={styles.button_row}>
                        <Button
                            value='Cancel'
                            type='secondary'
                            onClick={() => setIsDeleteModalOpen(false)}
                        />
                        <Button
                            value='Delete'
                            type='primary'
                            onClick={handleConfirmDeleteCollection}
                        />
                    </div>
                </Modal>
            )}

            {/* DELETE SELECTED BEERS MODAL */}
            {isDeleteBeersModalOpen && (
                <Modal
                    header='Would you like to delete selected items from your collection?'
                    onClose={() => setIsDeleteBeersModalOpen(false)}>
                    <div className={styles.button_row}>
                        <Button
                            value='Cancel'
                            type='secondary'
                            onClick={() => setIsDeleteBeersModalOpen(false)}
                        />
                        <Button
                            value='Delete'
                            type='primary'
                            onClick={handleConfirmDeleteBeers}
                        />
                    </div>
                </Modal>
            )}

            {/* SELECTION MODE BUTTONS */}
            {isSelectionMode && (
                <div className={styles.selection_controls}>
                    <Button
                        value='Cancel'
                        type='secondary'
                        onClick={() => {
                            setIsSelectionMode(false);
                            setSelectedBeers([]);
                        }}
                        className={styles.selection_button}
                    />
                    <Button
                        value={`Delete Selected (${selectedBeers.length})`}
                        type='primary'
                        onClick={handleDeleteSelectedBeers}
                        className={`${styles.selection_button} ${
                            selectedBeers.length === 0 ? styles.disabled : ""
                        }`}
                    />
                </div>
            )}

            {/* DISPLAY BEERS */}
            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    {collection && collection.beers.length > 0 ? (
                        Array.from({
                            length: Math.ceil(collection.beers.length / 2),
                        }).map((_, rowIndex) => {
                            const startIndex = rowIndex * 2;
                            const rowBeers = collection.beers.slice(
                                startIndex,
                                startIndex + 2
                            );

                            return (
                                <div
                                    key={rowIndex}
                                    className={styles.page_row}>
                                    {rowBeers.map((beer) => {
                                        const beerData = beers.find(
                                            (b) => b.id === beer.id
                                        );
                                        const isSelected =
                                            selectedBeers.includes(beer.id);

                                        return (
                                            <div
                                                key={beer.id}
                                                className={`${
                                                    styles.beer_card_wrapper
                                                } ${
                                                    isSelected
                                                        ? styles.beer_card_selected
                                                        : ""
                                                } ${
                                                    isSelectionMode
                                                        ? styles.beer_card_wrapper_selection_mode
                                                        : ""
                                                }`}
                                                onClick={(e) => {
                                                    if (isSelectionMode) {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleToggleBeerSelection(
                                                            beer.id
                                                        );
                                                    }
                                                }}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}>
                                                {isSelectionMode && (
                                                    <div
                                                        className={
                                                            styles.selection_overlay
                                                        }
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleToggleBeerSelection(
                                                                beer.id
                                                            );
                                                        }}
                                                    />
                                                )}
                                                <div
                                                    style={{
                                                        opacity:
                                                            isSelectionMode &&
                                                            !isSelected
                                                                ? 0.5
                                                                : 1,
                                                        pointerEvents:
                                                            isSelectionMode
                                                                ? "none"
                                                                : "auto",
                                                    }}>
                                                    <BeerCard
                                                        type='collection info'
                                                        beerName={beer.name}
                                                        brewery={
                                                            beer.tagline ||
                                                            beer.brewery
                                                        }
                                                        beerId={beer.id}
                                                        image={
                                                            beer.image ||
                                                            beerData?.image
                                                        }
                                                        onKnowMoreClick={
                                                            isSelectionMode
                                                                ? (e) => {
                                                                      if (e) {
                                                                          e.preventDefault();
                                                                          e.stopPropagation();
                                                                      }
                                                                      handleToggleBeerSelection(
                                                                          beer.id
                                                                      );
                                                                  }
                                                                : (e) => {
                                                                      if (e) {
                                                                          e.stopPropagation();
                                                                      }
                                                                      handleKnowMore(
                                                                          beer.id
                                                                      );
                                                                  }
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    ) : (
                        <p className={styles.empty_text}>
                            No beers in this collection yet.
                        </p>
                    )}
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default CollectionItems;
