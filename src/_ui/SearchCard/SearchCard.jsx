import styles from "./SearchCard.module.css";
import beercan from "../../assets/beercan.png";

function SearchCard({ image, name, brewery, onKnowMoreClick }) {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_content}>
                <img
                    src={image || beercan}
                    alt={name}
                    className={styles.card_image}
                />
                <div className={styles.card_text}>
                    <h3 className={styles.card_title}>{name}</h3>
                    <p className={styles.card_subtitle}>{brewery}</p>
                </div>
            </div>
            <div
                className={styles.card_button}
                onClick={onKnowMoreClick}>
                <svg
                    className={styles.card_icon}
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6.27107 4.6468C6.52133 4.39654 6.92709 4.39654 7.17735 4.6468L10.3815 7.85099C10.6318 8.10126 10.6318 8.50701 10.3815 8.75728L7.17735 11.9615C6.92709 12.2117 6.52133 12.2117 6.27107 11.9615C6.02081 11.7112 6.02081 11.3054 6.27107 11.0552L9.02212 8.30414L6.27107 5.55309C6.02081 5.30282 6.02081 4.89707 6.27107 4.6468Z'
                        fill='currentcolor'
                    />
                </svg>
            </div>
        </div>
    );
}

export default SearchCard;
