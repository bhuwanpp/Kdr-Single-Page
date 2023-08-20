import {NavLink} from 'react-router-dom'
const Header = () => {
    return ( 
        <header className="flex justify-between items-center">
            <div className="left flex   items-center ml-1  mt-4 p-1 ">
                <NavLink to="/" className="relative kdr-logo">
            <img src="https://live.staticflickr.com/65535/53105784717_517e98b50f_n.jpg" alt="logo"  className="w-24  lg:mr-2  cursor-pointer  "/>
            <div className="home absolute -bottom-4 -right-5 p-1 rounded-full  opacity-0 pointer-events-none duration-500">

                <p>Home</p>
            </div>
                </NavLink>
                <p className='text-green-400  lg:text-4xl md:text-5xl text-3xl w-80 lg:w-80 md:w-full  font-semibold drop-shadow-lg'>
                    K.D.R Consultancy Pvt. Ltd.
                </p>

        
            </div>
           
        </header>       
     );
}
export default Header;