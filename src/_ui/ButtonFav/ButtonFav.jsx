import { useState } from "react";
import styles from "./ButtonFav.module.css";
import favorite from "../../assets/favorite.svg";
import favoritefilled from "../../assets/favoritefilled.svg";

function ButtonFav({ onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        if (onClick) onClick();
    };

    const currentIcon = isHovered || isSelected ? favoritefilled : favorite;

    return (
        <div
            className={styles.button_container}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src={currentIcon}
                alt='Favorite Icon'
                className={styles.button_icon}
            />
        </div>
    );
}

export default ButtonFav;
