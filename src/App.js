import React, { Component } from 'react';
import { Provider } from  'react-redux'
import { createStore } from  'redux'
import './App.css';
import Result from './Containers/Result'

const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];


// const reducer = (state, action) => ({
//   houses,
//   selectedHouses:  houses[Math.floor(Math.random() * 4)]
// })

const hatReducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX" :
      return  {selectedHouses : houses[Math.floor(Math.random()  *  4)], houses}
    default :
      return state
  }
}


const  store = createStore(hatReducer);


class App extends Component {

  
  render() {
    return (
     
      <Provider  store={store}>
        <div>
          <Result  />
        </div>
      </Provider>
      
    );
  }
}

export default App;
