
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Baner from './components/Baner';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
    <Header/>

      <Baner/>

      <Card produto="Limpeza"/>

        <Card produto="Backup"/>

        <Card produto="Remoção de Virus"/>

        <Card produto="Programação"/>

        <Card produto="Design"/>

        <Card produto="Memoria RAM"/>

        <Card produto="Limpeza"/>

        <Card produto="Processador"/>

    <Footer/>
      </div>
    </>
  );
}

export default App;