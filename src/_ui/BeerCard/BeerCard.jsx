import styles from "./BeerCard.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";
import ButtonKnowMore from "../ButtonKnowMore/ButtonKnowMore.jsx";
import beercan from "../../assets/beercan.png";

function BeerCard({
    type,
    collection_name,
    onCollectionClick,
    onKnowMoreClick,
    onFavClick,
    // Props from API
    beerName,
    brewery,
    image,
    beerId,
}) {
    return (
        <div>
            {type === "feed" && (
                <div className={styles.card_container}>
                    <img
                        src={image || beercan}
                        alt={beerName || "Beer can"}
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>
                            {beerName || "Beer not available"}
                        </h3>
                        <p className={styles.card_subtitle}>
                            {brewery || "Brewery not available."}
                        </p>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonFav onClick={onFavClick} />
                        <ButtonKnowMore onClick={onKnowMoreClick} />
                    </div>
                </div>
            )}
            {type === "collections" && (
                <div className={styles.collection_container}>
                    <img
                        src={beercan}
                        alt='Beer can'
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>{collection_name}</h3>
                    </div>
                </div>
            )}
            {type === "collection info" && (
                <div className={styles.card_container}>
                    <img
                        src={image || beercan}
                        alt={beerName || "Beer can"}
                        className={styles.card_image}
                    />
                    <div className={styles.card_text}>
                        <h3 className={styles.card_title}>
                            {beerName || "Beer name"}
                        </h3>
                        <p className={styles.card_subtitle}>
                            {brewery || "Brewery name"}
                        </p>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonKnowMore onClick={onKnowMoreClick} />
                    </div>
                </div>
            )}
            {type === "scroll" && (
                <div className={styles.scroll_container}>
                    <img
                        src={beercan}
                        alt='Beer can'
                        className={styles.scroll_image}
                    />

                    <h3 className={styles.scroll_title}>{collection_name}</h3>
                </div>
            )}
        </div>
    );
}

export default BeerCard;
