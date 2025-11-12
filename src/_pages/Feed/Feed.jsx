import StatusBar from "../../_ui/StatusBar/StatusBar";
import NavBar from "../../_ui/NavBar/NavBar";
import BeerCard from "../../_ui/BeerCard/BeerCard";
import Menu from "../../_ui/Menu/Menu";
import styles from "./Feed.module.css";
import Modal from "../../_ui/Modal/Modal";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import CreateCollection from "../../_ui/CreateCollection/CreateCollection";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBeers, transformBeerData } from "../../services/beerApi";

function Feed() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Load beers from API
    useEffect(() => {
        const loadBeers = async () => {
            try {
                setLoading(true);
                //50 beers to start - per page
                const data = await fetchBeers({
                    per_page: 50,
                    page: 1,
                });

                // Transform data to app format
                const transformedBeers = data.map(transformBeerData);
                setBeers(transformedBeers);
            } catch (err) {
                console.error("Erro ao carregar cervejas:", err);
                const errorMessage = err.message || "Erro desconhecido";
                setError(`Erro ao carregar cervejas: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        };

        loadBeers();
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsCreateModalOpen(false);
    };

    const handleKnowMore = (beerId) => {
        if (beerId) {
            // Encode the ID to handle beer info page
            navigate(`/BeerInfo/${encodeURIComponent(beerId)}`);
        }
    };
    const handleFav = () => {
        setIsModalOpen(true);
    };
    const handleCreateCollection = () => {
        setIsModalOpen(false);
        setIsCreateModalOpen(true);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <NavBar type='logo' />
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    {loading && (
                        <div className={styles.text}>
                            <p>Loading beers...</p>
                        </div>
                    )}
                    {error && (
                        <div className={styles.text}>
                            <p>{error}</p>
                        </div>
                    )}
                    {!loading && !error && beers.length > 0 && (
                        <>
                            {/* Beer feed */}
                            {Array.from({
                                length: Math.ceil(beers.length / 2), // displays 2 beers per row
                            }).map((_, rowIndex) => {
                                const startIndex = rowIndex * 2;
                                const rowBeers = beers.slice(
                                    startIndex,
                                    startIndex + 2
                                );
                                return (
                                    <div
                                        key={rowIndex}
                                        className={styles.page_row}>
                                        {rowBeers.map((beer) => (
                                            <BeerCard
                                                key={beer.id}
                                                type='feed'
                                                beerName={beer.name}
                                                brewery={
                                                    beer.tagline || beer.brewery
                                                }
                                                image={beer.image}
                                                beerId={beer.id}
                                                onKnowMoreClick={() =>
                                                    handleKnowMore(beer.id)
                                                }
                                                onFavClick={handleFav}
                                            />
                                        ))}
                                    </div>
                                );
                            })}
                        </>
                    )}
                    {isModalOpen && (
                        <>
                            <Modal
                                header='Save it to your Collection'
                                onClose={handleCloseModal}>
                                <CreateCollection
                                    type='button'
                                    onClick={handleCreateCollection}
                                />
                                <CollectionCard
                                    collection_name='IPA'
                                    onClick={handleCloseModal}
                                />
                                <CollectionCard collection_name='Artesanal' />
                                <CollectionCard collection_name='Favorites' />
                            </Modal>
                        </>
                    )}
                    {isCreateModalOpen && (
                        <Modal
                            header='Save it to your Collection'
                            onClose={handleCloseModal}>
                            <InputBox type='regular' />
                            <div className={styles.button_row}>
                                <Button
                                    value='Cancel'
                                    type='secondary'
                                    onClick={handleCloseModal}
                                />
                                <Button
                                    value='Save'
                                    type='primary'
                                    onClick={handleCloseModal}
                                />
                            </div>
                        </Modal>
                    )}
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Feed;
