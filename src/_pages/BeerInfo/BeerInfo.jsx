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
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Reviews
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    //Favorites
    const [isFavorited, setIsFavorited] = useState(false);

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

    //loading the favorite fill state

    useEffect(() => {
        if (!beer) return;

        const savedCollections =
            JSON.parse(localStorage.getItem("collections")) || [];

        // Check if this beer is in any collection
        const exists = savedCollections.some((col) =>
            col.beers.some((b) => b.id === beer.id)
        );

        setIsFavorited(exists);
    }, [beer, collections]);

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
        let updatedCollections = [];

        setCollections((prev) => {
            const existing = prev.find(
                (c) =>
                    c.collectionName.toLowerCase() === trimmedName.toLowerCase()
            );

            if (existing) {
                const beerExists = existing.beers.some(
                    (b) => b.id === selectedBeer.id
                );

                if (!beerExists) {
                    existing.beers.push({
                        id: selectedBeer.id,
                        name: selectedBeer.name,
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
                            },
                        ],
                    },
                ];
            }

            localStorage.setItem(
                "collections",
                JSON.stringify(updatedCollections)
            );
            setIsFavorited(true);

            return updatedCollections;
        });

        setNewCollectionName("");
        handleCloseModal();

        //confirmation popup
        setConfirmationMessage(
            `Collection "${trimmedName}" has been created and your beer was added!`
        );
        setShowConfirmation(true);
    };

    const handleAddToExistingCollection = (collectionName) => {
        if (!selectedBeer) return;

        let updatedCollections = [];

        setCollections((prev) => {
            updatedCollections = prev.map((col) => {
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

        // CONFIRMATION POPUP
        setConfirmationMessage(
            `"${selectedBeer.name}" was added to "${collectionName}"!`
        );

        setShowConfirmation(true);
        setIsFavorited(true);
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
                <ButtonFav
                    onClick={handleFav}
                    isFavorited={isFavorited}
                />
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
                    {collections.map((col, index) => {
                        const beerExists = col.beers.some(
                            (b) => b.id === selectedBeer?.id
                        );

                        return (
                            <CollectionCard
                                key={index}
                                collection_name={col.collectionName}
                                isInCollection={beerExists}
                                onClick={() =>
                                    handleAddToExistingCollection(
                                        col.collectionName
                                    )
                                }
                            />
                        );
                    })}
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
                <div className={styles.page_image_container}>
                    <img
                        className={styles.page_image}
                        src={beer.image || beercan}
                        alt={`${beer.name} beer`}
                    />
                </div>
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
                                <div
                                    className={styles.item_container}
                                    onClick={() => handleDeleteReview(index)}>
                                    <svg
                                        className={styles.delete_icon}
                                        width='16'
                                        height='18'
                                        viewBox='0 0 16 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM6 14C6.28333 14 6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14ZM10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V13C9 13.2833 9.09583 13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14Z'
                                            fill='#currentColor'
                                        />
                                    </svg>
                                    Delete Review
                                </div>
                                <div
                                    className={styles.item_container}
                                    onClick={() => handleEditReview(index)}>
                                    <svg
                                        className={styles.edit_icon}
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <mask
                                            id='mask0_22_780'
                                            maskType='alpha'
                                            maskUnits='userSpaceOnUse'
                                            x='0'
                                            y='0'
                                            width='24'
                                            height='24'>
                                            <rect
                                                width='24'
                                                height='24'
                                                fill='#D9D9D9'
                                            />
                                        </mask>
                                        <g mask='url(#mask0_22_780)'>
                                            <path
                                                d='M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18C4 17.45 4.19583 16.9792 4.5875 16.5875C4.97917 16.1958 5.45 16 6 16C6.55 16 7.02083 16.1958 7.4125 16.5875C7.80417 16.9792 8 17.45 8 18C8 18.55 7.80417 19.0208 7.4125 19.4125C7.02083 19.8042 6.55 20 6 20ZM6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM6 8C5.45 8 4.97917 7.80417 4.5875 7.4125C4.19583 7.02083 4 6.55 4 6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4C6.55 4 7.02083 4.19583 7.4125 4.5875C7.80417 4.97917 8 5.45 8 6C8 6.55 7.80417 7.02083 7.4125 7.4125C7.02083 7.80417 6.55 8 6 8ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8ZM18 8C17.45 8 16.9792 7.80417 16.5875 7.4125C16.1958 7.02083 16 6.55 16 6C16 5.45 16.1958 4.97917 16.5875 4.5875C16.9792 4.19583 17.45 4 18 4C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6C20 6.55 19.8042 7.02083 19.4125 7.4125C19.0208 7.80417 18.55 8 18 8ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM13 20V16.925L18.525 11.425C18.675 11.275 18.8417 11.1667 19.025 11.1C19.2083 11.0333 19.3917 11 19.575 11C19.775 11 19.9667 11.0375 20.15 11.1125C20.3333 11.1875 20.5 11.3 20.65 11.45L21.575 12.375C21.7083 12.525 21.8125 12.6917 21.8875 12.875C21.9625 13.0583 22 13.2417 22 13.425C22 13.6083 21.9667 13.7958 21.9 13.9875C21.8333 14.1792 21.725 14.35 21.575 14.5L16.075 20H13ZM14.5 18.5H15.45L18.475 15.45L18.025 14.975L17.55 14.525L14.5 17.55V18.5ZM18.025 14.975L17.55 14.525L18.475 15.45L18.025 14.975Z'
                                                fill='#currentColor'
                                            />
                                        </g>
                                    </svg>
                                    Edit Review
                                </div>
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
                            value={
                                editingIndex !== null
                                    ? "Save Review"
                                    : "Add Review"
                            }
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

export default BeerInfo;
