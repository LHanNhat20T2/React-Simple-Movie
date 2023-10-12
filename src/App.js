import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
function App() {
    return (
        <Fragment>
            <header className="flex items-center justify-center py-5 mb-10 text-white header gap-x-5">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>

            <section className="banner h-[500px] page-container mb-20">
                <div className="relative w-full h-full rounded-lg">
                    <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
                    <img
                        src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg"
                        alt="Avengers"
                        className="object-cover w-full h-full rounded-lg "
                    />
                    <div className="absolute w-full text-white left-5 bottom-5">
                        <h2 className="mb-5 text-3xl font-bold m">
                            Avenger: End Game
                        </h2>
                        <div className="flex items-center mb-8 gap-x-3">
                            <span className="px-4 py-2 border border-white border-solid rounded-md ">
                                Adventure
                            </span>
                            <span className="px-4 py-2 border border-white border-solid rounded-md ">
                                Adventure
                            </span>
                            <span className="px-4 py-2 border border-white border-solid rounded-md ">
                                Adventure
                            </span>
                        </div>
                        <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>

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
