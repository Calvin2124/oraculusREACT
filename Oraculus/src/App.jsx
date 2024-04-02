import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import "../src/Styles.css"
import { HoroscopeProvider } from './Components/Datas';
function App() {
  return (
    <Router>
      <HoroscopeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HoroscopeProvider>
    </Router>
  )
}

export default App