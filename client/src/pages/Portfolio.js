import React from "react";

function Portfolio(props) {
    return (
        <div className="container-fluid d-flex flex-row flex-wrap justify-content-center">
            <h1>portfolioText: {props.portfolio.portfolioText}</h1>
        </div>
    )
}

export default Portfolio