import React from 'react'
import { useLocation } from 'react-router-dom'

const Internal = (props:any) => {

    const location = useLocation()

    console.log(location)
    console.log(props)
    return (
        <div>
            eai
        </div>
    )
}

export default Internal
