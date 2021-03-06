import React from 'react';
import './App.css';
import ListItem from './listItem';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class Task extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      currentTask: {
        text: "",
        key: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  //what happens when u type into the input field
  handleChange(event){
    this.setState({
      currentTask:{
        text: event.target.value,
        key:Date.now()
      } 
    })
  }

  addTask(event){
    event.preventDefault(); //to stop it from refreshing when u press Add
    const newTask = this.state.currentTask;
    console.log(newTask);
    if(newTask !== null || newTask !== ""){
      const newTasks = [...this.state.tasks, newTask];
      this.setState({
        tasks: newTasks,
        currentTask:{
          text: "",
          key: "" 
        }
      })
    }
  }

  
  deleteTask(key){
    const filteredTasks = this.state.tasks.filter(task => task.key!==key); //creates new array with tasks that dont match the deleted one
    this.setState({
        tasks: filteredTasks
    })
  }

  updateTask(text, key){
    const tasks = this.state.tasks;
    tasks.map(task=>{
        if(task.key===key){
            task.text=text;
        }
    })
    this.setState({
        tasks: tasks
    })
  }

  render(){
    return (
      <div className="App">
          <form onSubmit={this.addTask} id="todoform">
            <input type ="text" placeholder="Enter text" value={this.state.currentTask.text} style={{ width:"80vh" }} onChange={this.handleChange}/>
            <button id="second" type="submit" style={{marginLeft: "2vh"}}> Add Task </button>
          </form>
        <ListItem tasks = {this.state.tasks} deleteTask = {this.deleteTask} updateTask = {this.updateTask} />
      </div>
    )
  }
} 

export default Task;