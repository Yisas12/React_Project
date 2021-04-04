import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Navbar from './components/Navbar';
import Mainlist from './components/Mainlist';
//import { Router, Switch } from 'react-router';
import Card from './components/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useState from 'react';

<FontAwesomeIcon icon={faHome} />

const { uuid } = require('uuidv4');

class App extends React.Component {
  
  state = {
    todos: ["hola", "ads"],
    completed: ["completo1", "completo2"],
    isCompleted: false,
  }

  setIsCompleted = () => {
    const newCom = !this.state.isCompleted;

    this.setState({
      isCompleted: newCom
    })
  }

  addCard = (card) => {
    const {todos} = this.state;

    todos.push(card);
    this.setState({todos:todos});
  }

  addToCompleted = (card) => {
    const {todos,completed} = this.state;
    var i = todos.indexOf(card);

    if(i !== -1){
      todos.splice(i, 1);
      completed.push(card);

      this.setState({todos: todos, completed: completed});
    }
  }

  render(){
    const { todos, completed, isCompleted } = this.state;

    return(
      <Router>
        <Navbar setIsCompleted={this.setIsCompleted}/>

        <Switch>
          
          <Route exact path="/"
            render={() =>(
              <Mainlist cards={todos} isCompleted={isCompleted} setIsCompleted={this.setIsCompleted} addCard={this.addCard} addToCompleted={this.addToCompleted} />
            )}/>
         
         <Route exact path="/completed"
          render={() => (
            <Mainlist cards={completed} isCompleted={isCompleted} setIsCompleted={this.setIsCompleted} addCard={this.addCard} pathCompleted={true}/>
          )}/>
            

        </Switch>
      </Router>
      /*<React.Fragment>
        <Navbar/>
        <Mainlist cards={this.state.todos}/>
      </React.Fragment>
      */
    );
  }
}

export default App;
