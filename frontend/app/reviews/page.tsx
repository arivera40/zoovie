export default function Reviews() {
  const reviews = [
    { id: 1, movie: "Movie 1", rating: 4, content: "Great movie! Highly recommended." },
    { id: 2, movie: "Movie 2", rating: 3, content: "Decent film, worth watching." },
    { id: 3, movie: "Movie 3", rating: 5, content: "Absolutely amazing! A must-see." },
  ]

  return (
    <div className="reviews-page">
      <h1 className="display-4 mb-4">Movie Reviews</h1>
      <p className="lead">Check out the latest movie reviews from our critics and community.</p>

      <div className="mt-5">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.movie}</h3>
            <div className="review-rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

