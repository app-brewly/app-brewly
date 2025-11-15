import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import Menu from "../../_ui/Menu/Menu";
import Modal from "../../_ui/Modal/Modal";
import Button from "../../_ui/Button/Button";
import styles from "./CollectionInfo.module.css";
import CollectionInfoBox from "../../_ui/CollectionInfoBox/CollectionInfoBox";
import CollectionsMenu from "../../_ui/CollectionsMenu/CollectionsMenu";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import beercan from "../../assets/beercan.png";

function CollectionInfo() {
    const { collectionName } = useParams();
    const navigate = useNavigate();
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [collection, setCollection] = useState(null);
    const [collectionImage, setCollectionImage] = useState(beercan);
    const [dateCreated, setDateCreated] = useState("");
    const [dateEdited, setDateEdited] = useState("");

    useEffect(() => {
        if (!collectionName) return;

        const saved = localStorage.getItem("collections");
        if (saved) {
            const allCollections = JSON.parse(saved);
            const found = allCollections.find(
                (c) => c.collectionName === collectionName
            );

            if (found) {
                setCollection(found);

                // Get image from first beer in collection
                if (found.beers && found.beers.length > 0) {
                    const firstBeer = found.beers[0];
                    if (firstBeer.image) {
                        setCollectionImage(firstBeer.image);
                    } else {
                        setCollectionImage(beercan);
                    }
                } else {
                    setCollectionImage(beercan);
                }

                // Get creation date from localStorage metadata or use current date
                const metadataKey = `collection_metadata_${collectionName}`;
                const metadata = localStorage.getItem(metadataKey);
                if (metadata) {
                    const parsed = JSON.parse(metadata);
                    setDateCreated(
                        parsed.dateCreated || new Date().toLocaleDateString()
                    );
                    setDateEdited(
                        parsed.dateEdited || new Date().toLocaleDateString()
                    );
                } else {
                    // If no metadata, create it
                    const now = new Date().toLocaleDateString();
                    setDateCreated(now);
                    setDateEdited(now);
                    localStorage.setItem(
                        metadataKey,
                        JSON.stringify({
                            dateCreated: now,
                            dateEdited: now,
                        })
                    );
                }
            }
        }
    }, [collectionName]);

    // Update last edited date when collection changes
    useEffect(() => {
        if (collection && collectionName) {
            const metadataKey = `collection_metadata_${collectionName}`;
            const metadata = localStorage.getItem(metadataKey);
            if (metadata) {
                const parsed = JSON.parse(metadata);
                const now = new Date().toLocaleDateString();
                setDateEdited(now);
                localStorage.setItem(
                    metadataKey,
                    JSON.stringify({
                        ...parsed,
                        dateEdited: now,
                    })
                );
            }
        }
    }, [collection?.beers?.length, collectionName]);

    const handleOptionsOpen = () => {
        setIsOptionsOpen(true);
    };

    const handleEditCollection = () => {
        setIsOptionsOpen(false);
        navigate(`/CollectionItems/${encodeURIComponent(collectionName)}`);
    };

    const handleDeleteCollection = () => {
        setIsOptionsOpen(false);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
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

    if (!collection) {
        return (
            <div className={styles.page_container}>
                <div className={styles.page_header}>
                    <StatusBar />
                    <NavBar
                        type='collections menu'
                        collection_name={collectionName || "Collection"}
                        onOptionsClick={handleOptionsOpen}
                    />
                </div>
                <div className={styles.page_content}>
                    <p>Collection not found</p>
                </div>
                <Menu />
            </div>
        );
    }

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections menu'
                    collection_name={collection.collectionName}
                    onOptionsClick={handleOptionsOpen}
                />
            </div>
            {isOptionsOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOptionsOpen(false)}>
                    <div
                        className={styles.collections_menu}
                        onClick={(e) => e.stopPropagation()}>
                        <CollectionsMenu
                            type='info'
                            onInfoClick={() => setIsOptionsOpen(false)}
                            onEditClick={handleEditCollection}
                            onDeleteClick={handleDeleteCollection}
                        />
                    </div>
                </div>
            )}

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
                            onClick={handleConfirmDelete}
                        />
                    </div>
                </Modal>
            )}

            <div className={styles.page_content}>
                <CollectionInfoBox
                    name={collection.collectionName}
                    dateCreated={dateCreated}
                    dateEdited={dateEdited}
                    itemNumbers={collection.beers?.length || 0}
                    image={collectionImage}
                />
            </div>

            <Menu />
        </div>
    );
}

export default CollectionInfo;
