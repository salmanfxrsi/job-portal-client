import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    };

    return <Navigate to={'/login'}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.any,
}

export default PrivateRoutes;