import React, { Component } from 'react'
import Message from '../Components/Message'
import { connect } from 'react-redux';


const action = {
  type: 'UPDATE_CHOICE_WITH_MY_INDEX',
  selectedIndex: Math.floor(Math.random()  *  4)
}

class Result extends Component {
  constructor(props) {
    super(props); 
    setInterval(() =>  this.props.dispatch(action), 1000)
}
  render() {
    console.log(this.props.selectedHouses)

    return (
      <div>
        <ul>
         {this.props.houses && this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
      <Message  selectedHouse={this.props.selectedHouse}  />
  </div>
    )
}
}



export  default  connect(store=>store)(Result)
