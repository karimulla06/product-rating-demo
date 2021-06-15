import React from 'react';
import Rating from './rating';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

export default function App() {
  const handleRatingChange = (id, rating) => {
    console.log(`API called to save the rating of ${rating} for ${id}`);
  };
  return (
    <div>
      <Rating id="product1" />
      <Rating
        id="product2"
        handleRatingChange={handleRatingChange}
        numberOfRatings={10}
        initialSelection={3}
      />
    </div>
  );
}
