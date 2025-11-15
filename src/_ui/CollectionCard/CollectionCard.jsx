import CreateCollection from "../CreateCollection/CreateCollection";
import styles from "./CollectionCard.module.css";
import beercan from "../../assets/beercan.png";

function CollectionCard({ collection_name, onClick, isInCollection }) {
    return (
        <div
            className={`${styles.card_container} ${
                isInCollection ? styles.selected : ""
            }`}>
            <div className={styles.collection_img_container}>
                <img
                    src={beercan}
                    alt={collection_name}
                    className={styles.collection_img}
                />
            </div>

            <p className={styles.collection_title}>{collection_name}</p>

            <div className={styles.collection_card_container}>
                <div className={styles.collection_button}>
                    {isInCollection ? (
                        <CreateCollection
                            type='saved'
                            onClick={onClick}
                            value='Added'
                        />
                    ) : (
                        <CreateCollection
                            type='small'
                            onClick={onClick}
                            value='Added'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;
