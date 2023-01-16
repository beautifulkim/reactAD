import React from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';

// npm install react-router-dom
// npm install react-bootstrap bootstrap
//npm i react-scrollspy

function Navi() {
    return (
        <div className={ `${navicss.hd} fixed-top borde-bottom py-3 bg-white` }>
            <h1>
                <Link to="/">
                    <img src={ logo } />
                </Link>
            </h1>
        </div>
    );
}

export default Navi;