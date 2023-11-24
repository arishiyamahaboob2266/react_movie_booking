import Header from '../Header';
import MovieItem from './MovieItem';
import SelectSeats from './booking/SelectSeats';

import React, { useState } from 'react';

function MovieList(props) {

    const [selectedMovieID, setSelectedMovieID] = useState(null); //Set the movie id from 'MovieItem.js' child component <<Book>> button click

    console.log( "selectedMOvie", {selectedMovieID} ); //Movie Id

    
    const handleBooking = (e) => {
            
        console.log( "e", e );
        console.log( "e.target", e.target );
        console.log( "e.target.value", e.target.value );

        setSelectedMovieID( e.currentTarget.dataset.movieId ) //set the movie id to selectedMovieID state
    }

    return (
        <>
            <Header />
            
            <div className='container'>
                
                <h1 className='my-0 py-4'>Movies</h1>

                {selectedMovieID ? (
                    
                        <SelectSeats selectedMovieID={selectedMovieID} />

                    ) : (
                        <ul className='list-unstyled row gx-3 gy-3'>

                            <MovieItem handleBooking={handleBooking} /> 
                            {/* Pass the handleBooking function to this child component */}

                        </ul>
                    )
                }

            </div>
        </>
    );
}

export default MovieList;