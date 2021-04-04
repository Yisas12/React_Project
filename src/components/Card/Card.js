import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component{

    onChangeValue = (event) => {
        this.props.addToCompleted(event.target.value);
    }

    render(){
        return(
            <>
                {this.props.tasks.map(card=>{
                     return(
                        <div key={card}>
                        {this.props.pathCompleted
                        ? <label>{card}</label>
                        : <React.Fragment>
                            <input type="radio" id="tarea" value={card} onChange={this.onChangeValue}/>
                            <label>{card}</label>
                        </React.Fragment>
                        }
                            
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Card;