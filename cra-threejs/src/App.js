import './App.css';
import MyThree from './components/home/Three';
import Type from './components/home/Type';
import NavBar from './components/home/navbar';

function App() {
  return (
    <div className="App">
      <NavBar classname="nav" />
      <section class="home">
        <Type />
      </section>
      <div className="AppContent">
        <MyThree />
      </div>
    </div>
  );
}

export default App;
