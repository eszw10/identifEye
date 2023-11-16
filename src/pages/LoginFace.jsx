import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { apiURL, userToken } from "../components/config/config";
import { useNavigate } from "react-router-dom";

const LoginFace = () => {
    const [arrImage, setArrImage] = useState([])
    const webcamRef = useRef(null)
    const navigate = useNavigate()

    useEffect(()=> {
        const interval = setInterval(()=> {
            if(arrImage.length < 5) {
                capture()
            } else {
                clearInterval(interval);
                // Once all images captured, create FormData and post to the database
                if (arrImage.length === 5) {
                    createFormDataAndPost();
                }
            }
        },1000)
    },[arrImage])

    const capture = () => {
        if(webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if(imageSrc) {
                setArrImage(prevImages => [...prevImages, imageSrc]);
            }
        }
        
    }

    const createFormDataAndPost = async () => {
        try {
            const formData = new FormData();
            for (let i = 0; i < arrImage.length; i++) {
                const imageBlob = dataURItoBlob(arrImage[i]);
                formData.append(`faces`, imageBlob, `faces${i + 1}.png`);
            }
            await axios.post(`${apiURL}/login/face`, formData, {
                headers:{
                    Authorization:userToken()
                }
            }).then(res=> {
                console.log(res.data)
                window.localStorage.setItem('token', res.data.token)
                navigate('/success')
            }).catch(e=> {
                console.log(e)
            })
            // Here, you would make your API call to post formData to the database
            // Example: await fetch('your-post-endpoint', { method: 'POST', body: formData });
            console.log(formData.getAll('faces')); // Log the FormData before sending
        } catch (error) {
            console.error("Error creating FormData:", error);
        }
    };

    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(",")[1]);
        const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    return (
        <div className="relative flex flex-col items-center h-screen">
            <img src="/assets/images/music_note.svg" alt="" className="absolute left-24 top-52"/>
            <img src="/assets/images/lightbulb.svg" alt="" className="absolute right-24 top-52"/>
            <img src="/assets/images/arrow_upleft.svg" alt="" className="absolute left-24 bottom-16"/>
            <img src="/assets/images/arrow_upright.svg" alt="" className="absolute right-24 bottom-16"/>
            <div className="text-6xl container p-14">
                <p className=" text-light text-center font-bold mb-4">Scanning...</p>
                <p className="text-accent font-bold text-center text-4xl">Show your face to the camera</p>
            </div>
            <div className="flex relative items-center justify-center overflow-hidden">
                <div className="absolute z-10 border-2 border-accent h-[400px] w-[400px] rounded-full"></div>
                <Webcam
                ref={webcamRef}
                className="overflow-hidden"
            />
            </div>
            {/* <div className="h-96 w-96 rounded-full bg-black/50"></div> */}
        </div>
    );
}
 
export default LoginFace