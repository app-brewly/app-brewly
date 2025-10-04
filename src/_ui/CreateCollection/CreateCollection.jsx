import styles from "./CreateCollection.module.css";
import classNames from "classnames";

function CreateCollection({ type, onClick }) {
    return (
        <div>
            {type === "button" && (
                <div className={styles.create_collection_container}>
                    <div
                        className={styles.add_button_container}
                        onClick={onClick}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className={styles.create_collection_icon}>
                            <path
                                d='M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z'
                                fill='currentcolor'
                            />
                        </svg>
                    </div>
                    <p className={styles.collection_header}>
                        Create a new collection
                    </p>
                </div>
            )}
            {type !== "button" && (
                <div className={styles.create_collection_container}>
                    <div
                        className={styles.add_button_container}
                        onClick={onClick}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className={styles.create_collection_icon}>
                            <path
                                d='M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z'
                                fill='currentcolor'
                            />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateCollection;
