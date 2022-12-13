import {useState} from "react";
import {loginThunk} from "../user-thunk";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";


const LoginScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const {currentUser, error} = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const handleLoginBtn = () => {
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    if(currentUser){
        return (<Navigate to='/profile'/>)
    }
    return(
        <>
            <div className="card text-center">
                <div className="card-header">
                    Login
                </div>
                {error &&
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
                <div className="card-body">
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text"
                                   onChange={e=>setUsername(e.target.value)}
                                   className="form-control" id="floatingInputGroup1" placeholder='Username'/>
                            <label htmlFor="floatingInputGroup1">Username</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text"
                                   onChange={e=>setPassword(e.target.value)}
                                   className="form-control" id="floatingInputGroup2" placeholder="Password"/>
                            <label htmlFor="floatingInputGroup2">Password</label>
                        </div>
                    </div>

                    <button onClick={handleLoginBtn}
                            className="btn btn-primary">Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginScreen;