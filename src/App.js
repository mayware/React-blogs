import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = 'Main title';
  const likes = 50;
  const link = 'http://youtube.com'
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
