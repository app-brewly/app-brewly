import style from "./ButtonKnowMore.module.css";

function ButtonKnowMore({ onClick }) {
    return (
        <div
            className={style.button_container}
            onClick={(e) => {
                if (onClick) {
                    onClick(e);
                }
            }}>
            <p className={style.button_cta}>Know More</p>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='CurrentColor'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.81929 4.50679C7.06955 4.25653 7.47531 4.25653 7.72557 4.50679L10.9298 7.71098C11.18 7.96124 11.18 8.367 10.9298 8.61726L7.72557 11.8215C7.47531 12.0717 7.06955 12.0717 6.81929 11.8215C6.56903 11.5712 6.56903 11.1654 6.81929 10.9152L9.57034 8.16412L6.81929 5.41307C6.56903 5.16281 6.56903 4.75705 6.81929 4.50679Z'
                    fill='CurrentColor'
                />
            </svg>
        </div>
    );
}

export default ButtonKnowMore;
