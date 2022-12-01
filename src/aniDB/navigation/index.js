import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const NavigationSidebar = (


) => {
    const {pathname} = useLocation();
    const parts = pathname.split('/');

    return (
        <div className='list-group'>
            <Link to='/'
                   className={`list-group-item rounded-pill ${parts[1] === '' ? 'active': ''}`}>
                <i className="fa-solid fa-house me-2"></i>
                Home
            </Link>

            <Link to='/search' className={`list-group-item rounded-pill ${parts[1] === 'search' ? 'active': ''}`}>
                <i className="fa-solid fa-magnifying-glass me-2"></i>
                Search
            </Link>

            <Link  to='/favorite' className={`list-group-item rounded-pill ${parts[1] === 'favorite' ? 'active': ''}`}>
                <i className="fa-solid fa-heart me-2"></i>
                Favorite
            </Link>

            <a href='/profile' className={`list-group-item rounded-pill ${parts[1] === 'profile' ? 'active': ''}`}>
                <i className="fa-solid fa-user me-2"></i>
                Profile
            </a>
        </div>
    )
}

export default NavigationSidebar;