import {useNavigate, useParams} from "react-router";
import {useSelector} from "react-redux";
import {useState} from "react";
// import {logoutThunk, updateUserThunk} from "../user-thunk";
import {updateUser} from "../user-service";
import Alert from 'react-bootstrap/Alert';

const EditProfile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector(state => state.userData)
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [show, setShow] = useState(false)
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Warning!!!</Alert.Heading>
                <p>
                    Do not leave any fields empty!
                </p>
            </Alert>
        );
    }
    return(
        <>
            <h1>Edit profile</h1>
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input placeholder={currentUser.email}
                           onChange={e=>setEmail(e.target.value)}
                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input  placeholder={currentUser.address}
                            onChange={e=>setAddress(e.target.value)}
                        type="text" className="form-control" id="address" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First name</label>
                    <input placeholder={currentUser.firstName}
                           onChange={e=>setFirst(e.target.value)}
                        type="text" className="form-control" id="firstname" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name</label>
                    <input placeholder={currentUser.lastName}
                           onChange={e=>setLast(e.target.value)}
                        type="text" className="form-control" id="lastname" aria-describedby="emailHelp"/>
                </div>

                <button onClick={()=>{
                    if(email && address && first && last) {
                        const updates = {
                            email,
                            address,
                            firstName: first,
                            lastName: last
                        }
                        // console.log(updates)
                        // dispatch(updateUserThunk(uid, updates))
                        updateUser(uid, updates) //works
                        // dispatch(logoutThunk())
                        navigate('/login')
                    } else {
                        setShow(true)
                    }

                }}
                    className="btn btn-success">
                    Submit
                </button>
            </div>
        </>
    )
}

export default EditProfile;