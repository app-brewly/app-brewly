import styles from "./CodeBox.module.css";

function CodeBox() {
    return (
        <div className={styles.code_container}>
            <input
                type='text'
                className={styles.box}
            />
            <input
                type='text'
                className={styles.box}
            />
            <input
                type='text'
                className={styles.box}
            />
            <input
                type='text'
                className={styles.box}
            />
            <input
                type='text'
                className={styles.box}
            />
        </div>
    );
}

export default CodeBox;
