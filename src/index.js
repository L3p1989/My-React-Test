import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Comment from './components/Comment';

ReactDOM.render(
    <Comment
        author={{name: 'Jackson', avatarUrl: 'https://covalence.io/static/img/team/Jackson.jpg'}}
        text="Hi, thanks for listening to me say COMPONENT so. many. times."
    />, 
    document.getElementById('root')
);
serviceWorker.register();