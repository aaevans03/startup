import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

// Get the element with id root from index.html, insert our app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);