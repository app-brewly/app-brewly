import { useState, useEffect } from "react";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Menu from "../../_ui/Menu/Menu";
import Modal from "../../_ui/Modal/Modal";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";
import styles from "./Collections.module.css";
import { useNavigate } from "react-router-dom";

function Collections() {
    const [collections, setCollections] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");
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

    const handleCreateCollection = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCreateModalOpen(false);
        setNewCollectionName("");
    };

    const handleSaveNewCollection = () => {
        if (!newCollectionName.trim()) return;

        const trimmedName = newCollectionName.trim();
        const saved = localStorage.getItem("collections");
        const existingCollections = saved ? JSON.parse(saved) : [];

        // Check if collection name already exists
        const exists = existingCollections.some(
            (col) =>
                col.collectionName.toLowerCase() === trimmedName.toLowerCase()
        );

        if (exists) {
            setConfirmationMessage(
                `A collection with the name "${trimmedName}" already exists.`
            );
            setShowConfirmation(true);
            return;
        }

        // Create new collection
        const newCollection = {
            collectionName: trimmedName,
            beers: [],
        };

        const updatedCollections = [...existingCollections, newCollection];
        localStorage.setItem("collections", JSON.stringify(updatedCollections));

        // Save metadata with creation date
        const now = new Date().toLocaleDateString();
        const metadataKey = `collection_metadata_${trimmedName}`;
        localStorage.setItem(
            metadataKey,
            JSON.stringify({
                dateCreated: now,
                dateEdited: now,
            })
        );

        setCollections(updatedCollections);

        setNewCollectionName("");
        handleCloseModal();

        setConfirmationMessage(`Collection "${trimmedName}" has been created!`);
        setShowConfirmation(true);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections add'
                    onAddClick={handleCreateCollection}
                />
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
                                    {rowCollections.map((col, index) => {
                                        // Get image from first beer in collection
                                        const firstBeerImage =
                                            col.beers && col.beers.length > 0
                                                ? col.beers[0].image
                                                : null;

                                        return (
                                            <BeerCard
                                                key={index}
                                                type='collections'
                                                collection_name={
                                                    col.collectionName
                                                }
                                                image={firstBeerImage}
                                                onCollectionClick={() =>
                                                    handleOpenInfo(
                                                        col.collectionName
                                                    )
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })
                    ) : (
                        <p className={styles.text}>No collections yet.</p>
                    )}
                </div>
            </div>

            {isCreateModalOpen && (
                <Modal
                    header='Create a new Collection'
                    onClose={handleCloseModal}>
                    <InputBox
                        type='regular'
                        value={newCollectionName}
                        onChange={(e) => setNewCollectionName(e.target.value)}
                        placeholder='Collection name'
                    />
                    <div className={styles.button_row}>
                        <Button
                            value='Cancel'
                            type='secondary'
                            onClick={handleCloseModal}
                        />
                        <Button
                            value='Save'
                            type='primary'
                            onClick={handleSaveNewCollection}
                        />
                    </div>
                </Modal>
            )}

            {showConfirmation && (
                <Modal
                    header={confirmationMessage}
                    onClose={() => setShowConfirmation(false)}>
                    <Button
                        value='OK'
                        type='primary'
                        onClick={() => setShowConfirmation(false)}
                    />
                </Modal>
            )}

            <Menu />
        </div>
    );
}

export default Collections;
