import React, { Component } from 'react';
import Result from './Containers/Result';
import Reducer from './Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(Reducer);

class App extends Component {

  
  render() {
    return (
     
     <Provider store={store}>
        <div>
          <Result/>
        </div>
     </Provider>
      
    );
  }
}



export default App;
