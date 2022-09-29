// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import QandA from './components/QandA/QandA';

function App() {
  return (
    <div className='relative'>
      <Main></Main>
      <QandA></QandA>
      <Footer></Footer>
    </div>
  );
}

export default App;
