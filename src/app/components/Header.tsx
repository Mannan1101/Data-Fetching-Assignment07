import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='px-4 py-4 md:px-40 md:py-10'>
                <div className='flex justify-center gap-9 md:gap-28 items-center bg-white bg-opacity-60 w-full h-[50px] rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.05] transition'>
                    <Link href={"/"}>
                        <h1 className='text-[15px] font-bold underline underline-offset-8 hover:no-underline'>Home</h1>
                    </Link>

                    <Link href={"/server-side"}>
                        <h1 className='text-[15px] font-bold underline underline-offset-8 hover:no-underline'>Server</h1>
                    </Link>

                    <Link href={"/client-side"}>
                        <h1 className='text-[15px] font-bold underline underline-offset-8 hover:no-underline'>Client</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header