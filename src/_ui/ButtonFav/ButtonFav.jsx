import styles from "./ButtonFav.module.css";
import favorite from "../../assets/favorite.svg";
import favoritefilled from "../../assets/favoritefilled.svg";

function ButtonFav({ onClick, isFavorited }) {
    const currentIcon = isFavorited ? favoritefilled : favorite;

    return (
        <div
            className={styles.button_container}
            onClick={onClick}>
            <img
                src={currentIcon}
                alt='Favorite Icon'
                className={styles.button_icon}
            />
        </div>
    );
}

export default ButtonFav;
