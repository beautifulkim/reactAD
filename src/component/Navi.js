import React from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

// npm install react-router-dom
// npm install react-bootstrap bootstrap
//npm i react-scrollspy
function Navi() {
    return (
        <div className={ `${navicss.hd} fixed-top borde-bottom py-3 px-4 bg-white` }>
            <h1>
                <Link to="/">
                    <img src={ logo } />
                </Link>
            </h1>
            <Scrollspy>
                <li><Link to='/about'>뇌세김소개</Link></li>
                <li><a href='#procss'>뇌새김의 학습원리</a></li>
                <li><a href='#review'>뇌새김의 후기</a></li>
                <li><a href='#qna'>문의하기</a></li>
            </Scrollspy>
        </div>
    );
}

export default Navi;