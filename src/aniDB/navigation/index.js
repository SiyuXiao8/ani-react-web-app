import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const parts = pathname.split('/');
    const screen = [
        {'type':'home', 'icon':<i className="fa-solid fa-house me-2"></i>},
        {'type':'search', 'icon': <i className="fa-solid fa-magnifying-glass me-2"></i>}
    ]
    const {currentUser} = useSelector(state => state.userData)
    if(!currentUser){ // if there is no user logged in show login and register tab
        screen.push(
            {'type':'login','icon':<i className="fa-solid fa-user me-2"></i>},
            {'type':'register', 'icon':<i className="fa-solid fa-user-plus me-1"></i>})
    } else {// if user is logged in show profile tab
        screen.push(
            {'type':'favorite','icon': <i className="fa-solid fa-heart me-2"></i>},
            {'type':'profile', 'icon': <i className="fa-solid fa-id-card me-2"></i>})
    }
    return (
        <div className='list-group'>
            {screen.map(screen =>
                <Link key={screen.type} to={`/${screen.type}`}
                      className={`list-group-item rounded-pill ${parts[1] === `${screen.type}` ? 'active': ''}`}>
                    {screen.icon}
                    <span className='text-capitalize'>{screen.type}</span>
                </Link>
            )}
            
        </div>
    )
}

export default NavigationSidebar;