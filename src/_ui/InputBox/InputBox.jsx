import classNames from "classnames";
import styles from "./InputBox.module.css";

function InputBox({ inputName, placeholder, type, value, onChange }) {
    const countries = [
        { value: "ca", label: "Canada", flag: "🇨🇦" },
        { value: "br", label: "Brazil", flag: "🇧🇷" },
        { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
        { value: "de", label: "Germany", flag: "🇩🇪" },
        { value: "mx", label: "Mexico", flag: "🇲🇽" },
        { value: "pt", label: "Portugal", flag: "🇵🇹" },
        { value: "es", label: "Spain", flag: "🇪🇸" },
    ];
    return (
        <>
            {type === "regular" && (
                <div className={styles.input_container}>
                    <input
                        className={styles.input_box}
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
            {type === "label" && (
                <div className={styles.label_container}>
                    <h3>{placeholder}</h3>
                    <input
                        className={styles.input_box}
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
        </>
    );
}

export default InputBox;
