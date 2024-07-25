import React from 'react'

const _05_ViteEnvironmentVar = () => {
    return (
        <>
            <div>_05_ViteEnvironmentVar</div>
            <p>ENV VAR 1: {import.meta.env.VITE_SECURITY_KEY} </p>
            <p>ENV VAR 2: {import.meta.env.VITE_SAFE_LOCK} </p>
        </>
    )
}

export default _05_ViteEnvironmentVar