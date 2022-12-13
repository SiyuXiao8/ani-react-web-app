import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../user-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const ProfileScreen = () => {
    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    useEffect(()=>{
        dispatch(profileThunk())
        // eslint-disable-next-line
    },[])
    return(
        <>
            <h1>Profile</h1>
            {currentUser &&
                    <div>
                        <div className="alert alert-success alert-dismissible" role="alert">
                            <strong>Welcome! <span className='text-info'>{currentUser.username}</span></strong>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="static1" className="col-sm-2 col-form-label">Full name:</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="static1"
                                       value={`${currentUser.firstName} ${currentUser.lastName}`}/>
                            </div>
                            <label htmlFor="static2" className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="static2"
                                       value={currentUser.email}/>
                            </div>
                            <label htmlFor="static3" className="col-sm-2 col-form-label">Address:</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="static3"
                                       value={currentUser.address}/>
                            </div>
                            <label htmlFor="static4" className="col-sm-2 col-form-label">Role:</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="static4"
                                       value={currentUser.role}/>
                            </div>
                        </div>
                    </div>
            }
            <button onClick={handleLogoutBtn}
                    className='btn btn-danger me-3'>Logout</button>
            <Link to={`/edit/${currentUser._id}`} className='btn btn-info'>Edit</Link>
        </>
    )
}

export default ProfileScreen;