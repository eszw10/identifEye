import { Link } from 'react-router-dom';
import Logo from '/assets/icons/logo.png'

const Nav = () => {
    return (
        <div className="text-light flex py-4 items-center justify-between px-10 border-b border-b-secondary">
            <div className="logo flex items-center gap-2">
                <img src={Logo} alt="" className='h-10'/>
                <p className='font-bold'>IDENTIFEYE</p>
            </div>
            <div className="navigation flex font-bold gap-12 items-center">
                <Link className='hover-underline-animation' to={'/success'}>HOME</Link>
                <Link className='btn-accent' to={'/'}>LOGOUT</Link>
            </div>
        </div>
    );
}
 
export default Nav;