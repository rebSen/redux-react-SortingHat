import React from 'react'
import './Message.css'

const Message = ({selectedHouses}) => {

    return (
        <div className="yourHouse">
            <p>{selectedHouses}</p>
        </div>
    )
    
}

export default Message;



