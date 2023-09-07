import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRender from './ListRender';
import ReactFragment from './ReactFragment';
import ReactDList from './ReactDLlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactDList />
  </React.StrictMode>
);

