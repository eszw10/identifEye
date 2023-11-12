import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex h-[90vh] items-center justify-center gap-4">    
            <img src="/assets/images/doodle_arrow.svg" alt="" />
            <div className="text-[86px]">
                <p className=" text-light font-bold">Multifactor</p>
                <p className="text-accent font-bold">Authentication</p>
                <div className="action flex gap-3 text-base">
                    <Link to={'/login'} className="btn-accent ">
                        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-primary font-bold">LOGIN</p>
                    </Link>
                    <Link to={'/register'} className="btn-secondary">
                        <p className="drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-primary font-bold">REGISTER</p>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <img src="/assets/images/doodles.svg" alt="" />
                <img src="/assets/images/man_sit.svg" alt="" className="absolute top-32 " />
            </div>
        </div>
    );
}
 
export default Hero;