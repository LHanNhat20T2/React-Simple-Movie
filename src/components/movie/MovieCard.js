import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
    const { title, vote_average, release_date, poster_path, id } = item;
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800">
            <img
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="mb-5 text-xl font-bold">{title}</h3>
                <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <Button
                    bgColor="secondary"
                    onClick={() => navigate(`/movies/${id}`)}
                >
                    Watch Now
                </Button>
            </div>
        </div>
    );
};

export default MovieCard;
