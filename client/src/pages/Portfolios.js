import React from "react";
import '../styles/tailwind.css';
import Portfolio from "./Portfolio.js";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_PORTFOLIOS } from "../utils/queries";
import { Link } from "react-router-dom";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";

function Portfolios(props) {
    const { loading, data } = useQuery(GET_ALL_PORTFOLIOS);

    const portfolioData = data?.portfolios || {};

    if (loading) {
        return <h1>...LOADING</h1>;
    }
    return (
        <div class="font-monster">
            <div class="text-black p-2"><h1> Portfolios </h1></div>
            <p>To add a portfolio please <Link to="/login">log in</Link> and go to your <Link to="/me"> profile page.</Link></p>
            <Container>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    {portfolioData?.map((portfolio) => {
                        return (
                            <div class="max-w-sm rounded overflow-hidden shadow-lg" key={portfolio._id}>
                                <img class="w-full height-" src={portfolio.portfolioImage} alt="Portfolio Preview" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{portfolio.portfolioText}</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <Button className="mx-auto" variant="primary">
                                    <Link class="block m-auto text-white no-underline" to={`/portfolio/${portfolio._id}`}>
                                        View Portfolio
                                    </Link>
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Portfolios;


