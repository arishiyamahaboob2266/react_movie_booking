import React, { useState, useEffect } from 'react';


function MovieItem(props) {
    const [movies, setMovies] = useState([]);


    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    useEffect(()=>{
        getMovies();
    }, []);

    async function getMovies() {
        const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

        const response = await fetch(API_URL);
        // console.log(response);

        const responseJson = await response.json();
        console.log(responseJson.results);

        setMovies(responseJson.results)
    }


    return (
        <>

        { movies.map( (movie)=>(
            <li className="col-sm-3" key={movie.id}>
                <div className='card '>
                    <img src={IMG_PATH + movie.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* Movie Title */}
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">Language: {movie.original_language}</p>
                        <p className='h5'>Rs: 180/ per seat</p>

                        {/* Booking button */}
                        <button 
                            onClick={props.handleBooking} 
                            data-movie-id = { movie.title  } 
                            className="btn btn-primary">
                                Book Ticket
                        </button>
                    </div>
                </div>
            </li>
        )) 
        }
        </>
    );
}

export default MovieItem;