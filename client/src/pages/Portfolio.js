import React from "react";
import '../styles/tailwind.css';

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ONE_PORTFOLIO } from '../utils/queries'
import Styles from "../css/style.css"

import FeedbackList from '../components/FeedbackList/FeedbackList';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';

import { Card, Button, Container, Row, Col, } from 'react-bootstrap';

const Portfolio = () => {
    const { id } = useParams();

    const { loading, data } = useQuery(GET_ONE_PORTFOLIO, {
        variables: { portfolioId: id }
    });

    const portfolioData = data?.portfolio || {}
    //console.log(portfolioData.feedbacks)

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container-fluid d-flex flex-row flex-wrap justify-content-center">
            <Container>
                <Row>
                    <Col>
                        <Card className="border-0">
                            <Card.Img className="rounded mx-auto w-50 h-50" variant="top" src={portfolioData.portfolioImage} />
                            <Card.Body>
                                <Card.Title class="h1 text-center">{portfolioData.portfolioText}</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link class="justify-center" href={portfolioData.portfolioLink}>{portfolioData.portfolioLink}</Card.Link>
                                {/* <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                            <Card.Body>
                                <Card className="rounded bg-feedback">
                                    <h2 className="text-center">Feedback</h2>
                                    <Container>
                                        {/* {portfolioData.feedbacks?.map((feedback) => {
                                            return (
                                                <Row>
                                                    <Col>
                                                        <Card>
                                                            <p>{feedback.feedbackText}</p>
                                                            <p className="text-right">{feedback.feedbackAuthor}</p>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            )
                                        })} */}
                                        <div className="my-5">
                                            <FeedbackList feedbacks={portfolioData.feedbacks} />
                                        </div>
                                        <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                                            <FeedbackForm portfolioId={portfolioData._id} />
                                        </div>
                                    </Container>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <script src="js/addons/rating.js"></script>
        </div>
        
    )
}

export default Portfolio