import Cartao from './components/Cartao';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <p>
          Exercicio de React - Perfil de Usuário
        </p>
        <Cartao 
        nome = "Cleber da Silva"
        idade = "25"
        profissao = "Mecânico"/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
