import React, { useState, useEffect, useCallback } from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // CODE BELOW IS AN ALTERNATIVE WAY OR WRITING .THEN CHAIN CALLS (PROMISES)
  // NONETHELESS IS STILL ASYNC FUNCTIONS, THEY LOOK LIKE SYNCHRONOUS

  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // STAR WARS API
      // const response = await fetch('https://swapi.dev/api/films/');
      
      // FIREBASE DATABASE THROUGH API
      const response = await fetch('https://react-http-e45a9-default-rtdb.firebaseio.com/movies.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!')
        
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }
      
      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     releaseDate: movieData.release_date,
      //     openingText: movieData.opening_crawl
      //   }
      // })
      // setMovies(transformedMovies);

      setMovies(loadedMovies);
    } catch (error){
      setError(error.message);
    }
    setIsLoading(false);
  }, []);   
  
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  
  // CHAIN CALL .THEN CODE EXAMPLE
  
  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films/')
  //   .then(response=>{
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         releaseDate: movieData.release_date,
  //         openingText: movieData.opening_crawl
  //       }
  //     })
  //     setMovies(transformedMovies);
  //   });

    //.catch();
  //}

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch('https://react-http-e45a9-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }
  
  let content = <p>Found no movies.</p>
  
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  
  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading ... </p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies to display yet, please click the button above.</p>}
        {isLoading && <p>Loading ... </p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
