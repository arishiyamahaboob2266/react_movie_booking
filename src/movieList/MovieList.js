import Header from '../Header';
import MovieItem from './MovieItem';


function MovieList(props) {
    
    return (
        <>
            <Header />
            
            <div className='container'>
                
                <h1 className='my-0 py-4'>Movies</h1>

                <ul className='list-unstyled row gx-3 gy-3'>
                    <MovieItem />
                </ul>
            </div>
        </>
    );
}

export default MovieList;