import { render } from 'preact';
import { html } from 'htm/preact';

import App from './App.jsx';
import './style.css';

render(html`<${App} />`, document.getElementById('app'));
