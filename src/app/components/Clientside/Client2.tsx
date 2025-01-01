"use client";

import React, { useState, useEffect } from "react";

type Data = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const Client2 = () => {
    const [data, setData] = useState<Data[]>([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); // Track fetch errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const result: Data[] = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>
                    <h1>Loading...</h1>
                </div>
            ) : error ? (
                <div>
                    <h1>Error: {error}</h1>
                </div>
            ) : (
                <div>
                    {data.map((product) => (
                        <div key={product.id}>
                            <h1>{product.description}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Client2;
