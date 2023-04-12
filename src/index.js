import React from 'react';
import { createRoot } from 'react-dom/client';
// import the Main.js file from the components folder
import  Main  from '/Users/abeflores/Desktop/FullStack Academy /Projects/All_Projects/FSA.Async.Project/src/components/Main.js';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import store from './store';

const container = document.getElementById('root'); // grabs the root div from the index.html file
const root = createRoot(container);

root.render(
        <Router>
                <Main />
        </Router>
);

