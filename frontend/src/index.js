import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WorksoutsContextProvider } from "./context/WorkoutContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorksoutsContextProvider>
    <App />
    </WorksoutsContextProvider>
  </React.StrictMode>
);
