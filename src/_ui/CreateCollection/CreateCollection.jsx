import styles from "./CreateCollection.module.css";
import classNames from "classnames";

function CreateCollection({ type }) {
    return (
        <div>
            <div className={styles.add_button_container}>
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.create_collection_icon}>
                    <path
                        d='M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z'
                        fill='white'
                    />
                </svg>
            </div>
            {type === "button" && (
                <p className={styles.collection_header}>
                    Create a new collection
                </p>
            )}
        </div>
    );
}

export default CreateCollection;
