import React from "react"
import Portfolio from "./Portfolio.js"
import {Card, Button, Container, Row, Col } from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {GET_ALL_PORTFOLIOS} from '../utils/queries';
import { Link } from "react-router-dom";


function Portfolios(props) {
const {loading, data} =  useQuery(GET_ALL_PORTFOLIOS);

const portfolioData = data?.portfolios || {};

if(loading){
    return <h1>...LOADING</h1>
}
    return (
    <div>
        <h1>Portfolios</h1>
        <Container>
            <Row>
            {portfolioData?.map((portfolio) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{portfolio.portfolioText}</Card.Title>
                            <Card.Text>
                                <p>{portfolio.portfolioAuthor}</p>
                                <img src={portfolio.portfolioImage} width="200px" height="200px"/>
                            </Card.Text>
                            <Link to={`/portfolio/${portfolio._id}`}>
                            <Button variant="primary">Go</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )
            })}
            </Row>
        </Container>
    </div>
    )
}

export default Portfolios