// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter} from 'react-router-dom';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

