import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Section from './components/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h2>My React Portfolio</h2>   */}
      <div className="row">
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}

export default App;
