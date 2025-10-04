import styles from "./ScrollList.module.css";
import beercan from "../../assets/beercan.png";
import BeerCard from "../BeerCard/BeerCard";

function ScrollList({ onItemClick, collection_name, type, section_name }) {
    return (
        <>
            {type === "collections" && (
                <div className={styles.section_container}>
                    <div className={styles.section_name}>{section_name}</div>
                        <div className={styles.card_container}>
                            <BeerCard
                                type='scroll'
                                collection_name='ChangeNameHere'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                             <div className={styles.scroll_arrow}>
                            <svg
                                width='34'
                                height='32'
                                viewBox='0 0 17 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className={styles.icon}>
                                <path
                                    fill='currentColor'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M6.76533 4.45137C7.0156 4.20111 7.42135 4.20111 7.67162 4.45137L10.8758 7.65556C11.1261 7.90582 11.1261 8.31158 10.8758 8.56184L7.67162 11.766C7.42135 12.0163 7.0156 12.0163 6.76533 11.766C6.51507 11.5158 6.51507 11.11 6.76533 10.8598L9.51638 8.1087L6.76533 5.35765C6.51507 5.10739 6.51507 4.70163 6.76533 4.45137Z'
                                />
                            </svg>
                        </div>
                        </div>
        

                       
                </div>
            )}
            {type === "wishlist" && (
                 <div className={styles.section_container}>
                    <div className={styles.section_name}>{section_name}</div>
                        <div className={styles.card_container}>
                            <BeerCard
                                type='scroll'
                                collection_name='ChangeNameHere'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                             <div className={styles.scroll_arrow}>
                            <svg
                                width='34'
                                height='32'
                                viewBox='0 0 17 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className={styles.icon}>
                                <path
                                    fill='currentColor'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M6.76533 4.45137C7.0156 4.20111 7.42135 4.20111 7.67162 4.45137L10.8758 7.65556C11.1261 7.90582 11.1261 8.31158 10.8758 8.56184L7.67162 11.766C7.42135 12.0163 7.0156 12.0163 6.76533 11.766C6.51507 11.5158 6.51507 11.11 6.76533 10.8598L9.51638 8.1087L6.76533 5.35765C6.51507 5.10739 6.51507 4.70163 6.76533 4.45137Z'
                                />
                            </svg>
                        </div>
                        </div>
        

                       
                </div>
    
            )}
            {type === "reviews" && (
              <div className={styles.section_container}>
                    <div className={styles.section_name}>{section_name}</div>
                        <div className={styles.card_container}>
                            <BeerCard
                                type='scroll'
                                collection_name='ChangeNameHere'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='collection'
                            />
                            <BeerCard
                                type='scroll'
                                collection_name='f'
                            />
                             <div className={styles.scroll_arrow}>
                            <svg
                                width='34'
                                height='32'
                                viewBox='0 0 17 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className={styles.icon}>
                                <path
                                    fill='currentColor'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M6.76533 4.45137C7.0156 4.20111 7.42135 4.20111 7.67162 4.45137L10.8758 7.65556C11.1261 7.90582 11.1261 8.31158 10.8758 8.56184L7.67162 11.766C7.42135 12.0163 7.0156 12.0163 6.76533 11.766C6.51507 11.5158 6.51507 11.11 6.76533 10.8598L9.51638 8.1087L6.76533 5.35765C6.51507 5.10739 6.51507 4.70163 6.76533 4.45137Z'
                                />
                            </svg>
                        </div>
                        </div>
        

                       
                </div>
            
            )}
        </>
    );
}

export default ScrollList;
