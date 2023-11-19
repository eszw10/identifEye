import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="h-[90vh] flex flex-col items-center justify-center">
                <img src="/assets/images/failed.jpg" alt="" className="h-1/2"/>
                <div className="text-5xl container p-14">
                    <p className=" text-light text-center font-bold mb-4">Identification Failed!</p>
                    <p className="text-red-500 font-bold text-center text-4xl">Who Are You??</p>
                </div>
                <Link to={'/loginScan'} className="btn-accent font-bold">Rescan</Link>
            </div>
        </div>
    );
}
 
export default NotFound;