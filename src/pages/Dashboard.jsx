import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { apiURL, userToken } from "../components/config/config";

const Dashboard = () => {
    const[name,setName] = useState('')
    const getUserName = ()=> {
        axios.get(`${apiURL}/secret`,{
            headers: {
                Authorization:userToken()
            }
        }).then(res=> {
            console.log(res)
            setName(res.data.data.name)})
        .catch(e=>console.log(e))
    }
    useEffect(()=> {
        getUserName();
    },[])

    return (
        <div className="">
            <Nav/>
            <div className="h-[90vh] flex flex-col items-center justify-center">
                <img src="/assets/images/success.svg" alt="" className="h-[60%]"/>
                <div className="text-5xl container p-14">
                    <p className=" text-light text-center font-bold mb-4">Identification Success!</p>
                    <p className="text-accent font-bold text-center text-4xl">Hello {name}, Welcome to IdentifEye!</p>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;