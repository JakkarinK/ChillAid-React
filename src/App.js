import './App.css';
import Copyright from './components/Copyright';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './contents/Homepage/Homepage';


function App() { 
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Feedback />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
