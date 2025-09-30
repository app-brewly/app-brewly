import styles from "./BeerCard.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";
import ButtonKnowMore from "../ButtonKnowMore/ButtonKnowMore.jsx";
import beercan from "../../assets/beercan.png";

function BeerCard() {
    return (
        <div className={styles.card_container}>
            <img
                src={beercan}
                alt='Heineken beer can'
                className={styles.card_image}
            />
            <div className={styles.card_text}>
                <h3 className={styles.card_title}>Heineken</h3>
                <p className={styles.card_subtitle}>Heineken N.V.</p>
            </div>

            <div className={styles.button_container}>
                <ButtonFav />
                <ButtonKnowMore />
            </div>
        </div>
    );
}

export default BeerCard;
