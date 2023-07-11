import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import reviewsMovies from './service/ReviewsService';

export default function Cast() {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    reviewsMovies(filmId)
      .then(resp => {
        setReviews([...resp.results]);
      })
      .catch(error => console.log(error));
  }, [filmId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              {author && <h3>Author: {author}</h3>}
              {content && <p>{content}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}
