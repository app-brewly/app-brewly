import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import Menu from "../../_ui/Menu/Menu";
import Modal from "../../_ui/Modal/Modal";
import Button from "../../_ui/Button/Button";
import styles from "./CollectionItems.module.css";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import DropdownMenu from "../../_ui/DropdownMenu/DropDownMenu";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CollectionItems() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate("/BeerInfo");
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar
                    type='collections menu'
                    collection_name='Artesanal'
                />
            </div>
            {isModalOpen && (
                <>
                    <Modal
                        onClose={handleCloseModal}
                        type='center'>
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
