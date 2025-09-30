import classNames from "classnames";
import styles from "./InputBox.module.css";

function InputBox({ inputName, placeholder, type, value, onChange }) {
    const InputHeaderClasses = classNames(styles.input_name, {
        [styles.hidden]: type === "secondary",
    });

    return (
        <div className={styles.container}>
            <div className={InputHeaderClasses}>
                <p className={styles.input_name}>{inputName}</p>
            </div>
            <input
                className={styles.input_box}
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputBox;
