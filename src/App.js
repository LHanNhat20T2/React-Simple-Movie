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
                <div className="grid grid-cols-4 gap-10 text-white movie-list">
                    <div className="p-3 rounded-lg movie-card bg-slate-800">
                        <img
                            src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />
                        <h3 className="mb-5 text-xl font-bold">
                            Spiderman: HomeComing
                        </h3>
                        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>
                        <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>

            <section className="mb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl text-white capitalize">
                    Trending
                </h2>
                <div className="grid grid-cols-4 gap-10 text-white movie-list">
                    <div className="p-3 rounded-lg movie-card bg-slate-800">
                        <img
                            src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />
                        <h3 className="mb-5 text-xl font-bold">
                            Spiderman: HomeComing
                        </h3>
                        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>
                        <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
