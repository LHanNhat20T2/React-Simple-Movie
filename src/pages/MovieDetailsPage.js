import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apikey, fetcher } from "../config";
const MovieDetailsPage = () => {
    // https://api.themoviedb.org/3/movie/movie_id?language=en-US'
    // console.log(data);
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`,
        fetcher
    );
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres } = data;
    console.log(data);
    return (
        <>
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div
                    className="w-full h-full bg-no-repeat bg-cover "
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`,
                    }}
                ></div>
            </div>
            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                <img
                    src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                    alt=""
                    className="object-cover object-top w-full h-full rounded-xl"
                />
            </div>
            <h1 className="mb-10 text-3xl font-bold text-center text-white">
                {title}
            </h1>
            {genres.length > 0 && (
                <div className="flex items-center justify-center mb-10 gap-x-5">
                    {genres.map((item) => (
                        <span
                            className="px-4 py-2 border border-solid rounded border-primary text-primary"
                            key={item.id}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default MovieDetailsPage;
