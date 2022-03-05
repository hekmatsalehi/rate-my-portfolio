import React from "react"
import Portfolio from "./Portfolio.js"

function Portfolios(props) {
    return ( <div>
        <h1>Portfolios</h1>
        <div>
            {props.portfolios.map(portfolio=><Portfolio portfolio={portfolio}/>)}
        </div>
    </div>)
}

export default Portfolios