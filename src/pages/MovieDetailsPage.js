import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apikey, fetcher } from "../config";
import { func } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";
const MovieDetailsPage = () => {
    // https://api.themoviedb.org/3/movie/movie_id?language=en-US'
    // console.log(data);
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`,
        fetcher
    );
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    console.log(data);
    return (
        <div className="py-10">
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
            <h1 className="mb-10 text-4xl font-bold text-center text-white">
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
            <div className="text-center mx-auto leading-relaxed max-w-[600px] mb-10">
                {overview}
            </div>
            <MovieCredits></MovieCredits>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </div>
    );
};

// https://api.themoviedb.org/3/movie/movie_id/credits

function MovieCredits() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apikey}`,
        fetcher
    );
    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    console.log(data);
    return (
        <div className="py-10">
            <h2 className="mb-10 text-3xl text-center">Cats</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => (
                    <div className="cast-item" key={item.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                            className="w-full h-[300px] object-cover rounded-lg mb-3"
                            alt=""
                        />
                        <h3 className="text-xl font-medium text-center">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieVideos() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}`,
        fetcher
    );
    if (!data) return null;
    console.log(data);
    const { results } = data;
    if (!results || results.length <= 0) return null;
    return (
        <div className="py-10">
            <div className="flex flex-col gap-10">
                {results.slice(0, 3).map((item) => (
                    <div className="" key={item.id}>
                        <h3 className="inline-block p-3 mb-5 text-xl font-medium bg-secondary">
                            {item.name}
                        </h3>
                        <div
                            key={item.id}
                            className="w-full h-full aspect-video"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title="THE EQUALIZER 3 - Deleted Scene"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="object-fill w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieSimilar() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apikey}`,
        fetcher
    );
    if (!data) return null;
    console.log(data);
    const { results } = data;
    if (!results || results.length <= 0) return null;
    return (
        <div className="py-10">
            <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>{" "}
            <div className="text-white movie-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                >
                    {results.length > 0 &&
                        results.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}

export default MovieDetailsPage;

// thay the key youtube
// <iframe width="873" height="491" src="https://www.youtube.com/embed/WwAUIwb04c4" title="THE EQUALIZER 3 - Deleted Scene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
