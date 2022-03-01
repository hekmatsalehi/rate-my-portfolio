import React from 'react';
import './styles/output.css'

import Signup from './components/Signup'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <main>
      <Navbar />
      <Signup />
    </main>
  );
}