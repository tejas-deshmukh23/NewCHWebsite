import React from 'react';
import './CustomerReview.css';
import RatingStars from './RatingStar'; // Make sure to import RatingStars

function CustomerReview({ messageBefore, message, name, image, rating }) {
    return (
        <div className="customer-review">
            <div className="review-text1">
                <p className="r-p">{messageBefore}</p>
            </div>
            <div className="customer-image">
                <img src={image} alt="Customer" />
            </div>
            <div className="customer-name">
                <p>{name}</p>
            </div>
            <div className="review-text">
                <p>{message}</p>
            </div>
            <div className="rating-star">
                <RatingStars rating={rating} />
            </div>
        </div>
    );
}

export default CustomerReview;
