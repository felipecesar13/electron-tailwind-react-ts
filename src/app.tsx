import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './routes';

function App() {
  return <Routes />;
}

const root = createRoot(document.body);
root.render(App());
