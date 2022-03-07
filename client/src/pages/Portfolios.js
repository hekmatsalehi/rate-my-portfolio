import React from "react";
import '../styles/tailwind.css';
import Portfolio from "./Portfolio.js";
import { useQuery } from "@apollo/client";
import { GET_ALL_PORTFOLIOS } from "../utils/queries";
import { Link } from "react-router-dom";

function Portfolios(props) {
    const { loading, data } = useQuery(GET_ALL_PORTFOLIOS);

    const portfolioData = data?.portfolios || {};

    if (loading) {
        return <h1>...LOADING</h1>;
    }
    return (
        <div class="font-sora md:w-max-2xl">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
            <div class="text-center p-10">
            </div>
            <div class="text-black p-2"><h1> Portfolios </h1></div>
                <div class="flex grid grid-cols-1 md:grid-cols-3 p-2">
                    {portfolioData?.map((portfolio) => {
                        return (
                            <div class="max-w-screen md:max-w-sm rounded overflow-hidden shadow-lg mb-10" key={portfolio._id}>
                                <img class="w-full h-64" src={portfolio.portfolioImage} alt="Portfolio Preview" />
                                <div class="px-6 py-2">
                                    <div class="text-center font-bold text-xl mb-2">{portfolio.portfolioText}</div>
                                </div>
                                <div class="text-center p-2">
                                    <Link class="block m-auto text-white no-underline bg-cyan-500 hover:bg-cyan-400 p-2 rounded" href="#" to={`/portfolio/${portfolio._id}`}>
                                        View Portfolio
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
    );
}

export default Portfolios;
