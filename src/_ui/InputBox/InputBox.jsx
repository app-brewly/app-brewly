import classNames from "classnames";
import styles from "./InputBox.module.css";

function InputBox({ inputName, placeholder, type, value, onChange }) {
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
