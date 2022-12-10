import {useSelector} from "react-redux";
import {Navigate} from "react-router";
// only render the child element when current user exist
const ProtectedRoute = ({children}) => {
    // const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.userData)
    if (currentUser) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}
export default ProtectedRoute