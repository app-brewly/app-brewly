import beercan from "../../assets/beercan.png";
import styles from "./CollectionInfoBox.module.css";

function CollectionInfoBox({
    name,
    dateCreated,
    dateEdited,
    itemNumbers,
    image,
}) {
    return (
        <div className={styles.collection_info_container}>
            <div className={styles.img_container}>
                <img
                    className={styles.collection_img}
                    src={image || beercan}
                    alt={name}></img>
            </div>
            <hr className={styles.divider} />
            <div className={styles.text_info_container}>
                <h2 className={styles.collection_subtitle}>
                    Collection Information
                </h2>
                <div className={styles.info_row}>
                    <p className={styles.info_title}>Collection name: </p>
                    <p className={styles.info_result}>{name}</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.info_title}>Date Created: </p>
                    <p className={styles.info_result}>{dateCreated}</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.info_title}>Number of Items: </p>
                    <p className={styles.info_result}>{itemNumbers}</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.info_title}>Last Updated: </p>
                    <p className={styles.info_result}>{dateEdited}</p>
                </div>
            </div>
        </div>
    );
}

export default CollectionInfoBox;
