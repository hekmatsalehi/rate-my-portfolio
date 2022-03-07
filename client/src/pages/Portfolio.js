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
        <div class="font-monster mx-auto md:w-screen-2xl">
            <div class="p-8 w-full">
                <img class="mx-auto w-full md:w-3/5 rounded-md" src={portfolioData.portfolioImage} />
                <h1 class="mt-4 text-center">{portfolioData.portfolioText}</h1>
                <div class="text-center p-4">
                    <Link class="no-underline text-white border px-10 py-2 rounded bg-cyan-500 hover:bg-cyan-400" to={portfolioData.portfolioLink}>View Portfolio</Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </div>
            </div>
            <div class="rounded bg-feedback mx-auto mx-auto pt-6">
                <h2 class="">Feedback</h2>
                <div class="p-10 m-auto">
                    <FeedbackList feedbacks={portfolioData.feedbacks} />
                    <FeedbackForm portfolioId={portfolioData._id} />
                </div>
            </div>
        </div>
        
    )
}

export default Portfolio