import Header from '../Header';
import MovieItem from './MovieItem';
import SelectSeats from './booking/SelectSeats';

import React, { useState } from 'react';

function MovieList(props) {

    const [selectedMovieID, setSelectedMovieID] = useState(null); //Set the movie id from 'MovieItem.js' child component <<Book>> button click
    const [selectedSeatNums, setSelectedSeatNums] = useState(null);

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    console.log( "selectedMOvie", selectedMovieID ); //Movie Id (packed with title, id, voting, backdrop_path)
    // console.log( "typeof ", typeof selectedMovieID ); //Data type 'string


    
    const handleBooking = (e) => {
            
        setSelectedMovieID( e.currentTarget.dataset.movieId ) //set the movie id to selectedMovieID state
    }

    const selectedSeats = []; //Send to SelectSeats

    return (
        <>
            <Header />
            
            <div className='container'>
                

                {selectedMovieID ? (
                        <div>
                            <h1 className='my-0 py-4'>Movie</h1>

                            <SelectSeats 
                                selectedMovieID={selectedMovieID} 
                                IMG_PATH={IMG_PATH} 
                                selectedSeats={selectedSeats}
                            />
                        </div>

                    ) : (
                        <div>
                            <h1 className='my-0 py-4'>Movies</h1>
                            <ul className='list-unstyled row gx-3 gy-3'>

                                <MovieItem handleBooking={handleBooking} IMG_PATH={IMG_PATH} /> 
                                {/* Pass the handleBooking function to this child component */}

                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default MovieList;