import styles from "./BeerCard.module.css";
import ButtonFav from "../ButtonFav/ButtonFav";
import ButtonKnowMore from "../ButtonKnowMore/ButtonKnowMore.jsx";
import beercan from "../../assets/beercan.png";
import classNames from "classnames";

function BeerCard({ type }) {
    const ButtonClasses = classNames(styles.button_container, {
        [styles.buttons_hidden]: type === "collections",
    });
    const SubtitleClasses = classNames(styles.card_subtitle, {
        [styles.subtitle_hidden]: type === "collections",
    });

    return (
        <div className={styles.card_container}>
            <img
                src={beercan}
                alt='Heineken beer can'
                className={styles.card_image}
            />
            <div className={styles.card_text}>
                <h3 className={styles.card_title}>Heineken</h3>
                <p className={SubtitleClasses}>Heineken N.V.</p>
            </div>

            <div className={ButtonClasses}>
                <ButtonFav />
                <ButtonKnowMore />
            </div>
        </div>
    );
}

export default BeerCard;
