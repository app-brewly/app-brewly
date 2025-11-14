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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isOptionsOpen, setIsOptionOpen] = useState(false);
    const { collectionName } = useParams();
    const [beers, setBeers] = useState([]);
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleKnowMore = (beerId) => {
        navigate(`/BeerInfo/${encodeURIComponent(beerId)}`);
    };

    const handleOptionsOpen = () => setIsOptionOpen(true);
    const handleEditModalClose = () => setIsEditModalOpen(false);
    const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

    useEffect(() => {
        const loadBeers = async () => {
            try {
                setLoading(true);
                const data = await fetchBeers({
                    per_page: 50,
                    page: 1,
                });

                const transformedBeers = data.map(transformBeerData);
                setBeers(transformedBeers);
            } catch (err) {
                console.error("Erro ao carregar cervejas:", err);
                setError(`Erro ao carregar cervejas: ${err.message}`);
            } finally {
                setLoading(false);
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
                    onClick={() => setIsOptionOpen(false)}>
                    <div
                        className={styles.collections_menu}
                        onClick={(e) => e.stopPropagation()}>
                        <CollectionsMenu
                            type='info'
                            onInfoClick={() => navigate("/CollectionInfo")}
                            onDeleteClick={() => setIsDeleteModalOpen(true)}
                            onEditClick={() => setIsEditModalOpen(true)}
                        />
                    </div>
                </div>
            )}

            {/* DELETE MODAL */}
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

            {/* EDIT MODAL */}
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

                                        return (
                                            <BeerCard
                                                key={beer.id}
                                                type='collection info'
                                                beerName={beer.name}
                                                brewery={
                                                    beer.tagline || beer.brewery
                                                }
                                                beerId={beer.id}
                                                image={beerData?.image} // ✅ FIXED
                                                onKnowMoreClick={() =>
                                                    handleKnowMore(beer.id)
                                                }
                                            />
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
