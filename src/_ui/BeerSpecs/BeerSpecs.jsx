import styles from "./BeerSpecs.module.css";

function BeerSpecs({ abv, ibu }) {
    // If values not available
    const displayAbv = abv !== null && abv !== undefined ? `${abv}%` : "N/A";
    const displayIbu = ibu !== null && ibu !== undefined ? ibu : "N/A";

    return (
        <div className={styles.specs_container}>
            <h3 className={styles.specs_title}>Specifications</h3>

            <div className={styles.specs_item}>
                <div className={styles.specs_type}>
                    <svg
                        className={styles.specs_icon}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'>
                        <path
                            d='M9 6.46777H11V4.46777H9V6.46777ZM13 6.46777V4.46777H15V6.46777H13ZM9 14.4678V12.4678H11V14.4678H9ZM17 10.4678V8.46777H19V10.4678H17ZM17 14.4678V12.4678H19V14.4678H17ZM13 14.4678V12.4678H15V14.4678H13ZM17 6.46777V4.46777H19V6.46777H17ZM11 8.46777V6.46777H13V8.46777H11ZM5 20.4678V4.46777H7V6.46777H9V8.46777H7V10.4678H9V12.4678H7V20.4678H5ZM15 12.4678V10.4678H17V12.4678H15ZM11 12.4678V10.4678H13V12.4678H11ZM9 10.4678V8.46777H11V10.4678H9ZM13 10.4678V8.46777H15V10.4678H13ZM15 8.46777V6.46777H17V8.46777H15Z'
                            fill='black'
                        />
                    </svg>
                    <p
                        className={`${styles.specs_text} ${styles.specs_type_text}`}>
                        Score
                    </p>
                </div>

                <p className={`${styles.specs_text} ${styles.specs_item_text}`}>
                    787/1000
                </p>
            </div>

            <div className={styles.specs_item}>
                <div className={styles.specs_type}>
                    <svg
                        className={styles.specs_icon}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'>
                        <path
                            d='M2.04999 21.4677L8.49999 12.4677H13.55L21 3.76768V21.4677H2.04999ZM3.79999 15.6427L2.19999 14.4927L6.49999 8.46768H11.55L16.25 2.99268L17.75 4.29268L12.45 10.4677H7.49999L3.79999 15.6427ZM5.94999 19.4677H19V9.16768L14.45 14.4677H9.49999L5.94999 19.4677Z'
                            fill='black'
                        />
                    </svg>
                    <p
                        className={`${styles.specs_text} ${styles.specs_type_text}`}>
                        ABV
                    </p>
                </div>
                <p className={`${styles.specs_text} ${styles.specs_item_text}`}>
                    {displayAbv}
                </p>
            </div>

            <div className={styles.specs_item}>
                <div className={styles.specs_type}>
                    <svg
                        className={styles.specs_icon}
                        id='fi_8468875'
                        enableBackground='new 0 0 100 100'
                        height='512'
                        viewBox='0 0 100 100'
                        width='512'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='m75.125 27.307c-7.694-8.437-18.22-9.918-22.875-10.145v-6.912c0-2.978-4.5-2.978-4.5 0v6.913c-4.655.227-15.178 1.704-22.875 10.144-10.005 10.969-8.736 28.438-8.678 29.177.094 1.169 1.072 2.071 2.244 2.071.153 0 1.313-.027 3.146-.39.857 7.831 3.6 17.347 9.07 22.378.673.617 1.63.758 2.426.404.902-.395 1.804-.836 2.704-1.311 2.772 4.304 7.776 9.583 13.257 12.151.599.285 1.311.285 1.91 0 5.481-2.568 10.485-7.847 13.257-12.151.9.475 1.802.916 2.704 1.311.796.354 1.753.213 2.426-.404 5.47-5.03 8.214-14.546 9.07-22.378 1.833.363 2.993.39 3.146.39 1.172 0 2.15-.902 2.244-2.071.06-.739 1.329-18.209-8.676-29.177zm-19.617 15.773c1.095 1.326 2.189 2.5 3.279 3.608-1.268 4.624-4.421 10.195-8.787 15.431-4.366-5.236-7.519-10.808-8.787-15.431 1.09-1.108 2.184-2.282 3.279-3.608 2.633-3.19 4.358-6.871 5.508-10.372 1.149 3.501 2.875 7.183 5.508 10.372zm-27.311-12.738c6.354-6.967 15.311-8.385 19.438-8.657-.328 4.011-1.614 12.475-6.612 18.53-8.256 9.999-16.567 12.776-20.399 13.547.029-4.849.873-16.075 7.573-23.42zm4.489 45.832c-3.821-4.428-6.07-12.52-6.708-19.266 3.257-1.193 7.289-3.247 11.593-6.831 1.817 5.099 5.159 10.479 9.388 15.409-4.156 4.301-9.056 8.143-14.273 10.688zm17.314 11.054c-4.104-2.238-8.05-6.364-10.348-9.891 3.646-2.375 7.168-5.291 10.348-8.528 3.18 3.237 6.702 6.153 10.348 8.528-2.298 3.526-6.244 7.653-10.348 9.891zm17.314-11.054c-5.218-2.545-10.117-6.387-14.273-10.687 4.229-4.93 7.571-10.311 9.388-15.409 4.304 3.583 8.336 5.638 11.593 6.831-.637 6.745-2.887 14.837-6.708 19.265zm-8.337-35.959c-4.98-6.032-6.272-14.511-6.609-18.53 4.131.272 13.084 1.693 19.436 8.657 6.677 7.318 7.532 18.56 7.567 23.417-3.842-.771-12.144-3.554-20.394-13.544z'></path>
                    </svg>
                    <p
                        className={`${styles.specs_text} ${styles.specs_type_text}`}>
                        IBU
                    </p>
                </div>
                <p className={`${styles.specs_text} ${styles.specs_item_text}`}>
                    {displayIbu}
                </p>
            </div>

            <div className={styles.specs_item}>
                <div className={styles.specs_type}>
                    <svg
                        className={styles.specs_icon}
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='19'
                        viewBox='0 0 18 21'
                        fill='none'>
                        <path
                            d='M15.0488 1.14087C14.8017 1.14087 14.568 1.19827 14.3604 1.30048C12.8299 2.05369 11.2507 2.70184 9.54494 2.70184H8.06482C6.3591 2.70184 4.77982 2.05369 3.2494 1.30048C3.04176 1.19827 2.80808 1.14087 2.56098 1.14087C1.69885 1.14087 1 1.83972 1 2.70184V5.8238C1 6.68584 1.69885 7.38477 2.56098 7.38477C2.80796 7.38477 3.04152 7.32741 3.24913 7.22528C4.77975 6.4723 6.35899 5.8238 8.06478 5.8238H9.54494C11.2507 5.8238 12.83 6.4723 14.3606 7.22528C14.5682 7.32741 14.8018 7.38477 15.0488 7.38477C15.9109 7.38477 16.6098 6.68584 16.6098 5.8238V2.70184C16.6098 1.83972 15.9109 1.14087 15.0488 1.14087Z'
                            stroke='black'
                            strokeWidth='1.56098'
                            strokeMiterlimit='10'
                        />
                        <path
                            d='M9.75593 5.83301L8.02441 7.38462L9.58539 8.94559L8.02441 10.5066L9.58539 12.0675L8.02441 13.6285L9.58539 15.1895L8.02441 16.7505L9.58539 18.3114L8.02441 19.7944'
                            stroke='black'
                            strokeWidth='1.56098'
                            strokeMiterlimit='10'
                        />
                    </svg>
                    <p
                        className={`${styles.specs_text} ${styles.specs_type_text}`}>
                        Closure
                    </p>
                </div>
                <p className={`${styles.specs_text} ${styles.specs_item_text}`}>
                    Pull Tab
                </p>
            </div>

            <hr className={styles.divider} />
        </div>
    );
}

export default BeerSpecs;
