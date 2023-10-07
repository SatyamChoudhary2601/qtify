import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { musicData } from './utils/constant';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card">
        {musicData.map(item => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
}

export default App;
