import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const ConfirmationLog = () => {
    const webcamRef = useRef(null)
    const navigate = useNavigate()

    function handleNavigate(value) {
        if (value) {
            navigate('/loginScan');
        } else {
            window.localStorage.removeItem('token');
            navigate('/');
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Webcam
                ref={webcamRef}
                className="overflow-hidden h-1/2"
            />
            <div className="text-5xl flex flex-col justify-center items-center container p-14">
                <p className=" text-light text-center font-bold mb-8">Are you ready to be <span className="text-accent">Scanned</span> ?</p>
                <div className="action flex gap-5 text-xl">
                    <button className="bg-accent hover:bg-[#007C82] text-light rounded-xl py-5 px-12" onClick={()=>handleNavigate(true)}>
                        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-primary font-bold">Yes</p>
                    </button>
                    <button className="bg-secondary hover:bg-[#31363D] text-light rounded-xl py-5 px-12" onClick={()=>handleNavigate(false)}>
                        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-primary font-bold">No</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default ConfirmationLog;