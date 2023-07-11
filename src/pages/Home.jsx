import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import apiMovies from '../components/service/ServiceMovie';

export default function Home() {
  const [status, setStatus] = useState('IDLE');
  const [trendingMovie, setTrendingMovie] = useState([]);
  //   const titleMovie = [];

  useEffect(() => {
    apiMovies()
      .then(resp => {
        setStatus('RESOLVED');
        setTrendingMovie([...resp.results]);
      })
      .catch(error => console.log(error));
  }, []);
// console.log(trendingMovie);
  if (status === 'RESOLVED') {
    return (
      <ul>
        {trendingMovie.map(obj => (
          <NavLink style={{display: 'block',
        marginBottom: '10px'}} to={`movies/${obj.id}`} key={obj.id}>{obj.title || obj.name}</NavLink>
        ))}
      </ul>
    );
  }
}

/* <img src={obj.poster_path} alt={'ррр'}></img>  */