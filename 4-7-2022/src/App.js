import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<About />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
