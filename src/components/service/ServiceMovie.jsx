export default function FetchMovie() {

  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=597110043fc0a029fe5be1548d9129e7'
  ).then(response => {
    return response.json();
  });
}
