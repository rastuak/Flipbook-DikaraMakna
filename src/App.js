import Flipbook from './components/Flipbook';
import logo from './serigalapikra.png';

function App() {
  return (
    <div className="flex min-h-screen w-full justify-center items-center overflow-hidden">
      <div className="h-screen w-full flex justify-center items-center">
        <img src={logo} className="w-72" alt="logo" />
      </div>
      <Flipbook />
    </div>
  );
}

export default App;
