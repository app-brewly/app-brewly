import styles from "./BeerInfo.module.css";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import ArrowBack from "../../_ui/ArrowBack/ArrowBack";
import Menu from "../../_ui/Menu/Menu";
import ButtonFav from "../../_ui/ButtonFav/ButtonFav";
import Tag from "../../_ui/Tag/Tag";
import BeerSpecs from "../../_ui/BeerSpecs/BeerSpecs";
import beercan from "../../assets/beercan.png";
import Modal from "../../_ui/Modal/Modal";
import CollectionCard from "../../_ui/CollectionCard/CollectionCard";
import CreateCollection from "../../_ui/CreateCollection/CreateCollection";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBeerById, transformBeerData } from "../../services/beerApi";

function BeerInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Added this to get the ID from the API for each beer

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
                setError(null);
                const data = await fetchBeerById(id);

                // API returns a single object, not an array - beer data
                const transformedBeer = transformBeerData(data);
                setBeer(transformedBeer);
            } catch (err) {
                console.error("Error loading beer:", err);
                setError(
                    "Error loading beer information. Please try again later."
                );
            } finally {
                setLoading(false);
            }
        };

        loadBeer();
    }, [id]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFav = () => {
        setIsModalOpen(true);
    };

    // Loading msg while loading
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
                <Menu className={styles.page_footer} />
            </div>
        );
    }

    // If error
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
                <Menu className={styles.page_footer} />
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
            {isModalOpen && (
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
            </div>
            <Menu className={styles.page_footer} />
        </div>
    );
}

export default BeerInfo;
