import { NavLink } from 'react-router-dom'

export default function Form() {
  return (
    <div className="form bg-form  h-screen   flex justify-center items-center" id='form'>
    <div className="submit flex flex-col gap-3 bg-white w-[450px] h-36 rounded-xl pl-5 pt-5">
        <h2 className='font-bold text-xl text-black'>Thank you!</h2>
        <h5>Your form submission has been received.</h5>
        <NavLink to="/" className='relative flex items-center text-form-text  group '>
        <i class="fa-solid fa-arrow-left pr-2"></i>
            <p>Back To the site</p>
            <span className='w-36  border-form-text underline absolute bottom-0 border-t hidden group-hover:block  '></span>
            </NavLink>
    </div>
    </div>
  )
}