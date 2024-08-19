import React from 'react'

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1222230129-1.jpg?resize=680,461" alt="" />
            </div>
            <div className="texts">
                <h2>Selling a startup in an ‘acqui-hire’ is more lucrative than it seems, founders and VCs say</h2>
                <p className="info">
                    <a className="author">Dawid Paszko</a>
                    <time>2023-01-06</time>
                </p>
                <p className="summary">While the best startups are doing well, even in this tough venture capital market, others are struggling to raise new funding. If they can’t raise and haven’t become self-sustaining businesses, their best bet is to get acquired, even if it’s for a fraction of their last valuation. The alternative would be to run out of money and shut down. </p>
            </div>
        </div>
    )
}
