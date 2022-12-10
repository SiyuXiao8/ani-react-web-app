import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "./user-thunk";

const CurrentUser = ({children}) => {
    // const {currentUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
        // eslint-disable-next-line
    }, [])
    return(children)
}
export default CurrentUser