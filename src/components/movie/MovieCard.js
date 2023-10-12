import React from "react";

const MovieCard = () => {
    return (
        <div className="p-3 rounded-lg movie-card bg-slate-800">
            <img
                src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg"
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-5 text-xl font-bold">Spiderman: HomeComing</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                <span>2017</span>
                <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
                Watch Now
            </button>
        </div>
    );
};

export default MovieCard;
