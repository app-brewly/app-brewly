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

            {type === "small" && (
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

            {type === "saved" && (
                <div className={styles.create_collection_container}>
                    <div
                        className={styles.added_button_container}
                        onClick={onClick}>
                        <svg
                            className={styles.added_collection_icon}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <mask
                                id='mask0_197_1805'
                                mask-type='alpha'
                                maskUnits='userSpaceOnUse'
                                x='0'
                                y='0'
                                width='24'
                                height='24'>
                                <rect
                                    width='24'
                                    height='24'
                                    fill='#D9D9D9'
                                />
                            </mask>
                            <g mask='url(#mask0_197_1805)'>
                                <path
                                    d='M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z'
                                    fill='currentcolor'
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateCollection;
