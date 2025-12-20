import React from "react";
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely loved the Mediterranean flavors! The Greek salad was fresh and delicious. Will definitely be back.",
    date: "2025-12-15"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    text: "Great atmosphere and friendly staff. The grilled fish was perfectly cooked. Highly recommend!",
    date: "2025-12-10"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    text: "Delicious food and reasonable prices. The lemon dessert is a must-try. Only wish they had more vegetarian options.",
    date: "2025-12-08"
  },
  {
    id: 4,
    name: "John Smith",
    rating: 5,
    text: "Best Mediterranean restaurant in town! The bruschetta and pasta were outstanding. Family loved it.",
    date: "2025-12-05"
  },
  {
    id: 5,
    name: "Lisa Wong",
    rating: 4,
    text: "Cozy place with authentic tastes. Service was excellent and the portions were generous.",
    date: "2025-12-01"
  },
  {
    id: 6,
    name: "David Brown",
    rating: 5,
    text: "From the moment we walked in, we felt welcome. The food exceeded our expectations. Five stars!",
    date: "2025-11-28"
  }
];

const ReviewsApp = () => {
  const averageRating = (reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length).toFixed(1);

  return (
    <main className="reviews-page">
      <div className="breadcrumb container">
        <a href="/">Home</a> &gt; <span>Reviews</span>
      </div>
      <header className="reviews-header container">
        <h1>Customer Reviews</h1>
        <p>Hear what our guests have to say about their experience at Little Lemon.</p>
        <div className="rating-summary">
          <span className="average-rating">Average Rating: {averageRating} ⭐</span>
          <span className="total-reviews">({reviewsData.length} reviews)</span>
        </div>
        <a href="/" className="btn back-home">Back to Home</a>
      </header>

      <section className="reviews-list container">
        {reviewsData.map((review) => (
          <article key={review.id} className="review-card">
            <div className="review-header">
              <h3 className="reviewer-name">{review.name}</h3>
              <div className="review-rating">
                {'⭐'.repeat(review.rating)}
              </div>
            </div>
            <p className="review-text">{review.text}</p>
            <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
          </article>
        ))}
      </section>

      <section className="reviews-cta container">
        <h2>Share Your Experience</h2>
        <p>We'd love to hear from you! Leave a review or contact us directly.</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn">Contact Us</a>
          <a href="/reservation" className="btn btn-outline">Make a Reservation</a>
        </div>
      </section>
    </main>
  );
};

export default ReviewsApp;