import React, { useEffect, useState } from "react";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
// https://api.themoviedb.org/3/search/movie

const itemsPerPage = 20;
const MoviePage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=e83690e893b50921fe00d2be82299b3e&page=${nextPage}`
    );
    const filterDebounce = useDebounce(filter, 500);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;
    useEffect(() => {
        if (filterDebounce) {
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=e83690e893b50921fe00d2be82299b3e&query=${filterDebounce}&${nextPage}`
            );
        } else {
            setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=e83690e893b50921fe00d2be82299b3e&page=${nextPage}`
            );
        }
    }, [filterDebounce, nextPage]);
    const movie = data?.results || [];

    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    // const { page, total_pagse } = data;

    return (
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input
                        type="text"
                        name=""
                        className="w-full p-4 text-white outline-none bg-slate-800"
                        placeholder="Type here to search..."
                        id=""
                        onChange={handleFilterChange}
                    />
                </div>
                <button className="p-4 text-white bg-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
            {loading && (
                <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full animate-spin border-primary border-t-transparent"></div>
            )}
            <div className="grid grid-cols-4 gap-10 ">
                {!loading &&
                    movie.length > 0 &&
                    movie.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
            <div className="mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
        </div>
    );
};

export default MoviePage;
