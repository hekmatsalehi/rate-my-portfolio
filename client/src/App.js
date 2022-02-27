import React from 'react';
import './styles/output.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
export default function App() {
  return (
    <main>
      <Navbar />
      <Profile /> 
    </main>
  );
}