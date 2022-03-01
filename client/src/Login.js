import React from 'react';
import './styles/output.css'

import Login from './components/Login'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <main>
      <Navbar />
      <Login />
    </main>
  );
}