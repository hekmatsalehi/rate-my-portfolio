import React from 'react';
import './styles/output.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import ProfilePage from './components/ProfilePage'
export default function App() {
  return (
    <main>
      <Navbar />
      <ProfilePage /> 
    </main>
  );
}