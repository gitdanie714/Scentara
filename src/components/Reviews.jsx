import React from 'react'
import "../styles/componentstyle.css"
import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import reviewpic from "../images/girl.png"
function Reviews() {
  return (
    <div className='review-area'>
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        <div className="review">
          <div className="review-image">
            <img src={reviewpic} alt="Customer" />
          </div>
          <div className="review-rating">
            {[...Array(5)].map((_, i) => (<FaStar key={i} />))}
          </div>
          <p className="review-text"><ImQuotesLeft className='quotes' />  "Amazing products! My hair feels so much healthier."</p>
          <span className="review-author">- Jane D.</span>
        </div>
        <div className="review">
          <div className="review-image">
            <img src={reviewpic} alt="Customer" />
          </div>
          <div className="review-rating">
            {[...Array(4)].map((_, i) => (<FaStar key={i} />))}
            <FaRegStar />
          </div>
          <p className="review-text"><ImQuotesLeft className='quotes' />  "Great customer service and fast delivery. Highly recommend!"</p>
          <span className="review-author">- Mark T.</span>
        </div>
        <div className="review">
          <div className="review-image">
            <img src={reviewpic} alt="Customer" />
          </div>
          <div className="review-rating">
            {[...Array(4)].map((_, i) => (<FaStar key={i} />))}
            <FaStarHalfAlt />
          </div>
          <p className="review-text"><ImQuotesLeft className='quotes'/>  "The best natural hair care I've tried so far."</p>
          <span className="review-author">- Aisha K.</span>
        </div>
      </div>
    </div>
  )
}

export default Reviews