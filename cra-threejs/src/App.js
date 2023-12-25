import './App.css';
import MyThree from './components/home/Three';
import NavBar from './components/home/navbar';
import ProjectPage from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar classname="nav" />
      <section class="home">
      </section>
      <div Style="height: 1000px" className="AppContent">
        <ProjectPage />
        <MyThree />
      </div>
    </div>
  );
}

export default App;
