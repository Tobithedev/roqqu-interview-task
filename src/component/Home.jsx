import { useState } from "react"

export const Home = () => {
    
const [page, setPage] = useState(1)
    return (
        <div className="bg-[#1C2127] h-[100vh] grid place-content-center ">
            <div className=" w-[488px] h-[60vh]">

                <img src="/logo.svg" alt="" />


                <p className='mt-[40px] text-white mb-[10px]'>Step{page}/5</p>

                <div className='flex items-center '>
                    <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
                    <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
                    <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
                    <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
                    <div className='bg-[#52565A] w-[83px] h-[1px] mx-[1px] '></div>
                </div>

                <div>
                    <div className='text-white'>
                        <p className='font-black text-[28px] mt-[30px]'>Hey 👋🏽<br /> Welcome to Roqqu </p>
                        <p className='font-normal text-[1rem] mt-[4px] text-[#A7B1BC]'>Let’s get to know you!</p>

                        <p>We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜</p>


                        <div>
                            <form >
                                <p className='text-[#A7B1BC] font-normal mt-[20px]'>Username</p>
                                <input type="text" className='w-full bg-transparent border rounded-md h-[40px] outline-none ' />

                                <div className='flex gap-[10px] mt-[30px] items-center'><input type="checkbox" name="" id="" className='bg-transparent border rounded-md h-[40px] outline-none' /> <p>

                                    I agree to Roqqu's Terms & conditions and privacy policy
                                </p>
                                </div>

                                <div className='w-[100%] mt-[40px] rounded-md h-[50px] grid  place-content-center bg-gradient-to-r from-[#5240f9] to-[#f3526d] '>
                                    <p>Continue</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}