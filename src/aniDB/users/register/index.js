import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../user-thunk";
import {Navigate} from "react-router";

const RegisterScreen = () => {
    const [username, setUsername] = useState("Username")
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [firstName, setFirstname]= useState('')
    const [lastName, setLastname]= useState('')
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
        dispatch(registerThunk({
            username,
            password,
            role: value,
            email,
            address,
            firstName,
            lastName
        }))

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
                        <span className="input-group-text">First and last name</span>
                        <input onChange={e=>setFirstname(e.target.value)}
                            type="text" aria-label="First name" className="form-control"/>
                            <input onChange={e=>setLastname(e.target.value)}
                                type="text" aria-label="Last name" className="form-control"/>
                    </div>
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
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="email" onChange={(e) => setEmail(e.target.value)}
                                   className="form-control" id="floatingInputGroup4" placeholder="Password"/>
                            <label htmlFor="floatingInputGroup4">Email</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text" onChange={(e) => setAddress(e.target.value)}
                                   className="form-control" id="floatingInputGroup5" placeholder="Password"/>
                            <label htmlFor="floatingInputGroup5">Address</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <select value={value} onChange={handleSelect}
                            className="form-select" id="floatingSelectGrid">
                            <option defaultValue="NORMAL" value="NORMAL">Normal User</option>
                            <option value="SECURITY">Security</option>
                            <option value="ADMIN">Admin</option>
                        </select>

                        <label htmlFor="floatingSelectGrid">Pick your role</label>
                    </div>
                    <button onClick={handleRegisterBtn}
                        className="btn btn-primary mt-2">Register</button>
                </div>
            </div>

        </>
    )
}

export default RegisterScreen;

