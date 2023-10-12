import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apikey, fetcher } from "../config";
const MovieDetailsPage = () => {
    // https://api.themoviedb.org/3/movie/movie_id?language=en-US'
    const { movieId } = useParams(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`,
        fetcher
    );
    const { data } = useSWR();
    console.log(data);
    return <div>This is</div>;
};

export default MovieDetailsPage;
