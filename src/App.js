// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar 
      title = "SANDEEP KUMAR NAVBAR" 
      aboutText = "AboutNavBar" 
      />
      <div className="container">
      <TextForm heading = "Enter AnyText" Email = "Enter your Email I'D"/>
      </div>
    </>
  );
}

export default App;


