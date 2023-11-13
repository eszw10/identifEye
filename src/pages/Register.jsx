import { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
    const [account,setAccount] = useState({
        name: '',
        email:'',
        username:'',
        password:''
    })

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
            <div className="h-[90vh] flex items-center justify-between container px-36">
                <div className="text-6xl flex flex-col gap-4">
                    <p className=" text-light font-bold">Let me know</p>
                    <p className="text-accent font-bold">About You</p>
                    <div className="flex gap-5">
                        <img src="/assets/images/doodle_arrow2.svg" alt="" />
                        <img src="/assets/images/man_rise.svg" alt="" />
                    </div>
                </div>
                <form action="" className="flex flex-col gap-5 border-2 border-accent p-10 rounded-xl">
                    <div className="name flex flex-col gap-2">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <input type="text" name="name" id="name" className="input" placeholder="Enter your name" value={account.name} onChange={handleChange}/>
                    </div>
                    <div className="email flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <input type="email" name="email" id="email" className="input" placeholder="Enter your email" value={account.email} onChange={handleChange}/>
                    </div>
                    <div className="username flex flex-col gap-2">
                        <label htmlFor="username" className="font-bold">Username</label>
                        <input type="text" name="username" id="username" className="input" placeholder="Enter your username" value={account.username} onChange={handleChange}/>
                    </div>
                    <div className="password flex flex-col gap-2">
                        <label htmlFor="password" className="font-bold">Password</label>
                        <div className="flex items-center justify-around input">
                            <input type={isSeen? "text" :"password"} name="password" id="password" className="bg-secondary outline-none placeholder:text-gray-500" placeholder="Enter your password" value={account.password} onChange={handleChange}/>
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
 
export default Register;