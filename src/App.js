import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Banner from "./components/banner/Banner";
function App() {
    return (
        <Fragment>
            <header className="flex items-center justify-center py-5 mb-10 text-white header gap-x-5">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <Banner></Banner>
            <section className="mb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl text-white capitalize">
                    Now Playing
                </h2>
                <MovieList></MovieList>
            </section>

            <section className="mb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl text-white capitalize">
                    Top Rate
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>

            <section className="mb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl text-white capitalize">
                    Trending
                </h2>
                <MovieList type="popular"></MovieList>
            </section>
        </Fragment>
    );
}

export default App;
