import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ← agora está correto

import './index.css'; // ou remova se não usa

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
