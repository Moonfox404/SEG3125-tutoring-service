type RatingProps = {
  rating: number,
};


const Rating = ({ rating }: RatingProps) => {
  rating = Math.round(2 * rating) / 2;

  return <div className="rating rating-half">
    {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => {
      return <div
        key={value}
        className={`mask mask-star-2 mask-half-${value == Math.round(value) ? 2 : 1} bg-secondary`}
        aria-label={`${value} star`}
        aria-current={rating === value}>
      </div>
    })}
  </div>
};

export default Rating;
