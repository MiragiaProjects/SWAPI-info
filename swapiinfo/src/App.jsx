import { Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
import PeoplesPage from './pages/PeoplesPage'
import PeoplePage from './pages/PeoplePage'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {

  return (
    <div id="App">
      <Navigation />

      <Container>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:id" element={<FilmPage />} />
          <Route path="/peoples" element={<PeoplesPage />} />
          <Route path="/peoples/:id" element={<PeoplePage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </Container>
      
    </div>
  );
}

export default App;
