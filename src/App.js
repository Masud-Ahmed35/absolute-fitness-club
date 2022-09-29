// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import QandA from './components/QandA/QandA';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='relative'>
      <Main></Main>
      <QandA></QandA>
      <Footer></Footer>
    </div>
  );
}

export default App;
