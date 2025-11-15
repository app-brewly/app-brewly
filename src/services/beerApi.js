// Brew Buddy API: https://brewbuddy.dev/
const API_BASE_URL = "https://brewbuddy.dev/api/v1/beers";

// Fetch API
const fetchAPI = async (url) => {
    try {
        const response = await fetch(url, {
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Validate that we got an array
        if (!Array.isArray(data)) {
            throw new Error("API response is not an array");
        }

        return data;
    } catch (error) {
        // Handle network errors, CORS errors, etc.
        if (error.name === "TypeError" && error.message.includes("fetch")) {
            throw new Error(
                "Network error: Unable to reach the API. Please check your internet connection or CORS settings."
            );
        }
        throw error;
    }
};

/**
 * Fetch beers from the API
 * @param {Object} params - Query parameters
 * @param {number} params.per_page - Number of beers per page
 * @param {number} params.page - Page number
 * @returns {Promise<Array>} Array of beer objects
 */

export const fetchBeers = async (params = {}) => {
    try {
        const queryParams = new URLSearchParams();

        if (params.per_page) {
            queryParams.append("limit", params.per_page);
        }
        if (params.page) {
            queryParams.append(
                "offset",
                (params.page - 1) * (params.per_page || 25)
            );
        }

        const url = `${API_BASE_URL}${
            queryParams.toString() ? `?${queryParams.toString()}` : ""
        }`;

        console.log("Fetching beers from:", url);
        const data = await fetchAPI(url);
        console.log("Received", data.length, "beers from API");
        return data;
    } catch (error) {
        console.error("Error fetching beers:", error);
        throw error;
    }
};

/**
 * Fetch a single beer by ID
 * @param {string} id - Beer ID (UUID)
 * @returns {Promise<Object>} Beer object
 */
export const fetchBeerById = async (id) => {
    try {
        // The API doesn't support direct ID, so we fetch in batches
        let offset = 0;
        const limit = 50;

        while (true) {
            const url = `${API_BASE_URL}?limit=${limit}&offset=${offset}`;
            const data = await fetchAPI(url);

            const foundBeer = data.find((beer) => beer.id === id);
            if (foundBeer) return foundBeer;

            if (data.length < limit) break;
            offset += limit;
        }

        throw new Error(`Beer with ID ${id} not found`);
    } catch (error) {
        console.error("Error fetching beer by ID:", error);
        throw error;
    }
};

/**
 * Transform API beer data to app format
 * @param {Object} beer - Beer object from API
 * @returns {Object} Transformed beer object
 */
export const transformBeerData = (beer) => {
    // API stores description/tagline in translations array, get English version
    const englishTranslation =
        beer.translations?.find((t) => t.language?.code === "en") ||
        beer.translations?.[0] ||
        {};

    return {
        id: beer.id,
        name: beer.name,
        brewery:
            beer.brewery?.name ||
            englishTranslation.slogan ||
            "Unknown Brewery",
        tagline: englishTranslation.slogan || "",
        description: englishTranslation.description || "",
        image: beer.image?.url || null,
        abv: beer.abv,
        ibu: beer.ibu,
        srm: beer.srm,
        firstBrewed: beer.released_year?.toString() || null,
    };
};
