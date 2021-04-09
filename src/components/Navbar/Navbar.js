import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {
  render() {
    return (
      <nav>
        
        <ul>
          <Link to="/">
            <li><FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon></li>
          </Link>
          <li>
            <input className="searchinput" placeholder="search"></input>
          </li>
        </ul>
        <ul className="nav-der">
            <li className="nav-der-li">
              <FontAwesomeIcon className="icon" icon={faPlus} onClick={this.props.setIsCompleted}/>
            </li>

              <Link className="nav-der-li-2" to="/completed">
                <li>
                  Completed tasks
                </li>
              </Link>
              <Link className="nav-der-li-2" to="/favourites">
                <li>
                  Favourites
                </li>
              </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;