import { useState } from "react";
import styles from "./Search.module.css";

function Search({
    value,
    onChange,
    placeholder = "Search...",
    onKeyDown,
    onFilterChange,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onFilterChange(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.search_container}>
            {/* Search icon */}
            <svg
                className={styles.search_icon}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 27'
                fill='none'>
                <path
                    d='M9.61593 20.2319C6.9284 20.2319 4.65386 19.3011 2.79232 17.4395C0.930773 15.578 0 13.3035 0 10.6159C0 7.9284 0.930773 5.65386 2.79232 3.79232C4.65386 1.93077 6.9284 1 9.61593 1C12.3035 1 14.578 1.93077 16.4395 3.79232C18.3011 5.65386 19.2319 7.9284 19.2319 10.6159C19.2319 11.7008 19.0593 12.724 18.7141 13.6856C18.3689 14.6472 17.9004 15.4979 17.3087 16.2376L25.5932 24.522C25.8644 24.7933 26 25.1385 26 25.5576C26 25.9768 25.8644 26.322 25.5932 26.5932C25.322 26.8644 24.9768 27 24.5576 27C24.1385 27 23.7933 26.8644 23.522 26.5932L15.2376 18.3087C14.4979 18.9004 13.6472 19.3689 12.6856 19.7141C11.724 20.0593 10.7008 20.2319 9.61593 20.2319ZM9.61593 17.2731C11.4651 17.2731 13.037 16.6259 14.3314 15.3314C15.6259 14.037 16.2731 12.4651 16.2731 10.6159C16.2731 8.76671 15.6259 7.19488 14.3314 5.90043C13.037 4.60597 11.4651 3.95875 9.61593 3.95875C7.76671 3.95875 6.19488 4.60597 4.90043 5.90043C3.60597 7.19488 2.95875 8.76671 2.95875 10.6159C2.95875 12.4651 3.60597 14.037 4.90043 15.3314C6.19488 16.6259 7.76671 17.2731 9.61593 17.2731Z'
                    fill='currentColor'
                />
            </svg>

            {/* Input */}
            <input
                type='text'
                className={styles.search_input}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
            />

            {/* Filter icon */}
            <svg
                className={styles.filter_icon}
                onClick={() => setIsOpen(!isOpen)}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <mask
                    id='mask0_330_151'
                    mask-type='alpha'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='24'
                    height='24'>
                    <rect
                        width='24'
                        height='24'
                        fill='#D9D9D9'
                    />
                </mask>
                <g mask='url(#mask0_330_151)'>
                    <path
                        d='M5 20V13H3V11H9V13H7V20H5ZM5 9V4H7V9H5ZM9 9V7H11V4H13V7H15V9H9ZM11 20V11H13V20H11ZM17 20V17H15V15H21V17H19V20H17ZM17 13V4H19V13H17Z'
                        fill='#1C1B1F'
                    />
                </g>
            </svg>

            {/* Dropdown */}
            {isOpen && (
                <div className={styles.dropdown}>
                    <p
                        className={styles.dropdown_item}
                        onClick={() => handleSelect("name")}>
                        Name
                    </p>
                    <p
                        className={styles.dropdown_item}
                        onClick={() => handleSelect("abv")}>
                        ABV
                    </p>
                    <p
                        className={styles.dropdown_item}
                        onClick={() => handleSelect("ibu")}>
                        IBU
                    </p>
                </div>
            )}
        </div>
    );
}

export default Search;
