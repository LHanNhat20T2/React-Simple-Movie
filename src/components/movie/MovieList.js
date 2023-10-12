import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = ({ type = "now_playing" }) => {
    const [movies, setMovies] = useState([]);
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=e83690e893b50921fe00d2be82299b3e`,
        fetcher
    );

    // console.log("Movie List ~ fetching data", data);
    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);
    console.log(movies);
    return (
        <div className="text-white movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieList;
