import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.less';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="OnMyShelf" />, mountNode);