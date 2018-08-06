import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <div className="Hero">
            <div className="HeroGroup">
                <h1> Learn to design and code React App </h1>
                <p> Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
                <Link to="/page-2/"> Video </Link>
            </div>
        </div>
    </div>
)

export default IndexPage