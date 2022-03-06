import React from "react";
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
        <div class="bg-light">
            <PortfolioForm />
            <h1>Portfolios</h1>
            <Container>
                <Row className="">
                    {portfolioData?.map((portfolio) => {
                        return (
                            <Card className="mx-auto my-2" key={portfolio._id} style={{ width: "24rem" }}>
                                <Card.Title className="text-center mt-2">{portfolio.portfolioText}</Card.Title>
                                <Card.Body>
                                    {/* <Card.Title>{portfolio.portfolioText}</Card.Title> */}
                                    <Card.Text>
                                        <Card.Img variant="top" src={portfolio.portfolioImage} />
                                        <p className="text-center mt-2">Author: {portfolio.portfolioAuthor}</p>
                                    </Card.Text>
                                    <Link to={`/portfolio/${portfolio._id}`}>
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Portfolios;