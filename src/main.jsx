import React from "react";
import ReactDOM from "react-dom/client";//ye jarroor se dekhna hai 
import App from './App'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>  
);