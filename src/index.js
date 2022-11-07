import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext.js"
import { SearchContextProvider } from "./context/SearchContext.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

/*
var vdiv = document.createElement("div")
var tnode = document.createTextNode("francescooooo")
vdiv.appendChild(tnode)

var vroot=document.getElementById('root').append()
vroot.appendChild(vdiv)
*/