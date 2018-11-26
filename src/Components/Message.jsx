import React from 'react';

const Message = ({selectedHouse}) => {
    return (
        <div>
            <p>{selectedHouse}</p>
        </div>
    )
}

export default Message;





// import React, { Component } from 'react';


// class Message extends Component {

// render () {
//   return (
//     <div>
//       <h1>{this.props.selectedHouses}</h1>
//     </div>
//   )

//   }
// }


// export default Message;