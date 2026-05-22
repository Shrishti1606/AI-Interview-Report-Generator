import { useauth } from '../hooks/useauth'
import React, { useState } from 'react'
import { Navigate } from 'react-router'
import '../../interview/style/interview.scss'

const Protected = ({ children}) => {

    const { loading, user } = useauth(true)

    if(loading){
        return (
            <div className="loading-screen">
                <div className="loader">
                <div className="loader__ring"></div>
                <div className="loader__ring"></div>
                <div className="loader__ring"></div>
                <p className="loader__text">Loading...</p>
                </div>
            </div>
        )
    }

    if(!user){
        return <Navigate to={"/login"} />
    }

    return children
}

export default Protected