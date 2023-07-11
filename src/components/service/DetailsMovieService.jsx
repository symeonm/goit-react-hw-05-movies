export default function DetailsMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=597110043fc0a029fe5be1548d9129e7`
  ).then(response => {
    return response.json();
  });
}
