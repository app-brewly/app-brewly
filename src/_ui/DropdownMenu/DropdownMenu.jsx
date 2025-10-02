import styles from "./DropdownMenu.module.css";
import { useState } from "react";

function DropdownMenu({ list, placeholder, type, onSelect }) {
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
                            <span className={styles.flag}>{c.flag}</span>{" "}
                            {c.label}
                        </li>
                    ))}
                </ul>
            )}
            {type === "icon_dropdown" && isOpen && (
                <div className={styles.menu_container}>
                    <ul className={styles.menu}>
                        {list.map((c) => (
                            <li
                                key={c.value}
                                className={styles.option}
                                onClick={() => onSelect(c)}>
                                {c.flag && (
                                    <span className={styles.icon}>
                                        {c.flag}
                                    </span>
                                )}
                                <span>{c.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
