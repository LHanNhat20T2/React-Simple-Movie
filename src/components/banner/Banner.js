import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=e83690e893b50921fe00d2be82299b3e`,
        fetcher
    );
    const movie = data?.results || [];
    return (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden ">
            <Swiper grabCursor={true} slidesPerView={"auto"}>
                {movie.length > 0 &&
                    movie.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

function BannerItem({ item }) {
    const { title, vote_average, release_date, poster_path } = item;
    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
            <img
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                alt="Avengers"
                className="object-cover object-top w-full h-full rounded-lg"
            />
            <div className="absolute w-full text-white left-5 bottom-5">
                <h2 className="mb-5 text-3xl font-bold m">{title}</h2>
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
    );
}

export default Banner;
