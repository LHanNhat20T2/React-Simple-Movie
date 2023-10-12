import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 text-white py-5 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>

            <section className="banner h-[400px] page-container">
                <div className="w-full h-full rounded-lg relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
                    <img
                        src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg"
                        alt="Avengers"
                        className="w-full h-full object-cover rounded-lg "
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5 m">
                            Avenger: End Game
                        </h2>
                        <div className="flex items-center gap-x-3 mb-8">
                            <span className="py-2 px-4 border rounded-md border-white border-solid ">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border rounded-md border-white border-solid ">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border rounded-md border-white border-solid ">
                                Adventure
                            </span>
                        </div>
                        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
