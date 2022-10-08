import { createRoot } from 'react-dom/client';
import WebFont from 'webfontloader';
import { Approot } from './react';
import './static/css/team-bounce.css';

WebFont.load({
  google: {
    families: ['Droid Sans', 'Chilanka', 'Roboto'],
  },
});
const root = createRoot(document.getElementById('app-root') as HTMLDivElement);
root.render(<Approot />);
