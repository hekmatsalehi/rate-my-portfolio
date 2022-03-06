import React from "react";

function Portfolio(props) {
    return (
        <div className="container-fluid d-flex flex-row flex-wrap justify-content-center">
            <h1>portfolioName: {props.portfolio.portfolioName}</h1>
        </div>
    )
}

export default Portfolio