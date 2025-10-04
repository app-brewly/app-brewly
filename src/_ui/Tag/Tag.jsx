import styles from "./Tag.module.css";

function Tag({ type, title }) {
    return (
        <>
            {type === "primary" && (
                <div className={styles.primary_container}>
                    <p>{title}</p>
                </div>
            )}
            {type === "secondary" && (
                <div className={styles.secondary_container}>
                    <p>{title}</p>
                </div>
            )}
            {type === "tertiary" && (
                <div className={styles.tertiary_container}>
                    <p>{title}</p>
                </div>
            )}
        </>
    );
}

export default Tag;
