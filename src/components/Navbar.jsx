import { Link } from 'react-router-dom';
import Logo from '/assets/icons/logo.png'

const Navbar = () => {
    return (
        <div className="text-light flex py-4 items-center justify-between px-10 border-b border-b-secondary">
            <div className="logo flex items-center gap-2">
                <img src={Logo} alt="" className='h-10'/>
                <p className='font-bold'>IDENTIFEYE</p>
            </div>
            <div className="navigation flex font-bold gap-12">
                <Link className='hover-underline-animation' to={'/'}>HOME</Link>
                <Link className='hover-underline-animation' to={'/login'}>LOGIN</Link>
                <Link className='hover-underline-animation'to={'/register'}>REGISTER</Link>
            </div>
        </div>
    );
}
 
export default Navbar;