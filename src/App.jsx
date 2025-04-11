
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Cards';
import Baner from './components/Baner';

function App() {

  return (
    <>
      <div className='body'>
        <Header />

        <Baner />

        <Card produto="Limpeza" />

        <Card produto="Backup" />

        <Card produto="Remoção de Virus" />

        <Card produto="Programação" />

        <Card produto="Design" />

        <Card produto="Memoria RAM" />

        <Card produto="Limpeza" />

        <Card produto="Processador" />

        <Footer/>
      </div>
    </>
  )
}

export default App;