import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";
import { useEffect } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies);
            }
            catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    // const movies = [
    //     { id: 1, title: "John Wick", release_date: "2020" },
    //     { id: 2, title: "Tiger", release_date: "2025" },
    //     { id: 3, title: "Columbus", release_date: "1998" }
    // ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
}

export default Home