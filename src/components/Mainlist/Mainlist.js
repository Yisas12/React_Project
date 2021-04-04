import { checkPropTypes } from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Mainlist.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Mainlist extends React.Component{

    constructor(){
        super();
        this.name= "";
    }

    handleInput = (event) => {
        this.name = event.target.value;
    }

    handleAddTask = () => {
        this.props.addCard(this.name);
        this.props.setIsCompleted();
    }

    render(){
        return(
            <div>
                <h1> Principal</h1>
                <React.Fragment>
                    {this.props.isCompleted
                        ? <React.Fragment>
                            <input type="text" name="name" onChange={this.handleInput}></input>
                        
                            <div>
                            <button onClick={this.handleAddTask}>Añadir tarea</button>
                            <button type="submit" onClick={this.props.setIsCompleted}>Back</button>
                            </div>
                            
                        </React.Fragment>
                        : <React.Fragment>
                                <Card tasks={this.props.cards} addToCompleted={this.props.addToCompleted} pathCompleted={this.props.pathCompleted}/>
                                <div className="princ-butt">
                                    <FontAwesomeIcon className="princ-butt-1" onClick={this.props.setIsCompleted} icon={faPlus} />
                                    <button className="princ-butt-2" onClick={this.props.setIsCompleted}>Add tasks</button>
                                </div>
                        </React.Fragment>
                    }
                </React.Fragment>
            </div>
            
        );
    }
}

/*Mainlist.proptype = {
    cards: checkPropTypes.arrayOf(String)
}*/

/*Mainlist.defaultProps = {
    cards: []
}*/

export default Mainlist;