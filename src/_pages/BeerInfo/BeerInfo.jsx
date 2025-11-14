import styles from "./BeerInfo.module.css";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import ArrowBack from "../../_ui/ArrowBack/ArrowBack";
import Menu from "../../_ui/Menu/Menu";
import ButtonFav from "../../_ui/ButtonFav/ButtonFav";
import BeerSpecs from "../../_ui/BeerSpecs/BeerSpecs";
import beercan from "../../assets/beercan.png";
import Modal from "../../_ui/Modal/Modal";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import CreateCollection from "../../_ui/CreateCollection/CreateCollection";
import InputBox from "../../_ui/InputBox/InputBox";
import Button from "../../_ui/Button/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBeerById, transformBeerData } from "../../services/beerApi";

function BeerInfo() {
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Collections modals
    const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
    const [isCreateCollectionOpen, setIsCreateCollectionOpen] = useState(false);
    const [collections, setCollections] = useState([]);
    const [newCollectionName, setNewCollectionName] = useState("");
    const [selectedBeer, setSelectedBeer] = useState(null);

    // Reviews
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    // Load beer
    useEffect(() => {
        const loadBeer = async () => {
            if (!id) {
                setError("Beer ID not provided");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const data = await fetchBeerById(id);
                const transformedBeer = transformBeerData(data);
                setBeer(transformedBeer);
            } catch (err) {
                console.error(err);
                setError("Error loading beer information.");
            } finally {
                setLoading(false);
            }
        };
        loadBeer();
    }, [id]);

    // Load collections from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("collections");
        if (saved) setCollections(JSON.parse(saved));
    }, []);

    // Load reviews from localStorage
    useEffect(() => {
        const savedReviews = localStorage.getItem(`reviews_${id}`);
        if (savedReviews) setReviews(JSON.parse(savedReviews));
    }, [id]);

    const handleFav = () => {
        setSelectedBeer(beer);
        const saved = localStorage.getItem("collections");
        if (saved) setCollections(JSON.parse(saved));
        setIsCollectionModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCollectionModalOpen(false);
        setIsCreateCollectionOpen(false);
    };

    const handleCreateCollection = () => {
        setIsCollectionModalOpen(false);
        setIsCreateCollectionOpen(true);
    };

    const handleSaveNewCollection = () => {
        if (!newCollectionName.trim() || !selectedBeer) return;

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
                if (!beerExists)
                    existing.beers.push({
                        id: selectedBeer.id,
                        name: selectedBeer.name,
                    });
                updatedCollections = [...prev];
            } else {
                updatedCollections = [
                    ...prev,
                    {
                        collectionName: trimmedName,
                        beers: [
                            { id: selectedBeer.id, name: selectedBeer.name },
                        ],
                    },
                ];
            }
            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );
            return updatedCollections;
        });
        setNewCollectionName("");
        setTimeout(() => handleCloseModal(), 0);
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

    // Reviews handlers
    const handleAddReview = () => {
        if (!newReview.trim()) return;
        const updatedReviews = [...reviews, newReview.trim()];
        setReviews(updatedReviews);
        localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
        setNewReview("");
    };

    const handleEditReview = (index) => {
        setEditingIndex(index);
        setNewReview(reviews[index]);
    };

    const handleSaveEditedReview = () => {
        if (!newReview.trim()) return;
        const updatedReviews = [...reviews];
        updatedReviews[editingIndex] = newReview.trim();
        setReviews(updatedReviews);
        localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
        setNewReview("");
        setEditingIndex(null);
    };

    const handleDeleteReview = (index) => {
        const updatedReviews = reviews.filter((_, i) => i !== index);
        setReviews(updatedReviews);
        localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
    };

    if (loading) {
        return (
            <div className={styles.page_container}>
                <div className={styles.page_header}>
                    <StatusBar />
                    <div className={styles.page_nav}>
                        <ArrowBack />
                    </div>
                </div>
                <div className={styles.page_content}>
                    <p className={styles.text}>Loading beer information...</p>
                </div>
                <Menu />
            </div>
        );
    }

    if (error || !beer) {
        return (
            <div className={styles.page_container}>
                <div className={styles.page_header}>
                    <StatusBar />
                    <div className={styles.page_nav}>
                        <ArrowBack />
                    </div>
                </div>
                <div className={styles.page_content}>
                    <p className={styles.text}>{error || "Beer not found"}</p>
                </div>
                <Menu />
            </div>
        );
    }

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <div className={styles.page_nav}>
                    <ArrowBack />
                </div>
            </div>

            <div className={styles.page_beerheader}>
                <div className={styles.page_title}>
                    <h1 className={styles.page_beer}>{beer.name}</h1>
                    <p className={styles.page_brewer}>
                        {beer.tagline || beer.brewery}
                    </p>
                </div>
                <ButtonFav onClick={handleFav} />
            </div>

            {/* Collections Modals */}
            {isCollectionModalOpen && (
                <Modal
                    header='Save it to your Collection'
                    onClose={handleCloseModal}>
                    <CreateCollection
                        type='button'
                        onClick={handleCreateCollection}
                    />
                    {collections.map((col, idx) => (
                        <CollectionCard
                            key={idx}
                            collection_name={col.collectionName}
                            onClick={() =>
                                handleAddToExistingCollection(
                                    col.collectionName
                                )
                            }
                        />
                    ))}
                </Modal>
            )}

            {isCreateCollectionOpen && (
                <Modal
                    header='Save it to your Collection'
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

            <div className={styles.page_content}>
                <img
                    className={styles.page_image}
                    src={beer.image || beercan}
                    alt={`${beer.name} beer`}
                />
                <BeerSpecs
                    abv={beer.abv}
                    ibu={beer.ibu}
                />

                <h3 className={styles.page_spectitle}>
                    {beer.tagline || "Discover this Beer"}
                </h3>
                <p className={styles.page_spectext}>{beer.description}</p>

                {/* Reviews Section */}
                <div className={styles.reviews_section}>
                    <h3>Reviews</h3>
                    {reviews.length === 0 && <p>No reviews yet.</p>}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={styles.review_item}>
                            <p>{review}</p>
                            <div className={styles.review_actions}>
                                <button onClick={() => handleEditReview(index)}>
                                    ✏️
                                </button>
                                <button
                                    onClick={() => handleDeleteReview(index)}>
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className={styles.review_input}>
                        <InputBox
                            type='regular'
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            placeholder={
                                editingIndex !== null
                                    ? "Edit review"
                                    : "Add a review"
                            }
                        />
                        <Button
                            value={editingIndex !== null ? "Save" : "Add"}
                            type='primary'
                            onClick={
                                editingIndex !== null
                                    ? handleSaveEditedReview
                                    : handleAddReview
                            }
                        />
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default BeerInfo;
