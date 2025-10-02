import styles from "./BeerInfo.module.css";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import ArrowBack from "../../_ui/ArrowBack/ArrowBack";
import Menu from "../../_ui/Menu/Menu";
import ButtonFav from "../../_ui/ButtonFav/ButtonFav";
import Tag from "../../_ui/Tag/Tag";
import BeerSpecs from "../../_ui/BeerSpecs/BeerSpecs";
import beercan from "../../assets/beercan.png";
import { useNavigate } from "react-router-dom";

function BeerInfo() {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <div className={styles.page_nav}>
                    <ArrowBack />
                </div>
            </div>

            <div className={styles.page_beerheader}>
                <div className={styles.page_title}>
                    <h1 className={styles.page_beer}>Heineken</h1>
                    <p className={styles.page_brewer}> Heineken N.V.</p>
                </div>

                <ButtonFav />
            </div>
            <div className={styles.page_content}>
                <img
                    className={styles.page_image}
                    src={beercan}
                    alt='Heineken beer can'
                />

                <div className={styles.page_tags}>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>

                <BeerSpecs />
                <h3 className={styles.page_spectitle}>
                    Discover this Lager Beer Can
                </h3>
                <p className={styles.page_spectext}>
                    Heineken Lager Beer, a renowned Dutch brew, is a classic
                    example of a pale lager that has gained global popularity
                    for its crisp and refreshing taste. Brewed with high-quality
                    ingredients including malted barley, water, hops, and yeast,
                    Heineken Lager Beer boasts a distinctive flavor profile
                    characterized by its balanced bitterness and subtle fruity
                    notes. The iconic green can design is instantly recognizable
                    and serves as a symbol of the brand’s longstanding tradition
                    of excellence in brewing. With an ABV (alcohol by volume) of
                    around 5%, Heineken Lager Beer offers a smooth drinking
                    experience that appeals to both seasoned beer enthusiasts
                    and casual drinkers alike. Its light body and clean finish
                    make it an ideal choice for social gatherings or enjoying on
                    its own. Whether sipped straight from the can or poured into
                    a glass to appreciate its golden hue, Heineken Lager Beer
                    continues to be a staple in the world of international
                    beers, setting the standard for quality and consistency
                    across markets worldwide.
                </p>
            </div>
            <Menu className={styles.page_footer} />
        </div>
    );
}

export default BeerInfo;
