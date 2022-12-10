import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../user-thunk";
import {Navigate} from "react-router";

const RegisterScreen = () => {
    const [username, setUsername] = useState("Username")
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [errors, setError] = useState(null)
    // const {error} = useSelector(state => state.userData)
    const {currentUser} = useSelector(state => state.userData)
    const [value, setValue] = useState('NORMAL')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Password must match!')
            return
        }
        setError(null)
        dispatch(registerThunk({username, password, role: value}))

    }
    const handleSelect = (e) => {
        setValue(e.target.value)
    }

    // if user is currently signed in already go to profile
    if(currentUser) {
        return (<Navigate to='/profile'/>)
    }

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    Register for an account
                </div>
                {errors &&
                    <div className='alert alert-danger mt-2'>{errors}</div>
                }
                <div className="card-body">
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text" onChange={(e)=> setUsername(e.target.value)}
                                   className="form-control" id="floatingInputGroup1" placeholder='Username'/>
                                <label htmlFor="floatingInputGroup1">Username</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text" onChange={(e)=>setPassword(e.target.value)}
                                   className="form-control" id="floatingInputGroup2" placeholder="Password"/>
                            <label htmlFor="floatingInputGroup2">Password</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text" onChange={(e) => setValidatePassword(e.target.value)}
                                   className="form-control" id="floatingInputGroup3" placeholder="Password"/>
                            <label htmlFor="floatingInputGroup3">Validate Password</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <select value={value} onChange={handleSelect}
                            className="form-select" id="floatingSelectGrid">
                            <option defaultValue="NORMAL" value="NORMAL">Normal User</option>
                            <option value="SECURITY">Security</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <h2>You selected {value}</h2>
                        <label htmlFor="floatingSelectGrid">Pick your role</label>
                    </div>
                    <button onClick={handleRegisterBtn}
                        className="btn btn-primary mt-1">Register</button>
                </div>
            </div>
            {currentUser && <h1>Hello {currentUser.username}</h1>}
        </>
    )
}

export default RegisterScreen;

