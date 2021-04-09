import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Card.css';


class Card extends React.Component{

    onChangeValue = (event) => {
        if(this.props.isFav){
            this.props.addToCompletedFav(event.target.value);
        }
        else{
            this.props.addToCompleted(event.target.value);
        }
    }

    /*onChangeValueToFav = (event) => {
        this.props.addToFavourite(event.target.value);
    }*/

    render(){
        return(
            <>
                {this.props.tasks.map(card=>{
                     return(
                        <div key={card}>
                        {this.props.pathCompleted
                        ? <ul>
                            <li>
                                <label>{card}</label>
                            </li>
                          </ul>
                        : <React.Fragment>
                            <input type="radio" id="tarea" value={card} onChange={this.onChangeValue}/>
                         
                          {this.props.isFav
                            ? <label>{card}</label>
                            : <React.Fragment>
                                <FontAwesomeIcon value={card} onClick={()=>{this.props.addToFavourite(card)}} icon={faHeart}/>
                                <label>{card}</label>
                            </React.Fragment>  
                          }
                          <React.Fragment>

                            <div>
                                <textarea id="description" rows="2" cols="40" placeholder="Description"></textarea>
                            </div>
                            <div>
                                <button>Edit task</button>
                            </div>
                            <hr/>
                            </React.Fragment>
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