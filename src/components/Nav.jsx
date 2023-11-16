import { Link, useNavigate } from 'react-router-dom';
import Logo from '/assets/icons/logo.png'

const Nav = () => {
    const navigate = useNavigate()
    function handleLogOut() {
        window.localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className="text-light flex py-4 items-center justify-between px-10 border-b border-b-secondary">
            <div className="logo flex items-center gap-2">
                <img src={Logo} alt="" className='h-10'/>
                <p className='font-bold'>IDENTIFEYE</p>
            </div>
            <div className="navigation flex font-bold gap-12 items-center">
                <Link className='hover-underline-animation' to={'/success'}>HOME</Link>
                <button className='btn-accent' onClick={handleLogOut}>LOGOUT</button>
            </div>
        </div>
    );
}
 
export default Nav;