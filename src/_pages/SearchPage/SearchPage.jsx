import { useState, useEffect } from "react";
import styles from "./SearchPage.module.css";
import Search from "../../_ui/Search/Search";
import Menu from "../../_ui/Menu/Menu";
import SearchCard from "../../_ui/SearchCard/SearchCard";
import StatusBar from "../../_ui/StatusBar/StatusBar";
import ArrowBack from "../../_ui/ArrowBack/ArrowBack";
import { fetchBeers, transformBeerData } from "../../services/beerApi";

function SearchPage() {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch beers on mount
    useEffect(() => {
        const loadBeers = async () => {
            try {
                setLoading(true);
                const data = await fetchBeers({
                    per_page: 50,
                    page: 1,
                });
                const transformed = data.map(transformBeerData);
                setBeers(transformed);
            } catch (err) {
                setError("Failed to load beers");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadBeers();
    }, []);

    // Filter beers by submitted search query
    const filteredBeers = beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle Enter key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchQuery(searchTerm); // Only update the query when Enter is pressed
        }
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <StatusBar />
                <div className={styles.page_nav}>
                    <ArrowBack />
                    <Search
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder='Search beers...'
                        onKeyDown={handleKeyDown} // Add key handler
                    />
                </div>
            </div>

            <div className={styles.page_content}>
                <div className={styles.page_column}>
                    {loading && <p>Loading beers...</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && filteredBeers.length === 0 && (
                        <p>No beers found.</p>
                    )}

                    {!loading &&
                        !error &&
                        filteredBeers.map((beer) => (
                            <SearchCard
                                key={beer.id}
                                image={beer.image}
                                name={beer.name}
                                brewery={beer.tagline || beer.brewery}
                            />
                        ))}
                </div>
            </div>

            <Menu />
        </div>
    );
}

export default SearchPage;
