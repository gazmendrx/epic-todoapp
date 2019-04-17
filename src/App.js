//react components
import React, { Component } from 'react';

//custom components
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (

      <div className="container-fluid">
         <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h5>Epic Todo List</h5>
              <hr/>

              <TodoList />
              
            </div>
          </div>
      </div>
    );
  }
}

export default App;
