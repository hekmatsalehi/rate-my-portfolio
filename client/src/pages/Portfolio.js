import React from "react";
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ONE_PORTFOLIO } from '../utils/queries'

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
                        <Card >
                            <Card.Img variant="top" src={portfolioData.portfolioImage} />
                            <Card.Body>
                                <Card.Title>{portfolioData.portfolioText}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            {/* <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup> */}
                            <Card.Body>
                                <Card.Link href="#">{portfolioData.portfolioLink}</Card.Link>
                                {/* <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                            <Card.Body>
                                <Card>
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
                                            <FeedbackForm feedbackId={portfolioData._id} />
                                        </div>
                                    </Container>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio