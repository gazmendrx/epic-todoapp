import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TodoList extends Component {

  constructor(props){

    super(props);

    //states
    this.state = {
      taskSelected: false,
      tasks: ['one','two','three']
    }

    this.selectTask = this.selectTask.bind(this);
  }

  selectTask(){

    this.setState( state => ({

        taskSelected: !state.taskSelected
    }));
  }

  render() {

    const taskSelected = this.state.taskSelected;

    if(taskSelected){

      return (

        <div>

          <ul className="list-group">
              {
                this.state.tasks.map( (task, i) => {

                  return <li key={i} onClick={this.selectTask} className="list-group-item">Test </li>
                })
              }
          </ul>  
          
          <div className="row">
            <div className="col-md-6">
              <Button color="primary" className="btn-block">Mark as complete</Button>
            </div>
            <div className="col-md-6">
              <Button color="danger" className="btn-block">Delete task</Button>
            </div>
          </div>

        </div>
    );

    }else{

      return(

        <div>

          <ul className="list-group">
          {
                this.state.tasks.map( (task, i) => {

                  return <li key={i} onClick={this.selectTask} className="list-group-item">Test </li>
                })
              }
          </ul>  
      
        </div>

      );

    }

  }
}

export default TodoList;
