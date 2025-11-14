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
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [collections, setCollections] = useState([]);
    const [newCollectionName, setNewCollectionName] = useState("");

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

    const handleCreateCollection = () => {
        setIsModalOpen(false);
        setIsCreateModalOpen(true);
    };
    // Load collections on mount and when modal opens
    useEffect(() => {
        const saved = localStorage.getItem("collections");
        if (saved) {
            try {
                setCollections(JSON.parse(saved));
            } catch (error) {
                console.error("Error loading collections:", error);
                setCollections([]);
            }
        } else {
            setCollections([]);
        }
    }, []); // Remove storage event listener for now

    // Reload collections when opening the modal
    const handleFav = (beer) => {
        setSelectedBeer(beer);
        // Reload collections right before opening modal
        const saved = localStorage.getItem("collections");
        if (saved) {
            setCollections(JSON.parse(saved));
        }
        setIsModalOpen(true);
    };
    //When user clicks "Save" after typing a name

    const handleSaveNewCollection = () => {
        console.log("Saving collection:", newCollectionName, selectedBeer);

        if (!newCollectionName.trim() || !selectedBeer) {
            console.log("Validation failed");
            return;
        }

        const trimmedName = newCollectionName.trim();

        setCollections((prev) => {
            const existing = prev.find(
                (c) =>
                    c.collectionName.toLowerCase() === trimmedName.toLowerCase()
            );

            let updatedCollections;

            if (existing) {
                const beerExists = existing.beers.some(
                    (b) => b.id === selectedBeer.id
                );
                if (!beerExists) {
                    existing.beers.push({
                        id: selectedBeer.id,
                        name: selectedBeer.name,
                        image: selectedBeer.image,
                        tagline: selectedBeer.tagline,
                        brewery: selectedBeer.brewery,
                    });
                }
                updatedCollections = [...prev];
            } else {
                updatedCollections = [
                    ...prev,
                    {
                        collectionName: trimmedName,
                        beers: [
                            {
                                id: selectedBeer.id,
                                name: selectedBeer.name,
                                image: selectedBeer.image,
                                tagline: selectedBeer.tagline,
                                brewery: selectedBeer.brewery,
                            },
                        ],
                    },
                ];
            }

            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );
            console.log("Collections after save:", updatedCollections);

            return updatedCollections;
        });

        setNewCollectionName("");

        setTimeout(() => {
            handleCloseModal();
        }, 0);
    };

    const handleAddToExistingCollection = (collectionName) => {
        if (!selectedBeer) return;

        setCollections((prev) => {
            const updatedCollections = prev.map((col) => {
                if (col.collectionName === collectionName) {
                    const beerExists = col.beers.some(
                        (b) => b.id === selectedBeer.id
                    );
                    if (!beerExists) {
                        return {
                            ...col,
                            beers: [
                                ...col.beers,
                                {
                                    id: selectedBeer.id,
                                    name: selectedBeer.name,
                                    image: selectedBeer.image,
                                    tagline: selectedBeer.tagline,
                                    brewery: selectedBeer.brewery,
                                },
                            ],
                        };
                    }
                }
                return col;
            });

            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );
            return updatedCollections;
        });

        handleCloseModal();
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
                                                onFavClick={() =>
                                                    handleFav(beer)
                                                }
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
                                {collections.map((col, index) => (
                                    <CollectionCard
                                        key={index}
                                        collection_name={col.collectionName}
                                        onClick={() =>
                                            handleAddToExistingCollection(
                                                col.collectionName
                                            )
                                        }
                                    />
                                ))}
                            </Modal>
                        </>
                    )}
                    {isCreateModalOpen && (
                        <Modal
                            header='Save it to your Collection'
                            onClose={handleCloseModal}>
                            <InputBox
                                type='regular'
                                value={newCollectionName}
                                onChange={(e) =>
                                    setNewCollectionName(e.target.value)
                                }
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
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default Feed;
