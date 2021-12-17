import React from 'react'
import { useLocation } from 'react-router-dom'

const Internal = (props:any) => {

    const location = useLocation()
    const query = new URLSearchParams(location.search);
    console.log(location)

    const token = query.get('item')
  
    return (
        <div>
            {token}
        </div>
    )
}

export default Internal
