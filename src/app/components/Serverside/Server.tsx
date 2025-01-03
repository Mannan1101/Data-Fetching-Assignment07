"use client";

import React, { useEffect, useState } from 'react';

type Data = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

export default function Server() {
    const [data, setData] = useState<Data[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Added to handle errors gracefully.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://simple-books-api.glitch.me/books/");
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
                }
                const responseData = await response.json();
                
                // Ensure response data is an array
                if (!Array.isArray(responseData)) {
                    throw new Error('API response is not an array.');
                }
                
                setData(responseData); // Update state
            } catch (error: string) {
                console.error("Error fetching data:", error);
                setErrorMessage(error.message); // Update error state
            }
        };

        fetchData();
    }, []);

    // Handle loading and error states
    if (errorMessage) {
        return (
            <div className='text-center text-red-600 font-bold'>
                <h1>Error: {errorMessage}</h1>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className='text-center text-gray-600 font-bold'>
                <h1>Loading data, please wait...</h1>
            </div>
        );
    }

    return (
        <>
            <h1 className='mb-[30px] p-3 mt-[15px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-bold text-blue-700'>
                SERVER SIDE DATA FETCHING
            </h1>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white w-full h-[230px] p-4 grid gap-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition'
                    >
                        <h1 className='text-[23px] font-bold text-yellow-600 mb-2'>{item.name}</h1>
                        <h1 className='text-gray-500 text-[18px] font-bold'>
                            ID: <span className='font-semibold'>{item.id}</span>
                        </h1>
                        <h1 className='text-gray-500 text-[18px] font-bold'>
                            Type: <span className='font-semibold'>{item.type}</span>
                        </h1>
                        <h1
                            className={`${
                                item.available ? 'text-[green]' : 'text-[red]'
                            } font-bold`}
                        >
                            {item.available ? 'Available' : 'Unavailable'}
                        </h1>
                        <h1
                            className={`text-right ${item.available ? 'text-violet-800' : 'text-[red]'}`}
                        >
                            Read more...
                        </h1>
                    </div>
                ))}
            </div>
        </>
    );
}
