import styles from "./DropdownMenu.module.css";
import { useState } from "react";

function DropdownMenu({ list, placeholder, type, onSelect, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (item) => {
        setSelected(item);
        setIsOpen(false);
        onSelect && onSelect(item);
    };

    return (
        <div className={styles.dropdown}>
            <h3>{title}</h3>
            {type !== "icon_dropdown" && (
                <div
                    className={styles.selected}
                    onClick={toggleDropdown}>
                    {selected ? (
                        <>
                            {selected.flag} {selected.label}
                        </>
                    ) : (
                        <span className={styles.placeholder}>
                            {placeholder}
                        </span>
                    )}
                    <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
                </div>
            )}
            {isOpen && (
                <ul className={styles.menu}>
                    {list.map((c) => (
                        <li
                            key={c.value}
                            className={styles.option}
                            onClick={() => handleSelect(c)}>
                            <span className={styles.flag}>{c.flag}</span>
                            {"  "}
                            {c.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
