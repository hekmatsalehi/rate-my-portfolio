import React from 'react';
import './styles/output.css'

import Home from './components/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  );
}