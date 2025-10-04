import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import Modal from "../../_ui/Modal/Modal";
import Button from "../../_ui/Button/Button";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import CollectionsMenu from "../../_ui/CollectionsMenu/CollectionsMenu";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CollectionItems.module.css";

function CollectionItems() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isOptionsOpen, setIsOptionOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate("/BeerInfo");
    };

    const handleOptionsOpen = () => {
        setIsOptionOpen(true);
    };
    const handleInfoClick = () => {
        navigate("/CollectionInfo");
    };
    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };
    const handleEditModalClose = () => {
        setIsEditModalOpen(false);
    };
    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };
    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections menu'
                    collection_name='Artesanal'
                    onOptionsClick={handleOptionsOpen}
                />
            </div>
            {isOptionsOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOptionOpen(false)}>
                    <div
                        className={styles.collections_menu}
                        onClick={(e) => e.stopPropagation()}>
                        <CollectionsMenu
                            type='info'
                            onInfoClick={handleInfoClick}
                            onDeleteClick={handleDeleteClick}
                            onEditClick={handleEditClick}
                        />
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <Modal
                    header='Are you sure you want to delete this collection?'
                    onClose={handleDeleteModalClose}>
                    <div className={styles.button_row}>
                        <Button
                            value='Cancel'
                            type='secondary'
                            onClick={handleDeleteModalClose}
                        />
                        <Button
                            value='Delete'
                            type='primary'
                            onClick={handleDeleteModalClose}
                        />
                    </div>
                </Modal>
            )}

            {isEditModalOpen && (
                <Modal
                    header='Would you like to delete selected items from your collection?'
                    onClose={handleEditModalClose}>
                    <div className={styles.button_row}>
                        <Button
                            value='Cancel'
                            type='secondary'
                            onClick={handleEditModalClose}
                        />
                        <Button
                            value='Delete'
                            type='primary'
                            onClick={handleEditModalClose}
                        />
                    </div>
                </Modal>
            )}

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collection info'
                            onKnowMoreClick={handleKnowMore}
                        />
                        <BeerCard
                            type='collection info'
                            onKnowMoreClick={handleKnowMore}
                        />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collection info'
                            onKnowMoreClick={handleKnowMore}
                        />
                        <BeerCard
                            type='collection info'
                            onKnowMoreClick={handleKnowMore}
                        />
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default CollectionItems;
