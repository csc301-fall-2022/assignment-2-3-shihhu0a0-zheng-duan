import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);

