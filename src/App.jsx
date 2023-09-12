import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Pages from './components/Pages';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <Pages/>
      <Footer/>
    </div>
  )
}

export default App
