import Link from 'next/link'
import React from 'react'

const Main = () => {
    return (
        <>

            <div className=' flex flex-col justify-center items-center h-screen p-4'>

                <h1 className='mb-5 text-[30px] font-extrabold text-center'>Welcome to your ultimate data-fetching solution </h1>

                <div className='bg-slate-50 w-full md:w-[500px] p-7 mt-5 h-[280px] md:h-[200px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition'>
                    <h1 className='text-[18px] font-bold text-center '>please choose one of the following options </h1>
                    <div className='flex flex-col md:flex-row gap-3 justify-center p-9'>
                        <Link href={"/server-side"}><button className='w-full bg-sky-300 px-10 py-2 rounded-full text-white font-bold hover:bg-white  hover:text-black'>Server Side</button></Link>
                        <Link href={"/client-side"}><button className='w-full bg-sky-300 px-10 py-2 rounded-full text-white font-bold hover:bg-white  hover:text-black'>Client Side</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main