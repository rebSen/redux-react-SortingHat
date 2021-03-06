import React, { Component } from 'react'
import Message from '../Components/Message'
import { connect } from 'react-redux';
import './Result.css'

const action = {
  type: 'UPDATE_CHOICE_WITH_MY_INDEX',
  selectedIndex: Math.floor(Math.random()  *  4)
}

class Result extends Component {
  constructor(props) {
    super(props); 
    setInterval(() => this.props.dispatch(action), 1000)
}
  render() {
   

    return (
      <div className="welcome">
        <ul>
         {this.props.houses && this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
      <Message  selectedHouses={this.props.selectedHouses}  />
  </div>
    )
}
}


export default connect(store => store)(Result);
