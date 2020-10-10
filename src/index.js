import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 9001;

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="OnMyShelf" />, mountNode);
// app.get('/', (req, res) => {
//   res.send('Reached the home route');
// })

// app.listen(PORT, () => {
//   console.log('Listening on the port', PORT);
// })