import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e83690e893b50921fe00d2be82299b3e",
        fetcher
    );

    console.log("Movie List ~ fetching data", data);
    useEffect(() => {
        setMovies(data.results);
    }, [data]);
    console.log(movies);
    return (
        <div className="text-white movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MovieList;
