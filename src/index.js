import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import MyNewContext from './MyContext';

import 'bootstrap/dist/css/bootstrap.css'; 


const MyContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <MyNewContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </MyNewContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MyContextProvider>
      <App />
    </MyContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
