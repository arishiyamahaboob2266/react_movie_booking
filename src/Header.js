import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MyNewContext from './MyContext';


function Header(props) {

    const { authenticated, setAuthenticated } = useContext(MyNewContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Brand Name</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {authenticated &&
                            <span className="navbar-text">
                                Logged as: <strong>{authenticated}</strong>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;