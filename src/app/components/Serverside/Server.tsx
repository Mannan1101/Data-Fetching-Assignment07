import React, { useEffect, useState } from 'react';

type Data = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

export default function Server() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://simple-books-api.glitch.me/books/");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: Data[] = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1 className='mb-[30px] p-3 mt-[15px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-bold text-blue-700'>
                SERVER SIDE DATA FETCHING
            </h1>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
                {data.map((todo) => (
                    <div
                        key={todo.id}
                        className='bg-white w-full h-[230px] p-4 grid gap-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition'
                    >
                        <h1 className='text-[23px] font-bold text-yellow-600 mb-2'>{todo.name}</h1>
                        <h1 className='text-gray-500 text-[18px] font-bold'>
                            ID: <span className='font-semibold'>{todo.id}</span>
                        </h1>
                        <h1 className='text-gray-500 text-[18px] font-bold'>
                            Type: <span className='font-semibold'>{todo.type}</span>
                        </h1>
                        <h1
                            className={`${
                                todo.available ? 'text-[green]' : 'text-[red]'
                            } font-bold`}
                        >
                            {todo.available ? 'Available' : 'Unavailable'}
                        </h1>
                        <h1
                            className={`text-right ${todo.available ? 'text-violet-800' : 'text-[red]'}`}
                        >
                            Read more...
                        </h1>
                    </div>
                ))}
            </div>
        </>
    );
}
