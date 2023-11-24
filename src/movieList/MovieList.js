import Header from '../Header';
import MovieItem from './MovieItem';
import SelectSeats from './booking/SelectSeats';
import SelectTime from './booking/SelectTime';


function MovieList(props) {
    
    return (
        <>
            <Header />
            
            <div className='container'>
                
                <h1 className='my-0 py-4'>Movies</h1>

                <SelectSeats />

                <ul className='list-unstyled row gx-3 gy-3'>
                    <MovieItem />
                </ul>
            </div>
        </>
    );
}

export default MovieList;