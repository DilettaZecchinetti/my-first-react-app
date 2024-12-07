import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import ShowList from './components/ShowList';

function App() {
  return (
    <section className="App">
      <Header />
      <ShowList />
    </section>
  )
}

export default App
