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
            {type === "account" && (
                <div className={styles.label_container}>
                    <h3 className={styles.account_info_title}>{inputName}</h3>
                    <input
                        className={styles.input_box}
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
            {type === "number" && (
                <div className={styles.label_container}>
                    <h3>{inputName}</h3>
                    <div className={styles.number_input_container}>
                        <p className={styles.flag}>🇨🇦+1</p>
                        <input
                            className={styles.phone_number_input}
                            type='text'
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default InputBox;
