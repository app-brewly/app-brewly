import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Collections.module.css";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Modal from "../../_ui/Modal/Modal";
import Button from "../../_ui/Button/Button";

import InputBox from "../../_ui/InputBox/InputBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Collections() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleOpenInfo = () => {
        navigate("/CollectionInfo");
    };
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections add'
                    onAddClick={handleOpenModal}
                />
                {isModalOpen && (
                    <>
                        <Modal
                            header='Save it to your Collection'
                            onClose={handleCloseModal}>
                            <InputBox />
                            <div className={styles.button_row}>
                                <Button
                                    value='Cancel'
                                    type='secondary'
                                    onClick={handleCloseModal}
                                />
                                <Button
                                    value='Save'
                                    onClick={handleCloseModal}
                                />
                            </div>
                        </Modal>
                    </>
                )}
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='collections'
                            collection_name='Artesanal'
                            onCollectionClick={handleOpenInfo}
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
