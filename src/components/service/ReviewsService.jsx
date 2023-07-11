export default function ReviewsMovies(id) {
    
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=597110043fc0a029fe5be1548d9129e7&page=1`
    ).then(response => {
      return response.json();
    });
  }