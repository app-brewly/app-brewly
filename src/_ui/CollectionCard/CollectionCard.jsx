import CreateCollection from "../CreateCollection/CreateCollection";
import styles from "./CollectionCard.module.css";
import beercan from "../../assets/beercan.png";

function CollectionCard({ collection_name, onClick }) {
    return (
        <div className={styles.card_container}>
            <div className={styles.collection_img_container}>
                <img
                    src={beercan}
                    alt='/'
                    className={styles.collection_img}></img>
            </div>
            <p className={styles.collection_title}>{collection_name}</p>
            <div className={styles.collection_card_container}>
                <div className={styles.collection_button}>
                    <CreateCollection onClick={onClick} />
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;
