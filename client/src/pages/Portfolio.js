import React from "react";
import '../styles/tailwind.css';

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ONE_PORTFOLIO } from '../utils/queries'
import { Link } from "react-router-dom";


import FeedbackList from '../components/FeedbackList/FeedbackList';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import RatingList from "../components/RatingList/RatingList";
import RatingInput from "../components/RatingInput/RatingInput";
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
        <div className="font-sora mx-auto md:w-screen-2xl">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
            <div className="p-8 w-full">
                <img className="mx-auto w-full md:w-3/5 rounded-md" src={portfolioData.portfolioImage} />
                <h1 className="mt-4 text-center">{portfolioData.portfolioText}</h1>
                <div className="text-center p-4">
                    <a className="no-underline text-white border px-10 py-2 rounded bg-cyan-500 hover:bg-cyan-400" href={portfolioData.portfolioLink}>View Portfolio</a>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </div>
            </div>
            <div className="pt-10">
                <div className="p-1 md:p-4 mx-auto">
                    <FeedbackList feedbacks={portfolioData.feedbacks} />
                    <FeedbackForm portfolioId={portfolioData._id} />
                </div>
                <div className="mt-20 p-1 md:p-4 mx-auto">
                    <RatingList ratings={portfolioData.ratings} />
                    <RatingInput portfolioId={portfolioData._id} />
                </div>
            </div>
        </div>
        
    )
}

export default Portfolio