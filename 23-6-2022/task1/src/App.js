import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Nav />
           <div className="App">
         
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
          </Routes>
          </div>
       </BrowserRouter>

    </div>
  );
}

export default App;
