import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Feed.module.css";
import Modal from "../../_ui/Modal/Modal";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import CreateCollection from "../../_ui/CreateCollection/CreateCollection";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Feed() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleKnowMore = () => {
        navigate("/BeerInfo");
    };
    const handleFav = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar type='logo' />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                    </div>
                    <div className={styles.page_row}>
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                        <BeerCard
                            type='feed'
                            onKnowMoreClick={handleKnowMore}
                            onFavClick={handleFav}
                        />
                    </div>
                    {isModalOpen && (
                        <>
                            <Modal
                                header='Save it to your Collection'
                                onClose={handleCloseModal}>
                                <CreateCollection type='button' />
                                <CollectionCard
                                    collection_name='IPA'
                                    onClick={handleCloseModal}
                                />
                                <CollectionCard collection_name='Artesanal' />
                                <CollectionCard collection_name='Favorites' />
                            </Modal>
                        </>
                    )}
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Feed;
