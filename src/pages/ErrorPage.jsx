import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const ErrorPage = () => {
    return (
        <div className="py-72">
            <img className="w-24 mx-auto" src={logo} alt="" />
            <h1 className="font-bold text-5xl text-center mt-4">Page Not Founded</h1>
            <Link to={'/'} className="btn btn-info mx-auto w-32 flex justify-center mt-6">Back To Home</Link>
        </div>
    );
};

export default ErrorPage;