import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home(props) {
    return (
        <>
            <Header />
            
            <div className='container text-center'>

                <h1>Home Page</h1>

                {props.isAuthenticated 
                    ?
                    <Link to="/dashboard" className="btn btn-primary btn-lg">
                        Movies
                    </Link>
                    :
                    <Link to="/login" className="btn btn-primary btn-lg">
                     Login
                    </Link>
                
                }
            </div>
        </>
    );
}

export default Home;