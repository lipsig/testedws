import React from 'react'

const Album = (props) => {
    return (
        <div style={{ margin:'0 10%', width:'40%'}}>       
            <div style={{height:'100px', width:'100px', background:'purple'}}>
            </div>
            <span style={{fontSize:'8px', fontWeight:'bold'}}>{props.id}</span>
        </div>

    )
}

export default Album
