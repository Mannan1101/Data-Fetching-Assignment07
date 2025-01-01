import Header from '../components/Header'
import Server from '../components/ServerSide/Server'
import React from 'react'

export default function Page() {
    return (
        <>
            <Header />

            <div>
                <Server />
            </div>
        </>
    )
}