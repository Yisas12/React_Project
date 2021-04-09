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
    todos: ["Hacer la compra", "Llevar el traje al tinte"],
    description:["prueba description", "prueba 2"],
    completed: ["Llevar coche al taller", "Hacer la colada"],
    favourites:["Prueba"],
    isCompleted: false,
    isFav: false,
    inInCompleted: false,
  }

  setIsCompleted = () => {
    const newCom = !this.state.isCompleted;

    this.setState({
      isCompleted: newCom
    })
  }

  setIsFav = () => {
    const newFav = !this.state.isFav;

    this.setState({
      isFav: newFav
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

  addToCompletedFav = (card) =>{
    const {favourites, completed} = this.state;
    var i = favourites.indexOf(card);

    if(i !== -1){
      favourites.splice(i, 1);
      completed.push(card);

      this.setState({favourites: favourites, completed: completed});
    }
  }

  addToFavourite = (card) => {
    const {todos, favourites} = this.state;
    var i = todos.indexOf(card);

    if(i !== -1){
      todos.splice(i, 1);
      favourites.push(card);

      this.setState({todos: todos, favourites: favourites});
    }
  }

  render(){
    const { todos, completed, favourites, isCompleted, isFav, isInCompleted} = this.state;

    return(
      <Router>
        <Navbar setIsCompleted={this.setIsCompleted}/>

        <Switch>
          
          <Route exact path="/"
            render={() =>(
              <Mainlist cards={todos} isCompleted={isCompleted} isFav={isFav} setIsFav={this.setIsFav} setIsCompleted={this.setIsCompleted} addCard={this.addCard} addToCompleted={this.addToCompleted} addToFavourite={this.addToFavourite}/>
            )}/>
         
         <Route exact path="/completed"
          render={() => (
            <Mainlist cards={completed} isCompleted={isCompleted} isFav={false} setIsFav={this.setIsFav} setIsCompleted={this.setIsCompleted} addCard={this.addCard} pathCompleted={true} isInCompleted={true}/>
          )}/>
            
         <Route exact path="/favourites"
          render={() => (
            <Mainlist cards={favourites} isCompleted={isCompleted} isFav={true} setIsFav={this.setIsFav} setIsCompleted={this.setIsCompleted} addCard={this.addCard} addToCompletedFav={this.addToCompletedFav} />
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