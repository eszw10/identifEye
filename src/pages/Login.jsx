import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [account,setAccount] = useState({
        username:'',
        password:''
    })

    const navigate = useNavigate()

    const [isSeen,setIsSeen] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target;
        setAccount(() => {
                return {
                    [name]:value
                }
            }
        )
    }
    return (
        <div className="text-light">
            <Navbar />
            <div className="h-[90vh] flex items-center justify-between container px-60">
                <div className="text-6xl flex flex-col gap-14">
                    <div className="flex flex-col gap-4">
                        <p className=" text-light font-bold">Login to</p>
                        <p className="text-accent font-bold">Your Account</p>
                    </div>
                    <img src="/assets/images/man_rest.svg" alt="" className="h-96" />
                </div>
                <form action="" className="flex flex-col gap-5 border-2 border-accent p-10 rounded-xl" onSubmit={()=> navigate('/scan')}>
                    <div className="username flex flex-col gap-2">
                        <label htmlFor="username" className="font-bold">Username</label>
                        <input type="text" name="username" id="username" className="input" placeholder="Enter your username" value={account.username} onChange={handleChange} required/>
                    </div>
                    <div className="password flex flex-col gap-2">
                        <label htmlFor="password" className="font-bold">Password</label>
                        <div className="flex items-center justify-around input">
                            <input type={isSeen? "text" :"password"} name="password" id="password" className="bg-secondary outline-none placeholder:text-gray-500" placeholder="Enter your password" value={account.password} onChange={handleChange} required/>
                            <i className={isSeen? "fa-solid fa-eye-slash cursor-pointer" : "fa-solid fa-eye cursor-pointer"} onClick={()=>setIsSeen(!isSeen)}></i>
                        </div>
                    </div>   
                    <button className="btn-accent">
                        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-primary font-bold">NEXT</p>
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;